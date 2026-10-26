import Section from './Section'

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
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-12 gap-y-6 sm:grid-cols-2 max-w-4xl">
        {groups.map(({ title, skills }) => (
          <div key={title} className="border-t border-rule pt-3">
            <dt className="font-semibold">{title}</dt>
            <dd className="mt-1 text-muted">{skills.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
