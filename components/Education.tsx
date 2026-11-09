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
      'Dissertation: Imitation learning + deep RL control for autonomous robotic manipulation — Isaac Lab, 15M training steps, deployed on a real Franka Emika arm.',
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
      <ol className="border-t border-rule">
        {education.map(e => (
          <li key={e.field} className="grid gap-4 border-b border-rule py-10 md:grid-cols-[1fr_1.1fr] md:gap-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">{e.institution}</h3>
              <p className="mt-1 font-medium">{e.degree}, {e.field}</p>
              <p className="text-muted">{e.period}, {e.location}</p>
              <p className="text-sm text-muted">{e.note}</p>
            </div>
            <div>
              <ul className="space-y-3 max-w-xl list-disc pl-5 marker:text-accent">
                {e.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              <p className="num mt-4 text-[0.8rem] text-muted">{e.tags.join(', ')}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
