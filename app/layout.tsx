import type { Metadata } from 'next'
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sans = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Carlo Vivanco — AI & Robotics Engineer',
  description:
    'Portfolio of Carlo Felipe Vivanco Coronado — Mechatronics Engineer & MSc Intelligent Systems. 3+ years at Tesla, Ford, Stellantis, and Nexxia. Expert in multi-agent AI, ROS/ROS2, embedded systems, and GCP.',
  keywords: ['Carlo Vivanco', 'AI Engineer', 'Robotics Engineer', 'Tesla', 'Ford', 'Nexxia', 'GCP', 'ROS', 'Multi-Agent AI'],
  authors: [{ name: 'Carlo Felipe Vivanco Coronado', url: 'https://github.com/carlovivanco' }],
  openGraph: {
    title: 'Carlo Vivanco — AI & Robotics Engineer',
    description: 'Mechatronics Engineer & MSc Intelligent Systems | Tesla · Ford · Nexxia',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
