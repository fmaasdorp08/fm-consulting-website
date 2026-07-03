import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;      // wrapper (controls aspect/size)
  imgClassName?: string;
  intensity?: number;      // 0–1, how much the image drifts
}

/**
 * Scroll-scrubbed parallax image. The image is scaled up slightly and
 * translated against scroll direction for depth.
 */
export function ParallaxImage({ src, alt, className, imgClassName, intensity = 0.12 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity * 100}%`, `${intensity * 100}%`]);

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={reduced ? undefined : { y, scale: 1 + intensity * 2 }}
        className={cn('w-full h-full object-cover will-change-transform', imgClassName)}
      />
    </div>
  );
}
