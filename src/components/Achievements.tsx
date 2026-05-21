import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { PORTFOLIO_DATA } from "../data";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <SectionHeading title="Key Achievements" />
        
        <div className="grid gap-4 sm:grid-cols-2">
          {PORTFOLIO_DATA.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 bg-slate-50 p-6 rounded-lg border border-slate-200"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-blue-100 text-blue-600 text-sm">
                ★
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
