'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Skills() {
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  const skillCategories = [
    {
      title: t('Frontend & Markup', 'フロントエンド・マークアップ'),
      icon: '🎨',
      skills: [
        { name: 'HTML5',        level: 95 },
        { name: 'CSS3',         level: 92 },
        { name: 'JavaScript',   level: 90 },
        { name: 'TypeScript',   level: 85 },
        { name: 'React',        level: 88 },
        { name: 'Next.js',      level: 85 },
        { name: 'Vue.js',       level: 82 },
        { name: 'Vuetify',      level: 78 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'MUI',          level: 80 },
      ],
    },
    {
      title: t('Animation & Motion', 'アニメーション・モーション'),
      icon: '✨',
      skills: [
        { name: 'GSAP',           level: 85 },
        { name: 'Framer Motion',  level: 82 },
        { name: 'CSS Animations', level: 90 },
        { name: 'ScrollTrigger',  level: 80 },
        { name: 'Three.js',       level: 68 },
        { name: 'Lottie',         level: 75 },
      ],
    },
    {
      title: t('CMS & No-Code', 'CMS・ノーコード'),
      icon: '🧩',
      skills: [
        { name: 'WordPress', level: 92 },
        { name: 'Shopify',   level: 85 },
        { name: 'Webflow',   level: 83 },
        { name: 'Swell',     level: 80 },
        { name: 'Studio',    level: 78 },
        { name: 'Wix',       level: 80 },
      ],
    },
    {
      title: t('Backend & Languages', 'バックエンド・言語'),
      icon: '⚙️',
      skills: [
        { name: 'Node.js',  level: 85 },
        { name: 'Python',   level: 82 },
        { name: 'Go',       level: 75 },
        { name: 'Ruby',     level: 72 },
        { name: 'REST API', level: 88 },
        { name: 'GraphQL',  level: 78 },
      ],
    },
    {
      title: t('AI / LLM / RAG', 'AI・LLM・RAG'),
      icon: '🤖',
      skills: [
        { name: 'OpenAI API',                          level: 88 },
        { name: 'LangChain',                           level: 82 },
        { name: 'LlamaIndex',                          level: 78 },
        { name: 'RAG',                                 level: 80 },
        { name: 'Vector DB',                           level: 75 },
        { name: t('Applied AI', 'AI応用開発'),          level: 80 },
        { name: t('Web Scraping', 'Webスクレイピング'), level: 82 },
        { name: 'Prompt Engineering',                  level: 85 },
      ],
    },
    {
      title: t('Cloud & Infrastructure', 'クラウド・インフラ'),
      icon: '☁️',
      skills: [
        { name: 'AWS',        level: 80 },
        { name: 'GCP',        level: 75 },
        { name: 'Docker',     level: 78 },
        { name: 'Vercel',     level: 88 },
        { name: 'Supabase',   level: 78 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB',    level: 78 },
        { name: 'Redis',      level: 72 },
      ],
    },
    {
      title: t('Design & Tools', 'デザイン・ツール'),
      icon: '✏️',
      skills: [
        { name: 'Figma',                             level: 88 },
        { name: 'Adobe XD',                          level: 82 },
        { name: t('LP Design', 'LPデザイン'),         level: 90 },
        { name: t('HP Design', 'HPデザイン'),         level: 88 },
        { name: t('UI/UX Design', 'UI/UXデザイン'),  level: 82 },
        { name: 'Git / GitHub',                      level: 90 },
      ],
    },
  ];

  const allTags = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript',
    'React', 'Next.js', 'Vue.js', 'Vuetify', 'Tailwind CSS', 'MUI',
    'GSAP', 'Framer Motion', 'CSS Animations', 'ScrollTrigger', 'Three.js', 'Lottie',
    'WordPress', 'Shopify', 'Webflow', 'Swell', 'Studio', 'Wix',
    'Node.js', 'Python', 'Go', 'Ruby', 'REST API', 'GraphQL',
    'OpenAI API', 'LangChain', 'LlamaIndex', 'RAG', 'Vector DB',
    t('Applied AI', 'AI応用開発'), t('Web Scraping', 'Webスクレイピング'), 'Prompt Engineering',
    'AWS', 'GCP', 'Docker', 'Vercel', 'Supabase', 'PostgreSQL', 'MongoDB', 'Redis',
    'Figma', 'Adobe XD', t('LP Design', 'LPデザイン'), t('HP Design', 'HPデザイン'),
    t('UI/UX Design', 'UI/UXデザイン'), 'Git / GitHub',
  ];

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Crossing marquee — +15deg, pivots from right edge */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 right-0 overflow-hidden opacity-10"
          style={{ transform: 'rotate(15deg)', transformOrigin: 'right center' }}
        >
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden">
              <div className="marquee-track marquee-left">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} style={{ fontSize: '72px' }} className="font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase mx-8 whitespace-nowrap">
                    HTML &nbsp;&middot;&nbsp; CSS &nbsp;&middot;&nbsp; JavaScript &nbsp;&middot;&nbsp; TypeScript &nbsp;&middot;&nbsp; React &nbsp;&middot;&nbsp; Vue.js &nbsp;&middot;&nbsp; Next.js &nbsp;&middot;&nbsp; Tailwind &nbsp;&middot;&nbsp;
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="marquee-track marquee-right">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} style={{ fontSize: '72px' }} className="font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase mx-8 whitespace-nowrap">
                    Node.js &nbsp;&middot;&nbsp; Python &nbsp;&middot;&nbsp; Go &nbsp;&middot;&nbsp; AWS &nbsp;&middot;&nbsp; GCP &nbsp;&middot;&nbsp; GSAP &nbsp;&middot;&nbsp; OpenAI &nbsp;&middot;&nbsp; LangChain &nbsp;&middot;&nbsp;
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 data-scroll="fade-up" className="text-3xl font-bold text-primary mb-4">
          {t('Technical Skills', '技術スキル')}
        </h2>
        <p data-scroll="fade-up" data-delay="100" className="text-muted mb-12">
          {t(
            'Full stack expertise — from design and CMS to AI/LLM engineering',
            'デザイン・CMS構築からAI/LLMエンジニアリングまで、フルスタックの専門知識'
          )}
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              data-scroll="zoom-in"
              data-delay={String(idx * 80)}
              className="card border rounded-xl p-6 card-3d"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-base font-semibold text-primary">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-primary">{skill.name}</span>
                      <span className="text-xs text-green-600 dark:text-green-400 font-semibold tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full tag cloud */}
        <div className="mt-14 animate-fade-in-up">
          <h3 className="text-lg font-semibold text-primary mb-5">
            {t('All Technologies', '全技術スタック')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800 hover:bg-green-200 dark:hover:bg-green-900/60 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
