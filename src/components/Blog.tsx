export function Blog() {
  const posts = [
    {
      title: 'Building Resilient Microservices with Golang',
      date: '2024-01-15',
      category: 'System Design',
      excerpt: 'Exploring patterns for building fault-tolerant microservices: circuit breakers, retry strategies, and graceful degradation.',
      readTime: '8 min read',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Optimizing PostgreSQL for High-Throughput Applications',
      date: '2023-12-10',
      category: 'Database',
      excerpt: 'Deep dive into connection pooling, query optimization, and indexing strategies for handling millions of transactions.',
      readTime: '12 min read',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Event-Driven Architecture: Lessons from Production',
      date: '2023-11-05',
      category: 'Architecture',
      excerpt: 'Real-world challenges and solutions when implementing event-driven systems with Kafka and RabbitMQ.',
      readTime: '10 min read',
      gradient: 'from-green-500 to-blue-500',
    },
    {
      title: 'Monitoring Distributed Systems: A Practical Guide',
      date: '2023-10-20',
      category: 'DevOps',
      excerpt: 'Setting up comprehensive observability with Prometheus, Grafana, and distributed tracing for microservices.',
      readTime: '15 min read',
      gradient: 'from-blue-500 to-green-500',
    },
  ];

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Engineering Insights</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
          Technical articles on system design and full-stack engineering
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="card-3d group relative border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-transparent transition-all duration-300 bg-white dark:bg-slate-900 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs px-3 py-1 bg-gradient-to-r ${post.gradient} text-white rounded-full font-medium`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-500 group-hover:to-emerald-500 transition-all">
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
                  <a href="#" className="text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent hover:from-emerald-500 hover:to-green-500 transition-all">
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
