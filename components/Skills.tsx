const groups = [
  {
    title: 'Programming',
    skills: ['Python', 'Go', 'C++', 'JavaScript', 'SQL', 'MATLAB'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Multi-Agent AI', 'LangGraph', 'RAG Pipelines', 'Deep RL — SAC / PPO / TD3', 'TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'Stable-Baselines3', 'Qdrant'],
  },
  {
    title: 'Robotics',
    skills: ['ROS / ROS2', 'Gazebo', 'Robosuite', 'Franka Emika', 'Intel RealSense'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Google Cloud Platform', 'Vertex AI', 'Cloud Run', 'Docker', 'CI/CD Pipelines', 'FastAPI', 'Linux', 'GitHub'],
  },
  {
    title: 'Embedded & Protocols',
    skills: ['CAN / LIN / SomeIP / UDS', 'UART / SPI / I2C / Ethernet', 'PLC — Siemens TIA', 'Rockwell Studio 5000', 'Vector CANalyzer', 'LabVIEW', 'RTOS'],
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
    <section id="skills" className="py-28 px-6 divider">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div>
            <span className="label block mb-6">Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] leading-tight">
              Technologies<br />& expertise.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {groups.map(({ title, skills }) => (
              <div key={title}>
                <h3 className="font-mono text-xs text-[var(--text-3)] uppercase tracking-widest mb-4 pb-3 border-b border-white/[0.06]">
                  {title}
                </h3>
                <ul className="space-y-2">
                  {skills.map(s => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-[var(--text-2)]">
                      <span className="w-1 h-1 rounded-full bg-[var(--accent)] opacity-60 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
