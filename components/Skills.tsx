'use client'

const categories = [
  {
    title: 'Programming',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Go', level: 80 },
      { name: 'C++', level: 78 },
      { name: 'JavaScript / SQL', level: 75 },
      { name: 'MATLAB', level: 82 },
    ],
  },
  {
    title: 'AI / ML & Robotics',
    icon: '🤖',
    skills: [
      { name: 'Multi-Agent AI (LangGraph)', level: 90 },
      { name: 'RAG Pipelines / LLMs', level: 88 },
      { name: 'Deep RL (SAC, PPO, TD3)', level: 82 },
      { name: 'ROS / ROS2', level: 85 },
      { name: 'TensorFlow / PyTorch', level: 80 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'Google Cloud Platform', level: 85 },
      { name: 'Cloud Run / Vertex AI', level: 83 },
      { name: 'Docker / CI/CD', level: 80 },
      { name: 'Linux / GitHub', level: 90 },
      { name: 'FastAPI / Node.js', level: 75 },
    ],
  },
  {
    title: 'Embedded & Hardware',
    icon: '⚙️',
    skills: [
      { name: 'CAN/LIN/SomeIP/UDS', level: 82 },
      { name: 'PLC (Siemens / Rockwell)', level: 78 },
      { name: 'UART / SPI / I2C', level: 75 },
      { name: 'Altium / LTspice', level: 72 },
      { name: 'Vector CANalyzer', level: 78 },
    ],
  },
]

const toolGroups = [
  {
    label: 'Computer Vision',
    items: ['OpenCV', 'YOLO', 'RealSense', 'Stable-Baselines3'],
  },
  {
    label: 'AI & Data',
    items: ['LangGraph', 'Qdrant', 'FastAPI', 'Gazebo', 'Robosuite'],
  },
  {
    label: 'CAD / Simulation',
    items: ['SolidWorks', 'CATIA', 'PTC Creo', 'ANSYS', 'MATLAB/Simulink'],
  },
  {
    label: 'Testing',
    items: ['TestStand', 'LabVIEW', 'PyTest', 'SIL/HIL/MIL'],
  },
]

const languages = [
  { lang: 'Spanish', level: 'Native', pct: 100 },
  { lang: 'English', level: 'C1 — IELTS Advanced', pct: 90 },
  { lang: 'German', level: 'A2 — Goethe', pct: 30 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-3">Tech</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Expertise</h2>
        </div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {categories.map(({ title, icon, skills }) => (
            <div key={title} className="card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">{icon}</span>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-slate-300">{name}</span>
                      <span className="text-xs font-mono text-slate-500">{level}%</span>
                    </div>
                    <div className="h-1.5 bg-[#1e2d3d] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool groups + Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card rounded-xl p-6">
            <h3 className="text-white font-semibold mb-5">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 gap-4">
              {toolGroups.map(({ label, items }) => (
                <div key={label}>
                  <p className="text-xs font-mono text-slate-600 mb-2 uppercase tracking-wider">{label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((t) => (
                      <span key={t} className="tag text-xs px-2.5 py-1 rounded-md font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card rounded-xl p-6">
            <h3 className="text-white font-semibold mb-5">Languages</h3>
            <div className="space-y-5">
              {languages.map(({ lang, level, pct }) => (
                <div key={lang}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-slate-300">{lang}</span>
                    <span className="text-xs font-mono text-slate-500">{level}</span>
                  </div>
                  <div className="h-1.5 bg-[#1e2d3d] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-[#1e2d3d]">
                <p className="text-xs font-mono text-slate-600 mb-3 uppercase tracking-wider">Soft Skills</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Leadership', 'Cross-functional', 'Problem-solving', 'Adaptability', 'Technical Comm.'].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
