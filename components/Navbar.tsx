'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [light, setLight] = useState(false)

  const toggleTheme = () => {
    const next = !light
    setLight(next)
    if (next) document.documentElement.setAttribute('data-theme', 'light')
    else document.documentElement.removeAttribute('data-theme')
    try { localStorage.setItem('theme', next ? 'light' : 'dark') } catch {}
  }

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id)
        else if (e.boundingClientRect.top > 0) setActive(a => (a === e.target.id ? '' : a))
      }),
      { rootMargin: '-30% 0px -65% 0px' },
    )
    links.forEach(l => { const el = document.querySelector(l.href); if (el) io.observe(el) })
    setLight(document.documentElement.getAttribute('data-theme') === 'light')
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { io.disconnect(); window.removeEventListener('keydown', onKey) }
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="#main" className="font-semibold tracking-tight">Carlo Vivanco</a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => {
            const on = active === href.slice(1)
            return (
              <li key={href}>
                <a href={href} aria-current={on ? 'true' : undefined}
                  className={`text-sm py-1 border-b transition-colors hover:text-ink ${on ? 'text-ink border-accent' : 'text-muted border-transparent'}`}>
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3 -ml-4">
          <button onClick={() => window.dispatchEvent(new Event('open-palette'))} className="num text-xs text-muted border border-rule px-2 py-1 hover:text-ink" aria-label="Open command palette">⌘K</button>
          <button onClick={toggleTheme} className="text-xs text-muted border border-rule px-2 py-1 hover:text-ink" aria-label="Toggle light/dark theme">{light ? 'Dark' : 'Light'}</button>
        </div>

        <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open} aria-controls="mobile-menu" className="md:hidden p-3 -mr-3">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="md:hidden border-t border-rule bg-paper px-6 py-2">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}
                aria-current={active === href.slice(1) ? 'true' : undefined}
                className={`block py-3 border-b border-rule last:border-0 ${active === href.slice(1) ? 'text-accent' : ''}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
