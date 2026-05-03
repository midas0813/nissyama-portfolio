'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">

      {/* ── Background ambient blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[140px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] animate-pulse-ring" />
      </div>

      {/* ── Decorative shapes — left side ── */}
      <div className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500/30 animate-spin-slow" />
          <div className="absolute inset-4 rounded-full border border-green-400/20 animate-spin-reverse" />
          <div className="absolute inset-8 bg-green-500/10 animate-morph" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-green-500/30 animate-shimmer" />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 items-center">
          <div className="w-12 h-12 border-2 border-green-500/40 rotate-45 animate-float-y" style={{ animationDelay: '1s' }} />
          <div className="w-6 h-6 bg-green-500/20 rounded-full animate-shimmer" style={{ animationDelay: '2s' }} />
          <div className="w-10 h-10 border border-emerald-400/30 rotate-12 animate-float-y" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* ── Decorative shapes — right side ── */}
      <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <div className="relative w-56 h-56">
          <div className="absolute inset-0 rounded-full border-2 border-green-400/25 animate-spin-reverse" />
          <div className="absolute inset-6 rounded-full border-dashed border-2 border-emerald-500/20 animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit3">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 60 60" className="w-16 h-16 animate-spin-slow opacity-30">
              <polygon points="30,5 55,50 5,50" fill="none" stroke="#10b981" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="mb-8 flex flex-col gap-4 items-center" style={{ marginTop: '-280px' }}>
          <div className="w-8 h-8 bg-green-500/15 rounded-sm rotate-12 animate-float-y" />
          <div className="w-5 h-5 border-2 border-green-400/40 rounded-full animate-shimmer" style={{ animationDelay: '1.5s' }} />
          <div className="w-10 h-1 bg-green-500/30 rounded animate-float-y" style={{ animationDelay: '0.8s' }} />
        </div>
      </div>

      {/* ── Corner decorations ── */}
      <div className="absolute top-20 right-20 pointer-events-none hidden md:block">
        <svg viewBox="0 0 80 80" className="w-20 h-20 opacity-20 animate-spin-slow">
          <circle cx="40" cy="40" r="35" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="40" cy="40" r="20" fill="none" stroke="#34d399" strokeWidth="1" />
          <circle cx="40" cy="40" r="5" fill="#10b981" />
        </svg>
      </div>
      <div className="absolute bottom-24 left-16 pointer-events-none hidden md:block">
        <svg viewBox="0 0 60 60" className="w-14 h-14 opacity-20 animate-float-y">
          <rect x="10" y="10" width="40" height="40" fill="none" stroke="#10b981" strokeWidth="1.5" rx="4" transform="rotate(15 30 30)" />
          <rect x="18" y="18" width="24" height="24" fill="none" stroke="#34d399" strokeWidth="1" rx="2" transform="rotate(30 30 30)" />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in-up relative inline-block">
          <div className="absolute inset-0 rounded-full border-2 border-green-500/30 scale-125 animate-pulse-ring" />
          <div className="absolute inset-0 rounded-full border border-green-400/20 scale-150 animate-pulse-ring" style={{ animationDelay: '1s' }} />
          <div className="w-32 h-32 mx-auto rounded-full bg-green-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-green-500/30 relative z-10">
            NT
          </div>
        </div>

        <p className="text-sm text-muted mb-3 tracking-[0.2em] uppercase animate-fade-in-up">
          {t('Full Stack Software Engineer', 'フルスタックソフトウェアエンジニア')}
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-3 tracking-tight animate-fade-in-up">
          <span className="text-green-600 dark:text-green-400">Nakanishi</span>
        </h1>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-4 tracking-tight animate-fade-in-up">
          <span className="text-green-600 dark:text-green-400">Takashi</span>
        </h1>

        <p className="text-2xl text-muted mb-8 animate-fade-in-up" style={{ fontFamily: 'serif' }}>
          中西 貴志
        </p>

        <p className="text-lg text-muted leading-relaxed mb-10 animate-fade-in-up max-w-xl mx-auto">
          {t(
            'Building end-to-end solutions — from beautiful frontends to scalable backends. React, Next.js, Node.js & Golang.',
            'フロントエンドからスケーラブルなバックエンドまで、エンドツーエンドのソリューションを構築。React、Next.js、Node.js、Golangが専門です。'
          )}
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up">
          <a href="#projects"
            className="group px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
            {t('View Projects', 'プロジェクトを見る')}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact"
            className="px-8 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-green-900/20 hover:scale-105 transition-all duration-300">
            {t('Get In Touch', 'お問い合わせ')}
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-6 animate-fade-in-up">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-subtle hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-subtle hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
