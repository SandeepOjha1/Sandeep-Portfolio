import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Fintech Dashboard",
    description: "A dark-mode analytics dashboard for real-time cryptocurrency tracking. Built with React, Recharts, and WebSockets for live price feeds and portfolio visualization.",
    image: "/project1.png",
    tags: ["React", "TypeScript", "Tailwind", "WebSockets"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "#22d3ee"
  },
  {
    title: "E-Commerce Platform",
    description: "High-performance headless e-commerce front-end with an immersive dark aesthetic, seamless cart interactions, and Stripe-powered checkout built on Next.js.",
    image: "/project2.png",
    tags: ["Next.js", "Zustand", "Stripe", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "#a78bfa"
  },
  {
    title: "Data Visualization Tool",
    description: "Interactive node-based data visualization platform for analyzing complex datasets with WebGL rendering. Supports drag-and-drop pipeline building.",
    image: "/project3.png",
    tags: ["React", "Three.js", "D3", "Node.js"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "#34d399"
  },
  {
    title: "AI Chat Interface",
    description: "Futuristic conversational UI for interacting with large language models. Features streaming responses, markdown rendering, and persistent conversation history.",
    image: "/project4.png",
    tags: ["TypeScript", "OpenAI", "Tailwind", "Radix UI"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "#fb923c"
  }
];

function FlipCard({ project, idx }: { project: typeof PROJECTS[0]; idx: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="relative h-80"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Card wrapper with 3D flip */}
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/5"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Image */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>

          {/* Front content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-black mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: `${project.accent}20`,
                    border: `1px solid ${project.accent}40`,
                    color: project.accent,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hover hint */}
          <div className="absolute top-4 right-4 text-xs font-mono text-white/40 bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm">
            hover to flip
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl border flex flex-col justify-between p-7"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "hsl(222 47% 6%)",
            borderColor: `${project.accent}33`,
            boxShadow: `0 0 30px ${project.accent}22, inset 0 0 40px ${project.accent}08`,
          }}
        >
          {/* Accent bar */}
          <div
            className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
            style={{ backgroundColor: project.accent }}
          />

          <div>
            <h3
              className="text-xl font-black mb-4"
              style={{ color: project.accent }}
            >
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-full"
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

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-bold transition-colors"
                style={{ color: project.accent }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={15} />
                LIVE DEMO
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={15} />
                SOURCE
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-card/30 border-y border-white/5">
      <div className="container px-4 md:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">SELECTED WORKS</h2>
            <div className="w-20 h-1 bg-primary" />
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            Hover over a card to reveal full project details, tech stack, and links.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <FlipCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
