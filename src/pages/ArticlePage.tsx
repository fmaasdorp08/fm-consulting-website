import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { articles, type RichTextSegment } from '@/data/articles';

function RichText({ segments }: { segments: RichTextSegment[] }) {
  return (
    <>
      {segments.map((segment, index) => (
        <Fragment key={`${segment.text}-${index}`}>
          {segment.href ? (
            <a href={segment.href} target="_blank" rel="noreferrer" className="editorial-link">
              {segment.text}
            </a>
          ) : (
            segment.text
          )}
        </Fragment>
      ))}
    </>
  );
}

function createHeadingId(text: string, index: number) {
  const readableId = text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  return `${readableId || 'section'}-${index + 1}`;
}

export function ArticlePage() {
  const { slug } = useParams();
  const articleIndex = articles.findIndex((item) => item.slug === slug);
  const article = articles[articleIndex];

  if (!article) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh]">
        <Seo title="Article not found" description="The requested FM Consulting insight could not be found." path="/insights" noIndex />
        <div className="container-large px-6 lg:px-12 text-center">
          <p className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">404</p>
          <h1 className="text-4xl lg:text-6xl font-semibold mt-5">This article is not available.</h1>
          <Link to="/insights" className="inline-flex items-center gap-2 mt-8 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const previousArticle = articles[articleIndex - 1];
  const nextArticle = articles[articleIndex + 1];
  const canonicalPath = `/insights/${article.slug}`;
  const issueNumber = String(article.number).padStart(2, '0');
  const firstParagraphIndex = article.blocks.findIndex((block) => block.type === 'paragraph');
  const headings = article.blocks.flatMap((block, blockIndex) => (
    block.type === 'heading'
      ? [{ blockIndex, id: createHeadingId(block.text, blockIndex), text: block.text }]
      : []
  ));
  const headingNumbers = new Map(headings.map((heading, index) => [heading.blockIndex, index + 1]));
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `https://www.fouadmaasdorp.me${article.image}`,
    datePublished: article.publishedTime,
    dateModified: article.publishedTime,
    author: {
      '@type': 'Organization',
      name: article.byline,
    },
    publisher: {
      '@type': 'Organization',
      name: 'FM Consulting',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.fouadmaasdorp.me/icon-512.png',
      },
    },
    mainEntityOfPage: `https://www.fouadmaasdorp.me${canonicalPath}`,
  };

  return (
    <article className="editorial-article w-full pt-24 lg:pt-28 bg-background">
      <Seo
        title={article.title}
        description={article.excerpt}
        path={canonicalPath}
        image={article.image}
        imageAlt={article.imageAlt}
        type="article"
        publishedTime={article.publishedTime}
        author={article.byline}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="border-y border-exvia-border">
        <div className="container-large px-6 lg:px-12">
          <div className="flex items-center justify-between gap-6 py-4 border-b border-exvia-border font-geist-mono text-[0.68rem] uppercase tracking-[0.16em] text-exvia-black/55">
            <Link to="/insights" className="group inline-flex items-center gap-2 hover:text-exvia-black transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              All insights
            </Link>
            <span className="hidden sm:block">FM Consulting / Insights</span>
            <span>{issueNumber} / {String(articles.length).padStart(2, '0')}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 py-12 lg:py-20">
            <div className="lg:col-span-9">
              <p className="font-geist-mono text-[0.7rem] uppercase tracking-[0.18em] text-exvia-black/55">
                Insight {issueNumber} <span className="mx-2" aria-hidden="true">—</span> {article.category}
              </p>
              <h1 className="editorial-title mt-6 text-exvia-black">{article.title}</h1>
            </div>

            <aside className="lg:col-span-3 lg:self-end border-t lg:border-t-0 lg:border-l border-exvia-border pt-7 lg:pt-0 lg:pl-8">
              <p className="font-geist-mono text-[0.68rem] uppercase tracking-[0.16em] text-exvia-black/45">In brief</p>
              <p className="editorial-deck mt-4 text-exvia-black">{article.excerpt}</p>

              <dl className="mt-8 pt-5 border-t border-exvia-border grid grid-cols-2 gap-x-5 gap-y-5 text-sm">
                <div className="col-span-2">
                  <dt className="font-geist-mono text-[0.64rem] uppercase tracking-[0.14em] text-exvia-black/45">By</dt>
                  <dd className="mt-1 font-medium text-exvia-black">{article.byline}</dd>
                </div>
                <div>
                  <dt className="font-geist-mono text-[0.64rem] uppercase tracking-[0.14em] text-exvia-black/45">Published</dt>
                  <dd className="mt-1 text-exvia-black/70"><time dateTime={article.publishedTime}>{article.date}</time></dd>
                </div>
                <div>
                  <dt className="font-geist-mono text-[0.64rem] uppercase tracking-[0.14em] text-exvia-black/45">Reading time</dt>
                  <dd className="mt-1 inline-flex items-center gap-1.5 text-exvia-black/70">
                    <Clock className="w-3.5 h-3.5" /> {article.readTime}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </header>

      <figure className="container-large px-6 lg:px-12 py-8 lg:py-12">
        <div className="editorial-hero-media overflow-hidden bg-exvia-subtle">
          <img src={article.image} alt={article.imageAlt} className="editorial-hero-image w-full h-full object-cover" fetchPriority="high" />
        </div>
        <figcaption className="grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 pt-3 border-t border-exvia-border font-geist-mono text-[0.63rem] leading-relaxed uppercase tracking-[0.11em] text-exvia-black/45">
          <span>{article.imageAlt}</span>
          <span>
            Image /{' '}
            <a href={article.imageSource} target="_blank" rel="noreferrer" className="hover:text-exvia-black underline underline-offset-4">
              {article.imageCredit}
            </a>
          </span>
        </figcaption>
      </figure>

      <section className="border-t border-exvia-border">
        <div className="container-large px-6 lg:px-12 py-14 lg:py-24">
          <div className="lg:grid lg:grid-cols-[14rem_minmax(0,48rem)] xl:grid-cols-[15rem_minmax(0,49rem)] lg:gap-16 xl:gap-20 lg:justify-center">
            <aside className="hidden lg:block">
              <div className="sticky top-32 border-t border-exvia-black pt-5">
                <p className="font-geist-mono text-[0.66rem] uppercase tracking-[0.16em] text-exvia-black/45">In this article</p>
                <ol className="mt-6 space-y-4">
                  {headings.map((heading, index) => (
                    <li key={heading.id}>
                      <a href={`#${heading.id}`} className="editorial-toc-link group grid grid-cols-[1.8rem_1fr] gap-2 text-sm leading-snug text-exvia-black/55 hover:text-exvia-black transition-colors">
                        <span className="font-geist-mono text-[0.6rem] pt-0.5 text-exvia-black/35 group-hover:text-exvia-black">{String(index + 1).padStart(2, '0')}</span>
                        <span>{heading.text}</span>
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 pt-5 border-t border-exvia-border grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-geist-mono text-[0.6rem] uppercase tracking-[0.14em] text-exvia-black/40">Words</p>
                    <p className="mt-1 text-sm font-medium">{article.wordCount.toLocaleString('en-ZA')}</p>
                  </div>
                  <div>
                    <p className="font-geist-mono text-[0.6rem] uppercase tracking-[0.14em] text-exvia-black/40">Series</p>
                    <p className="mt-1 text-sm font-medium">{issueNumber} / {String(articles.length).padStart(2, '0')}</p>
                  </div>
                </div>
              </div>
            </aside>

            <div>
              <details className="editorial-mobile-toc lg:hidden mb-12 border-y border-exvia-border py-4">
                <summary className="font-geist-mono text-[0.68rem] uppercase tracking-[0.15em] text-exvia-black cursor-pointer">In this article</summary>
                <ol className="mt-5 space-y-3 pb-2">
                  {headings.map((heading, index) => (
                    <li key={heading.id}>
                      <a href={`#${heading.id}`} className="grid grid-cols-[1.75rem_1fr] gap-2 text-sm leading-snug text-exvia-black/65">
                        <span className="font-geist-mono text-[0.6rem] pt-0.5 text-exvia-black/35">{String(index + 1).padStart(2, '0')}</span>
                        <span>{heading.text}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </details>

              <div className="editorial-prose">
                <div className="flex items-center gap-4 mb-10 font-geist-mono text-[0.65rem] uppercase tracking-[0.16em] text-exvia-black/40">
                  <span>Long read</span>
                  <span className="h-px flex-1 bg-exvia-border" />
                  <span>{article.wordCount.toLocaleString('en-ZA')} words</span>
                </div>

                {article.blocks.map((block, index) => {
                  if (block.type === 'heading') {
                    const sectionNumber = headingNumbers.get(index) || 1;
                    const headingId = createHeadingId(block.text, index);
                    const isSourcesHeading = /^sources\b/i.test(block.text);
                    return (
                      <h2 key={`${block.text}-${index}`} id={headingId} className={`editorial-section-heading ${isSourcesHeading ? 'editorial-sources-heading' : ''}`}>
                        <span className="editorial-section-number">{String(sectionNumber).padStart(2, '0')}</span>
                        <span>{block.text}</span>
                      </h2>
                    );
                  }

                  if (block.type === 'list') {
                    const previousBlock = article.blocks[index - 1];
                    const isSourcesList = previousBlock?.type === 'heading' && /^sources\b/i.test(previousBlock.text);
                    const ListTag = block.style === 'ordered' ? 'ol' : 'ul';
                    return (
                      <ListTag key={`list-${index}`} className={`editorial-list ${block.style === 'ordered' ? 'editorial-list-ordered' : 'editorial-list-unordered'} ${isSourcesList ? 'editorial-sources-list' : ''}`}>
                        {block.items.map((item, itemIndex) => (
                          <li key={`item-${itemIndex}`}><span><RichText segments={item} /></span></li>
                        ))}
                      </ListTag>
                    );
                  }

                  if (block.type === 'note') {
                    return (
                      <aside key={`note-${index}`} className="editorial-note">
                        <span className="editorial-note-label">Note</span>
                        <p><RichText segments={block.content} /></p>
                      </aside>
                    );
                  }

                  return (
                    <p key={`paragraph-${index}`} className={index === firstParagraphIndex ? 'editorial-lede' : 'editorial-paragraph'}>
                      <RichText segments={block.content} />
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="More FM Consulting insights" className="bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12 py-14 lg:py-20">
          <div className="flex items-end justify-between gap-6 pb-5 border-b border-white/25">
            <div>
              <p className="font-geist-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/45">Continue reading</p>
              <h2 className="text-2xl lg:text-3xl font-semibold mt-2">More from FM Consulting</h2>
            </div>
            <span className="hidden sm:block font-geist-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/40">Insights / {String(articles.length).padStart(2, '0')}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-8">
            <div>
              {previousArticle && (
                <Link to={`/insights/${previousArticle.slug}`} className="editorial-next-card group block">
                  <div className="aspect-[16/9] overflow-hidden bg-white/10">
                    <img src={previousArticle.image} alt="" className="w-full h-full object-cover opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" loading="lazy" />
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 font-geist-mono text-[0.64rem] uppercase tracking-[0.16em] text-white/45">
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Previous insight
                  </span>
                  <span className="block mt-2 text-xl lg:text-2xl font-semibold leading-tight">{previousArticle.title}</span>
                </Link>
              )}
            </div>
            <div className={!previousArticle ? 'md:col-start-2' : ''}>
              {nextArticle && (
                <Link to={`/insights/${nextArticle.slug}`} className="editorial-next-card group block md:text-right">
                  <div className="aspect-[16/9] overflow-hidden bg-white/10">
                    <img src={nextArticle.image} alt="" className="w-full h-full object-cover opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" loading="lazy" />
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 font-geist-mono text-[0.64rem] uppercase tracking-[0.16em] text-white/45">
                    Next insight <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="block mt-2 text-xl lg:text-2xl font-semibold leading-tight">{nextArticle.title}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-background border-b border-exvia-border">
        <div className="container-large px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-12 gap-8 lg:items-end">
          <p className="lg:col-span-3 font-geist-mono text-[0.68rem] uppercase tracking-[0.16em] text-exvia-black/45">Put the thinking to work</p>
          <div className="lg:col-span-7">
            <h2 className="text-4xl lg:text-6xl font-semibold leading-[0.98] tracking-[-0.045em]">Turn the insight into a practical next move.</h2>
          </div>
          <div className="lg:col-span-2 lg:text-right">
            <Link to="/contact" className="group inline-flex items-center gap-3 border border-exvia-black px-5 py-3 font-medium hover:bg-exvia-black hover:text-white transition-colors">
              Start a conversation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
