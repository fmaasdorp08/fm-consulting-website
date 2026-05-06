import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { processConfig } from '@/config';
import { ArrowRight } from 'lucide-react';

export function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: stepsRef, visibleItems } = useStaggerAnimation(processConfig.steps.length, 120);

  if (processConfig.steps.length === 0) return null;

  return (
    <section id="process" className="w-full py-24 lg:py-32 bg-white">
      <div className="container-large px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-16">
          {processConfig.label && (
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                {processConfig.label}
              </span>
            </div>
          )}

          {processConfig.heading && (
            <h2
              className={cn(
                'text-h2 font-semibold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {processConfig.heading}
            </h2>
          )}

          {processConfig.description && (
            <p
              className={cn(
                'text-lg text-exvia-black/70 mt-4 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              {processConfig.description}
            </p>
          )}
        </div>

        {/* Process Steps */}
        <div ref={stepsRef} className="grid md:grid-cols-5 gap-8 lg:gap-6">
          {processConfig.steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                'relative transition-all duration-700 ease-out-quart',
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              {/* Step Number */}
              <div className="mb-6">
                <span className="text-5xl lg:text-6xl font-black text-exvia-black/10">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-exvia-black mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-exvia-black/60 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow (except for last item) */}
              {index < processConfig.steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-3 lg:-right-4">
                  <ArrowRight className="w-5 h-5 text-exvia-black/20" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={cn(
            'mt-16 pt-8 border-t border-exvia-border transition-all duration-800 ease-out-quart',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-exvia-black/70">
              Ready to start your growth journey?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-exvia-black text-white font-medium rounded-lg hover:bg-exvia-black/90 transition-colors"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
