export function Blog() {
  const posts = [
    {
      title: 'Building Resilient Microservices with Golang',
      date: '2024-01-15',
      category: 'System Design',
      excerpt: 'Exploring patterns for building fault-tolerant microservices: circuit breakers, retry strategies, and graceful degradation.',
      readTime: '8 min read',
    },
    {
      title: 'Optimizing PostgreSQL for High-Throughput Applications',
      date: '2023-12-10',
      category: 'Database',
      excerpt: 'Deep dive into connection pooling, query optimization, and indexing strategies for handling millions of transactions.',
      readTime: '12 min read',
    },
    {
      title: 'Event-Driven Architecture: Lessons from Production',
      date: '2023-11-05',
      category: 'Architecture',
      excerpt: 'Real-world challenges and solutions when implementing event-driven systems with Kafka and RabbitMQ.',
      readTime: '10 min read',
    },
    {
      title: 'Monitoring Distributed Systems: A Practical Guide',
      date: '2023-10-20',
      category: 'DevOps',
      excerpt: 'Setting up comprehensive observability with Prometheus, Grafana, and distributed tracing for microservices.',
      readTime: '15 min read',
    },
  ];

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Engineering Insights
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12">
          Technical articles on system design and backend engineering
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-slate-900 dark:hover:border-white transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {post.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <time className="text-xs text-slate-500 dark:text-slate-400">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
                <a href="#" className="text-sm text-slate-900 dark:text-white hover:underline">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
