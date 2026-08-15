import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaCopy, FaCheck } from 'react-icons/fa'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [copied, setCopied] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return

    setSending(true)
    setTimeout(() => {
      setStatus({ type: 'success', text: `Thanks, ${form.name}! I'll get back to you soon.` })
      setForm({ name: '', email: '', subject: '', message: '' })
      setSending(false)
    }, 1200)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((err) => ({ ...err, [field]: null }))
  }

  return (
    <section id="contact" className="py-24 px-6 reveal border-t border-glass-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-extrabold mb-3">
                Let's discuss something{' '}
                <span className="bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent">
                  creative
                </span>
                !
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Looking for an internship, need a website built, or just want to connect? Send me a message — I'm always open to new opportunities.
              </p>
            </div>

            <div className="glass-card rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-300">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-slate-400 hover:text-brand-cyan transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="text-xs font-semibold text-brand-cyan bg-brand-cyan/10 hover:bg-brand-cyan hover:text-slate-900 px-3 py-1.5 rounded-lg border border-brand-cyan/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <FaCheck size={12} /> : <FaCopy size={12} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="glass-card rounded-xl p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-300">Location</h4>
                <p className="text-sm text-slate-400">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
            <h3 className="text-lg font-bold">Send a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-glass-border px-4 py-3 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-brand-cyan transition-colors"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-glass-border px-4 py-3 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-brand-cyan transition-colors"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1.5">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={update('subject')}
                placeholder="How can I help?"
                className="w-full bg-white/5 border border-glass-border px-4 py-3 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-brand-cyan transition-colors"
              />
              {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={update('message')}
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full bg-white/5 border border-glass-border px-4 py-3 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-brand-cyan transition-colors resize-y min-h-[100px]"
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-900 font-semibold text-sm py-3.5 rounded-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 cursor-pointer"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p className={`text-sm text-center font-medium rounded-lg py-2.5 px-4 ${
                status.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                  : 'bg-red-500/10 text-red-400'
              }`}>
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
