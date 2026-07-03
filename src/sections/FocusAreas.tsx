import { focusAreasConfig } from '@/config';
import { Marquee } from '@/components/motion/Marquee';
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
  if (focusAreasConfig.areas.length === 0) return null;

  return (
    <section className="w-full py-10 lg:py-14 bg-exvia-black text-white overflow-hidden">
      <Marquee speed={35}>
        {focusAreasConfig.areas.map((area) => {
          const Icon = iconMap[area.iconName] || TrendingUp;
          return (
            <div key={area.title} className="flex items-center gap-4 px-8 lg:px-12 shrink-0">
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg shrink-0">
                <Icon className="w-4 h-4 text-white/80" />
              </div>
              <span className="text-sm lg:text-base font-medium text-white/90 whitespace-nowrap">
                {area.title}
              </span>
              <span className="text-white/20 text-2xl pl-6 lg:pl-10" aria-hidden="true">·</span>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}
