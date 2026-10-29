import Section from './Section'

// Update monthly. Add a `href` once the repo exists.
const now = { updated: 'October 2026', text: 'Training humanoid locomotion policies in Isaac Lab.', href: null as string | null }

export default function Now() {
  return (
    <Section id="now" title="Now">
      <p className="num text-sm text-muted">{now.updated}</p>
      <p className="mt-2 text-lg max-w-2xl">
        {now.text}{' '}
        {now.href && <a className="link" href={now.href} target="_blank" rel="noopener noreferrer">Follow along ↗</a>}
      </p>
    </Section>
  )
}
