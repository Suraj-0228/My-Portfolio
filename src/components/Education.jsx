import { FaGraduationCap, FaTrophy } from 'react-icons/fa'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 reveal border-t border-glass-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Background</span>
          <h2 className="section-title">Education & Achievements</h2>
        </div>

        <div className="glass-card rounded-2xl p-8 sm:p-8 max-w-3xl mx-auto">
          <div className="flex flex-col gap-8 border-l border-glass-border pl-6 relative">
            {education.map((item) => (
              <div key={item.degree} className="relative">
                <span
                  className={`w-3.5 h-3.5 rounded-full absolute -left-[31px] top-1 border-4 border-bg-dark ${
                    item.highlight
                      ? 'bg-amber-400 shadow-[0_0_10px_#f59e0b]'
                      : 'bg-brand-cyan shadow-[0_0_10px_#00f2fe]'
                  }`}
                />
                <div
                  className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                    item.highlight ? 'text-amber-400' : 'text-brand-cyan'
                  }`}
                >
                  {item.highlight ? <FaTrophy size={13} /> : <FaGraduationCap size={14} />}
                  {item.period}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mt-1">
                  {item.degree}
                </h3>
                <p className="text-xs text-slate-400 font-medium">{item.institution}</p>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
