import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa'
import { projects } from '../data/portfolio'

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'mern', label: 'MERN Stack' },
  { id: 'php', label: 'PHP & MySQL' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-6 reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-brand-cyan/15 border-brand-cyan/50 text-white shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                  : 'bg-white/5 border-glass-border text-slate-400 hover:text-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          {filtered.map((project, index) => (
            <article
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:[direction:rtl] lg:*:[direction:ltr]' : ''
              }`}
            >
              <div
                className={`glass-card rounded-2xl h-64 sm:h-80 lg:h-96 w-full flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden group relative`}
              >
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10]/60 to-transparent pointer-events-none" />
                  </>
                ) : (
                  <div className="text-center p-6">
                    <div className="text-5xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors">
                      {project.title.charAt(0)}
                    </div>
                    <span className="inline-block mt-2 text-xs font-semibold text-brand-cyan bg-black/40 border border-glass-border px-3 py-1 rounded-full">
                      {project.category === 'mern' ? 'MERN Stack' : 'PHP & MySQL'}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  {project.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed">{project.description}</p>

                <ul className="flex flex-col gap-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <FaCheck className="text-brand-cyan mt-1 flex-shrink-0" size={12} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/5 border border-glass-border px-3 py-1 rounded-md text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-3 border-t border-glass-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-brand-cyan transition-colors"
                  >
                    <FaGithub size={18} /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-brand-cyan transition-colors"
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
