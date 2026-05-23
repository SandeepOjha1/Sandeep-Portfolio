import { motion } from "framer-motion";
import { Terminal, Code2, Cpu } from "lucide-react";

const STATS = [
  { value: "3", label: "Projects Built", color: "#22d3ee" },
  { value: "1", label: "Happy Client", color: "#a78bfa" },
  { value: "Fresher", label: "Experience", color: "#34d399" },
];

export function About() {
  return (
    <section id="about" className="py-32 relative bg-card/30 border-y border-white/5 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <div className="flex-1 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">About me</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                BEYOND<br />THE CODE
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-6 font-light leading-relaxed"
            >
              I'm <span className="text-foreground font-semibold">Sandeep Ojha</span>, a Full Stack Developer passionate about building elegant, high-performance digital experiences. Currently pursuing my BCA at Amity University Gwalior.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground font-light leading-relaxed mb-10"
            >
              I believe software should feel alive. Every project I build is dedicated to pushing the boundaries of what's possible on the web today.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              {STATS.map(({ value, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="glass-panel rounded-2xl px-6 py-4 border border-white/5 text-center min-w-[100px]"
                >
                  <div className="text-2xl font-black" style={{ color }}>{value}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              {
                icon: <Terminal size={32} />,
                title: "Frontend",
                desc: "Crafting pixel-perfect, accessible, and kinetic UIs with React, TypeScript, Framer Motion, and Tailwind CSS.",
                color: "#22d3ee",
              },
              {
                icon: <Cpu size={32} />,
                title: "Backend",
                desc: "Building robust, scalable APIs with Node.js, Express, MongoDB, and MySQL.",
                color: "#a78bfa",
              },
              {
                icon: <Code2 size={32} />,
                title: "Full Stack",
                desc: "Designing end-to-end solutions — from database schema to polished UI — with clean, maintainable code.",
                color: "#34d399",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-8 rounded-2xl glass-panel border-white/5 hover:border-primary/30 transition-colors group ${i === 2 ? "md:col-span-2" : ""}`}
              >
                <div
                  className="mb-6 group-hover:scale-110 transition-transform origin-left"
                  style={{ color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
