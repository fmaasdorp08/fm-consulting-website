import { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { heroConfig } from '@/config';
import { AnimatedButton } from '@/components/AnimatedButton';
import { Magnetic } from '@/components/motion/Magnetic';

const boxSize = 450;
const halfBox = boxSize / 2;

export function Hero() {
  if (!heroConfig.name && heroConfig.roles.length === 0) return null;

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Use CSS custom properties for GPU-accelerated transforms
    section.style.setProperty('--mouse-x', `${x - halfBox}px`);
    section.style.setProperty('--mouse-y', `${y - halfBox}px`);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-neutral-900"
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': 'calc(42vw - 200px)', '--mouse-y': 'calc(28vh - 200px)' } as React.CSSProperties}
    >
      {/* Background Image with Blur */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-[1800ms]',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <img
          src={heroConfig.backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(15px) brightness(0.55)' }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Sharp Image Container - uses CSS variables for position */}
      <div
        className={cn(
          'hero-lens-drift absolute top-0 left-0 overflow-hidden pointer-events-none z-20',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: boxSize,
          height: boxSize,
          transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
          willChange: 'transform',
        }}
      >
        {/* Sharp image fills the entire section, offset to align with background */}
        <div
          className="absolute inset-0"
          style={{
            transform: 'translate3d(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1), 0)',
            width: '100vw',
            height: '100vh',
            willChange: 'transform',
          }}
        >
          <img
            src={heroConfig.backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.85)' }}
          />
        </div>
      </div>

      {/* Square border frame */}
      <div
        className={cn(
          'hero-lens-drift absolute top-0 left-0 pointer-events-none z-20',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: boxSize,
          height: boxSize,
          border: '1px solid rgba(255,255,255,0.4)',
          transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
          willChange: 'transform',
        }}
      >
        {/* Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-px bg-white/60" />
          <div className="absolute w-px h-4 bg-white/60" />
        </div>
      </div>

      {/* Role labels on sides */}
      {heroConfig.roles[0] && (
        <div
          className={cn(
            'hidden md:block absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 z-30 transition-all duration-[1200ms] ease-out-quart',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '800ms' }}
        >
          <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/70 [writing-mode:vertical-rl]">
            {heroConfig.roles[0]}
          </span>
        </div>
      )}
      {heroConfig.roles[1] && (
        <div
          className={cn(
            'hidden md:block absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-30 transition-all duration-[1200ms] ease-out-quart',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '900ms' }}
        >
          <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/70 [writing-mode:vertical-rl]">
            {heroConfig.roles[1]}
          </span>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-30 flex flex-col items-center justify-end min-h-screen px-6 lg:px-12 pb-10 md:pb-14">
        {/* Headline + subheadline */}
        {heroConfig.headline && (
          <div
            className={cn(
              'max-w-3xl text-center transition-all duration-[1200ms] ease-out-quart mb-8',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: '1000ms' }}
          >
            <p className="text-lg md:text-xl text-white/90 leading-snug font-medium">
              {heroConfig.headline}
            </p>
            {heroConfig.subheadline && (
              <p className="mt-4 text-sm md:text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
                {heroConfig.subheadline}
              </p>
            )}
          </div>
        )}

        {/* CTAs */}
        {(heroConfig.primaryCta || heroConfig.secondaryCta) && (
          <div
            className={cn(
              'flex flex-col sm:flex-row items-center gap-4 mb-12 transition-all duration-[1200ms] ease-out-quart',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: '1150ms' }}
          >
            {heroConfig.primaryCta && (
              <Magnetic>
                <Link to="/contact">
                  <AnimatedButton variant="outline-white" size="lg" showIcon>
                    {heroConfig.primaryCta}
                  </AnimatedButton>
                </Link>
              </Magnetic>
            )}
            {heroConfig.secondaryCta && (
              <Magnetic>
                <Link
                  to="/services"
                  className="text-sm font-geist-mono uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 border-b border-white/30 hover:border-white pb-1"
                >
                  {heroConfig.secondaryCta}
                </Link>
              </Magnetic>
            )}
          </div>
        )}

        {/* Main Heading - large and impactful */}
        <div
          className={cn(
            'text-center transition-all duration-[1200ms] ease-out-quart',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          <h1 className="text-[clamp(3rem,12vw,12rem)] font-black text-white tracking-[-0.04em] leading-[0.85]">
            {heroConfig.name}
          </h1>
        </div>

        {/* Scroll cue */}
        <div
          className={cn(
            'absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-1000 hidden md:block',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '1600ms' }}
        >
          <div className="w-px h-8 bg-white/40 animate-scroll-cue" />
        </div>
      </div>
    </section>
  );
}
