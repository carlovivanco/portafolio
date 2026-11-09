import type { Metadata } from 'next'
import Link from 'next/link'
import Pipeline from '@/components/Pipeline'
import SimVsReal from '@/components/SimVsReal'
import TrainingCurves from '@/components/TrainingCurves'
import LoopVideo from '@/components/LoopVideo'
import CopyBibtex from '@/components/CopyBibtex'
import { asset, maybe } from '@/lib/asset'
import { loadCurves } from '@/lib/curves'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Imitation Learning + Deep RL for Robotic Manipulation — Carlo Vivanco',
  description: 'MSc dissertation: imitation learning (BC + DAgger) combined with deep RL in Isaac Lab (15M steps) lets a real Franka Emika Panda unscrew a bolt.',
}

const bibtex = `@mastersthesis{vivanco2025deeprl,
  author  = {Vivanco Coronado, Carlo Felipe},
  title   = {Deep Reinforcement Learning Control System for Autonomous Robotic Manipulation},
  school  = {University of Essex},
  year    = {2025},
  address = {Colchester, United Kingdom}
}`

export default function Thesis() {
  const real = maybe('/robotics/franka-real.mp4')
  const sim = maybe('/robotics/franka-sim.mp4')
  const report = maybe('/robotics/thesis.pdf')
  const curves = loadCurves()
  const poster = asset('/robotics/real-robot.png')

  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-14">
      <Link href="/" className="link text-sm">← Portfolio</Link>

      <header className="mt-8 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Imitation Learning + Deep RL for Robotic Manipulation</h1>
        <p className="mt-4 text-muted">Carlo Felipe Vivanco Coronado · University of Essex · MSc Intelligent Systems & Robotics</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          <li><a className="btn btn-primary" href={site.thesisRepo} target="_blank" rel="noopener noreferrer">Code ↗</a></li>
          {report && <li><a className="btn" href={report}>Report (PDF)</a></li>}
        </ul>
      </header>

      <div className="mt-10">
        {real ? (
          <LoopVideo src={real} poster={poster} label="Real Franka unscrewing a bolt" className="w-full aspect-video object-cover border border-rule bg-wash" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="Franka Panda in the lab" className="w-full aspect-video object-cover border border-rule bg-wash" />
        )}
      </div>

      <section className="mt-14" aria-labelledby="abstract">
        <h2 id="abstract" className="text-xl font-semibold text-center">Abstract</h2>
        <p className="mt-4">
          We combine imitation learning and deep reinforcement learning to let a 7-DOF Franka Emika Panda arm unscrew a
          bolt without a gripper. A policy is first learned from demonstrations with behaviour cloning and DAgger, then
          trained with deep RL in Isaac Lab for 15M steps and deployed on the physical robot. A camera pipeline (YOLO +
          Intel RealSense) estimates the 6-DOF pose of the tool and ROS 2 connects perception, planning and execution.
        </p>
      </section>

      <section className="mt-14" aria-labelledby="demo">
        <h2 id="demo" className="text-xl font-semibold text-center">Demonstration video</h2>
        <p className="mt-4 text-center text-sm text-muted">
          Trained policy (imitation learning + DAgger) running the full task in simulation (MuJoCo / robosuite): approach, grasp,
          unscrew about 14 rad and lift the bolt. Shown at 2x speed.
        </p>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video className="mt-6 w-full aspect-video border border-rule bg-wash" src={asset('/robotics/thesis-demo.mp4')} controls preload="metadata" playsInline />
      </section>

      <section className="mt-14" aria-labelledby="method">
        <h2 id="method" className="text-xl font-semibold text-center">Method</h2>
        <div className="mt-6"><Pipeline /></div>
      </section>

      <section className="mt-14" aria-labelledby="results">
        <h2 id="results" className="text-xl font-semibold text-center">Results</h2>
        <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div><dd className="num text-3xl font-semibold text-accent">15M</dd><dt className="text-sm text-muted">training steps</dt></div>
          <div><dd className="num text-3xl font-semibold text-accent">Isaac Lab</dd><dt className="text-sm text-muted">simulator</dt></div>
          <div><dd className="num text-3xl font-semibold text-accent">Real</dd><dt className="text-sm text-muted">Franka deployment</dt></div>
        </dl>
        {curves && <div className="mt-10"><TrainingCurves series={curves} /></div>}
        {sim && real && <div className="mt-10"><SimVsReal sim={sim} real={real} poster={asset('/robotics/simulation.png')} /></div>}
      </section>

      <section className="mt-14" aria-labelledby="bibtex">
        <h2 id="bibtex" className="text-xl font-semibold text-center">BibTeX</h2>
        <CopyBibtex text={bibtex} />
      </section>
    </main>
  )
}
