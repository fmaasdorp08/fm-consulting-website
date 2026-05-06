import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { focusAreasConfig } from '@/config';
import { TrendingUp, Target, BarChart3, RefreshCw, ArrowUpRight, Settings } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  "TrendingUp": TrendingUp,
  "Target": Target,
  "BarChart3": BarChart3,
  "RefreshCw": RefreshCw,
  "ArrowUpRight": ArrowUpRight,
  "Settings": Settings,
};

export function FocusAreas() {
  const { ref: sectionRef } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef, visibleItems } = useStaggerAnimation(focusAreasConfig.areas.length, 80);

  if (focusAreasConfig.areas.length === 0) return null;

  return (
    <section 
      ref={sectionRef}
      className="w-full py-12 lg:py-16 bg-exvia-black text-white"
    >
      <div className="container-large px-6 lg:px-12">
        <div 
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8"
        >
          {focusAreasConfig.areas.map((area, index) => {
            const Icon = iconMap[area.iconName] || TrendingUp;
            return (
              <div
                key={area.title}
                className={cn(
                  'flex flex-col items-center text-center transition-all duration-700 ease-out-quart',
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-lg mb-3">
                  <Icon className="w-5 h-5 text-white/80" />
                </div>
                <span className="text-sm font-medium text-white/90">{area.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
