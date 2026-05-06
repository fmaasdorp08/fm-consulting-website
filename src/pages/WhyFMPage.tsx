import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { whyFMConfig, testimonialsConfig } from '@/config';
import { TrendingUp, Target, BarChart3, Award, Layers, Settings, Check, Star } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  "TrendingUp": TrendingUp,
  "Target": Target,
  "BarChart3": BarChart3,
  "Award": Award,
  "Layers": Layers,
  "Settings": Settings,
};

export function WhyFMPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: diffRef, visibleItems: diffVisible } = useStaggerAnimation(whyFMConfig.differentiators.length, 100);
  const { containerRef: statsRef, visibleItems: statsVisible } = useStaggerAnimation(whyFMConfig.stats.length, 100);

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
                Why FM Consulting
              </span>
            </div>
            <h1
              className={cn(
                'text-4xl lg:text-6xl font-semibold text-exvia-black mt-6 leading-tight transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Strategy Without Fluff.<br />
              Performance With Accountability.
            </h1>
            <p
              className={cn(
                'text-xl lg:text-2xl text-exvia-black/70 mt-6 leading-relaxed transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              Businesses choose FM Consulting because we combine strategic thinking with 
              commercial discipline. We don't just recommend—we help you execute, measure, and optimise.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators Grid */}
      <section className="w-full py-16 lg:py-24 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
              Our Difference
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-exvia-black mt-4">
              Why Businesses Choose Us
            </h2>
          </div>

          <div ref={diffRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFMConfig.differentiators.map((diff, index) => {
              const Icon = iconMap[diff.iconName] || Target;
              return (
                <div
                  key={diff.title}
                  className={cn(
                    'p-8 bg-white border border-exvia-border rounded-lg hover:border-exvia-black/30 hover:shadow-lg transition-all duration-700 ease-out-quart',
                    diffVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-exvia-border rounded-lg bg-exvia-subtle/30 mb-6">
                    <Icon className="w-5 h-5 text-exvia-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-exvia-black mb-3">{diff.title}</h3>
                  <p className="text-exvia-black/60 leading-relaxed">{diff.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 lg:py-24 bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-geist-mono uppercase tracking-widest text-white/50">
                Results That Matter
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold mt-4">
                We Measure Success by Your Success
              </h2>
              <p className="text-white/70 mt-6 leading-relaxed">
                Every engagement is designed to deliver measurable commercial outcomes. 
                Here are the results we've achieved for our clients on average.
              </p>
            </div>

            <div ref={statsRef} className="grid grid-cols-3 gap-6">
              {whyFMConfig.stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    'text-center p-6 border border-white/10 rounded-lg transition-all duration-700 ease-out-quart',
                    statsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="block text-4xl lg:text-5xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-white/60 mt-2 block">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Compare */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
              The FM Difference
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-exvia-black mt-4">
              How We Compare
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-exvia-black">
                  <th className="text-left py-4 px-4 font-semibold text-exvia-black">Aspect</th>
                  <th className="text-center py-4 px-4 font-semibold text-exvia-black bg-exvia-subtle/30">Traditional Agencies</th>
                  <th className="text-center py-4 px-4 font-semibold text-exvia-black bg-exvia-subtle/30">Big Consultancies</th>
                  <th className="text-center py-4 px-4 font-semibold text-white bg-exvia-black">FM Consulting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Strategic Depth", agency: "Limited", consultancy: "Extensive", fm: "Deep + Practical" },
                  { aspect: "Execution Support", agency: "Yes", consultancy: "Minimal", fm: "Full Support" },
                  { aspect: "Commercial Focus", agency: "Activity-based", consultancy: "Theory-heavy", fm: "Outcome-driven" },
                  { aspect: "Data & Analytics", agency: "Basic reporting", consultancy: "Complex models", fm: "Actionable insights" },
                  { aspect: "Pricing Model", agency: "Retainer + % spend", consultancy: "Day rates", fm: "Value-based" },
                  { aspect: "Accessibility", agency: "High", consultancy: "Low", fm: "Premium but accessible" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-exvia-border">
                    <td className="py-4 px-4 font-medium text-exvia-black">{row.aspect}</td>
                    <td className="py-4 px-4 text-center text-exvia-black/60">{row.agency}</td>
                    <td className="py-4 px-4 text-center text-exvia-black/60">{row.consultancy}</td>
                    <td className="py-4 px-4 text-center text-exvia-black font-medium bg-exvia-subtle/20">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        {row.fm}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 lg:py-24 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
              Client Feedback
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-exvia-black mt-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonialsConfig.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white border border-exvia-border rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-exvia-black/70 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-exvia-black">{testimonial.author}</div>
                    <div className="text-sm text-exvia-black/60">{testimonial.role}</div>
                    <div className="text-sm text-exvia-black/60">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-24 bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/70 mt-4 text-lg">
              Book a consultation and see how our approach can help your business grow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-exvia-black font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Book a Consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
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
