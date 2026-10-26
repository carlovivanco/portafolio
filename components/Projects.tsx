'use client'

import { useEffect, useRef, useState } from 'react'
import Section from './Section'

/* Robotics dissertation gallery (served from public/robotics, basePath /portafolio) */
const roboticsMedia = [
  {
    src: '/portafolio/robotics/simulation.png',
    label: 'Gazebo / Robosuite simulation',
    caption: 'Custom simulation environment — Franka Emika Panda arm performing autonomous screwdriving',
    graph: false,
  },
  {
    src: '/portafolio/robotics/training-curves.png',
    label: 'SAC vs TD3 — eval/mean_reward',
    caption: 'Training curves over 5M timesteps. SAC (red) converges to 3,715 reward; TD3 (green) to 3,450',
    graph: true,
  },
  {
    src: '/portafolio/robotics/real-robot.png',
    label: 'Real-world deployment',
    caption: 'Franka Emika Panda in lab environment — hardware-in-the-loop validation',
    graph: false,
  },
  {
    src: '/portafolio/robotics/il-training.png',
    label: 'IL training — validation loss',
    caption: 'Imitation learning baseline. Validation loss falls from ~0.26 to ~0.10 over 500 epochs',
    graph: true,
  },
]

function Lightbox({ index, setIndex }: { index: number; setIndex: (i: number | null) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const n = roboticsMedia.length
  const item = roboticsMedia[index]

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = ''; opener?.focus() }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') setIndex((index + 1) % n)
      if (e.key === 'ArrowLeft') setIndex((index - 1 + n) % n)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, n, setIndex])

  const btn = 'px-3 py-2 text-sm border border-white/30 text-white hover:bg-white/10'
  return (
    <div role="dialog" aria-modal="true" aria-label={item.label}
      className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 sm:p-8"
      onClick={() => setIndex(null)}>
      <div className="w-full max-w-4xl" onClick={e => e.stopPropagation()}>
        <img src={item.src} alt={item.label}
          className={`w-full max-h-[65vh] object-contain ${item.graph ? 'bg-white p-3' : ''}`} />
        <p className="mt-4 font-semibold text-white">{item.label}</p>
        <p className="text-sm text-white/80 max-w-2xl">{item.caption}</p>
        <div className="mt-5 flex items-center gap-3">
          <button className={btn} onClick={() => setIndex((index - 1 + n) % n)}>Previous</button>
          <button className={btn} onClick={() => setIndex((index + 1) % n)}>Next</button>
          <span className="text-sm text-white/70">{index + 1} / {n}</span>
          <button ref={closeRef} className={`${btn} ml-auto`} onClick={() => setIndex(null)}>Close</button>
        </div>
      </div>
    </div>
  )
}

function RoboticsGallery() {
  const [zoomed, setZoomed] = useState<number | null>(null)
  return (
    <>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {roboticsMedia.map((m, i) => (
          <li key={m.src}>
            <button onClick={() => setZoomed(i)} aria-label={`Enlarge: ${m.label}`}
              className="block w-full border border-rule bg-wash hover:border-accent transition-colors">
              <img src={m.src} alt={m.label} loading="lazy"
                className={`w-full aspect-[4/3] ${m.graph ? 'object-contain bg-white p-2' : 'object-cover'}`} />
            </button>
            <p className="mt-2 text-sm font-medium">{m.label}</p>
            <p className="text-sm text-muted">{m.caption}</p>
          </li>
        ))}
      </ul>
      {zoomed !== null && <Lightbox index={zoomed} setIndex={setZoomed} />}
    </>
  )
}

