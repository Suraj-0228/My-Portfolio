import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCheck, FaExpand, FaTimes } from 'react-icons/fa'
import { projects } from '../data/portfolio'

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'mern', label: 'MERN Stack' },
  { id: 'php', label: 'PHP & MySQL' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [modalProject, setModalProject] = useState(null)

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="projects" className="py-24 px-6 reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Production-style web applications showcasing full-stack capabilities, security implementations, database architecture, and responsive UI design.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${activeFilter === f.id
                ? 'bg-brand-cyan/15 border-brand-cyan/50 text-white shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                : 'bg-white/5 border-glass-border text-slate-400 hover:text-slate-200'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-14">
          {filtered.map((project, index) => (
            <article
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:[direction:rtl] lg:*:[direction:ltr]' : ''
                }`}
            >
              {/* Image Preview Card */}
              <div
                onClick={() => project.image && setModalProject(project)}
                className={`glass-card rounded-2xl h-64 sm:h-80 lg:h-96 w-full flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden group relative cursor-pointer border border-glass-border hover:border-brand-cyan/40`}
                title={project.image ? "Click to view full screenshot" : ""}
              >
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10]/70 via-transparent to-black/20 pointer-events-none" />

                    {/* Expand Badge on Hover */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 text-slate-200 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaExpand size={11} className="text-brand-cyan" />
                      <span>View Screenshot</span>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-brand-cyan">
                      {project.category === 'mern' ? 'MERN Stack' : 'PHP & MySQL'}
                    </div>
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

              {/* Text Description */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-col gap-2 my-1">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <FaCheck className="text-brand-cyan mt-1 flex-shrink-0" size={12} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/5 border border-glass-border px-3 py-1 rounded-md text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-glass-border mt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-brand-cyan transition-colors"
                  >
                    <FaGithub size={18} /> Source Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan hover:text-slate-900 transition-all"
                    >
                      <FaExternalLinkAlt size={12} /> Live Preview
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {modalProject && (
        <div
          onClick={() => setModalProject(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative glass-card bg-[#0b0f19] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-white/[0.02]">
              <div>
                <h4 className="font-bold text-slate-100 text-lg sm:text-xl">
                  {modalProject.title}
                </h4>
                <p className="text-xs text-brand-cyan">{modalProject.subtitle}</p>
              </div>
              <button
                onClick={() => setModalProject(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Modal Body / Image */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-auto rounded-xl border border-white/10 shadow-lg object-contain"
              />
            </div>

            {/* Modal Footer Links */}
            <div className="flex items-center justify-between p-4 px-6 border-t border-white/10 bg-white/[0.02] text-xs">
              <span className="text-slate-400">Press ESC or click outside to close</span>
              <div className="flex items-center gap-3">
                <a
                  href={modalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-brand-cyan"
                >
                  <FaGithub size={14} /> GitHub
                </a>
                {modalProject.live && (
                  <a
                    href={modalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold px-3 py-1 rounded-full bg-brand-cyan text-slate-900"
                  >
                    <FaExternalLinkAlt size={10} /> Open Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
