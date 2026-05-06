import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { industriesConfig } from '@/config';
import { ArrowRight, Utensils, ShoppingBag, Briefcase, Cpu, Users, Heart } from 'lucide-react';

const industryIcons: Record<string, React.ElementType> = {
  "Hospitality": Utensils,
  "Retail & E-commerce": ShoppingBag,
  "Professional Services": Briefcase,
  "B2B & Technology": Cpu,
  "SMEs & Founder-led Businesses": Users,
  "Consumer Services": Heart,
};

export function IndustriesPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: industriesRef, visibleItems } = useStaggerAnimation(industriesConfig.industries.length, 100);

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
                Industries
              </span>
            </div>
            <h1
              className={cn(
                'text-4xl lg:text-6xl font-semibold text-exvia-black mt-6 leading-tight transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Sectors We Serve
            </h1>
            <p
              className={cn(
                'text-xl lg:text-2xl text-exvia-black/70 mt-6 leading-relaxed transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              We understand that different industries face unique commercial challenges. 
              Our expertise spans multiple sectors, each with tailored strategies that 
              address specific market dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="w-full py-16 lg:py-24 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
          <div ref={industriesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesConfig.industries.map((industry, index) => {
              const Icon = industryIcons[industry.name] || Briefcase;
              return (
                <div
                  key={industry.name}
                  className={cn(
                    'group bg-white border border-exvia-border rounded-lg overflow-hidden hover:border-exvia-black/30 transition-all duration-700 ease-out-quart',
                    visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center border border-exvia-border rounded-lg bg-exvia-subtle/30">
                        <Icon className="w-5 h-5 text-exvia-black" />
                      </div>
                      <h3 className="text-xl font-semibold text-exvia-black">{industry.name}</h3>
                    </div>
                    
                    <p className="text-exvia-black/70 text-sm mb-6">
                      {industry.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold text-exvia-black uppercase tracking-wider mb-2">
                          Common Challenges
                        </h4>
                        <ul className="space-y-1">
                          {industry.challenges.slice(0, 3).map((challenge, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-exvia-black/60">
                              <span className="w-1 h-1 bg-exvia-black/40 rounded-full mt-1.5 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-exvia-black uppercase tracking-wider mb-2">
                          How We Help
                        </h4>
                        <ul className="space-y-1">
                          {industry.solutions.slice(0, 2).map((solution, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-exvia-black/60">
                              <span className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-6 text-sm text-exvia-black font-medium hover:gap-3 transition-all"
                    >
                      Discuss Your Industry
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Detail Sections */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
              Deep Dive
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-exvia-black mt-4">
              Industry-Specific Expertise
            </h2>
          </div>

          <div className="space-y-16">
            {industriesConfig.industries.slice(0, 3).map((industry, index) => {
              const Icon = industryIcons[industry.name] || Briefcase;
              return (
                <div
                  key={`detail-${industry.name}`}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start pb-16 border-b border-exvia-border last:border-0"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center border border-exvia-border rounded-lg bg-exvia-subtle/30">
                        <Icon className="w-5 h-5 text-exvia-black" />
                      </div>
                      <h3 className="text-2xl font-semibold text-exvia-black">{industry.name}</h3>
                    </div>
                    
                    <p className="text-exvia-black/70 mb-8">
                      {industry.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-exvia-black uppercase tracking-wider mb-3">
                          Challenges We Address
                        </h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-exvia-black/70">
                              <span className="w-1 h-1 bg-exvia-black/40 rounded-full mt-1.5 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-exvia-black uppercase tracking-wider mb-3">
                          Solutions We Provide
                        </h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-exvia-black/70">
                              <span className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-24 bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Don't See Your Industry?
            </h2>
            <p className="text-white/70 mt-4 text-lg">
              Our principles apply across sectors. Let's discuss how we can help your 
              specific business grow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-exvia-black font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
