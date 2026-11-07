import Section from './Section'
import { site } from '@/lib/site'

const links = [
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'GitHub', href: site.github },
  { label: '+52 55 1959 0789', href: 'tel:+525519590789' },
]

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="text-xl max-w-xl">I'm open to robot learning and AI engineering roles. I'm relocating to California and eligible for a TN visa.</p>
      <a href={`mailto:${site.email}`} className="mt-8 inline-block break-all text-[clamp(1.75rem,6vw,4.5rem)] font-bold leading-tight tracking-tight underline decoration-4 underline-offset-8 decoration-rule transition-colors hover:text-accent hover:decoration-accent">
        {site.email}
      </a>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
        {links.map(l => (
          <li key={l.label}><a className="link" href={l.href} {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{l.label}</a></li>
        ))}
      </ul>
    </Section>
  )
}
