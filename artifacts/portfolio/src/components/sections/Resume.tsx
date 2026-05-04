import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const EXPERIENCE = [
  {
    role: "Senior Full Stack Developer",
    company: "TechForge Labs",
    period: "2022 — Present",
    desc: "Lead developer on a distributed platform serving 500K+ users. Architected microservices migration from a monolith, reducing latency by 60%. Mentored a team of 4 engineers.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    role: "Full Stack Developer",
    company: "NovaSphere Digital",
    period: "2020 — 2022",
    desc: "Built and maintained 3 client-facing SaaS products from scratch. Introduced CI/CD pipelines and testing frameworks that reduced production bugs by 45%.",
    tags: ["React", "TypeScript", "Express", "MongoDB"],
  },
  {
    role: "Frontend Developer",
    company: "Pixel & Wire Studio",
    period: "2018 — 2020",
    desc: "Developed interactive, animated marketing sites and web apps for clients across fintech, healthcare, and e-commerce. Specialized in performance optimization and accessibility.",
    tags: ["React", "GSAP", "Tailwind CSS", "Figma"],
  },
];

const EDUCATION = [
  {
    degree: "B.S. Computer Science",
    institution: "University of California, Berkeley",
    period: "2014 — 2018",
    desc: "Focus on algorithms, distributed systems, and human-computer interaction. Dean's List, 3.9 GPA.",
  },
  {
    degree: "Full-Stack Web Development",
    institution: "Hack Reactor (Advanced Program)",
    period: "2018",
    desc: "Intensive 3-month engineering bootcamp. Built 6 full-stack projects in JavaScript/Node.js ecosystem.",
  },
];

function TimelineItem({
  icon: Icon,
  title,
  sub,
  period,
  desc,
  tags,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  sub: string;
  period: string;
  desc: string;
  tags?: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-12 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-4 top-6 bottom-0 w-px bg-white/10 last:hidden" />
      {/* Dot */}
      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
        <Icon size={14} />
      </div>

      <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-colors group">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div>
            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-muted-foreground text-sm font-medium">{sub}</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground whitespace-nowrap">
            <Calendar size={12} />
            {period}
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-xs font-mono px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Resume() {
  return (
    <section id="resume" className="py-32 relative bg-card/30 border-y border-white/5">
      <div className="container px-4 md:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">EXPERIENCE</h2>
            <div className="w-20 h-1 bg-primary" />
          </div>
          <Button
            variant="outline"
            className="border-primary/20 hover:border-primary hover:bg-primary/10 font-mono gap-2 self-start md:self-auto"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <Download size={16} />
            DOWNLOAD CV
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8"
            >
              <Briefcase size={14} className="text-primary" />
              Work Experience
            </motion.h3>
            {EXPERIENCE.map((item, i) => (
              <TimelineItem
                key={item.role}
                icon={Briefcase}
                title={item.role}
                sub={item.company}
                period={item.period}
                desc={item.desc}
                tags={item.tags}
                delay={i * 0.1}
              />
            ))}
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8"
            >
              <GraduationCap size={14} className="text-primary" />
              Education
            </motion.h3>
            {EDUCATION.map((item, i) => (
              <TimelineItem
                key={item.degree}
                icon={GraduationCap}
                title={item.degree}
                sub={item.institution}
                period={item.period}
                desc={item.desc}
                delay={i * 0.1}
              />
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { value: "6+", label: "Years Exp." },
                { value: "40+", label: "Projects" },
                { value: "15+", label: "Clients" },
              ].map(({ value, label }) => (
                <div key={label} className="glass-panel rounded-2xl p-5 border border-white/5 text-center">
                  <div className="text-3xl font-black text-primary">{value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-mono">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
