import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Route transition: content fades/slides in while a full-screen panel
 * sweeps up and out of view.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.35, ease: [0.215, 0.61, 0.355, 1] } }}
        exit={{ opacity: 0, y: -16, transition: { duration: 0.3, ease: [0.455, 0.03, 0.515, 0.955] } }}
      >
        {children}
      </motion.div>

      {/* Sweeping panel */}
      <motion.div
        className="fixed inset-0 z-[9990] bg-exvia-black pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] } }}
        exit={{ scaleY: 0 }}
        style={{ transformOrigin: 'top' }}
      />
    </>
  );
}
