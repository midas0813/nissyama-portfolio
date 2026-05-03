'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const philosophy = [
    {
      color: 'text-green-600',
      text: t('User-centric frontend', 'ユーザー中心のフロントエンド'),
      desc: t('Crafting intuitive, responsive interfaces with React and modern CSS', 'ReactとモダンCSSで直感的でレスポンシブなUIを構築'),
    },
    {
      color: 'text-emerald-600',
      text: t('Robust backend systems', '堅牢なバックエンドシステム'),
      desc: t('Building scalable APIs and microservices with Node.js and Golang', 'Node.jsとGolangでスケーラブルなAPIとマイクロサービスを構築'),
    },
    {
      color: 'text-teal-600',
      text: t('End-to-end ownership', 'エンドツーエンドの責任'),
      desc: t('From database design to deployment and monitoring', 'データベース設計からデプロイ・監視まで一貫して担当'),
    },
    {
      color: 'text-green-600',
      text: t('Modern best practices', 'モダンなベストプラクティス'),
      desc: t('TypeScript, testing, CI/CD, and clean architecture', 'TypeScript、テスト、CI/CD、クリーンアーキテクチャを採用'),
    },
  ];

  const stats = [
    { value: '5+',   label: t('Years Experience', '年の経験'),    color: 'text-green-600' },
    { value: '30+',  label: t('Projects Delivered', 'プロジェクト完了'), color: 'text-emerald-600' },
    { value: '15+',  label: t('Technologies', '使用技術'),        color: 'text-teal-600' },
    { value: '100%', label: t('Client Satisfaction', '顧客満足度'), color: 'text-green-600' },
  ];

  return (
    <section id="about" className="section-alt py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 animate-fade-in-up text-primary">
          {t('About Me', '私について')}
        </h2>

        <div className="space-y-8">
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-semibold text-primary mb-4">
              {t('Background', '経歴')}
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              {t(
                'Full Stack Software Engineer with 5+ years of experience building modern web applications from frontend to backend. Specialized in React, Next.js, Node.js, TypeScript, and Golang, with expertise in both client-side and server-side development.',
                'フロントエンドからバックエンドまで、モダンなWebアプリケーションを構築する5年以上の経験を持つフルスタックエンジニアです。React、Next.js、Node.js、TypeScript、Golangを専門とし、クライアントサイドとサーバーサイドの両方に精通しています。'
              )}
            </p>
            <p className="text-muted leading-relaxed">
              {t(
                'Based in Tokyo, Japan. Passionate about creating seamless user experiences backed by robust, scalable architectures. Experienced in working with international teams and delivering production-ready applications for startups and enterprises.',
                '東京在住。堅牢でスケーラブルなアーキテクチャに支えられたシームレスなユーザー体験の創出に情熱を持っています。国際的なチームでの経験を持ち、スタートアップから大企業まで本番環境に対応したアプリケーションを提供してきました。'
              )}
            </p>
          </div>

          <div className="animate-fade-in-up">
            <h3 className="text-xl font-semibold text-primary mb-4">
              {t('Full Stack Philosophy', 'フルスタックの哲学')}
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              {t(
                'I believe in building complete solutions that deliver value across the entire stack:',
                'スタック全体にわたって価値を提供する完全なソリューションの構築を信条としています：'
              )}
            </p>
            <ul className="space-y-3">
              {philosophy.map((item) => (
                <li key={item.text} className="flex items-start text-muted">
                  <svg className={`w-5 h-5 ${item.color} mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-primary">{item.text}</strong> — {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[var(--card-border)] animate-fade-in-up">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center hover:scale-110 transition-transform duration-300">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-subtle">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
