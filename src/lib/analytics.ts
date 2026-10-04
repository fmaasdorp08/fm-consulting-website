/**
 * Site measurement: GA4 + Meta Pixel.
 *
 * GA4 is bootstrapped in index.html so the first page_view fires as early as
 * possible. The Meta Pixel is injected here. Both run only on the production
 * domain (analyticsConfig.productionHost); everywhere else every helper below
 * is a silent no-op, so localhost and Vercel previews never reach the reports.
 *
 * Privacy rule for every event: never send a visitor's name, email, phone or
 * message to Google or Meta. Only the choices they made (service, budget) and
 * where they clicked.
 *
 * Cookie choice: visitors from the UK, the EEA and Switzerland see a small,
 * non-blocking notice and nothing that sets tracking cookies runs until they
 * accept (GA4 runs in Consent Mode with storage denied; the Meta Pixel does
 * not load). Everyone else sees nothing and measurement runs as normal. A
 * Global Privacy Control signal is honoured everywhere as a "decline".
 */
import { analyticsConfig } from '@/config';

type Params = Record<string, string | number | boolean | undefined>;

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const isBrowser = typeof window !== 'undefined';

export function isProductionHost() {
  return isBrowser && window.location.hostname === analyticsConfig.productionHost;
}

function clean(params?: Params) {
  if (!params) return undefined;
  return Object.fromEntries(Object.entries(params).filter(([, v]) => v !== undefined && v !== ''));
}

/** GA4 event. */
export function trackEvent(eventName: string, params?: Params) {
  if (isBrowser && typeof window.gtag === 'function') {
    window.gtag('event', eventName, clean(params));
  }
}

/** Meta standard event (Lead, Contact, CompleteRegistration, PageView …). */
export function trackMeta(eventName: string, params?: Params) {
  if (isBrowser && typeof window.fbq === 'function') {
    window.fbq('track', eventName, clean(params));
  }
}

/** Meta custom event, for actions with no standard equivalent. */
export function trackMetaCustom(eventName: string, params?: Params) {
  if (isBrowser && typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, clean(params));
  }
}

/* ------------------------------------------------------------------ */
/* Meta Pixel bootstrap (Meta's base code, typed)                       */
/* ------------------------------------------------------------------ */

function loadMetaPixel(pixelId: string) {
  if (window.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  fbq('init', pixelId);
  fbq('track', 'PageView');
}

/* ------------------------------------------------------------------ */
/* Delegated click tracking                                             */
/* ------------------------------------------------------------------ */

// AnimatedButton renders its label twice for the hover roll, so innerText
// comes back as "Book ConsultationBook Consultation". Collapse that.
function linkLabel(el: HTMLElement) {
  const text = (el.getAttribute('aria-label') || el.textContent || '').replace(/\s+/g, ' ').trim();
  const half = text.length / 2;
  if (Number.isInteger(half) && text.slice(0, half).trim() === text.slice(half).trim()) {
    return text.slice(0, half).trim();
  }
  return text.slice(0, 80);
}

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 48);
}

// Where on the page a CTA sits: an explicit data-cta-location wins, then the
// landmark (navigation / footer), then the heading of the enclosing section.
function ctaLocation(el: HTMLElement) {
  const explicit = el.closest<HTMLElement>('[data-cta-location]');
  if (explicit) return explicit.dataset.ctaLocation || 'unknown';
  if (el.closest('nav, header')) return 'navigation';
  if (el.closest('footer')) return 'footer';
  const section = el.closest('section, article');
  const heading = section?.querySelector('h1, h2');
  return heading?.textContent ? `section_${slug(heading.textContent)}` : 'page_body';
}

function contactMethod(href: string) {
  if (/^mailto:/i.test(href)) return 'email';
  if (/^tel:/i.test(href)) return 'phone';
  if (/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/i.test(href)) return 'whatsapp';
  return null;
}

function isConsultationCta(a: HTMLAnchorElement, href: string) {
  if (a.hasAttribute('data-cta')) return true;
  try {
    const url = new URL(href, window.location.origin);
    return url.origin === window.location.origin && url.pathname === '/contact';
  } catch {
    return false;
  }
}

function handleClick(e: MouseEvent) {
  const target = e.target as HTMLElement | null;
  const a = target?.closest?.('a[href]') as HTMLAnchorElement | null;
  if (!a) return;
  const href = a.getAttribute('href') || '';
  const page_path = window.location.pathname;

  // 1. Direct contact: email, phone, WhatsApp
  const method = contactMethod(href);
  if (method) {
    trackEvent('contact_click', { method, page_path, link_location: ctaLocation(a) });
    trackMeta('Contact', { content_name: method });
    return;
  }

  // 2. "Book a Consultation" and every other link into /contact
  if (isConsultationCta(a, href)) {
    const cta_text = linkLabel(a);
    const cta_location = ctaLocation(a);
    trackEvent('cta_click', { cta_text, cta_location, page_path, destination: '/contact' });
    trackMetaCustom('ConsultationCTAClick', { cta_text, cta_location, page_path });
  }
}

/* ------------------------------------------------------------------ */
/* Public API                                                           */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Cookie choice                                                        */
/* ------------------------------------------------------------------ */

export type ConsentChoice = 'granted' | 'denied';

