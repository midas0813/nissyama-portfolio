'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: '#about', label: t('About', '私について') },
    { href: '#skills', label: t('Skills', 'スキル') },
    { href: '#projects', label: t('Projects', 'プロジェクト') },
    { href: '#blog', label: t('Blog', 'ブログ') },
    { href: '#contact', label: t('Contact', 'お問い合わせ') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl font-bold text-green-600 dark:text-green-400">
            NT
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'jp' : 'en')}
              className="px-4 py-2 border-2 border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all"
            >
              {language === 'en' ? '日本語' : 'English'}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-slate-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'jp' : 'en');
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 border-2 border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all"
            >
              {language === 'en' ? '日本語' : 'English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
