import { Github, Mail, Linkedin, Phone, MapPin } from 'lucide-react'

const links = [
  { Icon: Mail,     label: 'Email',    value: 'carlo292002@gmail.com',              href: 'mailto:carlo292002@gmail.com' },
  { Icon: Linkedin, label: 'LinkedIn', value: 'carlofelipevivancocoronado',          href: 'https://linkedin.com/in/carlofelipevivancocoronado' },
  { Icon: Github,   label: 'GitHub',   value: 'github.com/carlovivanco',             href: 'https://github.com/carlovivanco' },
  { Icon: Phone,    label: 'Phone',    value: '+52 55 1959 0789',                    href: 'tel:+525519590789' },
  { Icon: MapPin,   label: 'Location', value: 'Mexico City · Open to relocation',   href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 divider">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div>
            <span className="label block mb-6">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] leading-tight">
              Let's work<br />together.
            </h2>
            <p className="text-sm text-[var(--text-2)] leading-relaxed mt-5">
              Open to new opportunities, engineering challenges,
              and connecting with teams doing meaningful work.
            </p>
            <div className="flex gap-3 mt-8">
              <a href="mailto:carlo292002@gmail.com"
                className="px-5 py-2.5 bg-[var(--accent)] hover:bg-blue-500 text-white text-xs font-mono rounded-lg transition-colors">
                Send email
              </a>
              <a href="https://linkedin.com/in/carlofelipevivancocoronado" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 border border-white/[0.08] hover:border-white/[0.15] text-[var(--text-2)] hover:text-[var(--text)] text-xs font-mono rounded-lg transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            {links.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-center gap-5 py-4 border-b border-white/[0.06] group">
                  <Icon size={14} className="text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors flex-shrink-0" />
                  <span className="font-mono text-[10px] text-[var(--text-3)] uppercase tracking-widest w-20 flex-shrink-0">{label}</span>
                  <span className="text-sm text-[var(--text-2)] group-hover:text-[var(--text)] transition-colors">{value}</span>
                </div>
              )
              return href ? (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
