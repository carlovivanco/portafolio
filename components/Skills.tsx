import Section from './Section'

const groups = [
  {
    title: 'Robot Learning',
    skills: ['Deep RL', 'Imitation learning', 'Sim-to-real transfer', 'PyTorch', 'Stable-Baselines3'],
  },
  {
    title: 'Simulation & Robotics',
    skills: ['Isaac Lab', 'MuJoCo / robosuite', 'ROS / ROS 2', 'Franka Emika', 'Intel RealSense'],
  },
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'Go', 'SQL', 'Linux', 'Docker'],
  },
  {
    title: 'Perception',
    skills: ['OpenCV', 'YOLO', '6-DOF pose estimation', 'Camera calibration'],
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
