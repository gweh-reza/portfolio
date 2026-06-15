import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-reveal animation using IntersectionObserver.
 * Elements with class 'reveal' get 'visible' class when entering viewport.
 * @param {object} options - IntersectionObserver options
 */
export default function useScrollReveal(options = {}) {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, stop observing static elements
          if (!entry.target.closest('#video-grid') && !entry.target.closest('#design-grid')) {
            observerRef.current.unobserve(entry.target);
          }
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 0px 0px',
      ...options,
    });

    // Observe all .reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Return observer so components can manually observe new elements
  return observerRef;
}
