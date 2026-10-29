'use client'

import { useEffect, useRef, useState } from 'react'

const stages = [
  { name: 'Camera', stack: 'Intel RealSense RGB-D, calibrated to the robot base frame.' },
  { name: 'YOLO', stack: 'YOLO + OpenCV for real-time tool detection and 6-DOF pose estimation.' },
  { name: 'Policy', stack: 'RL policy trained in Isaac Lab (15M steps) with PyTorch; imitation baseline for comparison.' },
  { name: 'ROS 2', stack: 'Separate perception, planning and execution nodes; the same interface serves sim and hardware.' },
  { name: 'Franka', stack: 'Franka Emika Panda, 7-DOF arm performing screwdriving without a gripper.' },
]

export default function Pipeline() {
  const ref = useRef<HTMLOListElement>(null)
  const [seen, setSeen] = useState(false)
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <figure>
      <ol ref={ref} className="grid gap-2 sm:grid-cols-5" aria-label="Sim-to-real pipeline">
        {stages.map((s, i) => (
          <li key={s.name} className="relative">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls="pipeline-detail"
              style={{ animation: seen ? `lit .5s ${i * 0.18}s both` : undefined, opacity: seen ? undefined : 0.35 }}
              className={`w-full text-left px-3 py-3 border transition-colors ${seen ? 'border-accent' : 'border-rule'} ${open === i ? 'bg-wash text-accent' : ''}`}>
              <span className="num text-xs text-muted">0{i + 1}</span>
              <span className="block font-medium">{s.name}</span>
            </button>
            {i < stages.length - 1 && (
              <span aria-hidden className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-muted z-10">→</span>
            )}
          </li>
        ))}
      </ol>
      <div id="pipeline-detail" aria-live="polite" className="mt-3 min-h-[3rem] text-sm text-muted max-w-2xl">
        {open !== null ? <><strong className="text-ink">{stages[open].name}:</strong> {stages[open].stack}</> : 'Click a block to see its stack.'}
      </div>
      <figcaption className="sr-only">Camera, YOLO, policy, ROS 2, Franka</figcaption>
    </figure>
  )
}
