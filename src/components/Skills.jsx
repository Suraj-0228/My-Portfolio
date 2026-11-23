import { useEffect, useRef } from 'react'
import {
  FaLaptopCode,
  FaServer,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaRobot,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVite,
  SiVercel,
  SiPostman,
} from 'react-icons/si'
import { skills } from '../data/portfolio'

const categoryIcons = {
  frontend: FaLaptopCode,
  backend: FaServer,
  tools: FaTools,
}

const skillMeta = {
  'HTML5 & CSS3': {
    icons: [
      { component: FaHtml5, color: '#e34f26' },
      { component: FaCss3Alt, color: '#1572b6' },
    ],
    tag: 'Advanced',
  },
  'JavaScript (ES6+)': {
    icons: [{ component: SiJavascript, color: '#f7df1e' }],
    tag: 'Advanced',
  },
  'React.js': {
    icons: [{ component: SiReact, color: '#61dafb' }],
    tag: 'Core Stack',
  },
  'Tailwind CSS': {
    icons: [{ component: SiTailwindcss, color: '#38bdf8' }],
    tag: 'Advanced',
  },
  'Node.js & Express': {
    icons: [
      { component: SiNodedotjs, color: '#68a063' },
      { component: SiExpress, color: '#ffffff' },
    ],
    tag: 'Proficient',
  },
  'PHP & MySQL': {
    icons: [
      { component: SiPhp, color: '#8892be' },
      { component: SiMysql, color: '#00758f' },
    ],
    tag: 'Proficient',
  },
  'Git & GitHub': {
    icons: [
      { component: SiGit, color: '#f05032' },
      { component: SiGithub, color: '#e2e8f0' },
    ],
    tag: 'Advanced',
  },
  'REST APIs': {
    icons: [{ component: SiPostman, color: '#ff6c37' }],
    tag: 'Proficient',
  },
  'Vite & React': {
    icons: [{ component: SiVite, color: '#646cff' }],
    tag: 'Advanced',
  },
  'Responsive Design': {
    icons: [{ component: FaLaptopCode, color: '#00f2fe' }],
    tag: 'Expertise',
  },
  'AI-Assisted Dev': {
    icons: [{ component: FaRobot, color: '#f355da' }],
    tag: 'Fast Workflow',
  },
  'Deployment (Vercel/Netlify/Render)': {
    icons: [{ component: SiVercel, color: '#ffffff' }],
    tag: 'Production',
  },
}

function SkillItem({ name, level }) {
  const barRef = useRef(null)
  const meta = skillMeta[name] || {
    icons: [{ component: FaTools, color: '#00f2fe' }],
    tag: 'Proficient',
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${level}%`
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (barRef.current?.parentElement) observer.observe(barRef.current.parentElement)
    return () => observer.disconnect()
  }, [level])

  return (
    <div className="group/item p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            {meta.icons.map((item, idx) => {
              const IconComp = item.component
              return (
                <IconComp
                  key={idx}
                  size={16}
                  style={{ color: item.color }}
                  className="transition-transform group-hover/item:scale-110"
                />
              )
            })}
          </div>
          <span className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover/item:text-brand-cyan group-hover/item:border-brand-cyan/30 transition-colors">
          {meta.tag}
        </span>
      </div>

      <div className="h-1.5 bg-white/5 border border-white/10 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,242,254,0.4)]"
          style={{ width: 0 }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const quickBadges = [
    { name: 'React 19', icon: SiReact, color: '#61dafb' },
    { name: 'Tailwind v4', icon: SiTailwindcss, color: '#38bdf8' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
    { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    { name: 'PHP 8.x', icon: SiPhp, color: '#8892be' },
    { name: 'MySQL', icon: SiMysql, color: '#00758f' },
    { name: 'Git & GitHub', icon: SiGit, color: '#f05032' },
    { name: 'Vite', icon: SiVite, color: '#646cff' },
    { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  ]

  return (
    <section id="skills" className="py-24 px-6 reveal border-t border-glass-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">My Toolkit</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            A comprehensive overview of the programming languages, frameworks, databases, and dev workflows I use to build modern software.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skills.map((group) => {
            const Icon = categoryIcons[group.icon] || FaTools
            return (
              <div key={group.category} className="glass-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-glass-border">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100">{group.category}</h3>
                      <span className="text-[11px] text-slate-400">
                        {group.items.length} Core Technologies
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {group.items.map((skill) => (
                      <SkillItem key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Stack Badges Bar */}
        <div className="glass-card rounded-2xl p-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Technologies &amp; Frameworks at a Glance
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {quickBadges.map((b) => {
              const IconComp = b.icon
              return (
                <div
                  key={b.name}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-glass-border hover:border-brand-cyan/40 hover:bg-white/10 transition-all text-xs font-medium text-slate-300"
                >
                  <IconComp size={14} style={{ color: b.color }} />
                  <span>{b.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
