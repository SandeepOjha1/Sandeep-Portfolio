import { motion } from "framer-motion";
import { Terminal, Code2, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 relative bg-card/30 border-y border-white/5">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="flex-1 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
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
              I am a Full Stack Developer with a relentless focus on creating elegant, highly-performant digital interfaces. My work bridges the gap between complex engineering problems and flawless user experiences.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground font-light leading-relaxed"
            >
              I believe that software should not just function; it should feel alive. Every line of code I write is dedicated to pushing the boundaries of what is possible on the web today.
            </motion.p>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              {
                icon: <Terminal size={32} />,
                title: "Frontend",
                desc: "Crafting pixel-perfect, accessible, and kinetic UIs with React, Framer Motion, and Tailwind CSS."
              },
              {
                icon: <Cpu size={32} />,
                title: "Backend",
                desc: "Architecting robust, scalable, and secure APIs with Node.js, Express, and PostgreSQL."
              },
              {
                icon: <Code2 size={32} />,
                title: "Architecture",
                desc: "Designing system architectures that are built for resilience, scale, and maintainability."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-2xl glass-panel border-white/5 hover:border-primary/30 transition-colors group ${i === 2 ? 'md:col-span-2' : ''}`}
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform origin-left">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
