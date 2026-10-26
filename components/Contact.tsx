import Section from './Section'

const links = [
  { label: 'Email', value: 'carlo292002@gmail.com', href: 'mailto:carlo292002@gmail.com' },
  { label: 'LinkedIn', value: 'carlofelipevivancocoronado', href: 'https://linkedin.com/in/carlofelipevivancocoronado' },
  { label: 'GitHub', value: 'github.com/carlovivanco', href: 'https://github.com/carlovivanco' },
  { label: 'Phone', value: '+52 55 1959 0789', href: 'tel:+525519590789' },
  { label: 'Location', value: 'Mexico City · Open to relocation', href: null },
]

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-lg max-w-2xl">
        Open to new opportunities, engineering challenges, and teams doing meaningful work.
      </p>
      <dl className="mt-10 max-w-2xl border-t border-rule">
        {links.map(({ label, value, href }) => (
          <div key={label} className="grid gap-1 sm:grid-cols-[9rem_1fr] py-3 border-b border-rule">
            <dt className="text-sm text-muted">{label}</dt>
            <dd>
              {href ? (
                <a className="link" href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{value}</a>
              ) : value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
