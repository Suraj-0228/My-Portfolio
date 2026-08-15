import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa'
import { personalInfo, navLinks } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative bg-black/60 backdrop-blur-xl border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <div className="font-heading text-xl font-extrabold">
              <span className="text-brand-cyan">&lt;</span>Suraj.Manani<span className="text-brand-blue">/&gt;</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              MCA student and web developer building modern, responsive websites with React and JavaScript.
            </p>
            <div className="flex gap-3">
              {[
                { href: personalInfo.github, icon: FaGithub },
                { href: personalInfo.linkedin, icon: FaLinkedin },
                { href: `mailto:${personalInfo.email}`, icon: FaEnvelope },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-cyan transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-brand-cyan transition-colors break-all">
                {personalInfo.email}
              </a>
              <span className="text-slate-300">{personalInfo.location}</span>
              <span className="inline-flex items-center gap-2 w-fit bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.availabilityText}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Built with React & Vite.</p>
          <a href="#home" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-cyan transition-colors">
            Back to Top
            <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <FaChevronUp size={12} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
