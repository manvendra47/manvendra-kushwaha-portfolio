import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col justify-center pt-28 pb-16 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Overview
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
            {PORTFOLIO_DATA.name}.
          </h1>
          <h2 className="mt-4 text-blue-600 font-semibold text-2xl uppercase tracking-wide sm:text-4xl">
            {PORTFOLIO_DATA.role}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
            {PORTFOLIO_DATA.about}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="group flex items-center gap-2 rounded bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 shadow-sm"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-600 transition-colors hover:border-blue-600 hover:text-blue-600 shadow-sm"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-600 transition-colors hover:border-blue-600 hover:text-blue-600 shadow-sm"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {PORTFOLIO_DATA.contact.phone}
            </div>
            <a href={PORTFOLIO_DATA.contact.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-colors hover:text-blue-600">
              LeetCode <ExternalLink className="h-3 w-3" />
            </a>
            <a href={PORTFOLIO_DATA.contact.gfg} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-colors hover:text-blue-600">
              GeeksforGeeks <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
