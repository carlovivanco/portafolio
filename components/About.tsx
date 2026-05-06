'use client'

import { Brain, Cpu, Globe, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Brain,
    title: 'Multi-Agent AI & RAG',
    description:
      'Designing and deploying enterprise-grade multi-agent frameworks with Vertex AI, LangGraph, hybrid RAG pipelines, and MCP server integrations on GCP.',
  },
  {
    icon: Cpu,
    title: 'Robotics & Embedded Systems',
    description:
      'Deep expertise in ROS/ROS2, deep reinforcement learning, embedded RTOS, CAN/LIN protocols, and robotic manipulation with computer vision.',
  },
  {
    icon: Zap,
    title: 'Automotive & Industrial',
    description:
      'Production-proven work at Tesla, Ford, and Stellantis — from HV battery test automation to digital twin simulations and SIL/HIL/MIL validation frameworks.',
  },
  {
    icon: Globe,
    title: 'Cloud & DevOps',
    description:
      'Building scalable cloud-native solutions on GCP with Cloud Run, CI/CD pipelines, Docker, and security-hardened infrastructure for enterprise AI platforms.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left */}
          <div className="md:w-5/12">
            <p className="section-label mb-3">Who I am</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Engineering systems that{' '}
              <span className="text-blue-400">think, learn & move</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a Mechatronics Engineer and MSc in Intelligent Systems & Robotics with 3+
                years of experience across automotive, energy, and AI sectors. I've delivered
                high-impact automation at{' '}
                <span className="text-white font-medium">Tesla</span>,{' '}
                <span className="text-white font-medium">Ford</span>, and{' '}
                <span className="text-white font-medium">Stellantis</span> — cutting firmware
                test development time by 25% and system validation time by 50%.
              </p>
              <p>
                Currently, I'm building enterprise-grade multi-agent AI systems, RAG pipelines,
                and cloud-native solutions at{' '}
                <span className="text-white font-medium">Nexxia</span>, replacing entire manual
                operational processes with intelligent automation on GCP.
              </p>
              <p>
                My MSc dissertation at the{' '}
                <span className="text-white font-medium">University of Essex</span> focused on
                deep reinforcement learning for autonomous robotic manipulation — applying SAC,
                PPO, and TD3 to a Franka Emika arm with real-time computer vision.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: 'GPA', value: '95 / 100' },
                { label: 'Scholarship', value: 'Academic Talent' },
                { label: 'IELTS', value: 'C1 Advanced' },
                { label: 'Award', value: 'Ford High Achiever' },
              ].map(({ label, value }) => (
                <div key={label} className="card rounded-lg px-4 py-3">
                  <div className="text-xs text-slate-600 font-mono">{label}</div>
                  <div className="text-sm text-white font-medium mt-0.5">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card rounded-xl p-6 group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
