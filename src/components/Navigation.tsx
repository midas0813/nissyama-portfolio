'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: '#about', label: t('About', '私について') },
    { href: '#skills', label: t('Skills', 'スキル') },
    { href: '#projects', label: t('Projects', 'プロジェクト') },
    { href: '#blog', label: t('Blog', 'ブログ') },
    { href: '#contact', label: t('Contact', 'お問い合わせ') },
  ];

  return (
    <nav className="nav-bar fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            西山 直輝
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary text-muted hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'jp' : 'en')}
              className="px-4 py-1.5 border-2 border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all text-sm font-medium"
            >
              {language === 'en' ? '日本語' : 'English'}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
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
          <div className="md:hidden py-4 space-y-4 border-t border-[var(--card-border)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-primary hover:text-green-600 dark:hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={toggleTheme}
                className="flex-1 px-4 py-2 border border-[var(--card-border)] rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center justify-center gap-2 text-primary text-sm"
              >
                {theme === 'light' ? (
                  <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> Dark</>
                ) : (
                  <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> Light</>
                )}
              </button>
              <button
                onClick={() => { setLanguage(language === 'en' ? 'jp' : 'en'); setIsOpen(false); }}
                className="flex-1 px-4 py-2 border-2 border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all text-sm font-medium"
              >
                {language === 'en' ? '日本語' : 'English'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
