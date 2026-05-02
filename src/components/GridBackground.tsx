'use client';

export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(148 163 184) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-green-300 dark:bg-green-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-emerald-300 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
    </div>
  );
}