const projects = [
  {
    name: 'Deep RL Robotic Manipulation',
    tagline: 'MSc Dissertation · University of Essex',
    github: 'https://github.com/carlovivanco/robotics_disseartation',
    live: null as string | null,
    private: false,
    gallery: true,
    metrics: [
      ['Algorithms', 'SAC · PPO · TD3'],
      ['Robot', 'Franka Emika'],
      ['Middleware', 'ROS 2'],
    ],
    description: 'AI control system for a 7-DOF robotic arm performing autonomous screwdriving without a gripper — using deep reinforcement learning policies trained in simulation and validated on real hardware.',
    details: [
      'Compared SAC, PPO, and TD3 agents in a custom Robosuite/Gazebo simulation, benchmarking convergence and final policy quality across 5M timesteps. SAC achieved a mean reward of 3,715 vs TD3\'s 3,450.',
      'Computer vision pipeline (OpenCV, YOLO, Intel RealSense) for real-time tool detection and 6-DOF pose estimation — enabling manipulation without dedicated end-effectors.',
      'ROS 2 architecture for clean separation of perception, planning, and execution nodes with seamless sim-to-real transfer validated on physical Franka Emika hardware.',
    ],
    tech: ['Python', 'ROS / ROS2', 'Stable-Baselines3', 'Gazebo', 'Robosuite', 'OpenCV', 'YOLO', 'RealSense', 'PyTorch'],
  },
  {
    name: 'AutoCount',
    tagline: 'CV + ML inventory system · Live in production',
    github: 'https://github.com/carlovivanco/autocount',
    live: 'https://autocount-pearl.vercel.app',
    private: false,
    gallery: false,
    metrics: [
      ['CV model', 'YOLOv8'],
      ['Peak forecast', 'GBM'],
      ['CV accuracy', '94% mAP'],
    ],
    description: 'CV + ML system for automated inventory management — YOLOv8 for real-time item detection and a gradient boosting model that predicts peak demand hours to trigger proactive restocking alerts.',
    details: [
      'Gradient Boosting Regressor trained on historical inventory movement logs. Features: hour of day, day of week, 1h/24h lags, 7-day rolling average. Predicts high-demand windows and fires restocking alerts before stock depletes.',
      'Fine-tuned YOLOv8n via transfer learning on ~2,000 custom-labeled inventory images. Achieved 94% mAP@0.5 after 50 epochs with mosaic, flip, and HSV augmentation. Real-time inference pipeline with NMS at IoU 0.5.',
      'Next.js 14 dashboard with SWR optimistic updates — live item counts, peak-hour heatmap, and alert feed. Full CI/CD to Vercel on every push.',
    ],
    tech: ['Python', 'YOLOv8', 'scikit-learn', 'OpenCV', 'TypeScript', 'Next.js 14', 'SWR', 'Vercel'],
  },
  {
    name: 'Algorithmic Trading Bot',
    tagline: 'Automated quantitative strategy execution · Private repository',
    github: 'https://github.com/carlovivanco/trading-bot',
    live: null,
    private: true,
    gallery: false,
    metrics: [
      ['Indicators', 'RSI · MACD'],
      ['Validated', 'Backtested'],
      ['Mode', 'Live exec.'],
    ],
    description: 'Algorithmic trading system implementing quantitative strategies with full backtesting on historical data and live order execution with configurable risk controls.',
    details: [
      'Strategy engine supporting RSI, MACD, and momentum signals with configurable position sizing, stop-loss, and take-profit logic.',
      'Backtesting module that replays historical OHLCV data through the exact same execution path as live trading for accurate simulation.',
      'Clean separation of strategy logic and broker connectivity via an abstract interface — easily extended to new exchanges or data providers.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'CCXT', 'Asyncio'],
  },
]

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-20">
        {projects.map(p => (
          <li key={p.name}>
            <article>
              <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
              <p className="text-muted">{p.tagline}</p>

              <p className="mt-5 max-w-2xl text-lg">{p.description}</p>

              <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
                {p.metrics.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-sm text-muted">{k}</dt>
                    <dd className="font-medium">{v}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 space-y-3 max-w-2xl list-disc pl-5 marker:text-muted">
                {p.details.map(d => <li key={d}>{d}</li>)}
              </ul>

              <p className="mt-5 text-sm text-muted max-w-2xl">{p.tech.join(' · ')}</p>

              <p className="mt-5 flex gap-6">
                <a className="link" href={p.github} target="_blank" rel="noopener noreferrer">
                  {p.private ? 'GitHub (private)' : 'Source'} ↗
                </a>
                {p.live && <a className="link" href={p.live} target="_blank" rel="noopener noreferrer">Live site ↗</a>}
              </p>

              {p.gallery && <RoboticsGallery />}
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
