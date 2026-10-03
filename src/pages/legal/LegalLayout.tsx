import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getLenis } from '@/components/motion/SmoothScroll';
import { legalDates, legalEntity } from '@/config';

/**
 * Editorial legal document — FM Consulting's Terms of Service and Privacy
 * Policy share this layout. Structure follows the Stelvy reference (sticky
 * numbered index, § section marks, mono metadata, entity block) rendered in
 * the FM brand: ink and paper, Archivo and IBM Plex Mono, no accent colour.
 */

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalLayoutProps {
  /** Position in the legal set, e.g. "01". */
  docNumber: string;
  title: string;
  lede: ReactNode;
  sections: LegalSection[];
  alsoSee: { label: string; to: string };
}

const pad = (n: number) => String(n).padStart(2, '0');

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(el); // Lenis honours the section's scroll-margin-top
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', `#${id}`);
}

// The section being read is the last one whose top has passed the reading
// line, a little below the fixed navigation. At the very bottom of the page
// the final section wins even if it is too short to reach that line.
const READING_LINE = 180;

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join('|');

  useEffect(() => {
    const sectionIds = key.split('|');
    let frame = 0;

    const update = () => {
      frame = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= READING_LINE) current = id;
      }
      if (atBottom && current) current = sectionIds[sectionIds.length - 1];
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [key]);

  return active;
}

