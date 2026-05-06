'use client'

import { Github, Mail, ChevronDown, Linkedin, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const roles = [
  'AI Automation Engineer',
  'Robotics Engineer',
  'Software Engineer',
  'Mechatronics Engineer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setTyping(false), 2400)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          {/* Location line */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-px bg-blue-500" />
            <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">
              Mexico City — Open to relocate
            </span>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-none">
            Carlo<br />
            <span className="text-blue-400">Vivanco</span>
          </h1>

          {/* Typewriter role */}
          <div className="flex items-center gap-2 mb-8 h-8">
            <span className="text-lg md:text-xl text-slate-400 font-light tracking-wide">{displayed}</span>
            <span className="w-px h-5 bg-blue-400 animate-pulse" />
          </div>

          {/* Description */}
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Mechatronics Engineer & MSc Intelligent Systems with 3+ years across automotive, energy, and AI.
            Production systems at Tesla, Ford, and Stellantis.
            Currently architecting multi-agent AI platforms at Nexxia on GCP.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Get in touch
              <ArrowUpRight size={14} />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1a2332] hover:border-[#2a3f5a] text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
            >
              View experience
            </a>
            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/carlovivanco"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#1a2332] text-slate-500 hover:text-white hover:border-[#2a3f5a] transition-colors"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="https://linkedin.com/in/carlofelipevivancocoronado"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#1a2332] text-slate-500 hover:text-blue-400 hover:border-[#2a3f5a] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:carlo292002@gmail.com"
                className="p-2 rounded-lg border border-[#1a2332] text-slate-500 hover:text-white hover:border-[#2a3f5a] transition-colors"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 pt-8 border-t border-[#1a2332]">
            {[
              { label: 'Years of experience', value: '3+' },
              { label: 'Companies', value: '4' },
              { label: 'Degrees', value: '2' },
              { label: 'Technologies', value: '30+' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-3xl font-bold text-white">{value}</div>
                <div className="text-xs text-slate-600 mt-1 font-mono">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-700 hover:text-slate-500 transition-colors"
      >
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
