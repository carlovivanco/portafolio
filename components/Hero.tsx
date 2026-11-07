'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '@/lib/site'

const RobotArm = dynamic(() => import('./RobotArm'), { ssr: false })

const roles = ['Robot learning engineer', 'AI engineer @ Nexxia', 'Sim-to-real with Isaac Lab', 'Imitation learning on LeRobot']

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero({ cv }: { cv: string | null }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI(n => (n + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-16 md:pb-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
      <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
        <motion.p variants={item} className="num text-sm text-accent mb-4">Hi, my name is</motion.p>
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">Carlo Vivanco.</motion.h1>
        <motion.div variants={item} className="mt-3 h-12 md:h-14 text-3xl md:text-5xl font-semibold tracking-tight text-muted overflow-hidden" aria-live="off">
          <AnimatePresence mode="wait">
            <motion.span key={i} className="block" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} transition={{ duration: 0.35 }}>
              {roles[i]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        <motion.p variants={item} className="mt-6 text-lg max-w-xl text-muted">
          By day I build multi-agent AI systems at Nexxia. On my own time I train robot policies — imitation on a LeRobot SO-101, RL on a Franka in Isaac Lab, and digital twins in Omniverse.
        </motion.p>
        <motion.ul variants={item} className="mt-8 flex flex-wrap gap-3">
          {cv && <li><a href={cv} download className="btn btn-primary">CV (PDF) ↓</a></li>}
          <li><a href={site.github} className="btn" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
          <li><a href={site.linkedin} className="btn" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
          <li><a href={`mailto:${site.email}`} className="btn">{site.email}</a></li>
        </motion.ul>
        <motion.p variants={item} className="num text-xs text-muted mt-6">{site.location}</motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
        className="relative h-[340px] md:h-[480px] border border-rule bg-wash/40 overflow-hidden">
        <RobotArm />
        <span className="num absolute right-3 top-3 text-xs text-muted pointer-events-none">move your cursor · drag to orbit</span>
      </motion.div>
    </section>
  )
}
