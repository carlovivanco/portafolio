const links = [
  { label: 'GitHub', href: 'https://github.com/carlovivanco', ext: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/carlofelipevivancocoronado', ext: true },
  { label: 'carlo292002@gmail.com', href: 'mailto:carlo292002@gmail.com', ext: false },
]

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-28 md:pb-28">
      <p className="font-mono text-sm text-muted mb-6">Mexico City</p>
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">Carlo Vivanco</h1>
      <p className="mt-6 text-2xl md:text-3xl text-muted max-w-3xl leading-snug">
        I build multi-agent AI systems and robotics software.
      </p>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed">
        Mechatronics Engineer & MSc Intelligent Systems with 3+ years across automotive, energy & AI.
        Built production systems at Tesla, Ford & Stellantis. Now architecting multi-agent AI platforms
        at Nexxia on GCP.
      </p>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} className="link" {...(l.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {l.label}{l.ext ? ' ↗' : ''}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
