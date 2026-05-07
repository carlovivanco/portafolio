'use client'

import { Github, ExternalLink, Lock, ChevronDown } from 'lucide-react'
import { useState } from 'react'

/* ─── Code preview snippets ─── */

function CodePreview({ lines, accent }: { lines: { t: string; c?: string }[][], accent: string }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-t-xl bg-[#080b12] border-b border-white/[0.06] font-mono text-xs leading-relaxed p-5 select-none">
      {/* Radial glow */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: accent }} />
      {/* Line numbers + code */}
      <div className="relative space-y-1">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-white/10 w-4 text-right flex-shrink-0">{i + 1}</span>
            <span>
              {line.map((tok, j) => (
                <span key={j} style={{ color: tok.c ?? 'rgba(255,255,255,0.25)' }}>{tok.t}</span>
              ))}
            </span>
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
    metrics: [
      { value: 'SAC · PPO · TD3', label: 'Algorithms' },
      { value: 'Franka Emika', label: 'Robot' },
      { value: 'ROS 2', label: 'Middleware' },
    ],
    codeLines: [
      [{ t: 'from', c: '#8b5cf6' }, { t: ' stable_baselines3 ', c: 'rgba(255,255,255,0.5)' }, { t: 'import', c: '#8b5cf6' }, { t: ' SAC, PPO, TD3', c: '#7dd3fc' }],
      [{ t: 'from', c: '#8b5cf6' }, { t: ' robosuite ', c: 'rgba(255,255,255,0.5)' }, { t: 'import', c: '#8b5cf6' }, { t: ' make', c: '#7dd3fc' }],
      [{ t: '' }],
      [{ t: 'env', c: '#e2e8f0' }, { t: ' = ', c: '#8b5cf6' }, { t: 'make', c: '#7dd3fc' }, { t: '("FrankaScrewdriving", ', c: 'rgba(255,255,255,0.4)' }, { t: 'robots', c: '#fbbf24' }, { t: '=["Panda"])', c: 'rgba(255,255,255,0.4)' }],
      [{ t: 'model', c: '#e2e8f0' }, { t: ' = ', c: '#8b5cf6' }, { t: 'SAC', c: '#7dd3fc' }, { t: '("MlpPolicy", env, verbose=', c: 'rgba(255,255,255,0.4)' }, { t: '1', c: '#f87171' }, { t: ')', c: 'rgba(255,255,255,0.4)' }],
      [{ t: 'model', c: '#e2e8f0' }, { t: '.learn(total_timesteps=', c: 'rgba(255,255,255,0.4)' }, { t: '500_000', c: '#f87171' }, { t: ')', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '' }],
      [{ t: '# Real-time perception with RealSense + YOLO', c: '#4b5563' }],
      [{ t: 'pose', c: '#e2e8f0' }, { t: ' = ', c: '#8b5cf6' }, { t: 'vision_pipeline', c: '#7dd3fc' }, { t: '.detect_tool(frame)', c: 'rgba(255,255,255,0.4)' }],
    ],
    description: 'AI control system for a 7-DOF robotic arm performing autonomous screwdriving without a gripper — using deep reinforcement learning policies trained in simulation.',
    details: [
      'Compared SAC, PPO, and TD3 agents in a custom Robosuite/Gazebo simulation, benchmarking convergence and final policy quality across 500K timesteps.',
      'Computer vision pipeline (OpenCV, YOLO, Intel RealSense) for real-time tool detection and pose estimation — enabling manipulation without dedicated end-effectors.',
      'ROS 2 architecture for clean separation of perception, planning, and execution nodes with seamless sim-to-real transfer.',
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
    metrics: [
      { value: 'Backtested', label: 'Strategy' },
      { value: 'Live exec.', label: 'Mode' },
      { value: 'Python', label: 'Stack' },
    ],
    codeLines: [
      [{ t: 'class', c: '#8b5cf6' }, { t: ' MomentumStrategy', c: '#7dd3fc' }, { t: '(BaseStrategy):', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '  def', c: '#8b5cf6' }, { t: ' generate_signal', c: '#7dd3fc' }, { t: '(self, data: ', c: 'rgba(255,255,255,0.4)' }, { t: 'DataFrame', c: '#fbbf24' }, { t: ') -> ', c: 'rgba(255,255,255,0.4)' }, { t: 'Signal', c: '#fbbf24' }, { t: ':',c:'rgba(255,255,255,0.4)'}],
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
    <article className="surface rounded-xl overflow-hidden group flex flex-col transition-all duration-300 hover:border-white/[0.13]">
      {/* Code preview */}
      <CodePreview lines={p.codeLines as any} accent={p.accent} />

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
        {/* Title row */}
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

        {/* Expand button */}
        <button onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors mb-3 group/btn">
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

        {/* Featured */}
        <div className="mb-6">
          <Card p={featured} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map(p => <Card key={p.name} p={p} />)}
        </div>

      </div>
    </section>
  )
}
