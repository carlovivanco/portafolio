'use client'

const groups = [
  {
    title: 'Programming',
    skills: ['Python', 'Go', 'C++', 'JavaScript', 'SQL', 'MATLAB'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Multi-Agent AI', 'LangGraph', 'RAG Pipelines', 'Deep RL — SAC / PPO / TD3', 'TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'Stable-Baselines3'],
  },
  {
    title: 'Robotics',
    skills: ['ROS / ROS2', 'Gazebo', 'Robosuite', 'Franka Emika', 'RealSense'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Google Cloud Platform', 'Vertex AI', 'Cloud Run', 'Docker', 'CI/CD', 'FastAPI', 'Linux', 'GitHub'],
  },
  {
    title: 'Embedded & Protocols',
    skills: ['CAN / LIN / SomeIP / UDS', 'UART / SPI / I2C / Ethernet', 'PLC — Siemens TIA / Rockwell', 'Studio 5000', 'Vector CANalyzer', 'LabVIEW', 'RTOS'],
  },
  {
    title: 'CAD & Simulation',
    skills: ['SolidWorks', 'CATIA', 'PTC Creo', 'Altium Designer', 'LTspice', 'ANSYS', 'MATLAB / Simulink'],
  },
  {
    title: 'Testing & Validation',
    skills: ['TestStand', 'PyTest', 'SIL / HIL / MIL', 'Power BI', 'Minitab'],
  },
  {
    title: 'Languages',
    skills: ['Spanish — Native', 'English — C1 IELTS', 'German — A2 Goethe'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {groups.map(({ title, skills }) => (
            <div key={title}>
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 pb-3 border-b border-[#1a2332]">
                {title}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
