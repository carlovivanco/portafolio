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
      'Dissertation: Deep RL Control System for Autonomous Robotic Manipulation — SAC, PPO, TD3 on Franka Emika arm.',
    ],
    tags: ['ROS / ROS2', 'Deep RL', 'Computer Vision', 'RTOS', 'Embedded', 'Fuzzy Logic', 'PyTorch'],
  },
  {
    degree: 'Bachelor of Science',
    field: 'Mechatronics Engineering',
    institution: 'Tecnológico de Monterrey',
    location: 'Mexico City, Mexico',
    period: 'Aug 2021 – Jun 2026',
    note: 'GPA 95/100 · Academic Talent Scholarship',
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
    <section id="education" className="py-28 px-6 divider">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div>
            <span className="label block mb-6">Education</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] leading-tight">
              Academic<br />background.
            </h2>
          </div>

          <div className="space-y-14">
            {education.map((e, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-4">
                  <div>
                    <p className="font-mono text-xs text-[var(--text-3)] uppercase tracking-widest mb-1">{e.degree}</p>
                    <h3 className="text-[var(--text)] font-semibold text-lg">{e.field}</h3>
                    <p className="text-sm text-[var(--text-3)] font-mono mt-0.5">{e.institution} · {e.location}</p>
                  </div>
                  <div className="flex-shrink-0 sm:text-right">
                    <p className="text-xs font-mono text-[var(--text-3)]">{e.period}</p>
                    <p className="text-xs font-mono text-amber-500/50 mt-0.5">{e.note}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-5 pl-1 border-l border-white/[0.05] ml-0 pl-4">
                  {e.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-[var(--text-2)] leading-relaxed">{h}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {e.tags.map(t => (
                    <span key={t} className="tag px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>

                {i < education.length - 1 && <div className="mt-14 divider" />}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
