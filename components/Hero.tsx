'use client'

import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const roles = ['AI Automation Engineer', 'Robotics Engineer', 'Software Engineer', 'Mechatronics Engineer']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = roles[idx]
    let t: NodeJS.Timeout
    if (typing) {
      if (text.length < target.length) {
        t = setTimeout(() => setText(target.slice(0, text.length + 1)), 55)
      } else {
        t = setTimeout(() => setTyping(false), 2600)
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 28)
      } else {
        setIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [text, typing, idx])

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 overflow-hidden">

      {/* Background radial */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[var(--accent)] opacity-[0.04] blur-[120px] rounded-full" />
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">

        {/* Pre-title */}
        <div className="reveal reveal-1 flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[var(--accent)] opacity-60" />
          <span className="label">Available for opportunities</span>
        </div>

        {/* Name — large display */}
        <h1 className="reveal reveal-2 font-bold tracking-tight mb-8 select-none">
          <span className="block text-4xl md:text-6xl lg:text-7xl text-[var(--text)]">Carlo</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-[var(--accent)]">Vivanco</span>
        </h1>

        {/* Typewriter + divider row */}
        <div className="reveal reveal-3 divider pt-7 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Typewriter */}
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl text-[var(--text-2)] font-light tracking-wide">{text}</span>
            <span className="cursor inline-block w-[2px] h-6 bg-[var(--accent)] align-middle" />
          </div>

          {/* Right column — summary + socials */}
          <div className="md:max-w-sm space-y-5">
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              Mechatronics Engineer & MSc Intelligent Systems with{' '}
              <span className="text-[var(--text)] font-medium">3+ years</span> across automotive,
              energy & AI. Built production systems at{' '}
              <span className="text-[var(--text)] font-medium">Tesla</span>,{' '}
              <span className="text-[var(--text)] font-medium">Ford</span> &{' '}
              <span className="text-[var(--text)] font-medium">Stellantis</span>. Now architecting
              multi-agent AI platforms at{' '}
              <span className="text-[var(--text)] font-medium">Nexxia</span> on GCP.
            </p>

            <div className="flex items-center gap-3">
              <a href="mailto:carlo292002@gmail.com"
                className="px-4 py-2 bg-[var(--accent)] hover:bg-blue-500 text-white text-xs font-mono rounded-lg transition-colors">
                Get in touch
              </a>
              <a href="https://github.com/carlovivanco" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/[0.08] text-[var(--text-3)] hover:text-[var(--text)] hover:border-white/[0.15] transition-colors"
                aria-label="GitHub">
                <Github size={14} />
              </a>
              <a href="https://linkedin.com/in/carlofelipevivancocoronado" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/[0.08] text-[var(--text-3)] hover:text-[var(--accent)] hover:border-white/[0.15] transition-colors"
                aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="mailto:carlo292002@gmail.com"
                className="p-2 rounded-lg border border-white/[0.08] text-[var(--text-3)] hover:text-[var(--text)] hover:border-white/[0.15] transition-colors"
                aria-label="Email">
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats row */}
      <div className="reveal reveal-4 relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06]">
          {[
            { v: '3+', l: 'Years experience' },
            { v: '4',  l: 'Companies' },
            { v: '2',  l: 'Degrees' },
            { v: '30+',l: 'Technologies' },
          ].map(({ v, l }) => (
            <div key={l} className="bg-[var(--bg)] px-6 py-5">
              <div className="text-2xl font-bold text-[var(--text)] tracking-tight">{v}</div>
              <div className="text-xs font-mono text-[var(--text-3)] mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about"
        className="reveal reveal-5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors group">
        <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
      </a>
    </section>
  )
}
