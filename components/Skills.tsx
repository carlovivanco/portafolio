'use client'

const categories = [
  {
    title: 'Programming',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'TypeScript / JS', level: 82 },
      { name: 'C++', level: 75 },
      { name: 'Go', level: 65 },
      { name: 'MATLAB', level: 80 },
    ],
  },
  {
    title: 'AI & Robotics',
    icon: '🤖',
    skills: [
      { name: 'ROS / ROS2', level: 85 },
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 78 },
      { name: 'OpenCV', level: 82 },
      { name: 'LabView', level: 70 },
    ],
  },
  {
    title: 'Hardware & CAD',
    icon: '⚙️',
    skills: [
      { name: 'SolidWorks', level: 80 },
      { name: 'Altium Designer', level: 72 },
      { name: 'CATIA', level: 68 },
      { name: 'PTC Creo', level: 70 },
      { name: 'LTspice', level: 65 },
    ],
  },
  {
    title: 'Industrial',
    icon: '🏭',
    skills: [
      { name: 'Siemens TIA / PLC', level: 78 },
      { name: 'Rockwell / Studio 5000', level: 72 },
      { name: 'Vector CANalyzer', level: 75 },
      { name: 'ANSYS', level: 60 },
      { name: 'Minitab / SPC', level: 70 },
    ],
  },
]

const tools = [
  'Linux', 'Git / GitHub', 'JIRA', 'Docker', 'Next.js', 'Node.js',
  'Oscilloscope', 'Signal Generator', 'CNC', 'Excel',
]

const languages = [
  { lang: 'Spanish', level: 'Native', pct: 100 },
  { lang: 'English', level: 'C1 — IELTS', pct: 90 },
  { lang: 'German', level: 'A2 — Goethe', pct: 30 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-3">Tech</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Tools</h2>
        </div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="tag text-xs px-3 py-1.5 rounded-lg font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="card rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Languages</h3>
            <div className="space-y-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
