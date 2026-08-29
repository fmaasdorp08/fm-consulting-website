import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { insightsConfig } from '@/config';
import { articles } from '@/data/articles';

const categoryIcons: Record<string, React.ElementType> = {
  'AI & Automation': Bot,
  'Growth Strategy': TrendingUp,
  Analytics: BarChart3,
  'Sales Performance': Users,
  Retention: RefreshCw,
  Compliance: ShieldCheck,
};

const categoryColors: Record<string, string> = {
  'AI & Automation': 'bg-black text-white border-black',
  'Growth Strategy': 'bg-exvia-subtle text-exvia-black border-exvia-border',
  Analytics: 'bg-exvia-subtle text-exvia-black border-exvia-border',
  'Sales Performance': 'bg-exvia-subtle text-exvia-black border-exvia-border',
  Retention: 'bg-exvia-subtle text-exvia-black border-exvia-border',
  Compliance: 'bg-exvia-subtle text-exvia-black border-exvia-border',
};

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: articlesRef, visibleItems } = useStaggerAnimation(articles.length, 100);

  const categories = ['All', ...Array.from(new Set(articles.map((article) => article.category)))];
  const featuredArticle = articles[0];
  const listedArticles = activeCategory === 'All'
    ? articles.slice(1)
    : articles.filter((article) => article.category === activeCategory);

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    window.requestAnimationFrame(() => {
      document.getElementById('latest-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="w-full pt-24 lg:pt-32">
      <section className="w-full pb-16 lg:pb-24 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div ref={headerRef} className="max-w-4xl">
            <span
              className={cn(
                'block text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              )}
            >
              {insightsConfig.label}
            </span>
            <h1
              className={cn(
                'text-4xl lg:text-6xl font-semibold text-exvia-black mt-6 leading-tight transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {insightsConfig.heading}
            </h1>
            <p
              className={cn(
                'text-xl lg:text-2xl text-exvia-black/70 mt-6 leading-relaxed transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              )}
              style={{ transitionDelay: '200ms' }}
            >
              {insightsConfig.description}
            </p>
          </div>
        </div>
      </section>

      {activeCategory === 'All' && (
        <section className="w-full py-16 lg:py-24 bg-exvia-subtle/40">
          <div className="container-large px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <Link
                to={`/insights/${featuredArticle.slug}`}
                className="group block aspect-video rounded-lg overflow-hidden border border-exvia-border bg-white"
                aria-label={`Read ${featuredArticle.title}`}
              >
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  fetchPriority="high"
                />
              </Link>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[featuredArticle.category]}`}>
                    {featuredArticle.category}
                  </span>
                  <span className="text-sm text-exvia-black/50">{featuredArticle.date}</span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-semibold text-exvia-black mb-4 leading-tight">
                  <Link to={`/insights/${featuredArticle.slug}`} className="hover:text-exvia-black/70 transition-colors">
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p className="text-exvia-black/70 text-lg mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-exvia-black/50">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <Link
                  to={`/insights/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 mt-7 text-exvia-black font-medium hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="latest-articles" className="w-full py-16 lg:py-24 bg-white scroll-mt-24">
        <div className="container-large px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                {activeCategory === 'All' ? 'The complete series' : 'Filtered articles'}
              </span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-exvia-black mt-2">
                {activeCategory === 'All' ? 'Latest Articles' : activeCategory}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filter articles by topic">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={cn(
                    'px-4 py-2 text-sm rounded-full border transition-colors',
                    activeCategory === category
                      ? 'bg-exvia-black text-white border-exvia-black'
                      : 'bg-white text-exvia-black border-exvia-border hover:border-exvia-black',
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div ref={articlesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listedArticles.map((article, index) => {
              const Icon = categoryIcons[article.category] || CheckCircle2;
              return (
                <article
                  key={article.slug}
                  className={cn(
                    'group bg-white border border-exvia-border rounded-lg overflow-hidden hover:border-exvia-black/30 hover:shadow-lg transition-all duration-700 ease-out-quart',
                    visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                  )}
                >
                  <Link to={`/insights/${article.slug}`} className="block aspect-video overflow-hidden bg-exvia-subtle/50">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full border ${categoryColors[article.category]}`}>
                        <Icon className="w-3 h-3" />
                        {article.category}
                      </span>
                      <span className="text-xs text-exvia-black/50">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-exvia-black mb-2 leading-snug">
                      <Link to={`/insights/${article.slug}`} className="hover:text-exvia-black/70 transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-exvia-black/60 mb-5 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-1 text-xs text-exvia-black/50">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                      <Link
                        to={`/insights/${article.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-exvia-black font-medium hover:gap-2 transition-all"
                      >
                        Read
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-exvia-subtle/40">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
              Explore by topic
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-exvia-black mt-4">
              Six practical perspectives. One growth system.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.slice(1).map((category) => {
              const Icon = categoryIcons[category] || CheckCircle2;
              const count = articles.filter((article) => article.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  className="group p-6 bg-white border border-exvia-border rounded-lg text-left hover:border-exvia-black/30 hover:shadow-lg transition-all"
                >
                  <span className="w-11 h-11 mb-4 flex items-center justify-center border border-exvia-border rounded-lg bg-exvia-subtle/30 group-hover:bg-exvia-black group-hover:border-exvia-black transition-colors">
                    <Icon className="w-5 h-5 text-exvia-black group-hover:text-white transition-colors" />
                  </span>
                  <span className="font-medium text-exvia-black">{category}</span>
                  <span className="block text-sm text-exvia-black/50 mt-1">{count} article</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12 text-center">
          <p className="text-xs font-geist-mono uppercase tracking-widest text-white/60">Put the thinking to work</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-4">Have a growth question worth unpacking?</h2>
          <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">
            Bring the real business problem. We will help you find the first useful move.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-exvia-black font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
