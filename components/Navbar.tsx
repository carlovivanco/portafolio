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
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-[#1a2332] py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-sm font-mono text-slate-500 hover:text-white transition-colors">
          Carlo Vivanco
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs font-mono text-slate-500 hover:text-white transition-colors uppercase tracking-widest"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:carlo292002@gmail.com"
          className="hidden md:block text-xs font-mono text-slate-500 hover:text-white transition-colors"
        >
          carlo292002@gmail.com
        </a>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-500 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-[#1a2332]">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-xs font-mono text-slate-500 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
