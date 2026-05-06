'use client'

import { Github, Mail, Linkedin, MapPin } from 'lucide-react'

const links = [
  {
    icon: Github,
    label: 'GitHub',
    value: '@carlovivanco',
    href: 'https://github.com/carlovivanco',
    color: 'hover:text-white',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'carlovivanco@email.com',
    href: 'mailto:carlovivanco@email.com',
    color: 'hover:text-blue-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Open to relocation worldwide',
    href: null,
    color: 'hover:text-cyan-400',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-label mb-3">Say hello</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Let's build something
          <span className="text-blue-400"> great together</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          I'm always open to discussing new opportunities, interesting projects, or just connecting
          with fellow engineers and builders.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:carlovivanco@email.com"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
          >
            Send me an email
          </a>
          <a
            href="https://github.com/carlovivanco"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#1e2d3d] hover:border-blue-500/50 text-slate-300 hover:text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Github size={16} />
            Follow on GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map(({ icon: Icon, label, value, href, color }) => {
            const content = (
              <div className={`card rounded-xl p-5 flex flex-col items-center gap-2 group cursor-${href ? 'pointer' : 'default'}`}>
                <Icon
                  size={20}
                  className={`text-slate-500 group-hover:text-blue-400 transition-colors ${color}`}
                />
                <div>
                  <div className="text-xs text-slate-600 font-mono mb-0.5">{label}</div>
                  <div className="text-sm text-slate-300">{value}</div>
                </div>
              </div>
            )
            return href ? (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
