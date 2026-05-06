'use client'

const experiences = [
  {
    role: 'Software Engineering Manufacturing Test Intern',
    company: 'Tesla',
    period: 'Aug 2025 – Present',
    location: 'United States',
    current: true,
    logo: '⚡',
    color: '#e11d48',
    bullets: [
      'Developing and maintaining manufacturing test software for production validation systems',
      'Working with Python and automation frameworks to ensure hardware/software reliability at scale',
      'Collaborating with cross-functional teams across manufacturing and software engineering',
      'Contributing to tooling that directly impacts vehicle production quality and throughput',
    ],
    tags: ['Python', 'Manufacturing Test', 'Automation', 'Hardware Validation'],
  },
  {
    role: 'Software Integration Automation Trainee',
    company: 'Ford Motor Company',
    period: 'Jun 2024',
    location: 'Mexico',
    logo: '🔵',
    color: '#3b82f6',
    bullets: [
      'Automated integration workflows for vehicle feature systems, reducing manual testing cycles',
      'Worked with Vector CANalyzer for CAN bus analysis and validation',
      'Implemented test scripts in Python for ECU integration and communication verification',
      'Collaborated with global engineering teams across US and Mexico sites',
    ],
    tags: ['Python', 'Vector CANalyzer', 'CAN Bus', 'ECU Testing', 'Automation'],
  },
  {
    role: 'Feature Systems Engineering Trainee',
    company: 'Ford Motor Company',
    period: 'Jun 2023',
    location: 'Mexico',
    logo: '🔵',
    color: '#3b82f6',
    bullets: [
      'Supported feature validation for embedded vehicle systems and control units',
      'Performed signal analysis using oscilloscopes and signal generators',
      'Documented test procedures and defect reports in JIRA',
      'Assisted in root cause analysis for system-level anomalies',
    ],
    tags: ['Embedded Systems', 'JIRA', 'Oscilloscope', 'Signal Analysis'],
  },
  {
    role: 'Electrical Quality Engineering Intern',
    company: 'Ford Motor Company',
    period: 'Jan 2023',
    location: 'Mexico',
    logo: '🔵',
    color: '#3b82f6',
    bullets: [
      'Supported electrical quality assurance processes on the production line',
      'Used Minitab for statistical process control and quality data analysis',
      'Identified and tracked electrical defects using standardized quality frameworks',
      'Contributed to continuous improvement initiatives in the quality department',
    ],
    tags: ['Minitab', 'SPC', 'Quality Assurance', 'Electrical Systems'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-[#1e2d3d] to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-current hidden md:flex items-center justify-center"
                  style={{ color: exp.color, borderColor: exp.color }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>

                <div className="card rounded-xl p-6 gradient-border">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded text-xs font-mono bg-green-500/10 border border-green-500/30 text-green-400">
                            current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-blue-400 font-medium">{exp.company}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-500">{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-sm font-mono text-slate-500">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="text-blue-500 mt-1.5 flex-shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag text-xs px-2.5 py-1 rounded-md font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
