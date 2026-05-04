import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen opacity-40" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPHBhdGggZD0iTTAgMGg4djhIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-primary block" />
            <span className="font-mono text-primary uppercase tracking-widest text-sm font-bold">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6"
          >
            CREATIVE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 text-glow">
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
            <Button size="lg" className="font-bold tracking-wide rounded-full px-8 hover-elevate-2 shadow-[0_0_20px_rgba(0,255,255,0.3)]" onClick={scrollToProjects}>
              VIEW PROJECTS
            </Button>
            <Button size="lg" variant="outline" className="font-bold tracking-wide rounded-full px-8 border-white/10 hover:bg-white/5" onClick={scrollToContact}>
              CONTACT ME
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <Twitter size={20} />
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[600px] mx-auto">
            {/* Decorative frame */}
            <div className="absolute inset-0 border border-primary/20 rounded-3xl transform rotate-3 transition-transform hover:rotate-0 duration-500 z-0" />
            <div className="absolute inset-0 border border-blue-500/20 rounded-3xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 z-0" />
            
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-muted z-10 p-2 glass-panel">
              <img 
                src="/avatar.png" 
                alt="Developer Portrait" 
                className="w-full h-full object-cover rounded-2xl filter contrast-125 saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-10 -left-10 bg-background/90 backdrop-blur-md border border-white/10 p-4 rounded-xl z-20 shadow-xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-sm font-bold">System Online</span>
            </div>
            
            <div className="absolute bottom-20 -right-10 bg-background/90 backdrop-blur-md border border-white/10 p-4 rounded-xl z-20 shadow-xl">
              <div className="text-3xl font-black text-primary">10+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Projects Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}
