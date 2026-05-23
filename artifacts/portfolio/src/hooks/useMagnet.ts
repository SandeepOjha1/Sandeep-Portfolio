import { useRef, useCallback } from "react";

export function useMagnet(strength = 0.35) {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      el.style.transition = "transform 0.15s ease-out";
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
      ref.current.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)";
    }
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
