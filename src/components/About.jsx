import { FaLaptopCode, FaServer, FaDatabase, FaRocket, FaAward, FaGraduationCap, FaCode } from 'react-icons/fa'
import { about } from '../data/portfolio'

const services = [
  {
    icon: FaLaptopCode,
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10 border-brand-cyan/20',
    title: 'Frontend Engineering',
    desc: 'Crafting responsive, high-fidelity user interfaces with clean component hierarchy and fluid animations.',
    tags: ['React 19', 'Tailwind v4', 'Responsive UI'],
  },
  {
    icon: FaServer,
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10 border-brand-blue/20',
    title: 'Full-Stack & APIs',
    desc: 'Designing RESTful endpoints, controller layers, JWT session authorization, and business logic.',
    tags: ['Node.js', 'Express', 'PHP 8.x'],
  },
  {
    icon: FaDatabase,
    color: 'text-brand-violet',
    bg: 'bg-brand-violet/10 border-brand-violet/20',
    title: 'Database Architecture',
    desc: 'Relational & NoSQL modeling, PDO prepared statements, Mongoose schemas, and transaction integrity.',
    tags: ['MongoDB Atlas', 'MySQL', 'PDO'],
  },
  {
    icon: FaRocket,
    color: 'text-brand-pink',
    bg: 'bg-brand-pink/10 border-brand-pink/20',
    title: 'Modern Deployment',
    desc: 'Deploying live applications on cloud platforms with continuous version control and asset optimization.',
    tags: ['Vercel', 'Render', 'Git/GitHub'],
  },
]

export default function About() {
  const statIcons = [FaCode, FaGraduationCap, FaAward]

  return (
    <section id="about" className="py-24 px-6 reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            A developer passionate about building reliable, intuitive software that bridges clean code with engaging user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Bio Card (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full w-fit">
                Full-Stack Mindset
              </div>

              <h3 className="text-2xl font-extrabold text-slate-100">
                Transforming ideas into polished, production-ready web apps.
              </h3>

              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {i === 0 ? (
                    <>
                      {p.split('BCA background')[0]}
                      <strong className="text-slate-200">BCA background</strong>
                      {p.split('BCA background')[1]}
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-glass-border">
              {about.highlights.map((h, idx) => {
                const StatIcon = statIcons[idx] || FaCode
                return (
                  <div key={h.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <StatIcon className="mx-auto mb-1.5 text-brand-cyan opacity-80" size={14} />
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-100">{h.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">{h.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Bento Grid (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-brand-cyan/30 transition-all group"
                >
                  <div>
                    <div
                      className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-4 transition-transform group-hover:scale-110`}
                    >
                      <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-slate-100 text-base mb-2 group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
