import { useEffect, useRef } from 'react'
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa'
import { skills } from '../data/portfolio'

const icons = {
  frontend: FaLaptopCode,
  backend: FaServer,
  tools: FaTools,
}

function SkillBar({ name, level }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${level}%`
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    if (barRef.current?.parentElement) observer.observe(barRef.current.parentElement)
    return () => observer.disconnect()
  }, [level])

  return (
    <div>
      <div className="flex justify-between text-xs font-semibold mb-1.5">
        <span className="text-slate-300">{name}</span>
        <span className="text-brand-cyan">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 border border-white/10 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue transition-all duration-1000 ease-out"
          style={{ width: 0 }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 reveal border-t border-glass-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">My Toolkit</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((group) => {
            const Icon = icons[group.icon]
            return (
              <div key={group.category} className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-glass-border">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100">{group.category}</h3>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {group.items.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
