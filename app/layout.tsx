import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlo Vivanco — Robotics & Software Engineer',
  description:
    'Portfolio of Carlo Vivanco, Mechatronics & Robotics Engineer with experience at Tesla and Ford. Specializing in AI, robotics, automation, and full-stack development.',
  keywords: [
    'Carlo Vivanco',
    'Robotics Engineer',
    'Software Engineer',
    'AI Engineer',
    'Mechatronics',
    'Tesla',
    'Ford',
    'University of Essex',
    'Python',
    'ROS',
    'Machine Learning',
  ],
  authors: [{ name: 'Carlo Vivanco', url: 'https://github.com/carlovivanco' }],
  openGraph: {
    title: 'Carlo Vivanco — Robotics & Software Engineer',
    description:
      'Portfolio of Carlo Vivanco — Mechatronics & Intelligent Systems Engineer.',
    type: 'website',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/174478033?v=4',
        width: 460,
        height: 460,
        alt: 'Carlo Vivanco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlo Vivanco — Robotics & Software Engineer',
    description: 'Mechatronics & Intelligent Systems Engineer | Tesla | Ford | MSc Essex',
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
