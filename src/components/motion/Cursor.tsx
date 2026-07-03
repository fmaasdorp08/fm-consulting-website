import { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor: a small dot that locks to the pointer plus a trailing ring.
 * The ring expands over interactive elements (a, button, [data-cursor]).
 * Desktop / fine-pointer only. Respects prefers-reduced-motion.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || prefersReduced) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf: number;
    let isHovering = false;
    let isDown = false;
    let visible = false;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const render = () => {
      ringX = lerp(ringX, mouseX, 0.18);
      ringY = lerp(ringY, mouseY, 0.18);
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      const scale = isDown ? 0.75 : isHovering ? 2.2 : 1;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      raf = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        ringX = mouseX;
        ringY = mouseY;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering = !!target.closest('a, button, [data-cursor], input, textarea, select, [role="button"]');
    };

    const onDown = () => { isDown = true; };
    const onUp = () => { isDown = false; };
    const onLeave = () => {
      visible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!enabled) {
    return (
      <>
        <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
        <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      </>
    );
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