function IndexList({ sections, active, onNavigate }: { sections: LegalSection[]; active: string | null; onNavigate?: () => void }) {
  return (
    <ol className="legal-index">
      {sections.map((section, i) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            aria-current={active === section.id ? 'location' : undefined}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section.id);
              onNavigate?.();
            }}
          >
            <span className="legal-index-number">{pad(i + 1)}</span>
            <span className="legal-index-label">{section.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LegalLayout({ docNumber, title, lede, sections, alsoSee }: LegalLayoutProps) {
  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Honour a deep link such as /privacy#your-rights once the page has settled.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const timer = window.setTimeout(() => scrollToSection(id), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <article className="legal-page w-full pt-24 lg:pt-28 bg-background">
      {/* Running header */}
      <header>
        <div className="container-large px-6 lg:px-12">
          <div className="legal-runner">
            <Link to="/" className="group inline-flex items-center gap-2 hover:text-exvia-black transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
            <span className="hidden sm:block">FM Consulting / Legal</span>
            <span>{docNumber} / 02</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 pt-14 pb-14 lg:pt-24 lg:pb-20">
            <div className="lg:col-span-3 lg:pt-5">
              <p className="legal-eyebrow">
                <span className="text-exvia-black">§ {docNumber}</span>
                <span>Legal</span>
                <span className="legal-eyebrow-rule" aria-hidden="true" />
              </p>
            </div>
            <div className="lg:col-span-9">
              <h1 className="legal-title">
                {title}
                <span aria-hidden="true">.</span>
              </h1>
              <p className="legal-meta">
                <span>
                  Effective <time dateTime={legalDates.iso}>{legalDates.effective}</time>
                </span>
                <span className="legal-meta-dot" aria-hidden="true">·</span>
                <span>
                  Last updated <time dateTime={legalDates.iso}>{legalDates.updated}</time>
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="border-t border-exvia-border">
        <div className="container-large px-6 lg:px-12 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            <aside className="hidden lg:block lg:col-span-3">
              <nav aria-label={`${title} index`} className="sticky top-32">
                <p className="legal-label">Index</p>
                <IndexList sections={sections} active={active} />
                <div className="legal-also">
                  <p className="legal-label">Also see</p>
                  <Link to={alsoSee.to} className="legal-also-link group">
                    {alsoSee.label}
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </nav>
            </aside>

            <div className="lg:col-span-9">
              {/* Mobile index */}
              <details
                className="legal-mobile-index lg:hidden"
                open={mobileOpen}
                onToggle={(e) => setMobileOpen((e.target as HTMLDetailsElement).open)}
              >
                <summary>Index — {sections.length} sections</summary>
                <IndexList sections={sections} active={active} onNavigate={() => setMobileOpen(false)} />
              </details>

              <div className="legal-prose">
                <div className="legal-lede">{lede}</div>

                {sections.map((section, i) => (
                  <section key={section.id} id={section.id} className="legal-section" aria-labelledby={`${section.id}-title`}>
                    <header className="legal-section-head">
                      <span className="legal-section-mark">§ {pad(i + 1)}</span>
                      <h2 id={`${section.id}-title`}>{section.title}</h2>
                    </header>
                    {section.content}
                  </section>
                ))}

                <div className="legal-also legal-also--inline lg:hidden">
                  <p className="legal-label">Also see</p>
                  <Link to={alsoSee.to} className="legal-also-link group">
                    {alsoSee.label}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EntityBlock />
    </article>
  );
}

/** "Contact & Legal" — who stands behind the site, in three labelled columns. */
function EntityBlock() {
  return (
    <section className="legal-entity" aria-labelledby="legal-entity-title">
      <div className="container-large px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <p className="lg:col-span-3 legal-eyebrow">
            <span className="text-exvia-black">Contact &amp; Legal</span>
          </p>
          <h2 id="legal-entity-title" className="lg:col-span-9 legal-entity-statement">
            The registered company behind FM Consulting.
          </h2>
        </div>

        <dl className="legal-entity-grid">
          <div>
            <dt className="legal-label">The entity</dt>
            <dd className="legal-entity-value">{legalEntity.name}</dd>
            <dd className="legal-entity-note">Private company. Trades as {legalEntity.tradingName}.</dd>
          </div>
          <div>
            <dt className="legal-label">Registered in</dt>
            <dd className="legal-entity-value">{legalEntity.jurisdiction}</dd>
            <dd className="legal-entity-note">
              Reg. no. <span className="font-mono-brand">{legalEntity.registrationNumber}</span>
              <br />
              {legalEntity.registeredOffice}
            </dd>
          </div>
          <div>
            <dt className="legal-label">Information Officer</dt>
            <dd className="legal-entity-value">{legalEntity.informationOfficer}</dd>
            <dd className="legal-entity-note">
              <a href={`mailto:${legalEntity.email}`} className="legal-link">{legalEntity.email}</a>
              <br />
              <a href={`tel:${legalEntity.phone.replace(/\s+/g, '')}`} className="legal-link">{legalEntity.phone}</a>
            </dd>
          </div>
        </dl>

        <div className="legal-baseline">
          <span>© 2026 {legalEntity.name}</span>
          <span>Cape Town · 33°55′S 18°25′E</span>
          <span>Edition one — v1.0</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Content primitives                                                   */
/* ------------------------------------------------------------------ */

export function P({ children }: { children: ReactNode }) {
  return <p className="legal-p">{children}</p>;
}

export function H3({ n, children }: { n: string; children: ReactNode }) {
  return (
    <h3 className="legal-h3">
      <span className="legal-h3-number">{n}</span>
      <span>{children}</span>
    </h3>
  );
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="legal-list">
      {items.map((item, i) => (
        <li key={i}>
          <span className="legal-list-dash" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Pull-out statement with an ink rule — the point a reader should not miss. */
export function Callout({ children }: { children: ReactNode }) {
  return <p className="legal-callout">{children}</p>;
}

/** Set in mono caps: the clauses the law expects to be conspicuous. */
export function Caps({ children }: { children: ReactNode }) {
  return <p className="legal-caps">{children}</p>;
}

export function A({ to, href, children }: { to?: string; href?: string; children: ReactNode }) {
  if (to) {
    return (
      <Link to={to} className="legal-link">
        {children}
      </Link>
    );
  }
  const external = href?.startsWith('http');
  return (
    <a href={href} className="legal-link" {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  );
}

/** Label / value rows for contact details. */
export function Details({ rows }: { rows: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="legal-details">
      {rows.map((row) => (
        <div key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
