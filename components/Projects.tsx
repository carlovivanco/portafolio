import Link from 'next/link'
import Section from './Section'
import LoopVideo from './LoopVideo'
import Pipeline from './Pipeline'
import RoboticsGallery from './RoboticsGallery'
import { maybe } from '@/lib/asset'
import { projects, type Project } from '@/lib/projects'

function Links({ p }: { p: Project }) {
  const ext = { target: '_blank', rel: 'noopener noreferrer' }
  return (
    <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
      {p.links.code && <a className="link" href={p.links.code} {...ext}>Code ↗</a>}
      {p.links.video && <a className="link" href={p.links.video} {...ext}>Video ↗</a>}
      {p.links.report && <a className="link" href={p.links.report} {...ext}>Report ↗</a>}
      {p.links.live && <a className="link" href={p.links.live} {...ext}>Live site ↗</a>}
      {p.links.page && <Link className="link" href={p.links.page}>Project page →</Link>}
    </p>
  )
}

function Metrics({ p }: { p: Project }) {
  return (
    <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-3">
      {p.metrics.map(([k, v]) => (
        <div key={k}>
          <dt className="text-sm text-muted">{k}</dt>
          <dd className="num font-medium">{v}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Poster frame, or a clip that plays on hover/focus when the file has been uploaded. */
function Media({ p }: { p: Project }) {
  if (!p.media) return null
  const poster = maybe(p.media.poster)
  const video = p.media.video ? maybe(p.media.video) : null
  if (!poster && !video) return null
  const cls = 'w-full aspect-video object-cover rounded-2xl bg-wash'
  return video ? (
    <LoopVideo hover src={video} poster={poster ?? undefined} label={`${p.name} demo`} className={cls} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={poster!} alt={`${p.name} preview`} loading="lazy" className={cls} />
  )
}

function Featured({ p }: { p: Project }) {
  return (
    <article>
      <h3 className="text-3xl md:text-5xl font-bold">{p.name}</h3>
      <p className="text-muted">{p.tagline}</p>
      <p className="mt-4 max-w-2xl text-lg">{p.oneLiner}</p>
      <Metrics p={p} />

      <dl className="mt-8 grid gap-6 md:grid-cols-3 max-w-4xl">
        <div><dt className="font-semibold">Problem</dt><dd className="mt-1 text-muted">Unscrewing a bolt with a gripper-less arm needs contact-rich control that is hard to hand-code and unsafe to learn on hardware.</dd></div>
        <div><dt className="font-semibold">Method</dt><dd className="mt-1 text-muted">RL policy trained at scale in Isaac Lab, with a YOLO + RealSense perception stack feeding pose estimates through ROS 2.</dd></div>
        <div><dt className="font-semibold">Result</dt><dd className="mt-1 text-muted">15M training steps in simulation, then deployed and validated on a physical Franka Emika Panda.</dd></div>
      </dl>

      <div className="mt-8"><Pipeline /></div>
      <Links p={p} />
      <RoboticsGallery />
    </article>
  )
}

/** Large, unmuted player: the demo's audio (voice command) is part of the result. */
function Spotlight({ p }: { p: Project }) {
  const poster = maybe(p.media!.poster)
  const video = maybe(p.media!.video!)
  return (
    <article>
      {video && (
        <video
          controls playsInline preload="metadata"
          src={video} poster={poster ?? undefined}
          aria-label={`${p.name} demo`}
          className="w-full aspect-video rounded-2xl bg-wash"
        />
      )}
      <div className="mt-8 grid gap-6 lg:grid-cols-[5fr_6fr] lg:gap-16">
        <div>
          <h3 className="text-4xl md:text-6xl font-bold">{p.name}</h3>
          <p className="mt-2 text-muted">{p.tagline}</p>
        </div>
        <div>
          <p className="max-w-xl text-lg">{p.oneLiner}</p>
          <p className="mt-2 text-sm text-muted">Press play, with sound on, to hear the voice command.</p>
          <Metrics p={p} />
          <p className="mt-4 text-sm text-muted">{p.tech.join(' · ')}</p>
          <Links p={p} />
        </div>
      </div>
    </article>
  )
}

function Card({ p }: { p: Project }) {
  return (
    <article>
      <Media p={p} />
      <div className="mt-5 grid gap-6 lg:grid-cols-[5fr_6fr] lg:gap-16">
        <div>
          <h3 className="text-3xl md:text-5xl font-bold">{p.name}</h3>
          <p className="mt-2 text-muted">{p.tagline}</p>
        </div>
        <div>
          <p className="max-w-xl text-lg">{p.oneLiner}</p>
          <Metrics p={p} />
          <p className="mt-4 text-sm text-muted">{p.tech.join(' · ')}</p>
          <Links p={p} />
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [thesis, hri, ...rest] = projects
  return (
    <Section id="projects" title="Projects">
      <Featured p={thesis} />
      <div className="mt-24 border-t border-rule pt-16"><Spotlight p={hri} /></div>
      <ul className="mt-24 space-y-20 border-t border-rule pt-16">
        {rest.map(p => <li key={p.slug}><Card p={p} /></li>)}
      </ul>
    </Section>
  )
}
