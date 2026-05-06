'use client'

import Image from 'next/image'
import { Github, Mail, ChevronDown, Linkedin } from 'lucide-react'
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
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
        {/* Avatar */}
        <div className="flex-shrink-0 animate-float">
          <div className="relative w-44 h-44 md:w-56 md:h-56">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/20 blur-xl" />
            <div className="relative w-full h-full rounded-full border-2 border-blue-500/30 overflow-hidden animate-pulse-glow">
              <Image
                src="https://avatars.githubusercontent.com/u/174478033?v=4"
                alt="Carlo Felipe Vivanco Coronado"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <p className="section-label mb-3">Open to new opportunities</p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
            Carlo
            <span className="text-blue-400 glow-text"> Vivanco</span>
          </h1>
          <p className="text-slate-500 text-sm font-mono mb-4">Vivanco Coronado · Mexico City, MX</p>

          <div className="flex items-center justify-center md:justify-start gap-3 h-10 mb-6">
            <span className="text-xl md:text-2xl text-slate-300 font-light">{displayed}</span>
            <span className="w-0.5 h-6 bg-blue-400 animate-pulse" />
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            Mechatronics Engineer & MSc Intelligent Systems with{' '}
            <span className="text-white font-medium">3+ years</span> across automotive, energy &
            AI. Built production systems at{' '}
            <span className="text-white font-medium">Tesla</span>,{' '}
            <span className="text-white font-medium">Ford</span> &{' '}
            <span className="text-white font-medium">Stellantis</span>. Now architecting
            multi-agent AI platforms at{' '}
            <span className="text-white font-medium">Nexxia</span> on GCP.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-[#1e2d3d] hover:border-blue-500/50 text-slate-300 hover:text-white rounded-lg font-medium text-sm transition-all duration-200"
            >
              View projects
            </a>

            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/carlovivanco"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[#1e2d3d] text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/carlofelipevivancocoronado"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[#1e2d3d] text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:carlo292002@gmail.com"
                className="p-2.5 rounded-lg border border-[#1e2d3d] text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-10">
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Companies', value: '4' },
              { label: 'Degrees', value: '2' },
              { label: 'Tech Stack', value: '30+' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center md:text-left">
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-blue-400 transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
