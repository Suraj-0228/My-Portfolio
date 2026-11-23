import { FaGraduationCap, FaTrophy, FaCalendarAlt, FaUniversity, FaMedal } from 'react-icons/fa'
import { education } from '../data/portfolio'

export default function Education() {
  const degrees = education.filter((item) => !item.highlight)
  const achievements = education.filter((item) => item.highlight)

  return (
    <section id="education" className="py-24 px-6 reveal border-t border-glass-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Background</span>
          <h2 className="section-title">Education &amp; Achievements</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            My academic foundation in computer applications paired with competitive milestones and practical development challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Academic Qualifications Timeline (7 Cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-glass-border">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                <FaGraduationCap size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">Academic Journey</h3>
                <span className="text-xs text-slate-400">Formal university &amp; higher secondary degrees</span>
              </div>
            </div>

            <div className="flex flex-col gap-8 border-l-2 border-brand-cyan/30 pl-6 ml-2 relative">
              {degrees.map((item) => (
                <div key={item.degree} className="relative group">
                  {/* Timeline dot */}
                  <span className="w-4 h-4 rounded-full absolute -left-[33px] top-1 border-4 border-bg-dark bg-brand-cyan shadow-[0_0_12px_#00f2fe] group-hover:scale-125 transition-transform" />

                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-cyan flex items-center gap-1.5 mb-1">
                    <FaCalendarAlt size={11} />
                    {item.period}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-brand-cyan transition-colors">
                    {item.degree}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium mt-1">
                    <FaUniversity size={12} className="text-slate-500 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Achievements Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-glass-border">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <FaTrophy size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Achievements</h3>
                  <span className="text-xs text-amber-400/80 font-medium">Competitive &amp; Hackathon Honors</span>
                </div>
              </div>

              {achievements.map((item) => (
                <div key={item.degree} className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit">
                    <FaMedal size={12} />
                    {item.period}
                  </div>

                  <h4 className="text-xl font-extrabold text-slate-100 mt-1">
                    {item.degree}
                  </h4>

                  <p className="text-xs font-semibold text-slate-300">
                    {item.institution}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed mt-1">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2 pt-3 border-t border-glass-border">
                    {['PHP', 'MySQL', 'Bootstrap 5', 'Rapid Prototyping'].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Growth Highlights Box */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                Continuous Learning &amp; Focus
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Currently pursuing Master of Computer Applications (MCA) while building real-world MERN &amp; PHP applications, focusing on scalable backend architecture, interactive frontend UX, and modern engineering practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
