import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Intern Developer",
    company: "Future Interns",
    period: "April 2024 — May 2024",
    desc: "Gained hands-on experience building real-world web applications, contributing to frontend and backend features. Collaborated with the team on project development, debugging, and shipping features to production.",
    tags: ["React", "Node.js", "JavaScript", "HTML", "CSS"],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Amity University Gwalior",
    period: "2023 — 2026",
    location: "Madhya Pradesh, India",
    desc: "Pursuing a BCA degree with a strong focus on software development, web technologies, data structures, algorithms, and database management.",
  },
];

function TimelineItem({
  icon: Icon,
  title,
  sub,
  period,
  location,
  desc,
  tags,
  delay,
  accent = "#22d3ee",
}: {
  icon: React.ElementType;
  title: string;
  sub: string;
  period: string;
  location?: string;
  desc: string;
  tags?: string[];
  delay: number;
  accent?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12 pb-10 last:pb-0"
    >
      <div className="absolute left-4 top-6 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent last:hidden" />
      <div
        className="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: `${accent}18`,
          border: `1.5px solid ${accent}60`,
          color: accent,
        }}
      >
        <Icon size={14} />
      </div>

      <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-colors group">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-muted-foreground text-sm font-medium mt-0.5">{sub}</p>
            {location && (
              <p className="text-xs text-muted-foreground/70 font-mono mt-1 flex items-center gap-1">
                <MapPin size={10} />
                {location}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground whitespace-nowrap shrink-0">
            <Calendar size={12} />
            {period}
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: `${accent}15`,
                  border: `1px solid ${accent}30`,
                  color: accent,
                }}
              >
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
    <section id="resume" className="py-32 relative bg-card/20 border-y border-white/5">
      {/* bg glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Journey</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">EXPERIENCE</h2>
          <div className="w-20 h-1 bg-primary" />
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
                accent="#22d3ee"
              />
            ))}
          </div>

          {/* Education + Stats */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8"
            >
              <GraduationCap size={14} className="text-violet-400" />
              Education
            </motion.h3>
            {EDUCATION.map((item, i) => (
              <TimelineItem
                key={item.degree}
                icon={GraduationCap}
                title={item.degree}
                sub={item.institution}
                period={item.period}
                location={item.location}
                desc={item.desc}
                delay={i * 0.1}
                accent="#a78bfa"
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
                { value: "Fresher", label: "Experience", color: "#22d3ee" },
                { value: "3", label: "Projects", color: "#a78bfa" },
                { value: "1", label: "Client", color: "#34d399" },
              ].map(({ value, label, color }) => (
                <div
                  key={label}
                  className="glass-panel rounded-2xl p-5 border border-white/5 text-center hover:border-primary/20 transition-colors"
                >
                  <div className="text-2xl font-black" style={{ color }}>{value}</div>
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
