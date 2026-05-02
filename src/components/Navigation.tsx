'use client';

import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ja'>('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: { en: 'About', ja: '概要' } },
    { id: 'skills', label: { en: 'Skills', ja: 'スキル' } },
    { id: 'projects', label: { en: 'Projects', ja: 'プロジェクト' } },
    { id: 'blog', label: { en: 'Blog', ja: 'ブログ' } },
    { id: 'contact', label: { en: 'Contact', ja: 'お問い合わせ' } },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-slate-900 dark:text-white">
            NT
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {item.label[language]}
              </a>
            ))}
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
              className="px-3 py-1 text-sm border border-slate-300 dark:border-slate-700 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {language === 'en' ? '日本語' : 'English'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
