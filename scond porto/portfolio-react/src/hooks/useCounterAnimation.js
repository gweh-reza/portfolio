import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for animating a counter from `from` to `to`.
 * Uses IntersectionObserver to trigger animation when element is visible.
 * @param {number} from - Start value
 * @param {number} to - End value
 * @param {number} duration - Animation duration in ms
 */
export default function useCounterAnimation(from = 0, to = 1.6, duration = 2200) {
  const elRef = useRef(null);
  const startedRef = useRef(false);

  const animate = useCallback(() => {
    const el = elRef.current;
    if (!el || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = from + (to - from) * eased;
      el.textContent = value.toFixed(1);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = to.toFixed(1);
    }
    requestAnimationFrame(update);
  }, [from, to, duration]);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const parent = el.closest('.milestone-card') || el;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !startedRef.current) {
          animate();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(parent);
    return () => observer.disconnect();
  }, [animate]);

  return elRef;
}
