'use client'

const experiences = [
  {
    role: 'AI Automation Engineer',
    company: 'Nexxia',
    period: 'Feb 2026 – Present',
    location: 'Mexico City, Mexico',
    current: true,
    bullets: [
      'Leading full-stack development of an enterprise AI platform on GCP with professional software architecture, security-hardened infrastructure, and production-grade CI/CD deployment pipelines.',
      'Designing and deploying modular multi-agent AI frameworks using Vertex AI Agent Builder and LangGraph, with hybrid RAG pipelines and MCP server integrations enabling specialized tool access per agent across complex, multi-step automated business workflows.',
      'Architecting scalable agentic automation pipelines that replace manual operational processes end-to-end, leveraging Cloud Run and event-driven orchestration for intelligent, low-latency automation across cross-functional business units.',
    ],
    tags: ['GCP', 'Vertex AI', 'LangGraph', 'RAG', 'Multi-Agent', 'Cloud Run', 'Python', 'CI/CD'],
  },
  {
    role: 'Software Engineering Manufacturing Test Intern',
    company: 'Tesla',
    period: 'Aug – Dec 2025',
    location: 'Palo Alto, California',
    current: false,
    bullets: [
      'Designed software tools and automation frameworks for high-voltage battery validation, enabling seamless communication between testing equipment and vehicle ECUs using Go, C++, and Python.',
      'Built integrated test solutions with cross-functional teams, analyzing electronic schematics and CAN/UDS networks to deliver embedded test software and complete, modular HV battery test platforms from concept to commissioning.',
      'Developed automated ECU code generation tools that cut test software development time by 25% per firmware release.',
    ],
    tags: ['Go', 'C++', 'Python', 'CAN / UDS', 'HV Battery', 'ECU', 'Embedded'],
  },
  {
    role: 'Software Integration Automation Trainee',
    company: 'Ford Motor Company',
    period: 'Jun – Sep 2024',
    location: 'Mexico City, Mexico',
    current: false,
    bullets: [
      'Developed and maintained automated validation frameworks for SIL, HIL, and MIL testing environments using Python, TestStand, LabVIEW, and PyTest; managed version control and CI/CD pipelines in GitHub.',
      'Integrated automated testing pipelines with CAN, LIN, SomeIP, and Break-Out Box (BOB) protocols, enabling seamless interaction with test hardware and accurate system-level validation.',
      'Debugged and resolved software defects during test development, improving robustness, traceability, and reliability of automation workflows.',
    ],
    tags: ['Python', 'TestStand', 'LabVIEW', 'PyTest', 'CAN / LIN / SomeIP', 'SIL / HIL / MIL'],
  },
  {
    role: 'Feature Systems Engineering Trainee',
    company: 'Ford Motor Company',
    period: 'Jun 2023 – Jun 2024',
    location: 'Mexico City, Mexico',
    current: false,
    bullets: [
      'Designed digital twins in MATLAB/Simulink with state machine–based control system simulations to model and validate vehicle features such as Trailer Brake Control.',
      'Simulated complete system behavior including module interactions and CAN signals to verify functional requirements and optimize control logic prior to hardware integration.',
      'Designed on-vehicle automation testing with cross-functional teams, reducing system validation time by 50% and earning the High Achiever Badge in Ford\'s Intern City of Tomorrow Challenge.',
    ],
    tags: ['MATLAB', 'Simulink', 'Digital Twins', 'CAN', 'State Machine', 'Control Systems'],
  },
  {
    role: 'Electrical Quality Engineering Intern',
    company: 'Stellantis',
    period: 'Jan – Jun 2023',
    location: 'Mexico City, Mexico',
    current: false,
    bullets: [
      'Identified and implemented quality system improvements using JIRA for issue tracking and Power BI and Excel for data analysis, achieving a 30% reduction in overall processing time.',
      'Resolved harness and module connection failures by collaborating with cross-functional engineering teams to diagnose root causes and deploy corrective actions.',
    ],
    tags: ['JIRA', 'Power BI', 'Excel', 'Quality Systems', 'Root Cause Analysis'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-[#1a2332]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left label */}
          <div className="md:col-span-3">
            <p className="section-label mt-1">Experience</p>
          </div>

          {/* Right content */}
          <div className="md:col-span-9 space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="group">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-white font-semibold text-base">{exp.role}</h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-mono rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">
                          now
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 text-sm text-slate-500">
                      <span>{exp.company}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-600">{exp.period}</span>
                </div>

                <ul className="mt-4 space-y-2.5 mb-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="text-blue-600 mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-blue-600 block" />
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

                {i < experiences.length - 1 && (
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
