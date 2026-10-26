import Section from './Section'

const experiences = [
  {
    role: 'AI Automation Engineer',
    company: 'Nexxia',
    period: 'Feb 2026 – Present',
    location: 'Mexico City · Full-Time',
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
    bullets: [
      'Implemented quality system improvements using JIRA, Power BI, and Excel, achieving a 30% reduction in overall processing time and earlier detection of high-impact quality issues across production lines.',
      'Resolved harness and module failures by diagnosing root causes with cross-functional teams and deploying corrective actions to reduce recurring defect rates.',
    ],
    tags: ['JIRA', 'Power BI', 'Excel', 'Quality Systems', 'Root Cause Analysis'],
  },
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-14">
        {experiences.map(e => (
          <li key={e.role + e.period} className="grid gap-3 lg:grid-cols-[10rem_1fr] lg:gap-8">
            <p className="font-mono text-sm text-muted">{e.period}</p>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
              <p className="text-muted">{e.company} · {e.location}</p>
              <ul className="mt-4 space-y-3 max-w-2xl list-disc pl-5 marker:text-muted">
                {e.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <p className="mt-4 text-sm text-muted max-w-2xl">{e.tags.join(' · ')}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
