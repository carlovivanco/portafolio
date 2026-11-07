'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/** Scroll progress bar + cursor spotlight. Spotlight is skipped on touch / reduced motion. */
export default function Ambient() {
  const glow = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const el = glow.current
    if (!el || !window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const move = (e: PointerEvent) => {
      el.style.setProperty('--mx', `${e.clientX}px`)
      el.style.setProperty('--my', `${e.clientY}px`)
      el.style.opacity = '1'
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <>
      <motion.div aria-hidden style={{ scaleX }} className="fixed top-0 left-0 right-0 h-0.5 bg-accent origin-left z-50" />
      <div ref={glow} aria-hidden className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-500"
        style={{ background: 'radial-gradient(500px circle at var(--mx) var(--my), color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)' }} />
    </>
  )
}
