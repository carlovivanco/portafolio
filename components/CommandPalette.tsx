'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { site } from '@/lib/site'

type Action = { label: string; hint: string; run: () => void }

export default function CommandPalette({ cv }: { cv: string | null }) {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [i, setI] = useState(0)
  const [note, setNote] = useState('')
  const input = useRef<HTMLInputElement>(null)
  const opener = useRef<HTMLElement | null>(null)

  const close = () => { setOpen(false); setQ(''); setI(0); setNote(''); opener.current?.focus() }
  const go = (hash: string) => () => { close(); location.hash = hash }
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  const actions = useMemo<Action[]>(() => {
    const a: Action[] = [
      { label: 'Projects', hint: 'Jump', run: go('#projects') },
      { label: 'Thesis project page', hint: 'Open', run: () => { location.href = `${base}/thesis/` } },
      { label: 'Experience', hint: 'Jump', run: go('#experience') },
      { label: 'Education', hint: 'Jump', run: go('#education') },
      { label: 'Skills', hint: 'Jump', run: go('#skills') },
      { label: 'Contact', hint: 'Jump', run: go('#contact') },
      { label: 'Copy email', hint: site.email, run: () => { navigator.clipboard?.writeText(site.email).then(() => setNote('Email copied'), () => setNote(site.email)) } },
      { label: 'GitHub', hint: 'Open ↗', run: () => window.open(site.github, '_blank', 'noopener') },
      { label: 'LinkedIn', hint: 'Open ↗', run: () => window.open(site.linkedin, '_blank', 'noopener') },
    ]
    if (cv) a.splice(6, 0, { label: 'Download CV', hint: 'PDF', run: () => { const l = document.createElement('a'); l.href = cv; l.download = ''; l.click(); close() } })
    return a
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cv])

  const shown = actions.filter(a => a.label.toLowerCase().includes(q.toLowerCase()))

  useEffect(() => {
    const show = () => { opener.current = document.activeElement as HTMLElement; setOpen(true) }
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open ? close() : show() }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-palette', show)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('open-palette', show) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  useEffect(() => { if (open) input.current?.focus() }, [open])

  if (!open) return null

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') close()
    else if (e.key === 'ArrowDown') { e.preventDefault(); setI(v => Math.min(v + 1, shown.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setI(v => Math.max(v - 1, 0)) }
    else if (e.key === 'Enter') shown[i]?.run()
    else if (e.key === 'Tab') { e.preventDefault() } // keep focus in the input
  }

  return (
    <div role="dialog" aria-modal="true" aria-label="Command palette" onKeyDown={onKey}
      className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-[15vh] px-4" onClick={close}>
      <div className="w-full max-w-lg bg-paper border border-rule" onClick={e => e.stopPropagation()}>
        <input ref={input} value={q} onChange={e => { setQ(e.target.value); setI(0) }} placeholder="Type a command…"
          aria-label="Search commands" role="combobox" aria-expanded="true" aria-controls="palette-list" aria-activedescendant={`pal-${i}`}
          className="w-full bg-transparent px-4 py-3 border-b border-rule outline-none" />
        <ul id="palette-list" role="listbox" className="max-h-72 overflow-auto py-1">
          {shown.length === 0 && <li className="px-4 py-3 text-muted">No match</li>}
          {shown.map((a, n) => (
            <li key={a.label} id={`pal-${n}`} role="option" aria-selected={n === i}
              onMouseEnter={() => setI(n)} onClick={a.run}
              className={`flex justify-between px-4 py-2 cursor-pointer ${n === i ? 'bg-wash text-accent' : ''}`}>
              <span>{a.label}</span><span className="text-sm text-muted">{a.hint}</span>
            </li>
          ))}
        </ul>
        <p className="px-4 py-2 border-t border-rule text-xs text-muted flex justify-between" aria-live="polite">
          <span>{note || '↑↓ navigate · Enter select · Esc close'}</span><span className="num">⌘K</span>
        </p>
      </div>
    </div>
  )
}
