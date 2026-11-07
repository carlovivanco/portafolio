import Section from './Section'

const experiences = [
  {
    role: 'AI Software Engineer',
    company: 'Nexxia',
    period: 'Feb 2026 – Present',
    location: 'Mexico City · Full-Time',
    bullets: [
      'Build a multi-agent AI platform on GCP (Vertex AI Agent Builder, LangGraph, hybrid RAG, MCP servers) with security-hardened infrastructure and production CI/CD.',
      'Built the platform\'s model router, reaching 96% routing accuracy, and event-driven Cloud Run pipelines that replace manual processes end to end.',
    ],
    tags: ['GCP', 'Vertex AI', 'LangGraph', 'RAG', 'Python'],
  },
  {
    role: 'Software Engineering Manufacturing Test Intern',
    company: 'Tesla',
    period: 'Aug – Dec 2025',
    location: 'Palo Alto, California',
    bullets: [
      'Built software tools and test platforms for high-voltage battery validation, connecting test equipment to vehicle ECUs over CAN/UDS in Go, C++ and Python.',
      'Created automated ECU code generation tools that cut test software development time by 25% per firmware release.',
    ],
    tags: ['Go', 'C++', 'Python', 'CAN / UDS'],
  },
  {
    role: 'Software Integration Automation Trainee',
    company: 'Ford Motor Company',
    period: 'Jun – Sep 2024',
    location: 'Mexico City',
    bullets: [
      'Developed automated SIL/HIL/MIL validation frameworks with Python, TestStand, LabVIEW and PyTest, managed through GitHub CI/CD.',
      'Integrated test pipelines with CAN, LIN and SomeIP hardware, improving traceability and reliability across integration stages.',
    ],
    tags: ['Python', 'PyTest', 'LabVIEW', 'SIL / HIL / MIL'],
  },
  {
    role: 'Feature Systems Engineering Trainee',
    company: 'Ford Motor Company',
    period: 'Jun 2023 – Jun 2024',
    location: 'Mexico City',
    bullets: [
      'Designed MATLAB/Simulink digital twins with state-machine control simulations to validate vehicle features such as Trailer Brake Control.',
      "Reduced system validation time by 50% and earned the High Achiever Badge in Ford's Intern City of Tomorrow Challenge.",
    ],
    tags: ['MATLAB', 'Simulink', 'Digital Twins', 'Control Systems'],
  },
  {
    role: 'Electrical Quality Engineering Intern',
    company: 'Stellantis',
    period: 'Jan – Jun 2023',
    location: 'Mexico City',
    bullets: [
      'Implemented quality-system improvements with JIRA, Power BI and Excel, cutting overall processing time by 30%.',
      'Diagnosed harness and module failures with cross-functional teams and deployed corrective actions to reduce recurring defects.',
    ],
    tags: ['JIRA', 'Power BI', 'Root Cause Analysis'],
  },
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="border-t border-rule">
        {experiences.map(e => (
          <li key={e.role + e.period} className="grid gap-4 border-b border-rule py-10 md:grid-cols-[1fr_1.1fr] md:gap-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">{e.company}</h3>
              <p className="mt-1 font-medium">{e.role}</p>
              <p className="text-muted">{e.period}, {e.location}</p>
            </div>
            <div>
              <ul className="space-y-3 max-w-xl list-disc pl-5 marker:text-accent">
                {e.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <p className="mt-4 text-sm text-muted">{e.tags.join(', ')}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
