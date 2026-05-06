'use client'

import { ExternalLink, Github, Lock, BookOpen } from 'lucide-react'

const projects = [
  {
    name: 'Deep RL Robotic Manipulation',
    description:
      'MSc Dissertation at University of Essex. Developed an AI control system for a Franka Emika robotic arm using Deep RL (SAC, PPO, TD3) with ROS/ROS2 and Stable-Baselines3 for autonomous screwdriving in a custom Robosuite/Gazebo simulation. Integrated OpenCV, YOLO, and RealSense for real-time object detection.',
    tech: ['Python', 'ROS/ROS2', 'Deep RL', 'SAC/PPO/TD3', 'Gazebo', 'OpenCV', 'YOLO'],
    github: 'https://github.com/carlovivanco/robotics_disseartation',
    live: null,
    language: 'Python',
    private: false,
    featured: true,
    badge: 'MSc Dissertation',
    badgeColor: '#8b5cf6',
  },
  {
    name: 'AutoCount',
    description:
      'Full-stack TypeScript/Next.js application for automated inventory counting and management. Deployed live on Vercel with real-time data updates and a clean, responsive UI.',
    tech: ['TypeScript', 'Next.js', 'React', 'Vercel'],
    github: 'https://github.com/carlovivanco/autocount',
    live: 'https://autocount-pearl.vercel.app',
    language: 'TypeScript',
    private: false,
    featured: true,
    badge: null,
    badgeColor: null,
  },
  {
    name: 'Mission Control JARVIS',
    description:
      'Personal mission-control dashboard inspired by Iron Man\'s JARVIS. Built with TypeScript and Next.js, integrating multiple data sources into a unified command center interface.',
    tech: ['TypeScript', 'Next.js', 'React', 'APIs'],
    github: 'https://github.com/carlovivanco/mission-control-jarvis',
    live: null,
    language: 'TypeScript',
    private: true,
    featured: true,
    badge: null,
    badgeColor: null,
  },
  {
    name: 'AI Market Platform',
    description:
      'AI-powered market analysis platform. Uses machine learning models to analyze market data and generate actionable insights with a Python backend.',
    tech: ['Python', 'ML', 'FastAPI', 'Data Analysis'],
    github: 'https://github.com/carlovivanco/AImarket',
    live: null,
    language: 'Python',
    private: true,
    featured: false,
    badge: null,
    badgeColor: null,
  },
  {
    name: 'Algorithmic Trading Bot',
    description:
      'Python-based algorithmic trading bot implementing quantitative strategies for automated market execution and portfolio management.',
    tech: ['Python', 'Quant Finance', 'Automation'],
    github: 'https://github.com/carlovivanco/trading-bot',
    live: null,
    language: 'Python',
    private: true,
    featured: false,
    badge: null,
    badgeColor: null,
  },
]

const langDot: Record<string, string> = {
  TypeScript: '#3178c6',
  Python: '#3572A5',
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-3">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {featured.map((p) => (
            <div key={p.name} className="card rounded-xl p-6 flex flex-col group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: langDot[p.language] ?? '#555' }}
                  />
                  <span className="text-xs font-mono text-slate-500">{p.language}</span>
                  {p.badge && (
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        color: p.badgeColor ?? '#93c5fd',
                        borderColor: `${p.badgeColor}44` ?? '#1e40af',
                        background: `${p.badgeColor}11` ?? '#1e3a5f11',
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {p.private && (
                    <span title="Private repo">
                      <Lock size={12} className="text-slate-600" />
                    </span>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-400 transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-blue-300 transition-colors">
                {p.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="tag text-xs px-2 py-0.5 rounded font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional projects */}
        <div>
          <h3 className="text-xs font-mono text-slate-600 mb-4 uppercase tracking-widest">Other repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((p) => (
              <div key={p.name} className="card rounded-lg px-5 py-4 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: langDot[p.language] ?? '#555' }}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                        {p.name}
                      </span>
                      {p.private && <Lock size={10} className="text-slate-600" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 max-w-xs">{p.description.slice(0, 70)}…</p>
                  </div>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors ml-4 flex-shrink-0"
                >
                  <Github size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/carlovivanco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
          >
            View all repositories on GitHub
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
