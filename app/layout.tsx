import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en" className="scroll-smooth">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
