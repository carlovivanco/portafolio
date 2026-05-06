export default function Footer() {
  return (
    <footer className="border-t border-[#1a2332] py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-xs text-slate-700 font-mono">carlo292002@gmail.com</span>
        <span className="text-xs text-slate-700">© {new Date().getFullYear()} Carlo Felipe Vivanco Coronado</span>
        <a
          href="https://github.com/carlovivanco"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-700 hover:text-slate-500 transition-colors font-mono"
        >
          github.com/carlovivanco
        </a>
      </div>
    </footer>
  )
}
