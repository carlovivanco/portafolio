'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
  const [tab, setTab] = useState(0)
  const e = experiences[tab]
  const onKey = (ev: React.KeyboardEvent) => {
    const d = ev.key === 'ArrowDown' || ev.key === 'ArrowRight' ? 1 : ev.key === 'ArrowUp' || ev.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    ev.preventDefault()
    const n = (tab + d + experiences.length) % experiences.length
    setTab(n)
    document.getElementById(`tab-${n}`)?.focus()
  }
  return (
    <Section id="experience" n="03" title="Experience">
      <div className="grid gap-6 md:grid-cols-[11rem_1fr]">
        <div role="tablist" aria-label="Employers" onKeyDown={onKey} className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-rule">
          {experiences.map((x, i) => (
            <button key={x.role + x.period} id={`tab-${i}`} role="tab" aria-selected={tab === i} aria-controls="exp-panel"
              tabIndex={tab === i ? 0 : -1} onClick={() => setTab(i)}
              className={`relative whitespace-nowrap text-left text-sm px-4 py-3 transition-colors hover:bg-wash ${tab === i ? 'text-accent' : 'text-muted'}`}>
              {tab === i && <motion.span layoutId="exp-ind" className="absolute bg-accent left-0 right-0 bottom-0 h-0.5 md:right-auto md:top-0 md:w-0.5 md:h-auto" />}
              {x.company}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={tab} id="exp-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} tabIndex={0}
            initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>
            <h3 className="text-xl font-semibold tracking-tight">{e.role} <span className="text-accent">@ {e.company}</span></h3>
            <p className="num text-sm text-muted mt-1">{e.period} · {e.location}</p>
            <ul className="mt-4 space-y-3 max-w-2xl list-disc pl-5 marker:text-accent">
              {e.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
            <p className="mt-4 flex flex-wrap gap-2">{e.tags.map(t => <span key={t} className="num text-xs border border-rule px-2 py-0.5 text-muted">{t}</span>)}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}
