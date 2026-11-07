import Section from './Section'

const groups = [
  { title: 'Robot learning', skills: ['Deep RL', 'Imitation learning', 'ACT', 'Diffusion Policy', 'LeRobot', 'Sim-to-real transfer', 'PyTorch', 'Stable-Baselines3'] },
  { title: 'Simulation and robotics', skills: ['Isaac Lab', 'Isaac Sim', 'Omniverse / Replicator', 'MuJoCo / robosuite', 'ROS / ROS 2', 'Franka Emika', 'Intel RealSense'] },
  { title: 'AI engineering', skills: ['LangGraph', 'Vertex AI Agent Builder', 'Hybrid RAG', 'MCP servers', 'GCP / Cloud Run'] },
  { title: 'Programming', skills: ['Python', 'C++', 'Go', 'SQL', 'Linux', 'Docker'] },
  { title: 'Perception', skills: ['OpenCV', 'YOLO', '6-DOF pose estimation', 'Camera calibration'] },
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="border-t border-rule">
        {groups.map(({ title, skills }) => (
          <div key={title} className="grid gap-3 border-b border-rule py-6 md:grid-cols-[1fr_2.2fr] md:gap-12">
            <dt className="font-bold text-lg">{title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <li key={s} className="rounded-full border border-rule px-3.5 py-1 text-[0.95rem] transition-colors hover:bg-hero hover:border-hero hover:text-white">{s}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
