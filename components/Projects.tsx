'use client'

import { Github, ExternalLink, Lock, ChevronDown, ZoomIn } from 'lucide-react'
import { useState } from 'react'

/* ─── Robotics image gallery (featured project only) ─── */

const roboticsMedia = [
  {
    src: '/portafolio/robotics/simulation.png',
    label: 'Gazebo / Robosuite simulation',
    caption: 'Custom simulation environment — Franka Emika Panda arm performing autonomous screwdriving',
    type: 'photo',
  },
  {
    src: '/portafolio/robotics/training-curves.png',
    label: 'SAC vs TD3 — eval/mean_reward',
    caption: 'Training curves over 5M timesteps. SAC (red) converges to 3,715 reward; TD3 (green) to 3,450',
    type: 'graph',
  },
  {
    src: '/portafolio/robotics/real-robot.png',
    label: 'Real-world deployment',
    caption: 'Franka Emika Panda in lab environment — hardware-in-the-loop validation',
    type: 'photo',
  },
  {
    src: '/portafolio/robotics/il-training.png',
    label: 'IL Training — reward vs time step',
    caption: 'Imitation learning training reward over timesteps',
    type: 'graph',
  },
]

function RoboticsGallery() {
  const [zoomed, setZoomed] = useState<number | null>(null)

  return (
    <>
      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-1 bg-[#080b12] rounded-t-xl overflow-hidden border-b border-white/[0.06]">
        {roboticsMedia.map((item, i) => (
          <button
            key={i}
            onClick={() => setZoomed(i)}
            className="relative group overflow-hidden"
            style={{ aspectRatio: '4/3' }}
            aria-label={`Expand ${item.label}`}
          >
            <img
              src={item.src}
              alt={item.label}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                item.type === 'graph' ? 'object-contain bg-[#f8f9fa] p-2' : 'object-cover'
              }`}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-80 transition-opacity" />
            </div>
            {/* Label */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-[10px] font-mono text-white/80 leading-tight">{item.label}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {zoomed !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setZoomed(null)}
        >
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={roboticsMedia[zoomed].src}
              alt={roboticsMedia[zoomed].label}
              className={`w-full max-h-[70vh] rounded-xl object-contain ${
                roboticsMedia[zoomed].type === 'graph' ? 'bg-[#f8f9fa] p-4' : ''
              }`}
            />
            <div className="mt-4 space-y-1 text-center">
              <p className="text-sm font-semibold text-white">{roboticsMedia[zoomed].label}</p>
              <p className="text-xs text-[var(--text-2)] max-w-xl mx-auto leading-relaxed">
                {roboticsMedia[zoomed].caption}
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-5">
              {roboticsMedia.map((_, j) => (
                <button
                  key={j}
                  onClick={() => setZoomed(j)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    j === zoomed ? 'bg-[var(--accent)]' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-xs font-mono text-white/20 mt-4">click outside to close</p>
          </div>
        </div>
      )}
    </>
  )
}

/* ─── Code preview for non-featured projects ─── */

function CodePreview({ lines, accent }: { lines: { t: string; c?: string }[][], accent: string }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-t-xl bg-[#080b12] border-b border-white/[0.06] font-mono text-xs leading-relaxed p-5 select-none">
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: accent }} />
      <div className="relative space-y-1">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-white/10 w-4 text-right flex-shrink-0">{i + 1}</span>
            <span>{line.map((tok, j) => <span key={j} style={{ color: tok.c ?? 'rgba(255,255,255,0.25)' }}>{tok.t}</span>)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Projects data ─── */

const projects = [
  {
    name: 'Deep RL Robotic Manipulation',
    tagline: 'MSc Dissertation · University of Essex',
    badge: 'Research',
    badgeColor: '#8b5cf6',
    language: 'Python',
    private: false,
    github: 'https://github.com/carlovivanco/robotics_disseartation',
    live: null,
    accent: '#8b5cf6',
    useGallery: true,
    metrics: [
      { value: 'SAC · PPO · TD3', label: 'Algorithms' },
      { value: 'Franka Emika', label: 'Robot' },
      { value: 'ROS 2', label: 'Middleware' },
    ],
    codeLines: [],
    description: 'AI control system for a 7-DOF robotic arm performing autonomous screwdriving without a gripper — using deep reinforcement learning policies trained in simulation and validated on real hardware.',
    details: [
      'Compared SAC, PPO, and TD3 agents in a custom Robosuite/Gazebo simulation, benchmarking convergence and final policy quality across 5M timesteps. SAC achieved a mean reward of 3,715 vs TD3\'s 3,450.',
      'Computer vision pipeline (OpenCV, YOLO, Intel RealSense) for real-time tool detection and 6-DOF pose estimation — enabling manipulation without dedicated end-effectors.',
      'ROS 2 architecture for clean separation of perception, planning, and execution nodes with seamless sim-to-real transfer validated on physical Franka Emika hardware.',
    ],
    tech: ['Python', 'ROS / ROS2', 'Stable-Baselines3', 'Gazebo', 'Robosuite', 'OpenCV', 'YOLO', 'RealSense', 'PyTorch'],
    featured: true,
  },
  {
    name: 'AutoCount',
    tagline: 'Full-stack inventory automation · Live in production',
    badge: 'Live',
    badgeColor: '#10b981',
    language: 'TypeScript',
    private: false,
    github: 'https://github.com/carlovivanco/autocount',
    live: 'https://autocount-pearl.vercel.app',
    accent: '#3b82f6',
    useGallery: false,
    metrics: [
      { value: 'Next.js 14', label: 'Framework' },
      { value: 'TypeScript', label: 'Language' },
      { value: 'Vercel', label: 'Deployed' },
    ],
    codeLines: [
      [{ t: 'export default function', c: '#8b5cf6' }, { t: ' CountDashboard', c: '#7dd3fc' }, { t: '() {', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '  const', c: '#8b5cf6' }, { t: ' { data, mutate }', c: '#e2e8f0' }, { t: ' = ', c: '#8b5cf6' }, { t: 'useSWR', c: '#7dd3fc' }, { t: '("/api/inventory")', c: '#a3e635' }],
      [{ t: '' }],
      [{ t: '  async function', c: '#8b5cf6' }, { t: ' updateCount', c: '#7dd3fc' }, { t: '(id: ', c: 'rgba(255,255,255,0.4)' }, { t: 'string', c: '#fbbf24' }, { t: ') {', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '    await', c: '#8b5cf6' }, { t: ' mutate', c: '#7dd3fc' }, { t: '(optimisticUpdate(id))', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '    await', c: '#8b5cf6' }, { t: ' fetch', c: '#7dd3fc' }, { t: '(`/api/items/${id}`, {', c: '#a3e635' }],
      [{ t: '      method:', c: 'rgba(255,255,255,0.4)' }, { t: ' "PATCH"', c: '#a3e635' }, { t: ', body: JSON.stringify(data)', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '    })', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '  }', c: 'rgba(255,255,255,0.4)' }],
    ],
    description: 'Production-deployed application for automated inventory counting with real-time dashboards, optimistic UI updates, and full CI/CD deployment via Vercel.',
    details: [
      'Next.js 14 App Router with TypeScript end-to-end — type-safe API routes, server components, and optimistic client mutations.',
      'Real-time sync using SWR with optimistic updates so the UI responds instantly while the server confirms in the background.',
      'Automated production deploys on every push to main via Vercel CI/CD pipeline.',
    ],
    tech: ['TypeScript', 'Next.js 14', 'React', 'SWR', 'Tailwind CSS', 'Vercel'],
    featured: false,
  },
  {
    name: 'Algorithmic Trading Bot',
    tagline: 'Automated quantitative strategy execution',
    badge: null,
    badgeColor: null,
    language: 'Python',
    private: true,
    github: 'https://github.com/carlovivanco/trading-bot',
    live: null,
    accent: '#f59e0b',
    useGallery: false,
    metrics: [
      { value: 'Backtested', label: 'Strategy' },
      { value: 'Live exec.', label: 'Mode' },
      { value: 'Python', label: 'Stack' },
    ],
    codeLines: [
      [{ t: 'class', c: '#8b5cf6' }, { t: ' MomentumStrategy', c: '#7dd3fc' }, { t: '(BaseStrategy):', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '  def', c: '#8b5cf6' }, { t: ' generate_signal', c: '#7dd3fc' }, { t: '(self, data: ', c: 'rgba(255,255,255,0.4)' }, { t: 'DataFrame', c: '#fbbf24' }, { t: ') -> ', c: 'rgba(255,255,255,0.4)' }, { t: 'Signal', c: '#fbbf24' }, { t: ':', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '    rsi', c: '#e2e8f0' }, { t: ' = ', c: '#8b5cf6' }, { t: 'self', c: '#f87171' }, { t: '.calc_rsi(data, period=', c: 'rgba(255,255,255,0.4)' }, { t: '14', c: '#f87171' }, { t: ')', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '    if', c: '#8b5cf6' }, { t: ' rsi[-', c: 'rgba(255,255,255,0.4)' }, { t: '1', c: '#f87171' }, { t: '] < ', c: 'rgba(255,255,255,0.4)' }, { t: '30', c: '#f87171' }, { t: ':  ', c: 'rgba(255,255,255,0.4)' }, { t: '# oversold', c: '#4b5563' }],
      [{ t: '      return', c: '#8b5cf6' }, { t: ' Signal.BUY', c: '#10b981' }],
      [{ t: '    elif', c: '#8b5cf6' }, { t: ' rsi[-', c: 'rgba(255,255,255,0.4)' }, { t: '1', c: '#f87171' }, { t: '] > ', c: 'rgba(255,255,255,0.4)' }, { t: '70', c: '#f87171' }, { t: ':  ', c: 'rgba(255,255,255,0.4)' }, { t: '# overbought', c: '#4b5563' }],
      [{ t: '      return', c: '#8b5cf6' }, { t: ' Signal.SELL', c: '#f87171' }],
      [{ t: '    return', c: '#8b5cf6' }, { t: ' Signal.HOLD', c: '#fbbf24' }],
    ],
    description: 'Algorithmic trading system implementing quantitative strategies with full backtesting on historical data and live order execution with configurable risk controls.',
    details: [
      'Strategy engine supporting RSI, MACD, and momentum signals with configurable position sizing, stop-loss, and take-profit logic.',
      'Backtesting module that replays historical OHLCV data through the exact same execution path as live trading for accurate simulation.',
      'Clean separation of strategy logic and broker connectivity via an abstract interface — easily extended to new exchanges or data providers.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'CCXT', 'Asyncio'],
    featured: false,
  },
]

const langColor: Record<string, string> = { TypeScript: '#3178c6', Python: '#3572A5' }

function Card({ p }: { p: typeof projects[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="surface rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-white/[0.13]">
      {/* Header: gallery or code preview */}
      {p.useGallery ? <RoboticsGallery /> : <CodePreview lines={p.codeLines as any} accent={p.accent} />}

      {/* Metrics strip */}
      <div className="grid grid-cols-3 border-b border-white/[0.06]">
        {p.metrics.map(({ value, label }) => (
          <div key={label} className="px-4 py-3 text-center border-r border-white/[0.06] last:border-0">
            <p className="text-xs font-semibold text-[var(--text)]">{value}</p>
            <p className="text-[10px] font-mono text-[var(--text-3)] mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: langColor[p.language] ?? '#4b5563' }} />
              <h3 className="text-[var(--text)] font-semibold text-base">{p.name}</h3>
              {p.badge && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border"
                  style={{ color: p.badgeColor!, borderColor: `${p.badgeColor}33`, background: `${p.badgeColor}11` }}>
                  {p.badge}
                </span>
              )}
              {p.private && (
                <span className="flex items-center gap-1 text-[10px] font-mono text-[var(--text-3)]">
                  <Lock size={8} /> private
                </span>
              )}
            </div>
            <p className="text-[11px] font-mono text-[var(--text-3)]">{p.tagline}</p>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5">
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className="p-1.5 rounded text-[var(--text-3)] hover:text-[var(--text)] transition-colors" aria-label="GitHub">
              <Github size={14} />
            </a>
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded text-[var(--text-3)] hover:text-[var(--accent)] transition-colors" aria-label="Live">
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-[var(--text-2)] leading-relaxed my-3 flex-1">{p.description}</p>

        <button onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors mb-3">
          <ChevronDown size={12} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          {open ? 'Less detail' : 'More detail'}
        </button>

        {open && (
          <ul className="space-y-2 mb-4 border-t border-white/[0.06] pt-3">
            {p.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-2)] leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-[var(--accent)] opacity-60 flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5">
          {p.tech.map(t => <span key={t} className="tag px-2 py-0.5 rounded">{t}</span>)}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="projects" className="py-28 px-6 divider">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <span className="label block mb-6">Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] leading-tight">
              Selected work.
            </h2>
          </div>
          <a href="https://github.com/carlovivanco" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors pb-1">
            github.com/carlovivanco <ExternalLink size={11} />
          </a>
        </div>

        <div className="mb-6">
          <Card p={featured} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map(p => <Card key={p.name} p={p} />)}
        </div>

      </div>
    </section>
  )
}
