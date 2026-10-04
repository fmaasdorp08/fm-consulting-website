import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  closeConsentNotice,
  getConsentChoice,
  getConsentNoticeMode,
  setConsentChoice,
  subscribeConsentNotice,
} from '@/lib/analytics';

/**
 * Cookie notice — shown only to visitors from the UK, the EEA and
 * Switzerland (or when someone opens "Cookie preferences" in the footer).
 *
 * It never blocks the page: no overlay, no scroll lock, nothing to dismiss
 * before reading. Ignoring it is a valid answer — tracking cookies simply stay
 * off. Accept and Decline carry equal weight, as UK/EU guidance expects.
 */
export function ConsentNotice() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => subscribeConsentNotice(setOpen), []);

  // First appearance waits for the page-load overlay to finish; reopening
  // from the footer is instant.
  useEffect(() => {
    if (!open || visible) return;
    const timer = window.setTimeout(() => setVisible(true), 1400);
    return () => window.clearTimeout(timer);
  }, [open, visible]);

  if (!open) return null;

  const mode = getConsentNoticeMode();
  const choice = getConsentChoice();
  const status =
    mode === 'region'
      ? 'They stay off unless you accept.'
      : choice === 'granted'
        ? 'You’ve accepted them.'
        : choice === 'denied'
          ? 'You’ve declined them.'
          : '';

  return (
    <aside
      role="region"
      aria-label="Cookie choice"
      className={`consent-notice ${visible ? 'is-visible' : ''}`}
    >
      <div className="consent-notice-head">
        <p className="consent-notice-label">Cookies</p>
        {mode === 'preferences' && (
          <button type="button" className="consent-notice-close" onClick={closeConsentNotice}>
            Close
          </button>
        )}
      </div>
      <p className="consent-notice-text">
        We use analytics and advertising cookies to see which pages help and whether our ads work.{' '}
        {status}{' '}
        <Link to="/privacy#cookies" className="consent-notice-link">
          Privacy Policy
        </Link>
      </p>
      <div className="consent-notice-actions">
        <button type="button" className="consent-btn consent-btn--solid" onClick={() => setConsentChoice('granted')}>
          Accept
        </button>
        <button type="button" className="consent-btn" onClick={() => setConsentChoice('denied')}>
          Decline
        </button>
      </div>
    </aside>
  );
}
