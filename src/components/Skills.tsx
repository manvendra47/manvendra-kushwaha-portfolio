import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { PORTFOLIO_DATA } from "../data";

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <SectionHeading title="Technical Expertise" />
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                {skillGroup.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIdx) => (
                  <li
                    key={skillIdx}
                    className="px-3 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-700"
                  >
                    {skill}
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
