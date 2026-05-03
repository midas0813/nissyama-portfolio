'use client';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { testimonials } from '@/data/testimonials';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-green-500' : 'text-slate-300 dark:text-slate-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ src, name, size = 'lg' }: { src: string; name: string; size?: 'sm' | 'lg' }) {
  const cls = size === 'lg'
    ? 'w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-green-500/30'
    : 'w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-green-500/20';

  return (
    <div className={cls}>
      {/* Plain img — no Next.js caching, picks up replaced files immediately */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

export function Testimonials() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-4 animate-fade-in-up">
          {t('Client Testimonials', 'お客様の声')}
        </h2>
        <p className="text-muted mb-14 animate-fade-in-up">
          {t('What clients say about working with me', 'クライアントからのフィードバック')}
        </p>

        {/* Featured testimonial */}
        <div className="card border rounded-2xl p-8 sm:p-12 mb-8 relative overflow-hidden animate-fade-in-up">
          <div className="absolute top-4 right-8 text-green-500/10 text-[120px] font-serif leading-none select-none pointer-events-none">
            "
          </div>

          <div className="relative z-10">
            <StarRating rating={current.rating} />

            <blockquote className="mt-6 mb-8">
              <p className="text-xl sm:text-2xl text-primary leading-relaxed font-light">
                "{language === 'jp' ? current.textJp : current.text}"
              </p>
            </blockquote>

            <div className="flex items-center gap-4">
              <Avatar
                src={current.avatar}
                name={language === 'jp' ? current.nameJp : current.name}
                size="lg"
              />
              <div>
                <p className="font-semibold text-primary">
                  {language === 'jp' ? current.nameJp : current.name}
                </p>
                <p className="text-sm text-muted">
                  {language === 'jp' ? current.roleJp : current.role} · {current.company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators + arrows */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-8 h-2.5 bg-green-600'
                    : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-green-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--card-border)] flex items-center justify-center text-muted hover:border-green-600 hover:text-green-600 transition-all"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--card-border)] flex items-center justify-center text-muted hover:border-green-600 hover:text-green-600 transition-all"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mini card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`card border rounded-xl p-5 text-left transition-all duration-300 hover:border-green-500 ${
                i === active ? 'border-green-500 shadow-lg shadow-green-500/10' : ''
              }`}
            >
              <StarRating rating={item.rating} />
              <p className="text-sm text-muted mt-3 mb-4 line-clamp-3 leading-relaxed">
                "{language === 'jp' ? item.textJp : item.text}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar
                  src={item.avatar}
                  name={language === 'jp' ? item.nameJp : item.name}
                  size="sm"
                />
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {language === 'jp' ? item.nameJp : item.name}
                  </p>
                  <p className="text-xs text-subtle">{item.company}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
