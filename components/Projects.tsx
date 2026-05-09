'use client'

import { Github, ExternalLink, Lock, ChevronDown, ZoomIn } from 'lucide-react'
import { useState } from 'react'

/* ─── SVG chart helpers ─── */

function smoothPath(pts: [number, number][]): string {
  if (pts.length < 2) return ''
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i - 1], c = pts[i]
    const mx = ((p[0] + c[0]) / 2).toFixed(1)
    d += ` C ${mx} ${p[1].toFixed(1)}, ${mx} ${c[1].toFixed(1)}, ${c[0].toFixed(1)} ${c[1].toFixed(1)}`
  }
  return d
}

function TrainingCurvesChart() {
  const W = 480, H = 185
  const pl = 46, pr = 16, pt = 18, pb = 30
  const pw = W - pl - pr, ph = H - pt - pb
  const px = (x: number) => pl + (x / 5) * pw
  const py = (y: number) => pt + ph - (y / 4500) * ph

  const sacPts: [number, number][] = (
    [[0,0],[0.5,30],[1,70],[1.5,120],[2,380],[2.5,750],[3,2100],[3.5,3300],[4,3550],[4.5,3680],[5,3715]]
  ).map(([x, y]) => [px(x), py(y)])

  const td3Pts: [number, number][] = (
    [[0,0],[0.3,250],[0.7,1400],[1.1,2700],[1.6,3600],[2,4050],[2.5,4100],[3,3900],[3.5,4000],[4,3850],[5,3450]]
  ).map(([x, y]) => [px(x), py(y)])

  const base = py(0)
  const sacLine = smoothPath(sacPts)
  const td3Line = smoothPath(td3Pts)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-label="SAC vs TD3 training curves">
      <defs>
        <linearGradient id="sacGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="td3Grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[0, 1000, 2000, 3000, 4000].map(y => (
        <line key={y} x1={pl} y1={py(y)} x2={W - pr} y2={py(y)}
          stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}

      <path d={`${td3Line} L ${px(5)} ${base} L ${px(0)} ${base} Z`} fill="url(#td3Grad)" />
      <path d={`${sacLine} L ${px(5)} ${base} L ${px(0)} ${base} Z`} fill="url(#sacGrad)" />
      <path d={td3Line} fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
      <path d={sacLine} fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />

      <circle cx={px(5)} cy={py(3715)} r="2.5" fill="#3b82f6" />
      <circle cx={px(5)} cy={py(3450)} r="2.5" fill="#10b981" />

      {[0, 1, 2, 3, 4, 5].map(x => (
        <text key={x} x={px(x)} y={H - 7} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.2)" fontFamily="monospace">
          {x === 0 ? '0' : `${x}M`}
        </text>
      ))}
      {[1000, 2000, 3000, 4000].map(y => (
        <text key={y} x={pl - 6} y={py(y) + 3} textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.2)" fontFamily="monospace">
          {y / 1000}k
        </text>
      ))}

      <rect x={W - pr - 96} y={pt + 1} width="8" height="2" rx="1" fill="#10b981" />
      <text x={W - pr - 84} y={pt + 6} fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="monospace">TD3 — 4,100</text>
      <rect x={W - pr - 96} y={pt + 14} width="8" height="2" rx="1" fill="#3b82f6" />
      <text x={W - pr - 84} y={pt + 19} fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="monospace">SAC — 3,715</text>
    </svg>
  )
}

