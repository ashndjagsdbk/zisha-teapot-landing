import { useEffect, useRef } from "react";

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

export default function useScrollMotion(mode = "section") {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      node.style.setProperty("--scroll-progress", "0");
      return undefined;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const raw =
        mode === "hero"
          ? -rect.top / Math.max(rect.height, 1)
          : (viewportHeight - rect.top) / (viewportHeight + Math.max(rect.height, 1));

      node.style.setProperty("--scroll-progress", clamp(raw).toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [mode]);

  return ref;
}
