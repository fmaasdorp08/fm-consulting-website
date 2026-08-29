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
            <a
              href={segment.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-exvia-black underline decoration-exvia-black/30 underline-offset-4 hover:decoration-exvia-black transition-colors"
            >
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
    <article className="w-full pt-24 lg:pt-32 bg-white">
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

      <header className="pb-12 lg:pb-16">
        <div className="container-large px-6 lg:px-12">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm text-exvia-black/60 hover:text-exvia-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <div className="max-w-5xl mt-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-exvia-black/55">
              <span className="px-3 py-1 rounded-full border border-exvia-border bg-exvia-subtle">
                {article.category}
              </span>
              <time dateTime={article.publishedTime}>{article.date}</time>
              <span aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-exvia-black mt-7 leading-[1.05] tracking-tight">
              {article.title}
            </h1>
            <p className="mt-7 text-base lg:text-lg font-medium text-exvia-black/75">By {article.byline}</p>
          </div>
        </div>
      </header>

      <figure className="container-large px-6 lg:px-12">
        <div className="aspect-video overflow-hidden rounded-lg border border-exvia-border bg-exvia-subtle">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>
        <figcaption className="mt-3 text-xs text-exvia-black/50">
          Photo by{' '}
          <a
            href={article.imageSource}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-exvia-black/25 underline-offset-4 hover:decoration-exvia-black transition-colors"
          >
            {article.imageCredit}
          </a>
        </figcaption>
      </figure>

      <div className="container-large px-6 lg:px-12 py-14 lg:py-20">
        <div className="max-w-3xl mx-auto">
          {article.blocks.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <h2 key={`${block.text}-${index}`} className="text-2xl lg:text-3xl font-semibold text-exvia-black mt-12 first:mt-0 mb-5 leading-tight">
                  {block.text}
                </h2>
              );
            }

            if (block.type === 'list') {
              const ListTag = block.style === 'ordered' ? 'ol' : 'ul';
              return (
                <ListTag
                  key={`list-${index}`}
                  className={`${block.style === 'ordered' ? 'list-decimal' : 'list-disc'} pl-6 lg:pl-8 space-y-3 mb-7 text-lg leading-8 text-exvia-black/75 marker:text-exvia-black`}
                >
                  {block.items.map((item, itemIndex) => (
                    <li key={`item-${itemIndex}`} className="pl-2">
                      <RichText segments={item} />
                    </li>
                  ))}
                </ListTag>
              );
            }

            if (block.type === 'note') {
              return (
                <p key={`note-${index}`} className="my-8 border-l-2 border-exvia-black pl-5 text-base italic leading-7 text-exvia-black/65">
                  <RichText segments={block.content} />
                </p>
              );
            }

            return (
              <p key={`paragraph-${index}`} className="mb-6 text-lg leading-8 text-exvia-black/75">
                <RichText segments={block.content} />
              </p>
            );
          })}
        </div>
      </div>

      <nav aria-label="More FM Consulting insights" className="border-t border-exvia-border bg-exvia-subtle/40">
        <div className="container-large px-6 lg:px-12 py-12 grid md:grid-cols-2 gap-6">
          <div>
            {previousArticle && (
              <Link
                to={`/insights/${previousArticle.slug}`}
                className="group block h-full bg-white border border-exvia-border rounded-lg p-6 hover:border-exvia-black/30 transition-colors"
              >
                <span className="inline-flex items-center gap-2 text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous insight
                </span>
                <span className="block mt-3 text-lg font-semibold leading-snug group-hover:text-exvia-black/70 transition-colors">
                  {previousArticle.title}
                </span>
              </Link>
            )}
          </div>
          <div>
            {nextArticle && (
              <Link
                to={`/insights/${nextArticle.slug}`}
                className="group block h-full bg-white border border-exvia-border rounded-lg p-6 text-right hover:border-exvia-black/30 transition-colors"
              >
                <span className="inline-flex items-center gap-2 text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                  Next insight <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="block mt-3 text-lg font-semibold leading-snug group-hover:text-exvia-black/70 transition-colors">
                  {nextArticle.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>

      <section className="bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12 py-16 lg:py-20 text-center">
          <p className="text-xs font-geist-mono uppercase tracking-widest text-white/60">FM Consulting</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-4">Turn the insight into a practical next move.</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-exvia-black font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
