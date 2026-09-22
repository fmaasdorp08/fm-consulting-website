/**
 * Thin wrapper around GA4's gtag(). gtag is only defined on the production
 * domain (see index.html), so every call here is a safe no-op on localhost
 * and Vercel previews.
 */
type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: GtagParams) => void;
  }
}

export function trackEvent(eventName: string, params?: GtagParams) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}