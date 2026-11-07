'use client'

import { motion } from 'framer-motion'

export default function Section({ id, title, n, children }: { id: string; title: string; n?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="border-t border-rule py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-[11rem_1fr] md:gap-12">
        <h2 id={`${id}-h`} className="text-xl font-semibold tracking-tight md:sticky md:top-24 md:self-start">
          {n && <span className="num text-accent text-base mr-2">{n}.</span>}{title}
        </h2>
        <div className="min-w-0">{children}</div>
      </motion.div>
    </section>
  )
}
