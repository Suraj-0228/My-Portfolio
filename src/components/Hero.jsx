import { useEffect, useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaCode,
  FaCss3Alt,
  FaFileDownload,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaUserTie,
  FaLaptopCode,
} from 'react-icons/fa'
import { personalInfo, typewriterWords } from '../data/portfolio'

export default function Hero() {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [activeTab, setActiveTab] = useState('jsx')
  const [viewMode, setViewMode] = useState('code') // 'code' | 'profile'

  const tabs = [
    { id: 'jsx', name: 'Developer.jsx', icon: FaReact, color: 'text-[#61dafb]' },
    { id: 'json', name: 'skills.json', icon: FaCode, color: 'text-[#e6b450]' },
    { id: 'css', name: 'interests.css', icon: FaCss3Alt, color: 'text-[#38bdf8]' },
  ]

  const renderJsx = () => (
    <div className="flex gap-4">
      <div className="text-slate-600 select-none text-right pr-2 border-r border-white/5 font-mono text-xs">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
      </div>
      <pre className="text-xs leading-relaxed overflow-x-auto font-mono text-slate-300">
        <code>
          <span className="text-slate-500">{"// Developer.jsx"}<br /></span>
          <span className="text-brand-pink">import </span>
          <span className="text-slate-100">React </span>
          <span className="text-brand-pink">from </span>
          <span className="text-brand-blue">"react"</span>
          <span className="text-slate-100">;<br /><br /></span>
          <span className="text-brand-pink">const </span>
          <span className="text-brand-cyan">Developer </span>
          <span className="text-slate-100">= () </span>
          <span className="text-brand-pink">=&gt;</span>
          <span className="text-slate-100"> {"{"}<br /></span>
          <span className="text-brand-pink">  const </span>
          <span className="text-slate-100">name = </span>
          <span className="text-brand-blue">"{personalInfo.name}"</span>
          <span className="text-slate-100">;<br /></span>
          <span className="text-brand-pink">  const </span>
          <span className="text-slate-100">role = </span>
          <span className="text-brand-blue">"MCA Student &amp; Developer"</span>
          <span className="text-slate-100">;<br /><br /></span>
          <span className="text-brand-pink">  return </span>
          <span className="text-slate-100">{"{"}<br /></span>
          <span className="text-slate-400">    skills</span>
          <span className="text-slate-100">: [</span>
          <span className="text-brand-blue">"React"</span>
          <span className="text-slate-100">, </span>
          <span className="text-brand-blue">"Node"</span>
          <span className="text-slate-100">, </span>
          <span className="text-brand-blue">"Tailwind"</span>
          <span className="text-slate-100">],<br /></span>
          <span className="text-slate-400">    focus</span>
          <span className="text-slate-100">: </span>
          <span className="text-brand-blue">"Clean, responsive webs"</span>
          <span className="text-slate-100">,<br /></span>
          <span className="text-slate-400">    openToWork</span>
          <span className="text-slate-100">: </span>
          <span className="text-brand-pink">true</span>
          <span className="text-slate-100"><br /></span>
          <span className="text-slate-100">  {"};"}<br />{"};"}<br /><br /></span>
          <span className="text-brand-pink">export default </span>
          <span className="text-brand-cyan">Developer</span>
          <span className="text-slate-100">;</span>
        </code>
      </pre>
    </div>
  )

  const renderJson = () => (
    <div className="flex gap-4">
      <div className="text-slate-600 select-none text-right pr-2 border-r border-white/5 font-mono text-xs">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
      </div>
      <pre className="text-xs leading-relaxed overflow-x-auto font-mono text-slate-300">
        <code>
          <span className="text-slate-100">{"{"}<br /></span>
          <span className="text-brand-cyan">  "frontend"</span>
          <span className="text-slate-100">: {"{"}<br /></span>
          <span className="text-slate-400">    "languages"</span>
          <span className="text-slate-100">: [</span>
          <span className="text-brand-blue">"HTML5"</span>
          <span className="text-slate-100">, </span>
          <span className="text-brand-blue">"CSS3"</span>
          <span className="text-slate-100">, </span>
          <span className="text-brand-blue">"JS"</span>
          <span className="text-slate-100">],<br /></span>
          <span className="text-slate-400">    "frameworks"</span>
          <span className="text-slate-100">: [</span>
          <span className="text-brand-blue">"React"</span>
          <span className="text-slate-100">, </span>
          <span className="text-brand-blue">"Tailwind"</span>
          <span className="text-slate-100">]<br /></span>
          <span className="text-slate-100">  {"},"}<br /></span>
          <span className="text-brand-cyan">  "backend"</span>
          <span className="text-slate-100">: {"{"}<br /></span>
          <span className="text-slate-400">    "stack"</span>
          <span className="text-slate-100">: [</span>
          <span className="text-brand-blue">"Node"</span>
          <span className="text-slate-100">, </span>
          <span className="text-brand-blue">"Express"</span>
          <span className="text-slate-100">, </span>
          <span className="text-brand-blue">"PHP"</span>
          <span className="text-slate-100">],<br /></span>
          <span className="text-slate-400">    "databases"</span>
          <span className="text-slate-100">: [</span>
          <span className="text-brand-blue">"MySQL"</span>
          <span className="text-slate-100">, </span>
          <span className="text-brand-blue">"MongoDB"</span>
          <span className="text-slate-100">]<br /></span>
          <span className="text-slate-100">  {"},"}<br /></span>
          <span className="text-brand-cyan">  "tools"</span>
          <span className="text-slate-100">: [</span>
          <span className="text-brand-blue">"Git"</span>
          <span className="text-slate-100">, </span>
          <span className="text-brand-blue">"Vite"</span>
          <span className="text-slate-100">, </span>
          <span className="text-brand-blue">"Vercel"</span>
          <span className="text-slate-100">]<br /></span>
          <span className="text-slate-100">{"}"}</span>
        </code>
      </pre>
    </div>
  )

  const renderProfileCard = () => (
    <div className="p-6 sm:p-7 flex flex-col justify-between min-h-[340px] bg-[#0a0b10]/95 font-sans">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-violet p-[2px] shadow-lg shadow-brand-cyan/20">
            <div className="w-full h-full rounded-2xl bg-[#0e1017] flex items-center justify-center font-heading font-extrabold text-2xl text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text">
              SM
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-brand-cyan font-medium">MCA Student &amp; Web Developer</p>
            <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1.5">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt size={11} className="text-slate-500" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <FaGraduationCap size={12} className="text-slate-500" />
                VNSGU Surat
              </span>
            </div>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 my-5">
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
          <div className="text-xl font-extrabold text-brand-cyan">3+</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Built Apps</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
          <div className="text-xl font-extrabold text-brand-blue">MCA</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Pursuing</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
          <div className="text-xl font-extrabold text-amber-400">3rd</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Techfest Rank</div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold font-mono">
          Core Focus Stack:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['React 19', 'Tailwind v4', 'Node.js', 'Express', 'MongoDB Atlas', 'PHP & MySQL', 'REST APIs'].map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4 mt-4 border-t border-glass-border">
        <a
          href="#contact"
          className="flex-1 text-center py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-900 font-bold text-xs hover:opacity-95 transition-opacity"
        >
          Message Suraj
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-white/5 border border-glass-border text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <FaGithub size={13} /> GitHub
        </a>
      </div>
    </div>
  )

  useEffect(() => {
    const word = typewriterWords[wordIdx]
    let timeout

    if (!deleting && charIdx <= word.length) {
      setText(word.slice(0, charIdx))
      if (charIdx === word.length) {
        timeout = setTimeout(() => setDeleting(true), 2000)
      } else {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), 100)
      }
    } else if (deleting && charIdx >= 0) {
      setText(word.slice(0, charIdx))
      if (charIdx === 0) {
        setDeleting(false)
        setWordIdx((i) => (i + 1) % typewriterWords.length)
        timeout = setTimeout(() => setCharIdx(1), 300)
      } else {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), 50)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx])

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          {personalInfo.available && (
            <span className="inline-flex items-center gap-2 w-fit text-xs font-semibold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              {personalInfo.availabilityText}
            </span>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-200">
            I build{' '}
            <span className="text-brand-cyan border-r-2 border-brand-cyan pr-1 min-w-[12ch] inline-block">
              {text}
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed">
            {personalInfo.tagline} Currently pursuing my MCA while building real-world projects with{' '}
            <strong className="text-slate-300">React, JavaScript</strong>, and modern web tools.
          </p>

          <div className="flex flex-wrap gap-3.5 mt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-900 font-semibold text-sm px-6 py-3 rounded-full shadow-lg shadow-brand-cyan/20 hover:-translate-y-0.5 transition-all"
            >
              View Projects
            </a>
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-semibold text-sm px-5 py-3 rounded-full hover:bg-brand-cyan hover:text-slate-900 hover:-translate-y-0.5 transition-all"
              >
                <FaFileDownload size={14} />
                Resume / CV
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/5 border border-glass-border text-slate-100 font-semibold text-sm px-5 py-3 rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-glass-border/30">
            <span className="text-xs text-slate-500 font-semibold uppercase">Connect</span>
            {[
              { href: personalInfo.github, icon: FaGithub, label: 'GitHub' },
              { href: personalInfo.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
              { href: `mailto:${personalInfo.email}`, icon: FaEnvelope, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 border border-glass-border flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full">
          <div className="animate-float w-full max-w-xl">
            <div className="glass-card rounded-2xl overflow-hidden border border-glass-border">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.015] border-b border-glass-border">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="text-[11px] text-slate-500 font-mono tracking-wide hidden sm:inline ml-2">
                    {viewMode === 'code' ? 'Suraj-Portfolio — VS Code' : 'Developer Identity Card'}
                  </span>
                </div>

                {/* Dual View Toggle */}
                <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-0.5 rounded-lg text-[10px]">
                  <button
                    onClick={() => setViewMode('code')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all cursor-pointer ${viewMode === 'code'
                      ? 'bg-brand-cyan text-slate-900 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                      }`}
                  >
                    <FaLaptopCode size={11} />
                    <span>VS Code</span>
                  </button>
                  <button
                    onClick={() => setViewMode('profile')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all cursor-pointer ${viewMode === 'profile'
                      ? 'bg-brand-cyan text-slate-900 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                      }`}
                  >
                    <FaUserTie size={11} />
                    <span>Profile</span>
                  </button>
                </div>
              </div>

              {viewMode === 'code' ? (
                <>
                  {/* Tabs Row */}
                  <div className="flex bg-white/[0.005] border-b border-glass-border text-xs font-mono">
                    {tabs.map((tab) => {
                      const Icon = tab.icon
                      const isActive = activeTab === tab.id
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 px-4 py-2.5 border-r border-glass-border cursor-pointer transition-all ${isActive
                            ? 'bg-[#0e1017] text-slate-100 border-t border-t-brand-cyan'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                            }`}
                        >
                          <Icon className={tab.color} size={14} />
                          {tab.name}
                        </button>
                      )
                    })}
                  </div>

                  {/* Editor Workspace */}
                  <div className="p-6 bg-[#0a0b10]/95 font-mono overflow-x-auto min-h-[290px] flex flex-col justify-between">
                    {activeTab === 'jsx' && renderJsx()}
                    {activeTab === 'json' && renderJson()}
                    {activeTab === 'css' && renderCss()}
                  </div>

                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-4 py-1.5 bg-[#0e1017] border-t border-glass-border text-[10px] text-slate-400 font-mono select-none">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-brand-cyan">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                        main*
                      </span>
                      <span className="hidden sm:inline">0 &amp; 0</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>UTF-8</span>
                      <span className="text-brand-cyan">React 19</span>
                    </div>
                  </div>
                </>
              ) : (
                renderProfileCard()
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
