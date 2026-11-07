import Section from './Section'

// Update monthly.
const updated = 'November 2026'
const rows = [
  {
    title: 'Multi-agent AI platform',
    where: 'Nexxia, full-time',
    text: 'Agentic systems on GCP with Vertex AI Agent Builder, LangGraph, hybrid RAG and MCP servers. The model router reaches 96% routing accuracy, and event-driven Cloud Run pipelines replace manual processes.',
  },
  {
    title: 'Imitation learning on an SO-101',
    where: 'LeRobot, personal',
    text: 'Leader–follower teleoperation to record my own demonstrations, then training ACT and Diffusion Policy models on the arm.',
  },
  {
    title: 'RL manipulation on a Franka',
    where: 'Isaac Lab, personal',
    text: 'Reinforcement learning for the Panda arm, picking up where the dissertation left off on sim-to-real transfer.',
  },
  {
    title: 'A digital twin of the workcell',
    where: 'Omniverse and Isaac Sim, personal',
    text: 'The Franka workcell rebuilt in Omniverse, with Replicator generating synthetic data to train perception models.',
  },
]

export default function Now() {
  return (
    <Section id="now" title="What I'm working on">
      <p className="text-muted -mt-6 mb-10">Last updated {updated}.</p>
      <ul className="border-t border-rule">
        {rows.map(r => (
          <li key={r.title} className="group relative border-b border-rule">
            <div className="absolute inset-0 -mx-6 origin-bottom scale-y-0 rounded-2xl bg-hero transition-transform duration-300 ease-out group-hover:scale-y-100" aria-hidden />
            <div className="relative grid gap-3 py-8 transition-colors duration-300 group-hover:text-white md:grid-cols-[1fr_1.1fr] md:gap-12 md:py-10">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold leading-tight">{r.title}</h3>
                <p className="mt-2 text-muted transition-colors duration-300 group-hover:text-white/80">{r.where}</p>
              </div>
              <p className="max-w-xl md:self-center">{r.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
