import { asset, maybe } from '@/lib/asset'
import { site } from '@/lib/site'
import LoopVideo from './LoopVideo'

export default function Hero() {
  const video = maybe('/robotics/franka-real.mp4')
  const cv = maybe('/cv.pdf')
  const poster = asset('/robotics/real-robot.png')

  return (
    <section className="mx-auto max-w-6xl px-6 pt-14 pb-16 md:pt-24 md:pb-24">
      <p className="num text-sm text-muted mb-6">{site.location}</p>
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">Carlo Vivanco</h1>
      <p className="mt-6 text-2xl md:text-3xl max-w-3xl leading-snug">
        Robot learning engineer. I train RL and imitation policies in simulation and put them on real robots.
      </p>

      <ul className="mt-8 flex flex-wrap gap-3">
        {cv && (
          <li><a href={cv} download className="btn btn-primary">CV (PDF) ↓</a></li>
        )}
        <li><a href={site.github} className="btn" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
        <li><a href={site.linkedin} className="btn" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
        <li><a href={`mailto:${site.email}`} className="btn">{site.email}</a></li>
      </ul>

      <figure className="mt-12">
        {video ? (
          <LoopVideo src={video} poster={poster} label="Franka arm unscrewing a bolt on real hardware"
            className="w-full max-h-[70vh] border border-rule bg-wash object-cover aspect-video" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="Franka Panda arm in the lab" className="w-full max-h-[70vh] border border-rule bg-wash object-cover aspect-video" />
        )}
        <figcaption className="mt-2 text-sm text-muted">Franka Panda unscrewing a bolt — policy trained in simulation, running on the real robot.</figcaption>
      </figure>
    </section>
  )
}
