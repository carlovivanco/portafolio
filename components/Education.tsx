'use client'

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
      'Electronic Design, Embedded Systems with RTOS, Microcontrollers (UART, SPI, I2C, Ethernet).',
      'Dissertation: Deep RL Control System for Autonomous Robotic Manipulation — SAC, PPO, TD3 on Franka Emika arm.',
    ],
    tags: ['ROS / ROS2', 'Deep RL', 'Computer Vision', 'RTOS', 'Embedded Systems', 'Fuzzy Logic', 'PyTorch'],
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
    <section id="education" className="py-24 px-6 border-t border-[#1a2332]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left label */}
          <div className="md:col-span-3">
            <p className="section-label mt-1">Education</p>
          </div>

          {/* Right content */}
          <div className="md:col-span-9 space-y-12">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-1">{edu.degree}</p>
                    <h3 className="text-white font-semibold text-lg">{edu.field}</h3>
                    <div className="flex items-center gap-2 mt-0.5 text-sm text-slate-500">
                      <span>{edu.institution}</span>
                      <span>·</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-600 block">{edu.period}</span>
                    <span className="text-xs font-mono text-amber-600/60 mt-0.5 block">{edu.note}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 mb-4">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-blue-600 block" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <span key={tag} className="tag text-xs px-2.5 py-1 rounded-md font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                {i < education.length - 1 && (
                  <div className="mt-12 border-t border-[#1a2332]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
