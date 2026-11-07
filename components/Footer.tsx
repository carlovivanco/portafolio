export default function Footer() {
  return (
    <footer className="py-8 px-6">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Carlo Felipe Vivanco Coronado</p>
        <a className="link" href="#main">Back to top ↑</a>
      </div>
    </footer>
  )
}
