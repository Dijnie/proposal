export default function Navigation() {
  return (
    <header className="sticky top-0 z-30 animate-fade-slide-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur">
          <div className="flex items-center justify-between p-3">
            <a href="/" className="text-xl font-bold text-white">
              Proteus
            </a>

            <nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
              <a href="#problem" className="hover:text-white transition-colors">Problem</a>
              <a href="#solution" className="hover:text-white transition-colors">Solution</a>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#impact" className="hover:text-white transition-colors">Impact</a>
            </nav>

            <div className="flex gap-3 items-center">
              <a
                href="#testnet"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-md border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300"
              >
                Try Testnet
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
