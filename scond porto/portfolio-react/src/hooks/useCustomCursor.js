import { useEffect, useRef } from 'react';

/**
 * Custom cursor hook — tracks mouse, adds hover/text cursor states.
 * Disabled on touch devices.
 */
export default function useCustomCursor() {
  const outerRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouchDevice) return;

    const outer = outerRef.current;
    const dot = dotRef.current;
    if (!outer || !dot) return;

    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;
    let cursorNeedsUpdate = false;

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
      cursorNeedsUpdate = true;
    }

    function animateCursor() {
      if (cursorNeedsUpdate) {
        outerX += (mouseX - outerX) * 0.12;
        outerY += (mouseY - outerY) * 0.12;
        outer.style.transform = `translate(calc(${outerX}px - 50%), calc(${outerY}px - 50%))`;
        if (Math.abs(mouseX - outerX) < 0.4 && Math.abs(mouseY - outerY) < 0.4) {
          cursorNeedsUpdate = false;
        }
      }
      requestAnimationFrame(animateCursor);
    }

    function onMouseOver(e) {
      const isInteractive = !!e.target.closest('a, button, .video-card, .design-card');
      const isText = !!e.target.closest('p, h1, h2, h3') && !isInteractive;
      document.body.classList.toggle('cursor-hover', isInteractive);
      document.body.classList.toggle('cursor-text', isText);
    }

    function onMouseLeave() {
      outer.style.opacity = '0';
      dot.style.opacity = '0';
    }

    function onMouseEnter() {
      outer.style.opacity = '1';
      dot.style.opacity = '1';
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return { outerRef, dotRef };
}
