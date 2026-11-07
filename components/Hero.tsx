'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { site } from '@/lib/site'

const RobotArm = dynamic(() => import('./RobotArm'), { ssr: false })

const rise = { hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }
const fade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

export default function Hero({ cv }: { cv: string | null }) {
  return (
    <section className="p-3 md:p-4">
      <div className="on-hero relative overflow-hidden rounded-[28px] bg-hero text-white lg:min-h-[min(calc(100dvh-5.5rem),56rem)] flex flex-col lg:justify-end">
        {/* Interactive Franka: drag to orbit, it follows the cursor */}
        <div className="relative h-[340px] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[28%] lg:h-auto">
          <RobotArm />
        </div>

        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
          className="relative pointer-events-none px-6 pb-8 pt-4 md:px-12 md:pb-12 lg:pt-0">
          <h1 className="font-extrabold leading-[0.86] tracking-[-0.035em] text-[clamp(4rem,14vw,12.5rem)]">
            <span className="block overflow-hidden pb-[0.06em]"><motion.span variants={rise} className="block">Carlo</motion.span></span>
            <span className="block overflow-hidden pb-[0.06em]"><motion.span variants={rise} className="block">Vivanco</motion.span></span>
          </h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,34rem)_1fr] lg:items-end">
            <motion.p variants={fade} className="text-xl md:text-2xl leading-snug font-medium">
              I train robots in simulation, then make the policy work on the real arm. By day, AI engineer at Nexxia.
            </motion.p>
            <motion.ul variants={fade} className="pointer-events-auto flex flex-wrap items-center gap-x-6 gap-y-3 lg:justify-end">
              {cv && <li><a href={cv} download className="btn bg-white text-[#0a0f1f] border-white hover:bg-white/90">Download CV</a></li>}
              <li><a href={site.github} className="underline underline-offset-4 decoration-white/40 hover:decoration-white" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={site.linkedin} className="underline underline-offset-4 decoration-white/40 hover:decoration-white" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={`mailto:${site.email}`} className="underline underline-offset-4 decoration-white/40 hover:decoration-white">{site.email}</a></li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
