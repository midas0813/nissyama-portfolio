'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export function Blog() {
  const { t } = useLanguage();

  const posts = [
    {
      title: t('Building Resilient Microservices with Golang', 'Golangで耐障害性の高いマイクロサービスを構築する'),
      date: '2024-01-15',
      category: t('System Design', 'システム設計'),
      excerpt: t(
        'Exploring patterns for building fault-tolerant microservices: circuit breakers, retry strategies, and graceful degradation.',
        'サーキットブレーカー、リトライ戦略、グレースフルデグラデーションなど、耐障害性マイクロサービスのパターンを探る。'
      ),
      readTime: t('8 min read', '8分で読める'),
    },
    {
      title: t('Optimizing PostgreSQL for High-Throughput Applications', '高スループットアプリのためのPostgreSQL最適化'),
      date: '2023-12-10',
      category: t('Database', 'データベース'),
      excerpt: t(
        'Deep dive into connection pooling, query optimization, and indexing strategies for handling millions of transactions.',
        'コネクションプーリング、クエリ最適化、インデックス戦略を深掘りし、数百万件のトランザクションを処理する方法を解説。'
      ),
      readTime: t('12 min read', '12分で読める'),
    },
    {
      title: t('Event-Driven Architecture: Lessons from Production', 'イベント駆動アーキテクチャ：本番環境からの教訓'),
      date: '2023-11-05',
      category: t('Architecture', 'アーキテクチャ'),
      excerpt: t(
        'Real-world challenges and solutions when implementing event-driven systems with Kafka and RabbitMQ.',
        'KafkaとRabbitMQを使ったイベント駆動システム実装における実際の課題と解決策。'
      ),
      readTime: t('10 min read', '10分で読める'),
    },
    {
      title: t('Monitoring Distributed Systems: A Practical Guide', '分散システムの監視：実践ガイド'),
      date: '2023-10-20',
      category: t('DevOps', 'DevOps'),
      excerpt: t(
        'Setting up comprehensive observability with Prometheus, Grafana, and distributed tracing for microservices.',
        'Prometheus、Grafana、分散トレーシングを使ったマイクロサービスの包括的なオブザーバビリティの構築。'
      ),
      readTime: t('15 min read', '15分で読める'),
    },
  ];

  return (
    <section id="blog" className="section-alt py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4">
          {t('Engineering Insights', 'エンジニアリングの知見')}
        </h2>
        <p className="text-muted mb-12 text-lg">
          {t(
            'Technical articles on system design and full-stack engineering',
            'システム設計とフルスタックエンジニアリングに関する技術記事'
          )}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <article key={index} className="card border rounded-xl p-6 card-3d group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-subtle">{post.readTime}</span>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-muted text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <time className="text-xs text-subtle">
                  {new Date(post.date).toLocaleDateString(t('en-US', 'ja-JP'), {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                </time>
                <a href="#" className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline">
                  {t('Read more →', '続きを読む →')}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
