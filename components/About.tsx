'use client'

import { Code2, Cpu, Globe, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Cpu,
    title: 'Robotics & Automation',
    description:
      'Experienced with ROS, motion planning, and robotic systems — from academic research to industrial applications.',
  },
  {
    icon: Zap,
    title: 'AI & Machine Learning',
    description:
      'Building intelligent systems with TensorFlow, PyTorch, and OpenCV. Focused on real-world deployable models.',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Full-stack and systems programming in Python, TypeScript, C++, and Go. Delivering production-grade code.',
  },
  {
    icon: Globe,
    title: 'Multilingual',
    description:
      'Fluent in English (IELTS C1) and Spanish, with basic German (Goethe A2). Comfortable in global teams.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left */}
          <div className="md:w-5/12">
            <p className="section-label mb-3">Who I am</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Building intelligent systems that{' '}
              <span className="text-blue-400">move and think</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a Mechatronics and Intelligent Systems engineer with a passion for creating
                technology at the intersection of hardware and software. My journey spans from
                manufacturing test engineering at{' '}
                <span className="text-white font-medium">Tesla</span> to automation at{' '}
                <span className="text-white font-medium">Ford Motor Company</span>.
              </p>
              <p>
                My MSc in Intelligent Systems and Robotics at the{' '}
                <span className="text-white font-medium">University of Essex</span> deepened my
                focus on AI-powered robotic systems, while my engineering background grounds every
                solution I build in real-world constraints.
              </p>
              <p>
                When I'm not engineering physical systems, I build software tools — from AI-powered
                market platforms to mission-control dashboards — because great engineering spans
                every layer of the stack.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card rounded-xl p-6 group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
