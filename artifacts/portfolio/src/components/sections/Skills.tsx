import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#22d3ee",
    orbitRadius: 160,
    angle: 270,
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    description: "Crafting pixel-perfect, animated interfaces"
  },
  {
    id: "backend",
    label: "Backend",
    color: "#a78bfa",
    orbitRadius: 160,
    angle: 342,
    skills: ["Node.js", "Express.js", "Python"],
    description: "Scalable server-side architectures & APIs"
  },
  {
    id: "database",
    label: "Database",
    color: "#34d399",
    orbitRadius: 160,
    angle: 54,
    skills: ["MySQL"],
    description: "Relational data modeling & queries"
  },
  {
    id: "languages",
    label: "Languages",
    color: "#fb923c",
    orbitRadius: 160,
    angle: 126,
    skills: ["JavaScript", "Python", "C", "Java"],
    description: "Multi-paradigm programming expertise"
  },
  {
    id: "tools",
    label: "AI & Tools",
    color: "#f472b6",
    orbitRadius: 160,
    angle: 198,
    skills: ["Git", "GitHub", "VS Code"],
    description: "Developer tools & version control workflows"
  }
];

function usePlanetPosition(
  orbitRadius: number,
  startAngle: number,
  speed: number,
  paused: boolean
) {
  const [angle, setAngle] = useState(startAngle);
  const rafRef = useRef<number>(0);
  const lastRef = useRef<number>(0);
  const angleRef = useRef(startAngle);

  useEffect(() => {
    if (paused) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = (now: number) => {
      const delta = now - (lastRef.current || now);
      lastRef.current = now;
      angleRef.current = (angleRef.current + speed * delta * 0.001) % 360;
      setAngle(angleRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, speed]);

  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * orbitRadius,
    y: Math.sin(rad) * orbitRadius,
  };
}

function Planet({
  category,
  speed,
  isSelected,
  paused,
  onClick,
  size,
}: {
  category: typeof CATEGORIES[0];
  speed: number;
  isSelected: boolean;
  paused: boolean;
  onClick: () => void;
  size: number;
}) {
  const { x, y } = usePlanetPosition(
    category.orbitRadius * (size / 350),
    category.angle,
    speed,
    paused
  );

  return (
    <motion.button
      onClick={onClick}
      style={{ left: size / 2 + x - 28, top: size / 2 + y - 28 }}
      className="absolute w-14 h-14 rounded-full flex flex-col items-center justify-center cursor-pointer group z-10 focus:outline-none"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      animate={isSelected ? { scale: 1.25 } : { scale: 1 }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        style={{
          backgroundColor: isSelected
            ? category.color
            : `${category.color}22`,
          border: `2px solid ${category.color}`,
          boxShadow: isSelected
            ? `0 0 20px ${category.color}88, 0 0 40px ${category.color}44`
            : `0 0 10px ${category.color}44`,
        }}
      >
        <span
          className="text-[9px] font-mono font-bold text-center leading-tight px-1"
          style={{ color: isSelected ? "#000" : category.color }}
        >
          {category.label.toUpperCase()}
        </span>
      </div>
    </motion.button>
  );
}

export function Skills() {
  const [selected, setSelected] = useState<string | null>(null);
  const [containerSize, setContainerSize] = useState(350);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setContainerSize(Math.max(280, Math.min(w, 460)));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const selectedCat = CATEGORIES.find((c) => c.id === selected);

  const handleClick = (id: string) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">TECH ARSENAL</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">
            Click a planet to explore the skill set
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mt-10">
          {/* Solar System */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex-shrink-0"
            style={{ width: containerSize, height: containerSize }}
          >
            {/* Orbit rings */}
            <div
              className="absolute rounded-full border border-white/5"
              style={{
                width: (containerSize * 0.92),
                height: (containerSize * 0.92),
                left: (containerSize * 0.04),
                top: (containerSize * 0.04),
              }}
            />

            {/* Sun / Center */}
            <div
              className="absolute rounded-full flex items-center justify-center z-20"
              style={{
                width: 80,
                height: 80,
                left: containerSize / 2 - 40,
                top: containerSize / 2 - 40,
                background:
                  "radial-gradient(circle, hsl(191 97% 75%) 0%, hsl(191 97% 45%) 60%, hsl(191 97% 25%) 100%)",
                boxShadow:
                  "0 0 30px hsl(191 97% 65% / 0.8), 0 0 60px hsl(191 97% 65% / 0.4), 0 0 100px hsl(191 97% 65% / 0.2)",
              }}
            >
              <span className="font-mono text-[10px] font-black text-background text-center leading-tight">
                TECH
              </span>
            </div>

            {/* Planets */}
            {CATEGORIES.map((cat, i) => (
              <Planet
                key={cat.id}
                category={cat}
                speed={7 + i * 1.5}
                isSelected={selected === cat.id}
                paused={selected !== null}
                onClick={() => handleClick(cat.id)}
                size={containerSize}
              />
            ))}
          </motion.div>

          {/* Skills Panel */}
          <div className="flex-1 w-full max-w-md min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {selectedCat ? (
                <motion.div
                  key={selectedCat.id}
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div
                    className="rounded-3xl p-8 border glass-panel"
                    style={{ borderColor: `${selectedCat.color}33` }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: `${selectedCat.color}22`,
                          border: `2px solid ${selectedCat.color}`,
                          boxShadow: `0 0 16px ${selectedCat.color}55`,
                        }}
                      >
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: selectedCat.color }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-black tracking-tight"
                          style={{ color: selectedCat.color }}
                        >
                          {selectedCat.label.toUpperCase()}
                        </h3>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">
                          {selectedCat.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {selectedCat.skills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="px-5 py-3 rounded-xl font-mono font-bold text-sm"
                          style={{
                            backgroundColor: `${selectedCat.color}18`,
                            border: `1.5px solid ${selectedCat.color}44`,
                            color: selectedCat.color,
                          }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelected(null)}
                      className="mt-6 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                    >
                      Deselect planet
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-muted-foreground"
                >
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <div className="w-8 h-8 rounded-full border border-white/20" />
                  </div>
                  <p className="text-sm font-mono">Select a planet to explore its skills</p>
                  <p className="text-xs mt-1 text-muted-foreground/60">5 technology domains</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
