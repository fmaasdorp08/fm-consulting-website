import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { AnimatedButton } from './AnimatedButton';
import { BrandLogo } from './BrandLogo';
import { navigationConfig } from '@/config';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Fade in navbar after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should use dark or light text
  // On homepage, use light text when not scrolled, dark when scrolled
  // On other pages, always use dark text
  const useLightText = isHomePage && !isScrolled;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-circ',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
          isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="w-full px-6 lg:px-12 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {navigationConfig.logo && (
              <Link
                to="/"
                aria-label="FM Consulting home"
                className="flex items-center bg-fm-paper text-fm-ink border border-fm-ink/10 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fm-ink"
              >
                {/* The real lockup — mark and wordmark at fixed 3w spacing.
                    Never rebuild this from an icon plus letterspaced text. */}
                <BrandLogo variant="lockup-compact" className="h-6 sm:h-7" />
              </Link>
            )}

            {/* Desktop Navigation */}
            {navigationConfig.links.length > 0 && (
              <div className="hidden lg:flex items-center gap-10">
                {navigationConfig.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={cn(
                      "text-base transition-colors duration-500 relative group",
                      useLightText 
                        ? "text-white/90 hover:text-white" 
                        : "text-exvia-black/80 hover:text-exvia-black"
                    )}
                  >
                    {link.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                      useLightText ? "bg-white" : "bg-exvia-black"
                    )} />
                  </Link>
                ))}
              </div>
            )}

            {/* Contact Button */}
            {navigationConfig.contactLabel && (
              <div className="hidden lg:block">
                <AnimatedButton
                  to={navigationConfig.contactHref || "/contact"}
                  variant={useLightText ? "outline-white" : "primary"}
                  size="md"
                >
                  {navigationConfig.contactLabel}
                </AnimatedButton>
              </div>
            )}

            {/* Mobile Menu Button */}
            {navigationConfig.links.length > 0 && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-8 h-6 flex flex-col justify-between focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
              >
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-500 ease-out-quad origin-center',
                    useLightText && !isMenuOpen ? 'bg-white' : 'bg-exvia-black',
                    isMenuOpen && 'translate-y-[10px] rotate-[-45deg]'
                  )}
                />
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-300 ease-out-quad',
                    useLightText && !isMenuOpen ? 'bg-white' : 'bg-exvia-black',
                    isMenuOpen && 'scale-0 opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-500 ease-out-quad origin-center',
                    useLightText && !isMenuOpen ? 'bg-white' : 'bg-exvia-black',
                    isMenuOpen && '-translate-y-[10px] rotate-[45deg]'
                  )}
                />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {navigationConfig.links.length > 0 && (
        <div
          id="mobile-navigation"
          className={cn(
            'fixed inset-0 z-40 bg-white transition-all duration-500 ease-out-cubic lg:hidden',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navigationConfig.links.map((link, index) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'text-3xl font-semibold text-exvia-black transition-all duration-500 ease-out-quart focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black',
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
            {navigationConfig.contactLabel && (
              <AnimatedButton
                to={navigationConfig.contactHref || "/contact"}
                onClick={() => setIsMenuOpen(false)}
                variant="primary"
                size="lg"
                className={cn(
                  'mt-4 transition-all duration-500 ease-out-quart',
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
              >
                {navigationConfig.contactLabel}
              </AnimatedButton>
            )}
          </div>
        </div>
      )}
    </>
  );
}
