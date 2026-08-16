import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface CounterProps {
  value: string; // e.g. "200+", "R500M+", "85%", "3.2x", "15+"
  duration?: number;
  className?: string;
}

/**
 * Animated counter that parses a display value like "R500M+" or "85%"
 * and counts the numeric part up when scrolled into view.
 */
export function Counter({ value, duration = 1.6, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduced = useReducedMotion();
  const [animated, setAnimated] = useState({ value, display: value });

  useEffect(() => {
    if (!inView || reduced) return;

    const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
    if (!match) return;

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ''));
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
    const start = performance.now();
    let raf: number;

    const ease = (t: number) => 1 - Math.pow(1 - t, 4);

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const current = target * ease(progress);
      setAnimated({ value, display: `${prefix}${current.toFixed(decimals)}${suffix}` });
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setAnimated({ value, display: value });
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduced]);

  const display = animated.value === value ? animated.display : value;

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
