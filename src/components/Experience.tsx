import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { PORTFOLIO_DATA } from "../data";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <SectionHeading title="Professional Experience" />
        
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-slate-100"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <h4 className="font-bold text-xl text-slate-900">
                  {exp.role}
                </h4>
                <span className="text-xs font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-600 sm:mt-0 mt-2 inline-block">
                  {exp.date}
                </span>
              </div>
              <p className="text-blue-600 font-semibold text-sm mb-3 uppercase tracking-wide">
                {exp.company}
              </p>
              
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
