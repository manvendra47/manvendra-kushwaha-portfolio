import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { PORTFOLIO_DATA } from "../data";

export function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <SectionHeading title="Education" />
        
        <div className="space-y-6">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-start gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  {edu.institution}
                </h3>
                <p className="mt-1 text-sm font-semibold text-blue-600 uppercase tracking-wide">{edu.degree}</p>
                <div className="mt-2 flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <span className="w-4 text-slate-400">📍</span>
                    {edu.location}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                  <span className="font-bold text-slate-700">{edu.score}</span>
                </div>
              </div>
              <div className="shrink-0 text-xs font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-600 sm:mt-0 mt-2 inline-block">
                {edu.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
