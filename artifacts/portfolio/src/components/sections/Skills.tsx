import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiNodedotjs, SiPostgresql, 
  SiTailwindcss, SiNextdotjs, SiDocker, SiGraphql,
  SiPython, SiFigma, SiKubernetes, SiMongodb
} from "react-icons/si";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: 95 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 90 },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 85 },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: 98 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 90 },
      { name: "Python", icon: SiPython, color: "#3776AB", level: 80 },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: 85 },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 75 },
    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 85 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 80 },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", level: 70 },
      { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 85 }, // Put design here for layout balance
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container px-4 md:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">TECH ARSENAL</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools I use to bring ideas to life. Specialized in the modern JavaScript ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/5"
            >
              <h3 className="font-mono text-xl font-bold text-primary mb-8 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-6">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Icon className="text-xl transition-colors" style={{ color: skill.color }} />
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
