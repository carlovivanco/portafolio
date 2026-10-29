'use client'

import { useEffect, useRef } from 'react'

type Props = {
  src: string
  poster?: string
  hover?: boolean // play only while hovered/focused (project cards)
  className?: string
  label: string
}

/** Muted looping clip. Respects prefers-reduced-motion by staying on the poster. */
export default function LoopVideo({ src, poster, hover = false, className = '', label }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const v = ref.current
    if (v && !hover && reduced()) v.pause()
  }, [hover])

  const play = () => { if (hover && !reduced()) ref.current?.play().catch(() => {}) }
  const stop = () => { if (hover) { const v = ref.current; if (v) { v.pause(); v.currentTime = 0 } } }

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay={!hover}
      preload={hover ? 'metadata' : 'auto'}
      aria-label={label}
      tabIndex={hover ? 0 : -1}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      className={className}
    />
  )
}
