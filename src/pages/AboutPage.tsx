import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { aboutConfig } from '@/config';
import { Check, TrendingUp, Target, BarChart3, Users } from 'lucide-react';

const values = [
  {
    icon: TrendingUp,
    title: "Growth Should Be Measured",
    description: "We believe that what gets measured gets managed. Every strategy we develop includes clear KPIs and measurement frameworks."
  },
  {
    icon: Target,
    title: "Strategy Must Serve Commercial Reality",
    description: "A strategy that looks good on paper but doesn't drive revenue is worthless. We focus on practical, executable plans that deliver ROI."
  },
  {
    icon: Users,
    title: "Acquisition and Retention Work Together",
    description: "Sustainable growth requires both. We help you build integrated systems that attract customers and keep them coming back."
  },
  {
    icon: BarChart3,
    title: "Performance Matters More Than Noise",
    description: "We prioritise metrics that matter—revenue, margin, lifetime value—over vanity metrics that don't translate to business success."
  }
];

const beliefs = [
  "Marketing should be accountable to business outcomes",
  "Data without insight is just numbers",
  "Strategy without execution is just theory",
  "Growth without efficiency is unsustainable",
  "Customer understanding drives competitive advantage"
];

export function AboutPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: valuesRef, visibleItems: valuesVisible } = useStaggerAnimation(values.length, 100);
  const { containerRef: beliefsRef, visibleItems: beliefsVisible } = useStaggerAnimation(beliefs.length, 80);

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
                About Us
              </span>
            </div>
            <h1
              className={cn(
                'text-4xl lg:text-6xl font-semibold text-exvia-black mt-6 leading-tight transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              We Help South African Businesses Grow Smarter
            </h1>
            <p
              className={cn(
                'text-xl lg:text-2xl text-exvia-black/70 mt-6 leading-relaxed transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              FM Consulting partners with ambitious companies to improve acquisition, retention, 
              efficiency, and commercial outcomes through strategy, analytics, and performance-led execution.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full py-16 lg:py-24 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
          <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="space-y-6">
              <h2
                className={cn(
                  'text-3xl lg:text-4xl font-semibold text-exvia-black transition-all duration-800 ease-out-quart',
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
              >
                Who We Are
              </h2>
              <div
                className={cn(
                  'space-y-4 text-exvia-black/70 leading-relaxed transition-all duration-800 ease-out-quart',
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '100ms' }}
              >
                <p>
                  FM Consulting is a South African business growth consultancy founded on a simple belief: 
                  that marketing and strategy should be held accountable to commercial outcomes.
                </p>
                <p>
                  We operate at the intersection of growth strategy, digital marketing, performance media, 
                  and analytics. Our team brings together expertise from leading consultancies, agencies, 
                  and in-house leadership roles to deliver a unique blend of strategic thinking and practical execution.
                </p>
                <p>
                  We work primarily with SMEs, founder-led businesses, hospitality brands, professional services 
                  firms, and B2B companies who are ready to take a more disciplined, data-informed approach to growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {aboutConfig.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    'relative overflow-hidden rounded-lg transition-all duration-700 ease-out-quart',
                    index % 2 === 1 ? 'mt-8' : '',
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="aspect-[4/5] relative group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out-quad group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
              Our Approach
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-exvia-black mt-4">
              What We Believe
            </h2>
          </div>

          <div ref={valuesRef} className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={cn(
                  'p-8 border border-exvia-border rounded-lg transition-all duration-700 ease-out-quart hover:border-exvia-black/30 hover:bg-exvia-subtle/20',
                  valuesVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-exvia-border rounded-lg bg-white mb-6">
                  <value.icon className="w-5 h-5 text-exvia-black" />
                </div>
                <h3 className="text-xl font-semibold text-exvia-black mb-3">{value.title}</h3>
                <p className="text-exvia-black/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="w-full py-16 lg:py-24 bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <span className="text-xs font-geist-mono uppercase tracking-widest text-white/50">
                Differentiation
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold mt-4">
                What Makes Us Different
              </h2>
              <p className="text-white/70 mt-6 leading-relaxed">
                In a market full of agencies promising the world and consultants delivering 
                PowerPoints, we take a different approach. We're operators who understand 
                that results matter more than reports.
              </p>
            </div>

            <div ref={beliefsRef} className="space-y-4">
              {beliefs.map((belief, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-center gap-4 p-4 border border-white/10 rounded-lg transition-all duration-700 ease-out-quart',
                    beliefsVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  )}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90">{belief}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {aboutConfig.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block text-4xl lg:text-5xl font-bold text-exvia-black">{stat.value}</span>
                <span className="text-sm text-exvia-black/60 mt-2 block">{stat.label}</span>
              </div>
            ))}
            <div className="text-center">
              <span className="block text-4xl lg:text-5xl font-bold text-exvia-black">{aboutConfig.experienceValue}</span>
              <span className="text-sm text-exvia-black/60 mt-2 block">{aboutConfig.experienceLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-24 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-exvia-black">
              Ready to Work Together?
            </h2>
            <p className="text-exvia-black/70 mt-4 text-lg">
              Let's discuss how FM Consulting can help you achieve your growth objectives.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-exvia-black text-white font-medium rounded-lg hover:bg-exvia-black/90 transition-colors"
              >
                Book a Consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-exvia-black text-exvia-black font-medium rounded-lg hover:bg-exvia-black hover:text-white transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
