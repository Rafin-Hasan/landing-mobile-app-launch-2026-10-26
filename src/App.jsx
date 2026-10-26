export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Nudge</span>
        <a href="#cta" className="bg-fuchsia-600 text-white px-4 py-2 rounded-lg hover:bg-fuchsia-700 transition">
          Get the App
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-fuchsia-600 font-semibold mb-4">iOS & Android</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Build better habits, one nudge at a time</h1>
        <p className="text-lg text-slate-600 mb-10">A habit tracker that adapts to your routine instead of guilting you into streaks.</p>
        <a href="#cta" className="inline-block bg-fuchsia-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-fuchsia-700 transition">
          Download Free
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Smart Reminders</h3>
          <p className="text-slate-600">Nudges timed to when you’re actually free.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Flexible Streaks</h3>
          <p className="text-slate-600">Miss a day without losing your progress.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Private by Default</h3>
          <p className="text-slate-600">Your data stays on your device.</p>
        </div>
      </section>

      <section id="cta" className="bg-fuchsia-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Your habits, finally on track</h2>
        <p className="mb-8 text-fuchsia-100">Free to start. No account required.</p>
        <a href="#" className="inline-block bg-white text-fuchsia-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Download Free
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Nudge. All rights reserved.
      </footer>
    </div>
  )
}
