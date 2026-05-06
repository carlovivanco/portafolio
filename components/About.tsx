'use client'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#1a2332]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left label */}
          <div className="md:col-span-3">
            <p className="section-label mt-1">About</p>
          </div>

          {/* Right content */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-5 text-slate-400 leading-relaxed text-base">
                <p>
                  I'm a Mechatronics Engineer and MSc in Intelligent Systems & Robotics with 3+ years
                  of experience across automotive, energy, and AI sectors. I've delivered high-impact
                  automation at{' '}
                  <span className="text-white">Tesla</span>,{' '}
                  <span className="text-white">Ford</span>, and{' '}
                  <span className="text-white">Stellantis</span> — cutting firmware test development
                  time by 25% and system validation time by 50%.
                </p>
                <p>
                  Currently I'm building enterprise-grade multi-agent AI systems, RAG pipelines, and
                  cloud-native solutions at{' '}
                  <span className="text-white">Nexxia</span> on GCP — replacing entire manual
                  operational processes with intelligent, event-driven automation.
                </p>
                <p>
                  My MSc dissertation at the{' '}
                  <span className="text-white">University of Essex</span> applied deep reinforcement
                  learning (SAC, PPO, TD3) to autonomous robotic manipulation on a Franka Emika arm
                  with real-time computer vision.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'GPA', value: '95 / 100' },
                  { label: 'Scholarship', value: 'Academic Talent — Tec de Monterrey' },
                  { label: 'English', value: 'IELTS C1 Advanced' },
                  { label: 'Award', value: 'Ford High Achiever Badge — Intern City of Tomorrow' },
                  { label: 'Location', value: 'Mexico City · Open to relocation worldwide' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-6 py-3 border-b border-[#1a2332] last:border-0">
                    <span className="text-xs font-mono text-slate-600 uppercase tracking-widest w-24 flex-shrink-0 pt-0.5">{label}</span>
                    <span className="text-sm text-slate-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
