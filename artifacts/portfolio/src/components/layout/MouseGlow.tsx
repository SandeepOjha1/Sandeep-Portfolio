import { useEffect, useRef } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -300, y: -300 });
  const trail = useRef({ x: -300, y: -300 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      // Smoothly lag the trail behind the real cursor
      trail.current.x += (pos.current.x - trail.current.x) * 0.08;
      trail.current.y += (pos.current.y - trail.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trail.current.x}px, ${trail.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Large ambient glow — slow, big */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          width: 500,
          height: 500,
          marginLeft: -250,
          marginTop: -250,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(191 97% 65% / 0.07) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      {/* Small sharp ring — snappy, precise */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          width: 28,
          height: 28,
          marginLeft: -14,
          marginTop: -14,
          borderRadius: "50%",
          border: "1.5px solid hsl(191 97% 65% / 0.6)",
          background: "hsl(191 97% 65% / 0.08)",
          backdropFilter: "blur(1px)",
          willChange: "transform",
          boxShadow: "0 0 10px hsl(191 97% 65% / 0.3)",
        }}
      />
    </>
  );
}
