const experiences = [
  {
    role: 'AI Automation Engineer',
    company: 'Nexxia',
    period: 'Feb 2026 – Present',
    location: 'Mexico City · Full-Time',
    current: true,
    accent: '#8b5cf6',
    bullets: [
      'Leading full-stack development of an enterprise AI platform on GCP with security-hardened infrastructure and production-grade CI/CD pipelines, unifying process management and workforce operations across the organization.',
      'Designing modular multi-agent AI frameworks using Vertex AI Agent Builder and LangGraph, with hybrid RAG pipelines and MCP server integrations enabling specialized tool access across complex, multi-step automated workflows.',
      'Architecting agentic automation pipelines that replace manual processes end-to-end, leveraging Cloud Run and event-driven orchestration for intelligent, low-latency automation across business units.',
    ],
    tags: ['GCP', 'Vertex AI', 'LangGraph', 'RAG', 'Multi-Agent', 'Cloud Run', 'Python', 'CI/CD'],
  },
  {
    role: 'Software Engineering Manufacturing Test Intern',
    company: 'Tesla',
    period: 'Aug – Dec 2025',
    location: 'Palo Alto, California',
    current: false,
    accent: '#e11d48',
    bullets: [
      'Designed software tools and automation frameworks for high-voltage battery validation, enabling seamless communication between testing equipment and vehicle ECUs using Go, C++, and Python.',
      'Analyzed electronic schematics and CAN/UDS networks to deliver embedded test software and complete, modular HV battery test platforms from concept to commissioning.',
      'Created automated ECU code generation tools that cut test software development time by 25% per firmware release.',
    ],
    tags: ['Go', 'C++', 'Python', 'CAN / UDS', 'HV Battery', 'ECU', 'Embedded'],
  },
  {
    role: 'Software Integration Automation Trainee',
    company: 'Ford Motor Company',
    period: 'Jun – Sep 2024',
    location: 'Mexico City',
    current: false,
    accent: '#3b82f6',
    bullets: [
      'Developed automated validation frameworks for SIL, HIL, and MIL testing using Python, TestStand, LabVIEW, and PyTest; managed CI/CD pipelines in GitHub.',
      'Integrated testing pipelines with CAN, LIN, SomeIP, and Break-Out Box (BOB) protocols, enabling accurate system-level validation against test hardware.',
      'Debugged software defects during test development, improving robustness, traceability, and reliability across integration stages.',
    ],
    tags: ['Python', 'TestStand', 'LabVIEW', 'PyTest', 'CAN / LIN / SomeIP', 'SIL / HIL / MIL'],
  },
  {
    role: 'Feature Systems Engineering Trainee',
    company: 'Ford Motor Company',
    period: 'Jun 2023 – Jun 2024',
    location: 'Mexico City',
    current: false,
    accent: '#3b82f6',
    bullets: [
      'Designed digital twins in MATLAB/Simulink with state machine–based control simulations to model and validate vehicle features such as Trailer Brake Control.',
      'Simulated complete system behavior including module interactions and CAN signals to verify requirements and optimize control logic before hardware integration.',
      "Reduced system validation time by 50% and earned the High Achiever Badge in Ford's Intern City of Tomorrow Challenge.",
    ],
    tags: ['MATLAB', 'Simulink', 'Digital Twins', 'CAN', 'State Machine', 'Control Systems'],
  },
  {
    role: 'Electrical Quality Engineering Intern',
    company: 'Stellantis',
    period: 'Jan – Jun 2023',
    location: 'Mexico City',
    current: false,
    accent: '#f59e0b',
    bullets: [
      'Implemented quality system improvements using JIRA, Power BI, and Excel, achieving a 30% reduction in overall processing time and earlier detection of high-impact quality issues across production lines.',
      'Resolved harness and module failures by diagnosing root causes with cross-functional teams and deploying corrective actions to reduce recurring defect rates.',
    ],
    tags: ['JIRA', 'Power BI', 'Excel', 'Quality Systems', 'Root Cause Analysis'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 divider">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div>
            <span className="label block mb-6">Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] leading-tight">
              Where I've<br />worked.
            </h2>
          </div>

          <div className="space-y-14">
            {experiences.map((e, i) => (
              <div key={i}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: e.accent }} />
                      <h3 className="text-[var(--text)] font-semibold text-base">{e.role}</h3>
                      {e.current && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border"
                          style={{ color: e.accent, borderColor: `${e.accent}33`, background: `${e.accent}11` }}>
                          now
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-3)] font-mono ml-4 mt-0.5">
                      {e.company} · {e.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-3)] flex-shrink-0 ml-4 sm:ml-0 mt-0.5">{e.period}</span>
                </div>

                {/* Bullets */}
                <ul className="mt-4 space-y-2.5 mb-5 ml-4 pl-1 border-l border-white/[0.05]">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="pl-4 text-sm text-[var(--text-2)] leading-relaxed">{b}</li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 ml-4">
                  {e.tags.map(t => (
                    <span key={t} className="tag px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>

                {i < experiences.length - 1 && <div className="mt-14 divider" />}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
