'use client'

import { ExternalLink, Github, Lock, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

/* ─── SVG illustrations per project ─── */

function RoboticsIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#rg1)" />
      {/* Neural network nodes */}
      {[
        [60, 50], [60, 100], [60, 150],
        [160, 30], [160, 80], [160, 130], [160, 170],
        [260, 50], [260, 100], [260, 150],
        [340, 100],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="none" stroke="#8b5cf6" strokeOpacity="0.5" strokeWidth="1.5" />
      ))}
      {/* Connections */}
      {[
        [60,50,160,30],[60,50,160,80],[60,100,160,80],[60,100,160,130],
        [60,150,160,130],[60,150,160,170],
        [160,30,260,50],[160,80,260,50],[160,80,260,100],[160,130,260,100],
        [160,130,260,150],[160,170,260,150],
        [260,50,340,100],[260,100,340,100],[260,150,340,100],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8b5cf6" strokeOpacity="0.2" strokeWidth="1" />
      ))}
      {/* Active nodes */}
      <circle cx="160" cy="80" r="7" fill="#8b5cf6" fillOpacity="0.4" />
      <circle cx="260" cy="100" r="7" fill="#8b5cf6" fillOpacity="0.4" />
      <circle cx="340" cy="100" r="9" fill="#8b5cf6" fillOpacity="0.6" />
      {/* Label */}
      <text x="340" y="125" textAnchor="middle" fill="#8b5cf6" fillOpacity="0.6" fontSize="9" fontFamily="monospace">output</text>
      <text x="20" y="104" textAnchor="middle" fill="#8b5cf6" fillOpacity="0.4" fontSize="9" fontFamily="monospace" transform="rotate(-90,20,104)">input</text>
    </svg>
  )
}

function DashboardIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="dg1" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#dg1)" />
      {/* Window chrome */}
      <rect x="30" y="20" width="340" height="160" rx="6" fill="none" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1" />
      <rect x="30" y="20" width="340" height="24" rx="6" fill="#3b82f6" fillOpacity="0.08" />
      <circle cx="48" cy="32" r="4" fill="#3b82f6" fillOpacity="0.3" />
      <circle cx="62" cy="32" r="4" fill="#3b82f6" fillOpacity="0.2" />
      <circle cx="76" cy="32" r="4" fill="#3b82f6" fillOpacity="0.15" />
      {/* Stat cards */}
      {[50, 165, 280].map((x, i) => (
        <g key={i}>
          <rect x={x} y="58" width="80" height="40" rx="3" fill="#3b82f6" fillOpacity="0.07" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="1" />
          <rect x={x+4} y="70" width={[45,32,55][i]} height="4" rx="2" fill="#3b82f6" fillOpacity="0.4" />
          <rect x={x+4} y="80" width={[30,50,25][i]} height="3" rx="2" fill="#3b82f6" fillOpacity="0.2" />
        </g>
      ))}
      {/* Bar chart */}
      {[30, 55, 40, 70, 50, 80, 45, 65].map((h, i) => (
        <rect key={i} x={50 + i * 38} y={170 - h} width="22" height={h} rx="2" fill="#3b82f6" fillOpacity={0.15 + i * 0.04} />
      ))}
    </svg>
  )
}

function JarvisIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="jg1" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#jg1)" />
      {/* Grid lines */}
      {[40,80,120,160].map(y => (
        <line key={y} x1="20" y1={y} x2="380" y2={y} stroke="#06b6d4" strokeOpacity="0.06" strokeWidth="1" />
      ))}
      {[60,120,180,240,300,360].map(x => (
        <line key={x} x1={x} y1="10" x2={x} y2="190" stroke="#06b6d4" strokeOpacity="0.06" strokeWidth="1" />
      ))}
      {/* Panels */}
      <rect x="20" y="15" width="110" height="75" rx="4" fill="none" stroke="#06b6d4" strokeOpacity="0.25" strokeWidth="1" />
      <rect x="145" y="15" width="110" height="75" rx="4" fill="none" stroke="#06b6d4" strokeOpacity="0.25" strokeWidth="1" />
      <rect x="270" y="15" width="110" height="75" rx="4" fill="none" stroke="#06b6d4" strokeOpacity="0.25" strokeWidth="1" />
      <rect x="20" y="105" width="360" height="80" rx="4" fill="none" stroke="#06b6d4" strokeOpacity="0.25" strokeWidth="1" />
      {/* Sparklines */}
      <polyline points="30,75 50,60 70,68 90,45 110,55 130,40" fill="none" stroke="#06b6d4" strokeOpacity="0.5" strokeWidth="1.5" />
      <polyline points="155,70 175,55 195,65 215,42 235,58 255,35" fill="none" stroke="#06b6d4" strokeOpacity="0.5" strokeWidth="1.5" />
      {/* Text lines */}
      {[120,130,140,150,160,170].map((y,i) => (
        <rect key={y} x="35" y={y} width={[200,280,180,260,220,100][i]} height="4" rx="2" fill="#06b6d4" fillOpacity="0.15" />
      ))}
      <text x="200" y="10" textAnchor="middle" fill="#06b6d4" fillOpacity="0.3" fontSize="8" fontFamily="monospace">MISSION CONTROL</text>
    </svg>
  )
}

function MarketIllustration() {
  const prices = [100,108,103,115,110,125,118,130,122,138,132,145]
  const w = 360, h = 140, min = 95, max = 150
  const pts = prices.map((p, i) => `${20 + i*(w/11)},${h - ((p-min)/(max-min))*h + 20}`)
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="mg1" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#mg1)" />
      {[40,80,120,160].map(y => (
        <line key={y} x1="15" y1={y} x2="385" y2={y} stroke="#10b981" strokeOpacity="0.06" strokeWidth="1" />
      ))}
      <polyline points={pts.join(' ')} fill="none" stroke="#10b981" strokeOpacity="0.6" strokeWidth="2" />
      <polygon points={`${pts.join(' ')} 380,180 20,180`} fill="url(#mg2)" />
      {/* Candles */}
      {prices.slice(0,11).map((p,i) => {
        const x = 20 + i*(w/11)
        const cy = h - ((p-min)/(max-min))*h + 20
        const isUp = i === 0 || p >= prices[i-1]
        return (
          <g key={i}>
            <rect x={x-4} y={isUp ? cy-8 : cy} width="8" height="8" rx="1"
              fill={isUp ? '#10b981' : '#ef4444'} fillOpacity="0.6" />
            <line x1={x} y1={cy-12} x2={x} y2={cy+12} stroke={isUp ? '#10b981' : '#ef4444'} strokeOpacity="0.4" strokeWidth="1" />
          </g>
        )
      })}
    </svg>
  )
}

function TradingIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="tg1" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#tg1)" />
      {/* Oscillating waveform */}
      {Array.from({length: 60}).map((_,i) => {
        const x = 10 + i * 6.5
        const y = 100 + Math.sin(i * 0.4) * 40 * Math.exp(-i * 0.01) + Math.sin(i * 1.2) * 15
        return <circle key={i} cx={x} cy={y} r="1.5" fill="#f59e0b" fillOpacity={0.2 + (i/60)*0.5} />
      })}
      <polyline
        points={Array.from({length:60}).map((_,i) => `${10+i*6.5},${100+Math.sin(i*0.4)*40*Math.exp(-i*0.01)+Math.sin(i*1.2)*15}`).join(' ')}
        fill="none" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1.5"
      />
      {/* Buy/sell markers */}
      <polygon points="95,140 100,130 105,140" fill="#10b981" fillOpacity="0.7" />
      <polygon points="190,68 195,78 200,68" fill="#ef4444" fillOpacity="0.7" />
      <polygon points="265,115 270,105 275,115" fill="#10b981" fillOpacity="0.7" />
      <text x="200" y="185" textAnchor="middle" fill="#f59e0b" fillOpacity="0.3" fontSize="8" fontFamily="monospace">ALGORITHMIC STRATEGY · LIVE EXECUTION</text>
    </svg>
  )
}

/* ─── Project data ─── */

