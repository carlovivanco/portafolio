'use client'

const experiences = [
  {
    role: 'AI Automation Engineer',
    company: 'Nexxia',
    period: 'Feb 2026 – Present',
    location: 'Mexico City, Mexico · Full-Time, On-Site',
    current: true,
    color: '#8b5cf6',
    bullets: [
      'Leading full-stack development of an enterprise AI platform on GCP with professional software architecture, security-hardened infrastructure, and production-grade CI/CD deployment pipelines.',
      'Designing and deploying modular multi-agent AI frameworks using Vertex AI Agent Builder and LangGraph, with hybrid RAG pipelines and MCP server integrations enabling specialized tool access per agent across complex, multi-step automated business workflows.',
      'Architecting scalable agentic automation pipelines that replace manual operational processes end-to-end, leveraging Cloud Run and event-driven orchestration for intelligent, low-latency automation across cross-functional business units.',
    ],
    tags: ['GCP', 'Vertex AI', 'LangGraph', 'RAG', 'Multi-Agent', 'Cloud Run', 'CI/CD', 'Python'],
  },
  {
    role: 'Software Engineering Manufacturing Test Intern',
    company: 'Tesla',
    period: 'Aug 2025 – Dec 2025',
    location: 'Palo Alto, California, USA · On-Site',
    current: false,
    color: '#e11d48',
    bullets: [
      'Designed software tools and automation frameworks for high-voltage battery validation, enabling seamless communication between testing equipment and vehicle ECUs using Go, C++, and Python.',
      'Built integrated test solutions with cross-functional teams, analyzing electronic schematics and CAN/UDS networks to deliver embedded test software and complete, modular HV battery test platforms from concept to commissioning.',
      'Developed and deployed custom test equipment and communication software, creating automated ECU code generation tools that cut test software development time by 25% per firmware release.',
    ],
    tags: ['Go', 'C++', 'Python', 'CAN/UDS', 'HV Battery', 'ECU', 'Embedded Systems'],
  },
  {
    role: 'Software Integration Automation Trainee',
    company: 'Ford Motor Company',
    period: 'Jun 2024 – Sep 2024',
    location: 'Mexico City, Mexico',
    current: false,
    color: '#3b82f6',
    bullets: [
      'Developed and maintained automated validation frameworks for SIL, HIL, and MIL testing environments using Python, TestStand, LabVIEW, and PyTest; managed version control and CI/CD pipelines in GitHub.',
      'Integrated automated testing pipelines with CAN, LIN, SomeIP, and Break-Out Box (BOB) protocols, enabling seamless interaction with test hardware and accurate system-level validation.',
      'Debugged and resolved software defects during test development, improving robustness, traceability, and reliability of automation workflows across integration stages.',
    ],
    tags: ['Python', 'TestStand', 'LabVIEW', 'PyTest', 'CAN/LIN/SomeIP', 'SIL/HIL/MIL', 'CI/CD'],
  },
  {
    role: 'Feature Systems Engineering Trainee',
    company: 'Ford Motor Company',
    period: 'Jun 2023 – Jun 2024',
    location: 'Mexico City, Mexico',
    current: false,
    color: '#3b82f6',
    bullets: [
      'Designed digital twins in MATLAB/Simulink with state machine–based control system simulations to model and validate vehicle features such as Trailer Brake Control.',
      'Simulated complete system behavior including module interactions and CAN signals to verify functional requirements and optimize control logic prior to hardware integration.',
      'Designed breadboard and on-vehicle automation testing with cross-functional teams, reducing system validation time by 50% and earning the High Achiever Badge in Ford\'s Intern City of Tomorrow Challenge.',
    ],
    tags: ['MATLAB', 'Simulink', 'Digital Twins', 'CAN', 'Control Systems', 'State Machine'],
  },
  {
    role: 'Electrical Quality Engineering Intern',
    company: 'Stellantis',
    period: 'Jan 2023 – Jun 2023',
    location: 'Mexico City, Mexico',
    current: false,
    color: '#f59e0b',
    bullets: [
      'Identified and implemented quality system improvements using JIRA for issue tracking and Power BI and Excel for data analysis, achieving a 30% reduction in overall processing time.',
      'Resolved harness and module connection failures by collaborating with cross-functional engineering teams to diagnose root causes and deploy corrective actions, reducing recurring defect rates.',
    ],
    tags: ['JIRA', 'Power BI', 'Excel', 'Quality Systems', 'Root Cause Analysis'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-[#1e2d3d] to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-[18px] top-6 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center"
                  style={{ borderColor: exp.color }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: exp.color }} />
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
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-medium" style={{ color: exp.color }}>{exp.company}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-500">{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-sm font-mono text-slate-500 flex-shrink-0">{exp.period}</span>
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
