import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Twitter, Instagram, Facebook, Youtube, Github, Dribbble, Circle } from 'lucide-react';
import { footerConfig, contactConfig, legalEntity } from '@/config';
import { openConsentPreferences, trackEvent, trackNewsletterSignup } from '@/lib/analytics';

// Shown beside the field and stored with each sign-up, so there is a record
// of exactly what the subscriber agreed to (POPIA s69).
const NEWSLETTER_CONSENT =
  'I agree to receive FM Consulting insights by email. I can unsubscribe at any time.';
import { type ElementType } from 'react';
import { BrandLogo } from '@/components/BrandLogo';

const iconMap: Record<string, ElementType> = {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Github,
  Dribbble,
  Circle,
};

function getIcon(iconName: string): ElementType {
  return iconMap[iconName] || Circle;
}

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || newsletterStatus === 'sending') return;
    setNewsletterStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contactConfig.web3formsKey,
          subject: 'Newsletter subscription — FM Consulting website',
          from_name: 'FM Consulting Website',
          email: newsletterEmail,
          message: `New newsletter subscriber: ${newsletterEmail}`,
          consent_wording: NEWSLETTER_CONSENT,
          consent_given_at: new Date().toISOString(),
          consent_page: window.location.href,
          privacy_policy: 'https://www.fmconsultingza.co.za/privacy',
        }),
      });
      const data = await res.json();
      if (data.success) {
        trackNewsletterSignup();
        setNewsletterStatus('done');
      } else {
        trackEvent('newsletter_error', { reason: 'web3forms_rejected' });
        setNewsletterStatus('error');
      }
    } catch {
      trackEvent('newsletter_error', { reason: 'network' });
      setNewsletterStatus('error');
    }
  };

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });


  return (
    <footer ref={ref} className="w-full bg-exvia-black text-white py-16 lg:py-24">
      <div className="container-large px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div
            className={cn(
              'lg:col-span-4 space-y-6 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {footerConfig.logo && (
              <Link
                to="/"
                aria-label="FM Consulting home"
                className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fm-paper"
              >
                {/* Knockout drawing on the ink ground — strokes trimmed, aperture
                    opened. The white chip is no longer needed. */}
                <BrandLogo variant="lockup" reverse className="h-10 text-fm-paper" />
              </Link>
            )}
            <p className="text-xs font-geist-mono uppercase tracking-[0.22em] text-fm-grey">
              Ruthless Minimal. Future-Focused.
            </p>
            {footerConfig.description && (
              <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                {footerConfig.description}
              </p>
            )}

            {/* Social Links */}
            {footerConfig.socialLinks.length > 0 && (
              <div className="flex gap-3 pt-2">
                {footerConfig.socialLinks.map((social) => {
                  const Icon = getIcon(social.iconName);
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-exvia-black transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Links Columns */}
          {footerConfig.columns.map((column, colIndex) => (
            <div
              key={column.title}
              className={cn(
                'lg:col-span-2 transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${(colIndex + 1) * 100}ms` }}
            >
              <h4 className="text-xs font-geist-mono uppercase tracking-widest text-fm-grey mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          {footerConfig.newsletterHeading && (
            <div
              className={cn(
                'lg:col-span-2 transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '400ms' }}
            >
              <h4 className="text-xs font-geist-mono uppercase tracking-widest text-fm-grey mb-4">
                {footerConfig.newsletterHeading}
              </h4>
              {footerConfig.newsletterDescription && (
                <p className="text-sm text-white/60 mb-4">
                  {footerConfig.newsletterDescription}
                </p>
              )}
              {newsletterStatus === 'done' ? (
                <p className="text-sm text-white/80 border border-white/20 rounded-lg px-4 py-3">
                  Thanks — you're subscribed.
                </p>
              ) : (
                <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={footerConfig.newsletterPlaceholder || "your@email.com"}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  />
                  {footerConfig.newsletterButtonText && (
                    <button
                      type="submit"
                      disabled={newsletterStatus === 'sending'}
                      className="w-full px-4 py-3 bg-white text-exvia-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors disabled:opacity-60"
                    >
                      {newsletterStatus === 'sending' ? 'Subscribing…' : footerConfig.newsletterButtonText}
                    </button>
                  )}
                  <p className="text-[0.7rem] leading-relaxed text-white/45">
                    {NEWSLETTER_CONSENT} See our{' '}
                    <Link to="/privacy" className="underline underline-offset-2 hover:text-white">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  {newsletterStatus === 'error' && (
                    <p className="text-xs text-red-400">
                      Something went wrong — please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        {(footerConfig.copyright || footerConfig.credit) && (
          <div
            className={cn(
              'mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '500ms' }}
          >
            {footerConfig.copyright && (
              <p className="text-xs text-fm-grey text-center md:text-left">
                {footerConfig.copyright}
                <span className="block sm:inline sm:ml-2 font-mono-brand tracking-wide text-white/35">
                  Reg. {legalEntity.registrationNumber}
                </span>
              </p>
            )}
            <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-geist-mono text-[0.68rem] uppercase tracking-[0.16em]">
              <Link to="/privacy" className="text-fm-grey hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-fm-grey hover:text-white transition-colors">Terms of Service</Link>
              <button type="button" onClick={openConsentPreferences} className="font-geist-mono uppercase tracking-[0.16em] text-fm-grey hover:text-white transition-colors">
                Cookie preferences
              </button>
            </nav>
            {footerConfig.credit && (
              <p className="text-xs text-fm-grey">
                {footerConfig.credit}
              </p>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
