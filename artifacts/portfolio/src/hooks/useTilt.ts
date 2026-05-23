import { useRef, useCallback } from "react";

export function useTilt(maxDeg = 8) {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateX = -y * maxDeg;
      const rotateY = x * maxDeg;
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      el.style.transition = "transform 0.1s ease-out";
    },
    [maxDeg]
  );

  const onMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
      ref.current.style.transition =
        "transform 0.6s cubic-bezier(0.23,1,0.32,1)";
    }
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
