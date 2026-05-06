import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlo Vivanco — AI & Robotics Engineer',
  description:
    'Portfolio of Carlo Felipe Vivanco Coronado, Mechatronics Engineer & MSc Intelligent Systems. 3+ years at Tesla, Ford, Stellantis, and Nexxia. Expert in AI agents, ROS/ROS2, embedded systems, and GCP.',
  keywords: [
    'Carlo Vivanco',
    'Carlo Felipe Vivanco Coronado',
    'AI Engineer',
    'Robotics Engineer',
    'Mechatronics Engineer',
    'Tesla',
    'Ford',
    'Nexxia',
    'University of Essex',
    'Tecnológico de Monterrey',
    'Python',
    'ROS',
    'Multi-Agent AI',
    'GCP',
  ],
  authors: [{ name: 'Carlo Felipe Vivanco Coronado', url: 'https://github.com/carlovivanco' }],
  openGraph: {
    title: 'Carlo Vivanco — AI & Robotics Engineer',
    description:
      'Mechatronics Engineer & MSc Intelligent Systems | Tesla · Ford · Nexxia | AI/ML · ROS · GCP',
    type: 'website',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/174478033?v=4',
        width: 460,
        height: 460,
        alt: 'Carlo Felipe Vivanco Coronado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlo Vivanco — AI & Robotics Engineer',
    description: 'Mechatronics | MSc Robotics | Tesla · Ford · Nexxia | Multi-Agent AI · GCP · ROS',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
