import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  className?: string;
  amount?: number;
}

/** Fade-up reveal on scroll. */
export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  y = 32,
  once = true,
  className,
  amount = 0.25,
}: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.165, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  once?: boolean;
}

/** Word-by-word masked text reveal — the cinematic headline treatment. */
export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  as: Tag = 'span',
  once = true,
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(' ');

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const child: Variants = {
    hidden: { y: '110%' },
    visible: {
      y: '0%',
      transition: { duration: 0.75, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn('inline-block', className)}>
      <motion.span
        className="inline"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
        aria-label={text}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <motion.span className="inline-block will-change-transform" variants={child} aria-hidden="true">
              {word}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
