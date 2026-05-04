import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Fintech Dashboard",
    description: "A dark-mode analytics dashboard for real-time cryptocurrency tracking. Built with React, Recharts, and WebSockets.",
    image: "/project1.png",
    tags: ["React", "TypeScript", "Tailwind", "WebSockets"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "E-Commerce Platform",
    description: "High-performance headless e-commerce front-end with an immersive dark aesthetic, featuring seamless cart interactions.",
    image: "/project2.png",
    tags: ["Next.js", "Zustand", "Stripe", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Data Visualization Tool",
    description: "Interactive node-based data visualization platform for analyzing complex datasets with WebGL rendering.",
    image: "/project3.png",
    tags: ["React", "Three.js", "D3", "Node.js"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "AI Chat Interface",
    description: "Futuristic conversational UI for interacting with large language models, featuring streaming responses and markdown support.",
    image: "/project4.png",
    tags: ["TypeScript", "OpenAI", "Tailwind", "Radix UI"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

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
            A curated selection of projects demonstrating technical complexity, 
            design precision, and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/30 transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> LIVE DEMO
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} /> SOURCE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
