'use client'

import { useRef, useState } from 'react'

export default function SimVsReal({ sim, real, poster }: { sim: string; real: string; poster?: string }) {
  const a = useRef<HTMLVideoElement>(null)
  const b = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const [x, y] = [a.current, b.current]
    if (!x || !y) return
    if (playing) { x.pause(); y.pause() }
    else { y.currentTime = x.currentTime; x.play().catch(() => {}); y.play().catch(() => {}) }
    setPlaying(!playing)
  }
  // Keep the real clip locked to the simulation clip.
  const sync = () => {
    const [x, y] = [a.current, b.current]
    if (x && y && Math.abs(x.currentTime - y.currentTime) > 0.1) y.currentTime = x.currentTime
  }

  const cls = 'w-full aspect-video object-cover border border-rule bg-wash'
  return (
    <figure>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <video ref={a} src={sim} poster={poster} muted loop playsInline onTimeUpdate={sync} className={cls} aria-label="Simulation" />
          <p className="mt-1 text-sm text-muted">Simulation</p>
        </div>
        <div>
          <video ref={b} src={real} muted loop playsInline className={cls} aria-label="Real robot" />
          <p className="mt-1 text-sm text-muted">Real Franka</p>
        </div>
      </div>
      <button onClick={toggle} className="btn mt-3">{playing ? 'Pause' : 'Play both'}</button>
    </figure>
  )
}
