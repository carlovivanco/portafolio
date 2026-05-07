'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-white/[0.06] py-3.5' : 'py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-mono text-xs text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors tracking-widest">
          CARLO VIVANCO
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-xs font-mono text-[var(--text-3)] hover:text-[var(--text)] transition-colors tracking-widest uppercase">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:carlo292002@gmail.com"
          className="hidden md:block text-xs font-mono text-[var(--text-3)] hover:text-[var(--accent)] transition-colors"
        >
          carlo292002@gmail.com
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-1.5 text-[var(--text-3)] hover:text-[var(--text)]">
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/[0.06] mt-1 px-6 py-5 space-y-4">
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="block text-xs font-mono text-[var(--text-3)] hover:text-[var(--text)] tracking-widest uppercase">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
