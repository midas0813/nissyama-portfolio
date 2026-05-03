'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';

export function Projects() {
  const { t, language } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, projects.length));
      setIsLoading(false);
    }, 500);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="section-alt py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-4 animate-fade-in-up">
          {t('Featured Projects', '主なプロジェクト')}
        </h2>
        <p className="text-muted mb-12 animate-fade-in-up">
          {t(
            `${projects.length}+ projects delivered for Japanese clients`,
            `日本のクライアントに${projects.length}件以上のプロジェクトを納品`
          )}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group card border rounded-xl overflow-hidden card-3d animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={language === 'jp' ? project.titleJp : project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {language === 'jp' ? project.titleJp : project.title}
                </h3>
                <p className="text-xs text-subtle mb-3">{project.period}</p>
                <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-4">
                  {language === 'jp' ? project.descriptionJp : project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-subtle">+{project.tech.length - 3}</span>
                  )}
                </div>

                <div className="flex items-center text-sm font-medium text-green-600 dark:text-green-400 group-hover:text-green-700 transition-colors">
                  {t('View Details', '詳細を見る')}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="group px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <span className="flex items-center gap-3">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {t('Loading...', '読み込み中...')}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  {t('View More Projects', 'もっと見る')}
                  <span className="text-sm opacity-80">({projects.length - visibleCount} {t('remaining', '件')})</span>
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        )}

        {!hasMore && projects.length > 6 && (
          <div className="mt-12 text-center">
            <p className="text-muted text-lg">
              {t(`🎉 All ${projects.length} projects shown!`, `🎉 全${projects.length}件のプロジェクトを表示しました！`)}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
