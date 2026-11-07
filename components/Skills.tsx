'use client'

import { motion } from 'framer-motion'
import Section from './Section'

const groups = [
  {
    title: 'Robot Learning',
    skills: ['Deep RL', 'Imitation learning', 'ACT', 'Diffusion Policy', 'LeRobot', 'Sim-to-real transfer', 'PyTorch', 'Stable-Baselines3'],
  },
  {
    title: 'Simulation & Robotics',
    skills: ['Isaac Lab', 'Isaac Sim', 'Omniverse / Replicator', 'MuJoCo / robosuite', 'ROS / ROS 2', 'Franka Emika', 'Intel RealSense'],
  },
  {
    title: 'AI Engineering',
    skills: ['LangGraph', 'Vertex AI Agent Builder', 'Hybrid RAG', 'MCP servers', 'GCP / Cloud Run'],
  },
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'Go', 'SQL', 'Linux', 'Docker'],
  },
  {
    title: 'Perception',
    skills: ['OpenCV', 'YOLO', '6-DOF pose estimation', 'Camera calibration'],
  },
]

export default function Skills() {
  return (
    <Section id="skills" n="05" title="Skills">
      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 max-w-4xl">
        {groups.map(({ title, skills }) => (
          <div key={title} className="border-t border-rule pt-3">
            <h3 className="font-semibold">{title}</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.li key={s} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.04, type: 'spring', stiffness: 300, damping: 20 }}
                  whileHover={{ y: -3 }}
                  className="num text-xs border border-rule px-2 py-1 text-muted transition-colors hover:border-accent hover:text-accent">{s}</motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