// UK, EEA (EU-27 + Iceland, Liechtenstein, Norway) and Switzerland.
// Keep in sync with CONSENT_REGIONS in index.html.
const CONSENT_REGIONS = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU',
  'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH',
]);

const CONSENT_KEY = 'fm_consent_v1';

function readChoice(): ConsentChoice | null {
  try {
    const saved = JSON.parse(window.localStorage.getItem(CONSENT_KEY) || 'null');
    return saved && (saved.choice === 'granted' || saved.choice === 'denied') ? saved.choice : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, at: new Date().toISOString() }));
  } catch {
    /* storage unavailable — the choice still applies for this visit */
  }
}

function hasGlobalPrivacyControl() {
  return isBrowser && (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

async function lookupCountry(): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 3000);
    const res = await fetch('/api/geo', { cache: 'no-store', signal: controller.signal });
    window.clearTimeout(timer);
    if (!res.ok) return null;
    const data = (await res.json()) as { country?: string | null };
    return data.country || null;
  } catch {
    return null;
  }
}

function applyConsent(choice: ConsentChoice) {
  if (!isProductionHost()) return;
  const value = choice === 'granted' ? 'granted' : 'denied';
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    });
  }
  if (choice === 'granted') {
    if (analyticsConfig.metaPixelId) loadMetaPixel(analyticsConfig.metaPixelId);
    if (typeof window.fbq === 'function') window.fbq('consent', 'grant');
  } else if (typeof window.fbq === 'function') {
    window.fbq('consent', 'revoke');
  }
}

// Tiny store so the notice component can mount before or after the geo
// lookup resolves.
let noticeOpen = false;
let noticeMode: 'region' | 'preferences' = 'region';
const noticeListeners = new Set<(open: boolean) => void>();

function setNoticeOpen(open: boolean, mode?: 'region' | 'preferences') {
  noticeOpen = open;
  if (mode) noticeMode = mode;
  noticeListeners.forEach((fn) => fn(open));
}

/** 'region' = first visit from the UK/EEA/CH; 'preferences' = opened from the footer. */
export function getConsentNoticeMode() {
  return noticeMode;
}

export function subscribeConsentNotice(fn: (open: boolean) => void) {
  noticeListeners.add(fn);
  fn(noticeOpen);
  return () => {
    noticeListeners.delete(fn);
  };
}

/** Footer "Cookie preferences" — lets anyone change or withdraw their choice. */
export function openConsentPreferences() {
  setNoticeOpen(true, 'preferences');
}

/** Close the footer-opened notice without changing anything. */
export function closeConsentNotice() {
  setNoticeOpen(false);
}

/** Called by the notice's Accept / Decline buttons. */
export function setConsentChoice(choice: ConsentChoice) {
  saveChoice(choice);
  applyConsent(choice);
  setNoticeOpen(false);
}

export function getConsentChoice() {
  return isBrowser ? readChoice() : null;
}

/* ------------------------------------------------------------------ */
/* Public API                                                           */
/* ------------------------------------------------------------------ */

let initialised = false;

/** Call once at startup. */
export function initAnalytics() {
  if (initialised || !isBrowser) return;
  initialised = true;

  // Preview builds: ?consent_preview shows the notice so it can be reviewed.
  if (!isProductionHost()) {
    if (/[?&]consent_preview\b/.test(window.location.search)) setNoticeOpen(true);
    return;
  }

  // Capture phase so the event is recorded before React Router navigates.
  document.addEventListener('click', handleClick, true);

  if (hasGlobalPrivacyControl()) {
    applyConsent('denied');
    return;
  }

  const saved = readChoice();
  if (saved) {
    applyConsent(saved);
    return;
  }

  void lookupCountry().then((country) => {
    // Unknown country: stay quiet and load nothing that sets ad cookies.
    if (!country) return;
    if (CONSENT_REGIONS.has(country)) setNoticeOpen(true, 'region');
    else applyConsent('granted');
  });
}

let lastPath: string | null = null;

/**
 * SPA route change. GA4 records these itself (enhanced measurement →
 * browser-history page changes); Meta needs an explicit PageView. The base
 * code already sent one for the landing page, so skip the first call.
 */
export function trackRouteChange(path: string) {
  if (lastPath === null) {
    lastPath = path;
    return;
  }
  if (path === lastPath) return;
  lastPath = path;
  trackMeta('PageView');
}

/** Contact form: first interaction with any field. */
export function trackContactFormStart() {
  trackEvent('contact_form_start', { page_path: isBrowser ? window.location.pathname : undefined });
  trackMetaCustom('ContactFormStart');
}

/** Contact form: successful submission — the primary conversion. */
export function trackLead(params: { method: string; service?: string; budget?: string }) {
  trackEvent('generate_lead', {
    lead_source: 'contact_form',
    method: params.method,
    service: params.service,
    budget: params.budget,
  });
  trackMeta('Lead', {
    content_name: 'contact_form',
    content_category: params.service,
  });
}

/** Footer newsletter: successful subscription. */
export function trackNewsletterSignup() {
  trackEvent('sign_up', { method: 'newsletter', page_path: isBrowser ? window.location.pathname : undefined });
  trackMeta('CompleteRegistration', { content_name: 'newsletter' });
}
