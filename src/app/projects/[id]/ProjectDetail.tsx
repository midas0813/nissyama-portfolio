'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';

export function ProjectDetail({ id }: { id: string }) {
  const { t, language } = useLanguage();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {t('Project Not Found', 'プロジェクトが見つかりません')}
          </h2>
          <Link href="/#projects" className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('Back to Projects', 'プロジェクト一覧へ')}
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const title        = language === 'jp' ? project.titleJp       : project.title;
  const description  = language === 'jp' ? project.descriptionJp : project.description;
  const challenge    = language === 'jp' ? project.challengeJp   : project.challenge;
  const solution     = language === 'jp' ? project.solutionJp    : project.solution;
  const architecture = project.architecture
    ? (language === 'jp' ? project.architectureJp ?? project.architecture : project.architecture)
    : null;
  const features = language === 'jp' ? project.featuresJp : project.features;
  const results  = language === 'jp' ? project.resultsJp  : project.results;

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <div className="border-b border-[var(--card-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/#projects" className="inline-flex items-center text-muted hover:text-green-600 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('Back to Portfolio', 'ポートフォリオへ戻る')}
          </Link>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1.5 bg-green-600 text-white rounded-full text-sm font-semibold">
                {project.category}
              </span>
              <span className="text-muted text-sm">{project.period}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">{title}</h1>
            <p className="text-xl text-muted leading-relaxed max-w-3xl">{description}</p>
          </div>

          {/* Hero image */}
          <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <Image src={project.image} alt={title} fill className="object-cover" priority sizes="(max-width: 1200px) 100vw, 1200px" />
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">

            {/* Main content */}
            <div className="md:col-span-2 space-y-6">

              <div className="panel rounded-xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {t('Challenge', '課題')}
                </h2>
                <p className="text-muted leading-relaxed">{challenge}</p>
              </div>

              <div className="panel rounded-xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('Solution', '解決策')}
                </h2>
                <p className="text-muted leading-relaxed">{solution}</p>
              </div>

              {architecture && (
                <div className="panel rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {t('Architecture', 'アーキテクチャ')}
                  </h2>
                  <p className="text-muted leading-relaxed">{architecture}</p>
                </div>
              )}

              <div className="panel rounded-xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">{t('Key Features', '主な機能')}</h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="panel rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-primary mb-4">{t('Tech Stack', '使用技術')}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="panel rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary mb-4">{t('Results & Impact', '成果・実績')}</h3>
                <ul className="space-y-3">
                  {results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted text-sm font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  {t('View Live Project →', 'サイトを見る →')}
                </a>
              )}
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="border-t border-[var(--card-border)] pt-16">
              <h2 className="text-3xl font-bold text-primary mb-8">{t('Related Projects', '関連プロジェクト')}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((rel) => (
                  <Link key={rel.id} href={`/projects/${rel.id}`}
                    className="group card rounded-xl overflow-hidden card-3d">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={language === 'jp' ? rel.titleJp : rel.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs px-2 py-1 bg-green-600 text-white rounded-full">{rel.category}</span>
                      <h3 className="text-lg font-bold text-primary mt-3 mb-2 group-hover:text-green-600 transition-colors">
                        {language === 'jp' ? rel.titleJp : rel.title}
                      </h3>
                      <p className="text-sm text-muted line-clamp-2">
                        {language === 'jp' ? rel.descriptionJp : rel.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
