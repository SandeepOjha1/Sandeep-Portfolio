import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(191, 97%, 65%, ${p.alpha})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <ParticleCanvas />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[180px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-left">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-primary block" />
            <span className="font-mono text-primary uppercase tracking-widest text-sm font-bold flex items-center gap-2">
              <Sparkles size={12} className="animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-muted-foreground font-mono text-base mb-2 tracking-widest"
          >
            Hi, I'm <span className="text-primary font-bold">Sandeep Ojha</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6"
          >
            FULL STACK
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500 text-glow">
              DEVELOPER
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-light"
          >
            I build dark, immersive, and highly interactive digital experiences.
            Bridging the gap between cutting-edge engineering and premium design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="font-bold tracking-wide rounded-full px-8 hover-elevate-2 shadow-[0_0_24px_rgba(0,255,255,0.3)]"
              onClick={scrollToProjects}
            >
              VIEW PROJECTS
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-bold tracking-wide rounded-full px-8 border-white/10 hover:bg-white/5"
              onClick={scrollToContact}
            >
              CONTACT ME
            </Button>
          </motion.div>

          {/* Social links — no Twitter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/SandeepOjha1"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-all p-2 bg-white/5 rounded-full hover:bg-primary/10 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-ojha-185557317"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-all p-2 bg-white/5 rounded-full hover:bg-primary/10 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sandeepojha028@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all p-2 bg-white/5 rounded-full hover:bg-primary/10 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative hidden lg:block"
        >
          <div className="relative w-[480px] h-[580px] mx-auto">
            {/* Rotating border rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-2px] rounded-3xl border border-primary/20 z-0"
              style={{ borderStyle: "dashed" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-8px] rounded-3xl border border-violet-500/15 z-0"
              style={{ borderStyle: "dashed" }}
            />

            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-muted z-10 p-2 glass-panel">
              <img
                src="/avatar.png"
                alt="Sandeep Ojha"
                className="w-full h-full object-cover rounded-2xl filter contrast-110 saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent rounded-2xl" />
              {/* Name overlay */}
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-mono text-primary tracking-widest uppercase mb-1">Portfolio</p>
                <p className="text-xl font-black">Sandeep Ojha</p>
              </div>
            </div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-10 -left-12 bg-background/90 backdrop-blur-md border border-white/10 p-4 rounded-xl z-20 shadow-xl flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-sm font-bold">Available</span>
            </motion.div>

            {/* Projects badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-20 -right-12 bg-background/90 backdrop-blur-md border border-primary/20 p-4 rounded-xl z-20 shadow-xl"
            >
              <div className="text-3xl font-black text-primary">3</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-mono">Projects</div>
            </motion.div>

            {/* Client badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute top-20 -right-12 bg-background/90 backdrop-blur-md border border-violet-500/20 p-4 rounded-xl z-20 shadow-xl"
            >
              <div className="text-3xl font-black text-violet-400">1</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-mono">Client</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}
