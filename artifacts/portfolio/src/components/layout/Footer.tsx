import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/SandeepOjha1", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sandeep-ojha-185557317", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sandeepojha028@gmail.com", label: "Email" },
];

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-card/30">
      <div className="container px-4 md:px-8 mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 group">
            <div className="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Code2 size={20} />
            </div>
            <span className="font-mono font-bold text-lg tracking-tighter">
              Sandeep<span className="text-primary">.Ojha</span>
            </span>
          </a>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            &copy; {new Date().getFullYear()} Sandeep Ojha. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Built with <span className="text-primary">React</span> &middot; <span className="text-primary">TypeScript</span> &middot; <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