const projects = [
  {
    name: 'Deep RL Robotic Manipulation',
    tagline: 'MSc Dissertation — University of Essex',
    badge: 'Research',
    badgeColor: '#8b5cf6',
    language: 'Python',
    private: false,
    github: 'https://github.com/carlovivanco/robotics_disseartation',
    live: null,
    Illustration: RoboticsIllustration,
    illustrationBg: 'from-violet-950/60 to-[#0d1117]',
    metrics: [
      { value: 'SAC · PPO · TD3', label: 'RL Algorithms' },
      { value: 'Franka Emika', label: 'Robot Platform' },
      { value: 'ROS 2', label: 'Middleware' },
    ],
    description: 'Developed an AI-based control system for a 7-DOF robotic arm to perform autonomous screwdriving tasks without a dedicated gripper — relying entirely on learned policy from deep reinforcement learning.',
    details: [
      'Trained SAC, PPO, and TD3 agents in a custom Robosuite/Gazebo simulation environment using Stable-Baselines3, comparing convergence speed and final policy quality.',
      'Integrated real-time computer vision pipeline (OpenCV, YOLO, Intel RealSense) for tool-free object detection and pose estimation, enabling manipulation without a gripper.',
      'Built on ROS 2 for modular communication between perception, planning, and execution nodes, with clean separation of simulation and hardware interfaces.',
    ],
    tech: ['Python', 'ROS / ROS2', 'Stable-Baselines3', 'Gazebo', 'Robosuite', 'OpenCV', 'YOLO', 'RealSense', 'PyTorch'],
  },
  {
    name: 'AutoCount',
    tagline: 'Full-stack inventory automation',
    badge: 'Live',
    badgeColor: '#10b981',
    language: 'TypeScript',
    private: false,
    github: 'https://github.com/carlovivanco/autocount',
    live: 'https://autocount-pearl.vercel.app',
    Illustration: DashboardIllustration,
    illustrationBg: 'from-blue-950/60 to-[#0d1117]',
    metrics: [
      { value: 'Next.js 14', label: 'Framework' },
      { value: 'TypeScript', label: 'Language' },
      { value: 'Vercel', label: 'Deployed' },
    ],
    description: 'Production application for automated inventory counting and management, featuring real-time dashboards, data export, and a responsive interface built for operational use.',
    details: [
      'Built with Next.js App Router and TypeScript end-to-end for type safety across the full stack.',
      'Real-time data updates with optimistic UI patterns to keep the interface responsive under concurrent operations.',
      'Deployed and running on Vercel with CI/CD — every push to main triggers an automated production deploy.',
    ],
    tech: ['TypeScript', 'Next.js', 'React', 'Vercel', 'Tailwind CSS'],
  },
  {
    name: 'Mission Control JARVIS',
    tagline: 'Personal command-center dashboard',
    badge: null,
    badgeColor: null,
    language: 'TypeScript',
    private: true,
    github: 'https://github.com/carlovivanco/mission-control-jarvis',
    live: null,
    Illustration: JarvisIllustration,
    illustrationBg: 'from-cyan-950/60 to-[#0d1117]',
    metrics: [
      { value: 'Multi-source', label: 'Data ingestion' },
      { value: 'Real-time', label: 'Updates' },
      { value: 'TypeScript', label: 'Full-stack' },
    ],
    description: 'A unified personal operations dashboard aggregating data from multiple sources into a single mission-control view — task management, metrics, and status panels in one interface.',
    details: [
      'Designed with a modular panel architecture so each data source is an independent widget that can be added or removed without affecting others.',
      'Built with Next.js and TypeScript, connecting to external APIs and normalizing their data into a consistent internal schema.',
      'Dark-mode first, keyboard-navigable, built for daily use as a personal productivity tool.',
    ],
    tech: ['TypeScript', 'Next.js', 'React', 'REST APIs'],
  },
  {
    name: 'AI Market Platform',
    tagline: 'ML-powered market analysis',
    badge: null,
    badgeColor: null,
    language: 'Python',
    private: true,
    github: 'https://github.com/carlovivanco/AImarket',
    live: null,
    Illustration: MarketIllustration,
    illustrationBg: 'from-emerald-950/60 to-[#0d1117]',
    metrics: [
      { value: 'Python', label: 'Backend' },
      { value: 'FastAPI', label: 'API layer' },
      { value: 'ML models', label: 'Core engine' },
    ],
    description: 'Machine learning platform for market data analysis, ingesting financial time series and generating actionable signals through trained prediction models.',
    details: [
      'ML pipeline for feature engineering, model training, and inference on financial time series data.',
      'FastAPI backend exposing model predictions as a REST API with async request handling.',
      'Modular model registry allowing different strategies and models to be swapped without touching the API layer.',
    ],
    tech: ['Python', 'FastAPI', 'scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    name: 'Algorithmic Trading Bot',
    tagline: 'Automated quantitative execution',
    badge: null,
    badgeColor: null,
    language: 'Python',
    private: true,
    github: 'https://github.com/carlovivanco/trading-bot',
    live: null,
    Illustration: TradingIllustration,
    illustrationBg: 'from-amber-950/50 to-[#0d1117]',
    metrics: [
      { value: 'Backtested', label: 'Strategy' },
      { value: 'Live exec.', label: 'Mode' },
      { value: 'Python', label: 'Stack' },
    ],
    description: 'Python-based algorithmic trading system implementing quantitative strategies — from backtesting historical data to live order execution with risk controls.',
    details: [
      'Strategy engine supporting multiple quantitative signals with configurable position sizing and stop-loss logic.',
      'Backtesting module that replays historical data through the same execution path as live trading for accurate simulation.',
      'Clean separation between strategy logic and broker connectivity, making it easy to add new exchanges or data providers.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'CCXT', 'Asyncio'],
  },
]

const langColor: Record<string, string> = {
  TypeScript: '#3178c6',
  Python: '#3572A5',
}

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card rounded-xl overflow-hidden group">
      {/* Visual header */}
      <div className={`relative h-44 bg-gradient-to-b ${p.illustrationBg} overflow-hidden cursor-pointer`}
        onClick={() => setExpanded(!expanded)}>
        <div className="absolute inset-0">
          <p.Illustration />
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        {/* Top bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColor[p.language] ?? '#4b5563' }} />
            <span className="text-xs font-mono text-slate-500">{p.language}</span>
            {p.badge && (
              <span className="text-xs font-mono px-2 py-0.5 rounded border"
                style={{ color: p.badgeColor ?? '#93c5fd', borderColor: `${p.badgeColor}33`, background: `${p.badgeColor}11` }}>
                {p.badge}
              </span>
            )}
            {p.private && (
              <span className="flex items-center gap-1 text-xs font-mono text-slate-700">
                <Lock size={9} />private
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className="p-1.5 rounded bg-black/30 text-slate-500 hover:text-white transition-colors"
              onClick={e => e.stopPropagation()} aria-label="GitHub">
              <Github size={13} />
            </a>
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded bg-black/30 text-slate-500 hover:text-blue-400 transition-colors"
                onClick={e => e.stopPropagation()} aria-label="Live demo">
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Metrics strip */}
      <div className="grid grid-cols-3 border-b border-[#1a2332]">
        {p.metrics.map(({ value, label }) => (
          <div key={label} className="px-4 py-3 text-center border-r border-[#1a2332] last:border-0">
            <div className="text-xs font-semibold text-white mb-0.5">{value}</div>
            <div className="text-xs font-mono text-slate-600">{label}</div>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-white font-semibold text-base leading-snug">{p.name}</h3>
            <p className="text-xs text-slate-600 font-mono mt-0.5">{p.tagline}</p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex-shrink-0 p-1 rounded text-slate-600 hover:text-white transition-colors mt-0.5"
            aria-label={expanded ? 'Collapse' : 'Expand'}
          >
            <ArrowUpRight size={14} className={`transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`} />
          </button>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.description}</p>

        {/* Expandable details */}
        {expanded && (
          <div className="mb-4 space-y-2 border-t border-[#1a2332] pt-4">
            {p.details.map((d, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                {d}
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className="tag text-xs px-2 py-0.5 rounded font-mono">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#1a2332]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-label mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="text-slate-500 text-sm mt-2">Click any card to expand technical details.</p>
        </div>

        {/* Featured project — full width */}
        <div className="mb-6">
          <ProjectCard p={featured} />
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://github.com/carlovivanco" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 hover:text-slate-400 transition-colors">
            github.com/carlovivanco <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </section>
  )
}
