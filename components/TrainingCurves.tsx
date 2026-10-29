'use client'

import { useState } from 'react'

export type Series = { name: string; points: [number, number][] } // [step, reward]

const W = 640, H = 300, M = { l: 52, r: 12, t: 12, b: 32 }
// One accent plus neutral tints; distinguishable by dash as well as colour.
const styles = ['var(--accent)', 'var(--ink)', 'var(--muted)', 'var(--rule)']
const dashes = ['', '6 3', '2 3', '10 3 2 3']

export default function TrainingCurves({ series }: { series: Series[] }) {
  const [on, setOn] = useState<Set<string>>(new Set(series.map(s => s.name)))
  const [hover, setHover] = useState<number | null>(null)

  const all = series.flatMap(s => s.points)
  const maxX = Math.max(...all.map(p => p[0]))
  const minY = Math.min(...all.map(p => p[1]), 0)
  const maxY = Math.max(...all.map(p => p[1]))
  const x = (v: number) => M.l + (v / maxX) * (W - M.l - M.r)
  const y = (v: number) => H - M.b - ((v - minY) / (maxY - minY || 1)) * (H - M.t - M.b)

  const visible = series.filter(s => on.has(s.name))
  const nearest = (s: Series, step: number) => s.points.reduce((b, p) => (Math.abs(p[0] - step) < Math.abs(b[0] - step) ? p : b))
  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = ((e.clientX - r.left) / r.width) * W
    setHover(Math.min(Math.max(((px - M.l) / (W - M.l - M.r)) * maxX, 0), maxX))
  }
  const fmt = (n: number) => (n >= 1e6 ? `${+(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${+(n / 1e3).toFixed(0)}k` : `${n}`)

  return (
    <figure>
      <div className="flex flex-wrap gap-2 mb-3" role="group" aria-label="Algorithms">
        {series.map((s, i) => (
          <button key={s.name} aria-pressed={on.has(s.name)}
            onClick={() => setOn(prev => { const n = new Set(prev); n.has(s.name) ? n.delete(s.name) : n.add(s.name); return n })}
            className={`btn ${on.has(s.name) ? '' : 'opacity-50'}`}>
            <svg width="20" height="8" aria-hidden><line x1="0" x2="20" y1="4" y2="4" stroke={styles[i % 4]} strokeWidth="2" strokeDasharray={dashes[i % 4]} /></svg>
            {s.name}
          </button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" onMouseMove={onMove} onMouseLeave={() => setHover(null)} role="img" aria-label="Training reward curves">
        {[0, 0.25, 0.5, 0.75, 1].map(t => {
          const v = minY + t * (maxY - minY)
          return <g key={t}><line x1={M.l} x2={W - M.r} y1={y(v)} y2={y(v)} stroke="var(--rule)" /><text x={M.l - 6} y={y(v) + 4} textAnchor="end" className="num" fontSize="11" fill="var(--muted)">{fmt(Math.round(v))}</text></g>
        })}
        {[0, 0.5, 1].map(t => <text key={t} x={x(t * maxX)} y={H - 10} textAnchor="middle" className="num" fontSize="11" fill="var(--muted)">{fmt(t * maxX)}</text>)}
        {series.map((s, i) => on.has(s.name) && (
          <polyline key={s.name} fill="none" stroke={styles[i % 4]} strokeWidth="2" strokeDasharray={dashes[i % 4]}
            points={s.points.map(p => `${x(p[0])},${y(p[1])}`).join(' ')} />
        ))}
        {hover !== null && visible.length > 0 && <line x1={x(hover)} x2={x(hover)} y1={M.t} y2={H - M.b} stroke="var(--muted)" strokeDasharray="3 3" />}
      </svg>
      <p className="num text-sm text-muted min-h-[1.5rem]" aria-live="off">
        {hover !== null && visible.length > 0
          ? <>step {fmt(Math.round(hover))} — {visible.map(s => `${s.name}: ${Math.round(nearest(s, hover)[1]).toLocaleString()}`).join(' · ')}</>
          : 'Hover the chart to read reward at each step.'}
      </p>
      <figcaption className="text-sm text-muted">Evaluation reward vs. training steps.</figcaption>
    </figure>
  )
}
