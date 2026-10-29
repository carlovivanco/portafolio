export default function Footer() {
  return (
    <footer className="border-t border-rule py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-wrap justify-between gap-2 text-sm text-muted">
        <p>© {new Date().getFullYear()} Carlo Felipe Vivanco Coronado</p>
        <p className="num">Built with Next.js · static export on GitHub Pages</p>
      </div>
    </footer>
  )
}
