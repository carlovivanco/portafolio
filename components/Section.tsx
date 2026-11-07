export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id={`${id}-h`} className="text-4xl md:text-6xl font-bold">{title}</h2>
        <div className="mt-10 md:mt-14 min-w-0">{children}</div>
      </div>
    </section>
  )
}