function ILTrainingChart() {
  const W = 480, H = 185
  const pl = 46, pr = 16, pt = 18, pb = 30
  const pw = W - pl - pr, ph = H - pt - pb
  const px = (x: number) => pl + (x / 100) * pw
  const py = (y: number) => pt + ph - (y / 0.30) * ph

  const pts: [number, number][] = (
    [[0,0.25],[3,0.22],[6,0.195],[10,0.165],[15,0.138],[22,0.112],[30,0.093],[40,0.078],[55,0.067],[70,0.060],[85,0.056],[100,0.053]]
  ).map(([x, y]) => [px(x), py(y)])

  const base = py(0)
  const line = smoothPath(pts)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-label="IL training loss">
      <defs>
        <linearGradient id="ilGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[0, 0.10, 0.20, 0.30].map(y => (
        <line key={y} x1={pl} y1={py(y)} x2={W - pr} y2={py(y)}
          stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}

      <path d={`${line} L ${px(100)} ${base} L ${px(0)} ${base} Z`} fill="url(#ilGrad)" />
      <path d={line} fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx={px(100)} cy={py(0.053)} r="2.5" fill="#8b5cf6" />

      {[0, 25, 50, 75, 100].map(x => (
        <text key={x} x={px(x)} y={H - 7} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.2)" fontFamily="monospace">
          {x === 0 ? '0' : `${x}k`}
        </text>
      ))}
      {[0.10, 0.20, 0.30].map(y => (
        <text key={y} x={pl - 6} y={py(y) + 3} textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.2)" fontFamily="monospace">
          {y.toFixed(2)}
        </text>
      ))}

      <rect x={W - pr - 60} y={pt + 1} width="8" height="2" rx="1" fill="#8b5cf6" />
      <text x={W - pr - 48} y={pt + 6} fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="monospace">IL loss</text>
    </svg>
  )
}

/* ─── Animated trading chart ─── */

