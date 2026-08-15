import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-400 leading-relaxed">
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

            <div className="grid grid-cols-3 gap-4 mt-2">
              {about.highlights.map((h) => (
                <div key={h.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-brand-cyan">{h.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-brand-cyan mb-6 flex items-center gap-2">
              What I Do
            </h3>
            <div className="grid gap-4">
              {[
                {
                  title: 'Website Development',
                  desc: 'Building responsive landing pages and multi-page websites with modern UI.',
                },
                {
                  title: 'React Applications',
                  desc: 'Creating interactive frontends with components, routing, and state management.',
                },
                {
                  title: 'AI-Assisted Workflow',
                  desc: 'Using AI tools to speed up development while understanding and customizing every project.',
                },
                {
                  title: 'Full-Stack Projects',
                  desc: 'Working with Node.js, PHP, and databases for complete web applications.',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-brand-cyan/40 pl-4">
                  <h4 className="font-semibold text-slate-200 text-sm">{item.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
