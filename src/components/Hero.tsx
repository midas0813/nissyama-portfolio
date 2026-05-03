export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Animated background elements - Green theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-3d-rotate">
            NT
          </div>
        </div>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 tracking-wider uppercase animate-fade-in-up animation-delay-100">
          Full Stack Software Engineer
        </p>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Nakanishi Takashi
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
          中西 貴志
        </p>
        
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Building <span className="font-semibold text-green-600 dark:text-green-400">end-to-end solutions</span> from 
            beautiful frontends to scalable backends. Specialized in React, Next.js, Node.js, and Golang.
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400">
            5+ years crafting full-stack applications with modern technologies and best practices.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-500">
          <a
            href="#projects"
            className="group px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-green-500 dark:border-green-600 text-green-700 dark:text-green-400 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-green-900/20 hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="mt-16 flex justify-center gap-6 animate-fade-in-up animation-delay-600">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