function TradingChart() {
  const W = 480, H = 200
  const pl = 40, pr = 15, pt = 24, pb = 38
  const pw = W - pl - pr, ph = H - pt - pb
  const volH = 24, chartH = ph - volH - 6

  const prices = [100,98,96,94,92,95,99,103,108,112,115,118,120,117,114,111,108,112,116,120,124,128,132,129,126,123,127,131,135,138]
  const n = prices.length
  const pMin = 86, pMax = 146

  const px = (i: number) => pl + (i / (n - 1)) * pw
  const py = (p: number) => pt + chartH - ((p - pMin) / (pMax - pMin)) * chartH
  const sma = (i: number, w: number) => {
    const s = prices.slice(Math.max(0, i - w + 1), i + 1)
    return s.reduce((a, b) => a + b, 0) / s.length
  }

  const pricePts: [number, number][] = prices.map((p, i) => [px(i), py(p)])
  const ema9Pts:  [number, number][] = prices.map((_, i) => [px(i), py(sma(i, 9))])
  const ema21Pts: [number, number][] = prices.map((_, i) => [px(i), py(sma(i, 21))])

  const priceLine = smoothPath(pricePts)
  const ema9Line  = smoothPath(ema9Pts)
  const ema21Line = smoothPath(ema21Pts)

  const volBase = pt + chartH + 6 + volH
  const volumes = [40,35,30,38,25,42,55,65,72,80,75,85,90,70,60,55,50,65,75,85,88,92,95,70,60,50,65,75,80,85]
  const volMax  = Math.max(...volumes)
  const barW    = (pw / n) * 0.55

  const buyIdx  = [4, 16]
  const sellIdx = [12]
  const lastX = px(n - 1), lastY = py(prices[n - 1])

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-label="Trading chart">
      <defs>
        <linearGradient id="tradeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </linearGradient>
        <style>{`
          @keyframes tradeDrawIn { from { stroke-dashoffset: 1200; } to { stroke-dashoffset: 0; } }
          @keyframes tradePing   { 0% { r: 3; opacity: 0.7; } 100% { r: 10; opacity: 0; } }
          .trade-line { stroke-dasharray: 1200; animation: tradeDrawIn 2.4s cubic-bezier(0.4,0,0.2,1) forwards; }
          .trade-ping { animation: tradePing 1.8s ease-out infinite; transform-origin: ${lastX}px ${lastY}px; }
        `}</style>
      </defs>

      {[pMin+15, pMin+30, pMin+45, pMin+60].map(p => (
        <line key={p} x1={pl} y1={py(p)} x2={W-pr} y2={py(p)} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}

      {/* Volume bars */}
      {volumes.map((v, i) => {
        const isUp = i === 0 || prices[i] >= prices[i - 1]
        const bh = (v / volMax) * volH
        return <rect key={i} x={px(i) - barW / 2} y={volBase - bh} width={barW} height={bh}
          fill={isUp ? 'rgba(16,185,129,0.35)' : 'rgba(239,68,68,0.35)'} />
      })}

      <path d={`${priceLine} L ${lastX} ${pt + chartH} L ${px(0)} ${pt + chartH} Z`} fill="url(#tradeGrad)" />
      <path d={ema21Line} fill="none" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.5" />
      <path d={ema9Line}  fill="none" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.5" />
      <path className="trade-line" d={priceLine} fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />

      {/* Buy signals */}
      {buyIdx.map(i => {
        const cx = px(i), cy = Math.min(py(prices[i]) + 8, pt + chartH - 4)
        return (
          <g key={i}>
            <polygon points={`${cx},${cy-8} ${cx-5},${cy} ${cx+5},${cy}`} fill="#10b981" opacity="0.85" />
            <line x1={cx} y1={py(prices[i])} x2={cx} y2={cy-9} stroke="#10b981" strokeWidth="1" strokeDasharray="2,2" strokeOpacity="0.5" />
          </g>
        )
      })}

      {/* Sell signals */}
      {sellIdx.map(i => {
        const cx = px(i), cy = Math.max(py(prices[i]) - 8, pt + 4)
        return (
          <g key={i}>
            <polygon points={`${cx},${cy+8} ${cx-5},${cy} ${cx+5},${cy}`} fill="#ef4444" opacity="0.85" />
            <line x1={cx} y1={py(prices[i])} x2={cx} y2={cy+9} stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" strokeOpacity="0.5" />
          </g>
        )
      })}

      {/* Live price dot */}
      <circle className="trade-ping" cx={lastX} cy={lastY} r="3" fill="none" stroke="#f59e0b" strokeWidth="1" />
      <circle cx={lastX} cy={lastY} r="3" fill="#f59e0b" />
      <rect x={lastX + 5} y={lastY - 8} width="30" height="14" rx="2" fill="#f59e0b" fillOpacity="0.18" />
      <text x={lastX + 20} y={lastY + 3} textAnchor="middle" fontSize="8" fill="#f59e0b" fontFamily="monospace" fontWeight="bold">138</text>

      {/* X labels */}
      {(['Jan','Apr','Jul','Oct'] as const).map((m, k) => (
        <text key={m} x={px(k === 3 ? n - 1 : k * 10)} y={H - 5} textAnchor="middle"
          fontSize="9" fill="rgba(255,255,255,0.2)" fontFamily="monospace">{m}</text>
      ))}

      {/* Y labels */}
      {[92, 108, 124, 138].map(p => (
        <text key={p} x={pl - 5} y={py(p) + 3} textAnchor="end"
          fontSize="9" fill="rgba(255,255,255,0.2)" fontFamily="monospace">{p}</text>
      ))}

      {/* Legend */}
      <rect x={pl} y={pt - 12} width="8" height="2" rx="1" fill="#f59e0b" />
      <text x={pl + 12} y={pt - 7} fontSize="8" fill="rgba(255,255,255,0.35)" fontFamily="monospace">Price</text>
      <rect x={pl + 50} y={pt - 12} width="8" height="2" rx="1" fill="#06b6d4" />
      <text x={pl + 62} y={pt - 7} fontSize="8" fill="rgba(255,255,255,0.35)" fontFamily="monospace">EMA9</text>
      <rect x={pl + 105} y={pt - 12} width="8" height="2" rx="1" fill="#8b5cf6" />
      <text x={pl + 117} y={pt - 7} fontSize="8" fill="rgba(255,255,255,0.35)" fontFamily="monospace">EMA21</text>
      <polygon points={`${pl + 168},${pt - 14} ${pl + 163},${pt - 8} ${pl + 173},${pt - 8}`} fill="#10b981" />
      <text x={pl + 177} y={pt - 7} fontSize="8" fill="rgba(255,255,255,0.35)" fontFamily="monospace">BUY</text>
      <polygon points={`${pl + 208},${pt - 8} ${pl + 203},${pt - 14} ${pl + 213},${pt - 14}`} fill="#ef4444" />
      <text x={pl + 217} y={pt - 7} fontSize="8" fill="rgba(255,255,255,0.35)" fontFamily="monospace">SELL</text>
    </svg>
  )
}

/* ─── Robotics gallery ─── */

const roboticsPhotos = [
  {
    src: '/portafolio/robotics/simulation.png',
    label: 'Simulation environment',
    caption: 'Custom Robosuite environment — Franka Emika Panda arm performing autonomous screwdriving with Intel RealSense depth camera',
  },
  {
    src: '/portafolio/robotics/real-robot.png',
    label: 'Real-world deployment',
    caption: 'Franka Emika Panda in lab — hardware-in-the-loop validation of the sim-to-real transfer pipeline',
  },
]

function RoboticsGallery() {
  const [zoomed, setZoomed] = useState<number | null>(null)

  return (
    <>
      <div className="bg-[#080b12] rounded-t-xl overflow-hidden border-b border-white/[0.06]">

        {/* Full-width simulation photo */}
        <button
          onClick={() => setZoomed(0)}
          className="relative group w-full overflow-hidden block"
          style={{ aspectRatio: '16/9' }}
          aria-label="Expand simulation photo"
        >
          <img src={roboticsPhotos[0].src} alt={roboticsPhotos[0].label}
            className="w-full h-full object-contain bg-[#080b12] transition-transform duration-700 group-hover:scale-[1.02]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/12 transition-colors duration-300" />
          <ZoomIn size={14} className="absolute top-3 right-3 text-white/0 group-hover:text-white/45 transition-colors duration-300" />
          <p className="absolute bottom-3 left-4 text-[10px] font-mono text-white/35 uppercase tracking-widest">
            {roboticsPhotos[0].label}
          </p>
        </button>

        {/* Bottom row: real robot photo + SVG charts */}
        <div className="grid grid-cols-[5fr_8fr]" style={{ minHeight: '17rem' }}>

          {/* Real robot photo */}
          <button
            onClick={() => setZoomed(1)}
            className="relative group overflow-hidden border-r border-white/[0.04]"
            aria-label="Expand real robot photo"
          >
            <img src={roboticsPhotos[1].src} alt={roboticsPhotos[1].label}
              className="w-full h-full object-contain bg-[#080b12] transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/12 transition-colors duration-300" />
            <ZoomIn size={13} className="absolute top-2.5 right-2.5 text-white/0 group-hover:text-white/45 transition-colors duration-300" />
            <p className="absolute bottom-3 left-3 text-[10px] font-mono text-white/35 uppercase tracking-widest">
              {roboticsPhotos[1].label}
            </p>
          </button>

          {/* Charts */}
          <div className="flex flex-col divide-y divide-white/[0.04]">
            <div className="flex-1 px-4 pt-3 pb-0">
              <p className="text-[9px] font-mono text-[var(--text-3)] uppercase tracking-widest mb-0.5">
                SAC vs TD3 — eval/mean_reward · 5M timesteps
              </p>
              <TrainingCurvesChart />
            </div>
            <div className="flex-1 px-4 pt-3 pb-0">
              <p className="text-[9px] font-mono text-[var(--text-3)] uppercase tracking-widest mb-0.5">
                Imitation learning — training loss
              </p>
              <ILTrainingChart />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox — photos only */}
      {zoomed !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex flex-col items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setZoomed(null)}
        >
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={roboticsPhotos[zoomed].src} alt={roboticsPhotos[zoomed].label}
              className="w-full max-h-[75vh] rounded-xl object-contain" />
            <div className="mt-4 space-y-1 text-center">
              <p className="text-sm font-semibold text-white">{roboticsPhotos[zoomed].label}</p>
              <p className="text-xs text-[var(--text-2)] max-w-xl mx-auto leading-relaxed">{roboticsPhotos[zoomed].caption}</p>
            </div>
            <div className="flex justify-center gap-2 mt-5">
              {roboticsPhotos.map((_, j) => (
                <button key={j} onClick={() => setZoomed(j)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${j === zoomed ? 'bg-[var(--accent)]' : 'bg-white/20 hover:bg-white/40'}`} />
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
    useTradingChart: false,
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
    tagline: 'CV + ML inventory system · Live in production',
    badge: 'Live',
    badgeColor: '#10b981',
    language: 'TypeScript',
    private: false,
    github: 'https://github.com/carlovivanco/autocount',
    live: 'https://autocount-pearl.vercel.app',
    accent: '#3b82f6',
    useGallery: false,
    useTradingChart: false,
    metrics: [
      { value: 'YOLOv8', label: 'CV Model' },
      { value: 'GBM', label: 'Peak Forecast' },
      { value: '94% mAP', label: 'CV Accuracy' },
    ],
    codeLines: [
      [{ t: '# Peak-hour demand forecasting', c: '#4b5563' }],
      [{ t: 'feats', c: '#e2e8f0' }, { t: ' = ', c: '#8b5cf6' }, { t: "['hour', 'dow', 'lag_1h', 'lag_24h', 'roll_7d']", c: '#a3e635' }],
      [{ t: 'model', c: '#e2e8f0' }, { t: ' = ', c: '#8b5cf6' }, { t: 'GradientBoostingRegressor', c: '#7dd3fc' }, { t: '(', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '  n_estimators=', c: 'rgba(255,255,255,0.4)' }, { t: '200', c: '#f87171' }, { t: ', max_depth=', c: 'rgba(255,255,255,0.4)' }, { t: '4', c: '#f87171' }, { t: ', lr=', c: 'rgba(255,255,255,0.4)' }, { t: '0.05', c: '#f87171' }],
      [{ t: ')', c: 'rgba(255,255,255,0.4)' }],
      [{ t: 'model.', c: 'rgba(255,255,255,0.4)' }, { t: 'fit', c: '#7dd3fc' }, { t: '(X_train[feats], y_train)', c: 'rgba(255,255,255,0.4)' }],
      [{ t: '' }],
      [{ t: '# Predict & flag restocking windows', c: '#4b5563' }],
      [{ t: 'preds', c: '#e2e8f0' }, { t: '  = model.', c: 'rgba(255,255,255,0.4)' }, { t: 'predict', c: '#7dd3fc' }, { t: '(X_forecast)', c: 'rgba(255,255,255,0.4)' }],
      [{ t: 'peaks', c: '#e2e8f0' }, { t: '  = X_forecast[preds ', c: 'rgba(255,255,255,0.4)' }, { t: '>', c: '#8b5cf6' }, { t: ' threshold][', c: 'rgba(255,255,255,0.4)' }, { t: '"hour"', c: '#a3e635' }, { t: '].tolist()', c: 'rgba(255,255,255,0.4)' }],
    ],
    description: 'CV + ML system for automated inventory management — YOLOv8 for real-time item detection and a gradient boosting model that predicts peak demand hours to trigger proactive restocking alerts.',
    details: [
      'Gradient Boosting Regressor trained on historical inventory movement logs. Features: hour of day, day of week, 1h/24h lags, 7-day rolling average. Predicts high-demand windows and fires restocking alerts before stock depletes.',
      'Fine-tuned YOLOv8n via transfer learning on ~2,000 custom-labeled inventory images. Achieved 94% mAP@0.5 after 50 epochs with mosaic, flip, and HSV augmentation. Real-time inference pipeline with NMS at IoU 0.5.',
      'Next.js 14 dashboard with SWR optimistic updates — live item counts, peak-hour heatmap, and alert feed. Full CI/CD to Vercel on every push.',
    ],
    tech: ['Python', 'YOLOv8', 'scikit-learn', 'OpenCV', 'TypeScript', 'Next.js 14', 'SWR', 'Vercel'],
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
    useTradingChart: true,
    metrics: [
      { value: 'RSI · MACD', label: 'Indicators' },
      { value: 'Backtested', label: 'Validated' },
      { value: 'Live exec.', label: 'Mode' },
    ],
    codeLines: [],
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
      {/* Header: gallery, trading chart, or code preview */}
      {p.useGallery ? <RoboticsGallery /> : p.useTradingChart ? (
        <div className="relative bg-[#080b12] rounded-t-xl overflow-hidden border-b border-white/[0.06] px-4 pt-2 pb-1">
          <TradingChart />
        </div>
      ) : <CodePreview lines={p.codeLines as any} accent={p.accent} />}

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
