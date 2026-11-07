import type { Metadata } from 'next'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import { asset } from '@/lib/asset'
import './globals.css'

const sans = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-sans', display: 'swap', axes: ['opsz', 'wdth'] })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

const title = 'Carlo Vivanco — Robot Learning Engineer'
const description =
  'Robot learning engineer and AI engineer at Nexxia. I train RL and imitation policies (LeRobot, Isaac Lab, Omniverse) and put them on real robots. MSc Intelligent Systems & Robotics, University of Essex. TN visa eligible, relocating to California.'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://carlovivanco.github.io'),
  title,
  description,
  keywords: ['Carlo Vivanco', 'Robot Learning', 'Reinforcement Learning', 'Imitation Learning', 'Sim-to-Real', 'Franka', 'Isaac Lab', 'Isaac Sim', 'Omniverse', 'LeRobot', 'Diffusion Policy', 'LangGraph', 'ROS 2'],
  authors: [{ name: 'Carlo Felipe Vivanco Coronado', url: 'https://github.com/carlovivanco' }],
  openGraph: {
    title,
    description,
    type: 'website',
    images: [{ url: asset('/og.jpg'), width: 1200, height: 630, alt: 'Franka Panda arm in the lab' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [asset('/og.jpg')] },
  robots: { index: true, follow: true },
}

// Applies the saved theme before paint (light is the default).
const themeScript = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
