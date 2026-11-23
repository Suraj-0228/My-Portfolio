import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaFileAlt } from 'react-icons/fa'
import { navLinks, personalInfo } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
        ? 'bg-bg-dark/85 backdrop-blur-md border-glass-border'
        : 'border-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#home" className="font-heading text-xl font-extrabold tracking-tight group">
          <span className="text-brand-cyan group-hover:-translate-x-0.5 inline-block transition-transform">&lt;</span>
          Suraj.Manani
          <span className="text-brand-cyan group-hover:translate-x-0.5 inline-block transition-transform">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${active === link.href.slice(1)
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-cyan'
                    : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3.5 py-2 rounded-full border border-glass-border text-slate-300 hover:text-white hover:border-brand-cyan/40 bg-white/5 transition-all flex items-center gap-1.5"
              >
                <FaFileAlt size={12} className="text-brand-cyan" />
                Resume
              </a>
            )}
            <a
              href="#contact"
              className="text-xs font-semibold px-4 py-2 rounded-full border border-brand-cyan/30 text-brand-cyan bg-brand-cyan/10 hover:bg-brand-cyan hover:text-slate-900 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </nav>

        <button
          className="md:hidden p-2 text-slate-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bg-dark/95 backdrop-blur-xl border-b border-glass-border px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className={`text-base font-medium ${active === link.href.slice(1) ? 'text-brand-cyan' : 'text-slate-400'}`}
            >
              {link.label}
            </a>
          ))}
          {personalInfo.resumeUrl && (
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="text-center text-sm font-semibold px-4 py-2.5 rounded-full border border-glass-border text-slate-200 bg-white/5 flex items-center justify-center gap-2"
            >
              <FaFileAlt size={13} className="text-brand-cyan" />
              Download Resume
            </a>
          )}
          <a
            href="#contact"
            onClick={closeMobile}
            className="text-center text-sm font-semibold px-4 py-2.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-900"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  )
}
