import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { PORTFOLIO_DATA } from "../data";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <SectionHeading title="Featured Projects" />
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col justify-between bg-white p-8 rounded-xl border border-slate-200 shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-xs mt-1 uppercase tracking-wide">
                      {project.subtitle} • {project.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.repo && (
                      <a
                        href={`https://github.com/${project.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                        title="View Source"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {(project as any).link && (
                      <a
                        href={(project as any).link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                        title="View Live App"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                                
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                
                <ul className="mt-4 space-y-2">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-blue-600">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
