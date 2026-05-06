'use client'

import { ExternalLink, Github, Lock } from 'lucide-react'

const projects = [
  {
    name: 'Deep RL Robotic Manipulation',
    description:
      'MSc Dissertation — AI control system for a Franka Emika robotic arm using Deep RL (SAC, PPO, TD3) with ROS/ROS2 and Stable-Baselines3 for autonomous screwdriving in a custom Robosuite/Gazebo simulation. Real-time object detection with OpenCV, YOLO, and RealSense.',
    tech: ['Python', 'ROS / ROS2', 'Deep RL', 'Gazebo', 'OpenCV', 'YOLO', 'Stable-Baselines3'],
    github: 'https://github.com/carlovivanco/robotics_disseartation',
    live: null,
    language: 'Python',
    private: false,
    badge: 'MSc Dissertation',
  },
  {
    name: 'AutoCount',
    description:
      'Full-stack TypeScript / Next.js application for automated inventory counting and management. Deployed live on Vercel.',
    tech: ['TypeScript', 'Next.js', 'React'],
    github: 'https://github.com/carlovivanco/autocount',
    live: 'https://autocount-pearl.vercel.app',
    language: 'TypeScript',
    private: false,
    badge: null,
  },
  {
    name: 'Mission Control JARVIS',
    description:
      'Personal mission-control dashboard built with TypeScript and Next.js, integrating multiple data sources into a unified command center interface.',
    tech: ['TypeScript', 'Next.js', 'React'],
    github: 'https://github.com/carlovivanco/mission-control-jarvis',
    live: null,
    language: 'TypeScript',
    private: true,
    badge: null,
  },
  {
    name: 'AI Market Platform',
    description:
      'AI-powered market analysis platform. Uses machine learning models to analyze market data and generate actionable insights.',
    tech: ['Python', 'ML', 'FastAPI'],
    github: 'https://github.com/carlovivanco/AImarket',
    live: null,
    language: 'Python',
    private: true,
    badge: null,
  },
  {
    name: 'Algorithmic Trading Bot',
    description:
      'Python-based algorithmic trading bot implementing quantitative strategies for automated market execution and portfolio management.',
    tech: ['Python', 'Quantitative Finance'],
    github: 'https://github.com/carlovivanco/trading-bot',
    live: null,
    language: 'Python',
    private: true,
    badge: null,
  },
]

const langColor: Record<string, string> = {
  TypeScript: '#3178c6',
  Python: '#3572A5',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-[#1a2332]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left label */}
          <div className="md:col-span-3">
            <p className="section-label mt-1">Projects</p>
          </div>

          {/* Right content */}
          <div className="md:col-span-9 space-y-8">
            {projects.map((p, i) => (
              <div key={i} className="group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: langColor[p.language] ?? '#4b5563' }}
                        />
                        <h3 className="text-white font-semibold">{p.name}</h3>
                      </div>
                      {p.badge && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded border border-purple-500/20 bg-purple-500/8 text-purple-400">
                          {p.badge}
                        </span>
                      )}
                      {p.private && (
                        <span className="flex items-center gap-1 text-xs font-mono text-slate-600">
                          <Lock size={10} />
                          private
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="tag text-xs px-2 py-0.5 rounded font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-600 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={15} />
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-600 hover:text-blue-400 transition-colors"
                        aria-label="Live"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {i < projects.length - 1 && (
                  <div className="mt-8 border-t border-[#1a2332]" />
                )}
              </div>
            ))}

            <div className="pt-4">
              <a
                href="https://github.com/carlovivanco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 hover:text-slate-400 transition-colors"
              >
                github.com/carlovivanco
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
