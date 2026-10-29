'use client'

import { useEffect, useRef, useState } from 'react'

const metrics = [
  { value: 15, prefix: '', suffix: 'M', label: 'training steps' },
  { value: 95, prefix: '>', suffix: '%', label: 'gesture accuracy' },
  { value: 5, prefix: '<', suffix: ' mm', label: 'positioning error' },
  { value: 25, prefix: '', suffix: '%', label: 'faster releases' },
]

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(value) // final value first: correct without JS / reduced motion

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t: number) => {
        const p = Math.min((t - t0) / 1200, 1)
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      setN(0)
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value])

  return <span ref={ref}>{prefix}{n}{suffix}</span>
}

export default function Metrics() {
  return (
    <section aria-label="Key numbers" className="border-t border-rule">
      <dl className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map(m => (
          <div key={m.label} className="flex flex-col-reverse justify-end">
            <dt className="mt-1 text-sm text-muted">{m.label}</dt>
            <dd className="num text-4xl md:text-5xl font-semibold text-accent"><Counter {...m} /></dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
