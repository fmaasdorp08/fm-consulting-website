import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { AnimatedButton } from './AnimatedButton';
import { navigationConfig } from '@/config';

export function Navigation() {
  if (!navigationConfig.logo && navigationConfig.links.length === 0) return null;

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

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
        <div className="w-full px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {navigationConfig.logo && (
              <Link to="/" className="flex items-center">
                <span className={cn(
                  "text-2xl font-semibold tracking-tight transition-colors duration-500",
                  useLightText ? "text-white" : "text-exvia-black"
                )}>
                  {navigationConfig.logo}
                </span>
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
                <Link to={navigationConfig.contactHref || "/contact"}>
                  <AnimatedButton
                    variant={useLightText ? "outline-white" : "primary"}
                    size="md"
                  >
                    {navigationConfig.contactLabel}
                  </AnimatedButton>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            {navigationConfig.links.length > 0 && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
                aria-label="Toggle menu"
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
                className={cn(
                  'text-3xl font-semibold text-exvia-black transition-all duration-500 ease-out-quart',
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
              <Link to={navigationConfig.contactHref || "/contact"}>
                <AnimatedButton
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
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
