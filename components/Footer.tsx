export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d3d] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-mono text-slate-600">
          <span className="text-blue-500">{'<'}</span>
          Carlo Vivanco
          <span className="text-blue-500">{' />'}</span>
        </p>
        <p className="text-xs text-slate-700">
          Built with Next.js & Tailwind CSS · Deployed on Vercel
        </p>
        <p className="text-xs text-slate-700">© {new Date().getFullYear()} Carlo Vivanco</p>
      </div>
    </footer>
  )
}
