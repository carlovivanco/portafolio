export default function Footer() {
  return (
    <footer className="divider py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-[var(--text-3)]">carlo292002@gmail.com</span>
        <span className="font-mono text-xs text-[var(--text-3)]">© {new Date().getFullYear()} Carlo Felipe Vivanco Coronado</span>
        <a href="https://github.com/carlovivanco" target="_blank" rel="noopener noreferrer"
          className="font-mono text-xs text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors">
          github.com/carlovivanco
        </a>
      </div>
    </footer>
  )
}
