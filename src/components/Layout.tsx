import { Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";

export function Footer() {
  return (
    <footer className="h-12 bg-slate-900 text-slate-400 flex items-center justify-between px-12 text-[10px] uppercase tracking-widest shrink-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="transition-colors hover:text-white"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function NavBar() {
  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <a href="#" className="font-sans text-2xl font-bold tracking-tight text-slate-900 transition-colors uppercase">
          {PORTFOLIO_DATA.name}
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-widest text-slate-600 transition-colors hover:text-blue-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <a
           href={`mailto:${PORTFOLIO_DATA.contact.email}`}
           className="hidden md:inline-flex items-center justify-center rounded border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-600 transition-colors hover:border-blue-600 hover:text-blue-600 shadow-sm"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
