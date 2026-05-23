import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useMagnet } from "@/hooks/useMagnet";

const PROJECTS = [
  {
    title: "Vanguard CRM",
    description: "A full-stack CRM platform for managing client relationships, leads, and sales pipelines. Features a dark-mode dashboard, real-time data updates, authentication, and a clean intuitive interface built for modern businesses.",
    image: "/project1.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/SandeepOjha1/Vanguard-CRM",
    demo: "https://client-flow-manager--sandeepojha651.replit.app/",
    accent: "#22d3ee",
  },
  {
    title: "La-Maison-Dorée",
    description: "An elegant asset management web application with a luxurious UI/UX design. Allows users to track, organize, and manage their digital and physical assets with a premium dark aesthetic and smooth interactions.",
    image: "/project2.png",
    tags: ["React", "TypeScript", "Tailwind", "Node.js"],
    github: "https://github.com/SandeepOjha1/La-Maison-Dor-e",
    demo: "https://asset-manager--sandeepojha040.replit.app/",
    accent: "#a78bfa",
  },
];

function FlipCard({ project, idx }: { project: typeof PROJECTS[0]; idx: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-96"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/5"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: flipped ? "scale(1)" : "scale(1.05)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at bottom left, ${project.accent}33, transparent 60%)`,
              }}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-7">
            <h3 className="text-2xl font-black mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${project.accent}20`,
                    border: `1px solid ${project.accent}50`,
                    color: project.accent,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute top-4 right-4 text-xs font-mono text-white/40 bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm">
            hover to flip
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl border flex flex-col justify-between p-8"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "hsl(222 47% 5%)",
            borderColor: `${project.accent}44`,
            boxShadow: `0 0 40px ${project.accent}22, inset 0 0 60px ${project.accent}08`,
          }}
        >
          <div
            className="absolute top-0 left-8 right-8 h-px rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
            }}
          />
          <div
            className="absolute bottom-0 left-8 right-8 h-px rounded-full opacity-50"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
            }}
          />

          <div>
            <h3 className="text-2xl font-black mb-4" style={{ color: project.accent }}>
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${project.accent}15`,
                    border: `1px solid ${project.accent}30`,
                    color: project.accent,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <LinkRow project={project} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LinkRow({ project }: { project: typeof PROJECTS[0] }) {
  const demoMagnet = useMagnet(0.4);
  const srcMagnet = useMagnet(0.4);
  return (
    <div className="flex items-center gap-6 pt-4 border-t border-white/5">
      <a
        ref={demoMagnet.ref as React.RefObject<HTMLAnchorElement>}
        onMouseMove={demoMagnet.onMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        onMouseLeave={demoMagnet.onMouseLeave}
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 text-sm font-bold transition-all"
        style={{ color: project.accent }}
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink size={15} />
        LIVE DEMO
      </a>
      <a
        ref={srcMagnet.ref as React.RefObject<HTMLAnchorElement>}
        onMouseMove={srcMagnet.onMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        onMouseLeave={srcMagnet.onMouseLeave}
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <Github size={15} />
        SOURCE
      </a>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">SELECTED WORKS</h2>
            <div className="w-20 h-1 bg-primary" />
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            Hover over a card to reveal the full project details, tech stack, and links.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <FlipCard key={project.title} project={project} idx={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mt-20"
        >
          {[
            { value: "2", label: "Projects Built", color: "#22d3ee" },
            { value: "1", label: "Happy Client", color: "#a78bfa" },
            { value: "Fresher", label: "Experience Level", color: "#34d399" },
          ].map(({ value, label, color }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1, y: -4 }}
              className="text-center cursor-default"
            >
              <div className="text-4xl font-black" style={{ color }}>{value}</div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
