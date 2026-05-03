'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);
  const ref = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] placeholder:text-[var(--subtle)] focus:outline-none focus:ring-2 focus:ring-green-500 transition-all';

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Japan map grey opacified background */}
      <div
        className="absolute inset-0 pointer-events-none select-none dark:opacity-50 opacity-20"
        style={{
          backgroundImage: 'url(/map/jp.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'calc(50% - 300px) calc(50% + 100px)',
          backgroundSize: 'auto 100%',
          
          filter: 'grayscale(100%) brightness(0.5)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 data-scroll="fade-up" className="text-4xl font-bold text-primary mb-2">
          {t('Contact', 'お問い合わせ')}
        </h2>
        <p data-scroll="fade-up" data-delay="100" className="text-muted mb-12 text-lg">
          {t(
            'Available for full-time positions and consulting opportunities',
            '正社員・コンサルティングのご依頼を受け付けています'
          )}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ── Left: info ── */}
          <div data-scroll="fade-left" data-delay="200" className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {t('Get In Touch', 'ご連絡ください')}
              </h3>
              <p className="text-muted leading-relaxed">
                {t(
                  "I'm currently open to new opportunities in full-stack engineering — particularly roles involving modern web technologies, scalable systems, and innovative user experiences.",
                  '現在、フルスタックエンジニアリングの新しい機会を探しています。特にモダンなWeb技術、スケーラブルなシステム、革新的なユーザー体験に関わるポジションに興味があります。'
                )}
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: 'nishiyama.naoki@example.com',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                },
                {
                  label: t('Tokyo, Japan 〒100-0001', '東京都 〒100-0001'),
                  icon: (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <span className="text-primary text-sm">{item.label}</span>
                </div>
              ))}

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <a href="https://github.com" className="text-primary text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  github.com/nishiyama-naoki
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <form data-scroll="fade-right" data-delay="300" onSubmit={handleSubmit} className="space-y-5">
            {sent && (
              <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 text-sm font-medium">
                {t("✅ Message sent! I'll respond within 24 hours.", '✅ メッセージを送信しました！24時間以内にご返信します。')}
              </div>
            )}

            {[
              { id: 'name',    label: t('Name *', 'お名前 *'),    type: 'text',  required: true,  key: 'name'    as const },
              { id: 'email',   label: t('Email *', 'メール *'),   type: 'email', required: true,  key: 'email'   as const },
              { id: 'company', label: t('Company', '会社名'),     type: 'text',  required: false, key: 'company' as const },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-semibold text-primary mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  value={formData[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className={inputClass}
                  required={field.required}
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                {t('Message *', 'メッセージ *')}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-green-500/20 hover:scale-[1.02] transition-all duration-300"
            >
              {t('Send Message →', 'メッセージを送る →')}
            </button>
          </form>
        </div>

        <footer className="mt-20 pt-8 border-t border-[var(--card-border)] text-center text-sm text-subtle">
          <p>&copy; 2024 Nishiyama Naoki · 西山 直輝. {t('All rights reserved.', '無断転載禁止。')}</p>
        </footer>
      </div>
    </section>
  );
}
