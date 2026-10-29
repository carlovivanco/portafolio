'use client'

import { useState } from 'react'

export default function CopyBibtex({ text }: { text: string }) {
  const [done, setDone] = useState(false)
  const copy = () => navigator.clipboard?.writeText(text).then(() => { setDone(true); setTimeout(() => setDone(false), 2000) }, () => {})
  return (
    <div className="mt-4 relative">
      <pre className="num text-sm overflow-x-auto border border-rule bg-wash p-4">{text}</pre>
      <button onClick={copy} className="btn absolute top-2 right-2 text-xs" aria-live="polite">{done ? 'Copied' : 'Copy'}</button>
    </div>
  )
}
