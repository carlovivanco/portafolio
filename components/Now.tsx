'use client'

import { motion } from 'framer-motion'
import Section from './Section'

// Update monthly.
const updated = 'November 2026'
const cards = [
  {
    tag: 'Work',
    title: 'Nexxia · multi-agent AI platform',
    text: 'Building agentic systems on GCP: Vertex AI Agent Builder, LangGraph, hybrid RAG and MCP servers. Model router at 96% routing accuracy, event-driven Cloud Run pipelines.',
    stack: ['Vertex AI', 'LangGraph', 'RAG', 'MCP'],
  },
  {
    tag: 'Personal',
    title: 'LeRobot · SO-101',
    text: 'Leader–follower teleoperation to record my own demonstration datasets, then training ACT and Diffusion Policy imitation policies on the arm.',
    stack: ['LeRobot', 'ACT', 'Diffusion Policy', 'PyTorch'],
  },
  {
    tag: 'Personal',
    title: 'Franka · Isaac Lab',
    text: 'Reinforcement learning for manipulation on the Franka Panda, continuing the dissertation work on sim-to-real transfer.',
    stack: ['Isaac Lab', 'PPO', 'ROS 2', 'Franka'],
  },
  {
    tag: 'Personal',
    title: 'Omniverse · Isaac Sim',
    text: 'A digital twin of the Franka workcell in Omniverse, with Replicator synthetic data to train perception models.',
    stack: ['Isaac Sim', 'Omniverse', 'Replicator', 'USD'],
  },
]

export default function Now() {
  return (
    <Section id="now" n="01" title="Now">
      <p className="num text-sm text-muted">Updated {updated}</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {cards.map((c, i) => (
          <motion.li key={c.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group border border-rule bg-wash/40 p-5 transition-colors hover:border-accent">
            <p className="num text-xs text-accent">{c.tag}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">{c.title}</h3>
            <p className="mt-2 text-muted">{c.text}</p>
            <p className="num mt-4 text-xs text-muted">{c.stack.join(' · ')}</p>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
