'use client'

import { Github, Mail, Linkedin, MapPin, Phone } from 'lucide-react'

const links = [
  { icon: Mail, label: 'Email', value: 'carlo292002@gmail.com', href: 'mailto:carlo292002@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'carlofelipevivancocoronado', href: 'https://linkedin.com/in/carlofelipevivancocoronado' },
  { icon: Github, label: 'GitHub', value: 'carlovivanco', href: 'https://github.com/carlovivanco' },
  { icon: Phone, label: 'Phone', value: '+52 55 1959 0789', href: 'tel:+525519590789' },
  { icon: MapPin, label: 'Location', value: 'Mexico City · Open to relocate', href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-[#1a2332]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left label */}
          <div className="md:col-span-3">
            <p className="section-label mt-1">Contact</p>
          </div>

          {/* Right content */}
          <div className="md:col-span-9">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Let's work together.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-12 max-w-lg">
              Always open to discussing new opportunities, engineering challenges,
              or connecting with builders and teams doing meaningful work.
            </p>

            <div className="space-y-0">
              {links.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-5 py-4 border-b border-[#1a2332] group">
                    <Icon size={15} className="text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                    <span className="text-xs font-mono text-slate-600 w-20 flex-shrink-0 uppercase tracking-widest">{label}</span>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{value}</span>
                  </div>
                )
                return href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
