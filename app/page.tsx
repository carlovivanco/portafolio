import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Metrics from '@/components/Metrics'
import Projects from '@/components/Projects'
import Now from '@/components/Now'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Ambient from '@/components/Ambient'
import Footer from '@/components/Footer'
import CommandPalette from '@/components/CommandPalette'
import { maybe } from '@/lib/asset'

export default function Home() {
  return (
    <>
      <Ambient />
      <Navbar />
      <CommandPalette cv={maybe('/cv.pdf')} />
      <main id="main">
        <Hero cv={maybe('/cv.pdf')} />
        <Metrics />
        <Now />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
