'use client'

import { Bot, Cog } from 'lucide-react'

const education = [
  {
    degree: 'Master of Science',
    field: 'Intelligent Systems and Robotics',
    institution: 'University of Essex',
    location: 'Colchester, United Kingdom',
    period: 'Oct 2024 – Nov 2025',
    note: 'Study Abroad Double Degree',
    Icon: Bot,
    highlights: [
      'Intelligent Systems & Robotics (Fuzzy Logic), Deep Learning & Neural Networks, Machine Learning, Computer Vision.',
      'Electronic Design, Embedded Systems with RTOS, Microcontrollers (UART, SPI, I2C, Ethernet).',
      'Dissertation: Deep RL Control System for Autonomous Robotic Manipulation using SAC, PPO, and TD3 on a Franka Emika arm.',
    ],
    tags: ['ROS/ROS2', 'Deep RL', 'Computer Vision', 'RTOS', 'Embedded Systems', 'Fuzzy Logic', 'PyTorch'],
  },
  {
    degree: 'Bachelor of Science',
    field: 'Mechatronics Engineering',
    institution: 'Tecnológico de Monterrey',
    location: 'Mexico City, Mexico',
    period: 'Aug 2021 – Jun 2026',
    note: 'GPA: 95/100 · Academic Talent Scholarship',
    Icon: Cog,
    highlights: [
      'Mechanical & Electronic Design (CAD, PCBA), Control Systems, Industrial Automation, Robotics.',
      'Analog & Digital Systems, CNC & PLC Programming (Siemens TIA, Rockwell Studio 5000).',
      'Project Management with cross-functional engineering teams.',
    ],
    tags: ['PLC (Siemens/Rockwell)', 'SolidWorks', 'CATIA', 'Altium', 'MATLAB/Simulink', 'CNC', 'Control Systems'],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-3">Academic</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="card rounded-xl p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <edu.Icon size={24} className="text-blue-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">{edu.degree}</p>
                      <h3 className="text-white text-xl font-bold">{edu.field}</h3>
                    </div>
                    <span className="text-xs font-mono text-slate-600">{edu.period}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-1 text-sm">
                    <span className="text-blue-400 font-medium">{edu.institution}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-500">{edu.location}</span>
                  </div>
                  <p className="text-xs font-mono text-amber-500/70 mb-4">{edu.note}</p>

                  <ul className="space-y-1.5 mb-4">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="text-blue-500 mt-1 flex-shrink-0">›</span>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
