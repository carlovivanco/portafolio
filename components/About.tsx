import Section from './Section'

const facts = [
  ['GPA', '95 / 100'],
  ['Scholarship', 'Academic Talent — Tecnológico de Monterrey'],
  ['English', 'IELTS C1 Advanced'],
  ['Award', "High Achiever Badge — Ford's Intern City of Tomorrow"],
  ['Location', 'Mexico City · Open to relocation worldwide'],
]

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-5 text-lg">
        <p>
          I'm a Mechatronics Engineer and MSc in Intelligent Systems & Robotics with 3+ years of
          experience across automotive, energy, and AI. I've delivered high-impact automation at Tesla,
          Ford, and Stellantis, cutting firmware test development time by 25% and system validation
          time by 50%.
        </p>
        <p>
          Currently I build enterprise multi-agent AI systems, RAG pipelines, and cloud-native solutions
          at Nexxia on GCP, replacing manual processes with event-driven automation.
        </p>
        <p>
          My MSc dissertation at the University of Essex applied deep reinforcement learning (SAC, PPO,
          TD3) to autonomous robotic manipulation on a Franka Emika arm with real-time computer vision.
        </p>
      </div>
      <dl className="mt-12 max-w-2xl border-t border-rule">
        {facts.map(([k, v]) => (
          <div key={k} className="grid gap-1 sm:grid-cols-[9rem_1fr] py-3 border-b border-rule">
            <dt className="text-sm text-muted">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
