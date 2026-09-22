import { siteConfig } from '@/config';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://www.fmconsultingza.co.za';

/**
 * Per-page SEO metadata. React 19 hoists <title> and <meta> tags
 * rendered anywhere in the tree into <head>.
 */
export function Seo({
  title,
  description,
  path = '/',
  image = '/brand/fm-og-image.png',
  imageAlt = 'FM Consulting — growth systems for South African businesses',
  type = 'website',
  publishedTime,
  author,
  noIndex = false,
}: SeoProps) {
  const fullTitle = title ? `${title} | FM Consulting` : siteConfig.title;
  const desc = description || siteConfig.description;
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  const isDefaultImage = image === '/brand/fm-og-image.png';

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="FM Consulting" />
      <meta property="og:image" content={imageUrl} />
      {isDefaultImage ? (
        <>
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      ) : (
        <>
          <meta property="og:image:width" content="1600" />
          <meta property="og:image:height" content="900" />
        </>
      )}
      <meta property="og:image:alt" content={imageAlt} />
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === 'article' && author && <meta property="article:author" content={author} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </>
  );
}
