export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="border-t border-rule py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-[11rem_1fr] md:gap-12">
        <h2 id={`${id}-h`} className="text-xl font-semibold tracking-tight md:sticky md:top-24 md:self-start">{title}</h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
