import { siteConfig } from '@/config';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

const BASE_URL = 'https://www.fouadmaasdorp.me';

/**
 * Per-page SEO metadata. React 19 hoists <title> and <meta> tags
 * rendered anywhere in the tree into <head>.
 */
export function Seo({ title, description, path = '/' }: SeoProps) {
  const fullTitle = title ? `${title} | FM Consulting ZA` : siteConfig.title;
  const desc = description || siteConfig.description;
  const url = `${BASE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FM Consulting ZA" />
      <meta property="og:image" content={`${BASE_URL}/brand/fm-social-banner.png`} />
      <meta property="og:image:alt" content="FM Consulting ZA — Ruthless Minimal, Future-Focused Consulting" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={`${BASE_URL}/brand/fm-social-banner.png`} />
    </>
  );
}
