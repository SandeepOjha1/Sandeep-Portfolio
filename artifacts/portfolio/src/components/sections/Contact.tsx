import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "sandeepojha028@gmail.com",
    href: "mailto:sandeepojha028@gmail.com",
    color: "#22d3ee",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gwalior, Madhya Pradesh, India",
    href: null,
    color: "#a78bfa",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/SandeepOjha1",
    href: "https://github.com/SandeepOjha1",
    color: "#34d399",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sandeep Ojha",
    href: "https://www.linkedin.com/in/sandeep-ojha-185557317",
    color: "#fb923c",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const { mutate: submitContact, isPending } = useSubmitContact({
    mutation: {
      onSuccess: () => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      },
      onError: () => {
        setStatus("error");
      },
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    submitContact({ data: form });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-violet-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">GET IN TOUCH</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 p-5 glass-panel rounded-2xl border border-white/5"
            >
              <div className="relative shrink-0">
                <img
                  src="/avatar.png"
                  alt="Sandeep Ojha"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/40"
                  style={{ boxShadow: "0 0 16px hsl(191 97% 65% / 0.3)" }}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-background" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">Sandeep Ojha</p>
                <p className="text-xs font-mono text-primary mt-0.5">Full Stack Developer</p>
                <p className="text-xs text-muted-foreground mt-1">BCA · Amity University Gwalior</p>
              </div>
            </motion.div>

            <div>
              <h3 className="text-2xl font-black mb-4">LET'S BUILD<br />SOMETHING GREAT</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Whether it's a web app, a creative project, or a collaboration idea —
                reach out and let's talk about what you're building.
              </p>
            </div>

            {/* Contact info items */}
            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0"
                    style={{
                      backgroundColor: `${color}15`,
                      border: `1.5px solid ${color}40`,
                      color,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="font-medium text-sm hover:text-primary transition-colors truncate block"
                        style={{ color }}
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="font-medium text-sm text-foreground">{value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 glass-panel rounded-2xl border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-mono text-green-400 font-bold tracking-widest">AVAILABLE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to internships, freelance projects & collaborations. Response within 24 hrs.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-3xl p-8 md:p-10 border border-white/5 flex flex-col gap-6"
              style={{ boxShadow: "0 0 60px hsl(191 97% 65% / 0.04)" }}
            >
              {/* Accent top line */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent -mx-10 -mt-10 mb-4" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                >
                  <CheckCircle size={18} />
                  <span className="text-sm font-medium">Message sent! Sandeep will get back to you soon.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                >
                  <AlertCircle size={18} />
                  <span className="text-sm font-medium">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <Button
                type="submit"
                disabled={isPending}
                size="lg"
                className="w-full rounded-xl font-bold tracking-widest shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all"
              >
                {isPending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    SENDING...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    SEND MESSAGE
                  </span>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground font-mono">
                Or email directly at{" "}
                <a href="mailto:sandeepojha028@gmail.com" className="text-primary hover:underline">
                  sandeepojha028@gmail.com
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
