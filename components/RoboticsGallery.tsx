'use client'

import { useEffect, useRef, useState } from 'react'

/* Dissertation gallery (files in public/robotics; src already includes basePath via NEXT_PUBLIC_BASE_PATH) */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const roboticsMedia = [
  {
    src: `${base}/robotics/simulation.png`,
    label: 'Simulation environment',
    caption: 'Franka Emika Panda arm performing autonomous screwdriving in simulation',
    graph: false,
  },
  {
    src: `${base}/robotics/real-robot.png`,
    label: 'Real-world deployment',
    caption: 'Franka Emika Panda in the lab — the policy running on hardware',
    graph: false,
  },
  {
    src: `${base}/robotics/il-training.png`,
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

export default function RoboticsGallery() {
  const [zoomed, setZoomed] = useState<number | null>(null)
  return (
    <>
      <ul className="mt-8 grid gap-6 sm:grid-cols-3">
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

