import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // seconds per loop
  className?: string;
  pauseOnHover?: boolean;
}

/** Infinite horizontal marquee. Content is duplicated for a seamless loop. */
export function Marquee({ children, speed = 30, className, pauseOnHover = true }: MarqueeProps) {
  return (
    <div className={cn('marquee-container overflow-hidden', className)}>
      <div
        className={cn('marquee-track flex w-max', pauseOnHover && 'marquee-pausable')}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
