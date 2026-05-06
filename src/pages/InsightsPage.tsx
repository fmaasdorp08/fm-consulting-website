import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { insightsConfig } from '@/config';
import { ArrowRight, Clock, Tag, TrendingUp, Target, BarChart3, Users, Lightbulb } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  "Strategy": TrendingUp,
  "Customer Experience": Users,
  "Analytics": BarChart3,
  "Growth": Target,
  "Performance": Lightbulb,
  "SME": Lightbulb,
};

const categoryColors: Record<string, string> = {
  "Strategy": "bg-blue-100 text-blue-700",
  "Customer Experience": "bg-purple-100 text-purple-700",
  "Analytics": "bg-green-100 text-green-700",
  "Growth": "bg-orange-100 text-orange-700",
  "Performance": "bg-red-100 text-red-700",
  "SME": "bg-teal-100 text-teal-700",
};

export function InsightsPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: articlesRef, visibleItems } = useStaggerAnimation(insightsConfig.articles.length, 100);

  const featuredArticle = insightsConfig.articles[0];
  const otherArticles = insightsConfig.articles.slice(1);

  return (
    <div className="w-full pt-24 lg:pt-32">
      {/* Header Section */}
      <section className="w-full pb-16 lg:pb-24 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div ref={headerRef} className="max-w-4xl">
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                Insights
              </span>
            </div>
            <h1
              className={cn(
                'text-4xl lg:text-6xl font-semibold text-exvia-black mt-6 leading-tight transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Thoughts on Growth, Strategy & Performance
            </h1>
            <p
              className={cn(
                'text-xl lg:text-2xl text-exvia-black/70 mt-6 leading-relaxed transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              Practical insights and strategic perspectives on building businesses that 
              grow sustainably and profitably.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full py-16 lg:py-24 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden bg-exvia-black/10">
              <div className="w-full h-full flex items-center justify-center">
                <TrendingUp className="w-24 h-24 text-exvia-black/20" />
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[featuredArticle.category]}`}>
                  {featuredArticle.category}
                </span>
                <span className="text-sm text-exvia-black/50">{featuredArticle.date}</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-exvia-black mb-4">
                {featuredArticle.title}
              </h2>
              
              <p className="text-exvia-black/70 text-lg mb-6">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-exvia-black/50">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredArticle.readTime}
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-exvia-black font-medium hover:gap-3 transition-all"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-exvia-black">
              Latest Articles
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {["All", "Strategy", "Analytics", "Growth", "SME"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                    cat === "All"
                      ? "bg-exvia-black text-white border-exvia-black"
                      : "bg-white text-exvia-black border-exvia-border hover:border-exvia-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div ref={articlesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article, index) => {
              const Icon = categoryIcons[article.category] || Lightbulb;
              return (
                <article
                  key={article.slug}
                  className={cn(
                    'group bg-white border border-exvia-border rounded-lg overflow-hidden hover:border-exvia-black/30 hover:shadow-lg transition-all duration-700 ease-out-quart',
                    visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                >
                  {/* Article Image Placeholder */}
                  <div className="aspect-video bg-exvia-subtle/50 flex items-center justify-center group-hover:bg-exvia-subtle transition-colors">
                    <Icon className="w-12 h-12 text-exvia-black/20" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${categoryColors[article.category]}`}>
                        {article.category}
                      </span>
                      <span className="text-xs text-exvia-black/50">{article.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-exvia-black mb-2 group-hover:text-exvia-black/80 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-exvia-black/60 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-exvia-black/50">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </div>
                      
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-sm text-exvia-black font-medium hover:gap-2 transition-all"
                      >
                        Read
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 lg:py-24 bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white/10 rounded-full">
              <Tag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Subscribe to Our Insights
            </h2>
            <p className="text-white/70 mt-4 text-lg">
              Get practical strategies and perspectives on growth, marketing, and business 
              performance delivered to your inbox.
            </p>
            
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-exvia-black font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-white/50 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="w-full py-16 lg:py-24 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
              Topics
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-exvia-black mt-4">
              Explore by Topic
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Growth Strategy", icon: TrendingUp, count: 12 },
              { name: "Digital Marketing", icon: Target, count: 8 },
              { name: "Analytics", icon: BarChart3, count: 6 },
              { name: "Customer Experience", icon: Users, count: 5 },
              { name: "SME Growth", icon: Lightbulb, count: 7 },
              { name: "Performance", icon: TrendingUp, count: 9 },
            ].map((topic) => (
              <a
                key={topic.name}
                href="#"
                className="group p-6 bg-white border border-exvia-border rounded-lg text-center hover:border-exvia-black/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-exvia-border rounded-lg bg-exvia-subtle/30 group-hover:bg-exvia-black group-hover:border-exvia-black transition-colors">
                  <topic.icon className="w-5 h-5 text-exvia-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-medium text-exvia-black">{topic.name}</h3>
                <p className="text-sm text-exvia-black/50 mt-1">{topic.count} articles</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
