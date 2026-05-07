export default function About() {
  return (
    <section id="about" className="py-28 px-6 divider">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div>
            <span className="label block mb-6">About</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] leading-tight">
              Engineering systems that think,<br className="hidden md:block" /> learn & move.
            </h2>
          </div>

          <div className="space-y-10">
            <div className="space-y-4 text-[var(--text-2)] leading-relaxed">
              <p>
                I'm a Mechatronics Engineer and MSc in Intelligent Systems & Robotics with 3+ years of
                experience across automotive, energy, and AI. I've delivered high-impact automation at{' '}
                <span className="text-[var(--text)] font-medium">Tesla</span>,{' '}
                <span className="text-[var(--text)] font-medium">Ford</span>, and{' '}
                <span className="text-[var(--text)] font-medium">Stellantis</span> — cutting firmware
                test development time by 25% and system validation time by 50%.
              </p>
              <p>
                Currently building enterprise-grade multi-agent AI systems, RAG pipelines, and cloud-native
                solutions at <span className="text-[var(--text)] font-medium">Nexxia</span> on GCP —
                replacing entire manual processes with intelligent, event-driven automation.
              </p>
              <p>
                My MSc dissertation at the{' '}
                <span className="text-[var(--text)] font-medium">University of Essex</span> applied deep
                reinforcement learning (SAC, PPO, TD3) to autonomous robotic manipulation on a Franka Emika
                arm with real-time computer vision.
              </p>
            </div>

            {/* Fact table */}
            <div className="divide-y divide-white/[0.06]">
              {[
                { k: 'GPA',        v: '95 / 100' },
                { k: 'Scholarship',v: 'Academic Talent — Tecnológico de Monterrey' },
                { k: 'English',    v: 'IELTS C1 Advanced' },
                { k: 'Award',      v: "High Achiever Badge — Ford's Intern City of Tomorrow" },
                { k: 'Location',   v: 'Mexico City · Open to relocation worldwide' },
              ].map(({ k, v }) => (
                <div key={k} className="flex gap-8 py-3.5 group">
                  <span className="font-mono text-xs text-[var(--text-3)] uppercase tracking-widest w-28 flex-shrink-0 pt-0.5 group-hover:text-[var(--text-2)] transition-colors">{k}</span>
                  <span className="text-sm text-[var(--text-2)]">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
