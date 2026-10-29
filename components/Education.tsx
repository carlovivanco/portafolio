import Section from './Section'

const education = [
  {
    degree: 'Master of Science',
    field: 'Intelligent Systems and Robotics',
    institution: 'University of Essex',
    location: 'Colchester, United Kingdom',
    period: 'Oct 2024 – Nov 2025',
    note: 'Study Abroad Double Degree',
    highlights: [
      'Intelligent Systems & Robotics (Fuzzy Logic), Deep Learning & Neural Networks, Machine Learning, Computer Vision.',
      'Electronic Design, Embedded Systems with RTOS, Microcontrollers — UART, SPI, I2C, Ethernet.',
      'Dissertation: Deep RL control for autonomous robotic manipulation — Isaac Lab, 15M training steps, deployed on a real Franka Emika arm.',
    ],
    tags: ['ROS / ROS2', 'Deep RL', 'Computer Vision', 'RTOS', 'Embedded', 'Fuzzy Logic', 'PyTorch'],
  },
  {
    degree: 'Bachelor of Science',
    field: 'Mechatronics Engineering',
    institution: 'Tecnológico de Monterrey',
    location: 'Mexico City, Mexico',
    period: 'Aug 2021 – Jun 2026',
    note: 'GPA 95/100 · Academic Talent Scholarship · IELTS C1 Advanced',
    highlights: [
      'Mechanical & Electronic Design (CAD, PCBA), Control Systems, Industrial Automation, Robotics.',
      'Analog & Digital Systems, CNC & PLC Programming — Siemens TIA and Rockwell Studio 5000.',
      'Project Management with cross-functional engineering teams.',
    ],
    tags: ['PLC Siemens / Rockwell', 'SolidWorks', 'CATIA', 'Altium', 'MATLAB / Simulink', 'CNC'],
  },
]

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-12">
        {education.map(e => (
          <li key={e.field} className="grid gap-3 lg:grid-cols-[10rem_1fr] lg:gap-8">
            <p className="font-mono text-sm text-muted">{e.period}</p>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{e.degree}, {e.field}</h3>
              <p className="text-muted">{e.institution} · {e.location}</p>
              <p className="text-sm text-muted">{e.note}</p>
              <ul className="mt-4 space-y-2 max-w-2xl list-disc pl-5 marker:text-muted">
                {e.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              <p className="mt-4 text-sm text-muted max-w-2xl">{e.tags.join(' · ')}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
