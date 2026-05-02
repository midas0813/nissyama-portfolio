export function Projects() {
  const projects = [
    {
      title: 'High-Performance E-Commerce Backend',
      category: 'Microservices Architecture',
      period: '2023 - 2024',
      problem: 'Legacy monolithic system struggling with 100K+ daily users, frequent downtime during peak hours, and slow feature deployment cycles.',
      solution: 'Redesigned as microservices architecture using Golang, implemented event-driven communication, and deployed on Kubernetes with auto-scaling.',
      architecture: [
        'API Gateway (Kong)',
        'Order Service (Go + PostgreSQL)',
        'Inventory Service (Go + Redis)',
        'Payment Service (Go + Stripe API)',
        'Notification Service (Go + RabbitMQ)',
      ],
      challenges: [
        'Maintaining data consistency across services',
        'Implementing distributed transactions',
        'Zero-downtime migration from monolith',
      ],
      results: [
        '99.99% uptime achieved',
        '60% reduction in response time (avg 120ms)',
        '10x improvement in deployment frequency',
        'Handled 500K+ concurrent users during sales',
      ],
      tech: ['Golang', 'PostgreSQL', 'Redis', 'Kubernetes', 'RabbitMQ', 'Docker'],
    },
    {
      title: 'Real-Time Analytics Pipeline',
      category: 'Distributed Systems',
      period: '2022 - 2023',
      problem: 'Marketing team needed real-time insights from user behavior data, but batch processing caused 24-hour delays in reporting.',
      solution: 'Built streaming data pipeline using Kafka and Golang consumers, with real-time aggregation and dashboard updates.',
      architecture: [
        'Event Producers (Go services)',
        'Kafka Cluster (3 brokers)',
        'Stream Processors (Go + Kafka Streams)',
        'TimescaleDB (time-series data)',
        'Grafana Dashboards',
      ],
      challenges: [
        'Handling 50K+ events per second',
        'Ensuring exactly-once processing',
        'Managing backpressure during spikes',
      ],
      results: [
        'Real-time data processing (<1s latency)',
        'Processing 4.3B events per day',
        '40% increase in marketing ROI',
        'Reduced infrastructure costs by 30%',
      ],
      tech: ['Golang', 'Apache Kafka', 'TimescaleDB', 'Grafana', 'Prometheus'],
    },
    {
      title: 'Financial Transaction System',
      category: 'High-Reliability Backend',
      period: '2021 - 2022',
      problem: 'Payment processing system required bank-grade reliability, ACID compliance, and audit trails for regulatory compliance.',
      solution: 'Implemented idempotent API design, distributed locking, and comprehensive audit logging with PostgreSQL.',
      architecture: [
        'Transaction API (Go + PostgreSQL)',
        'Idempotency Layer (Redis)',
        'Audit Service (Go + Elasticsearch)',
        'Reconciliation Service (Go + Cron)',
        'Monitoring (Prometheus + Grafana)',
      ],
      challenges: [
        'Preventing duplicate transactions',
        'Handling network failures gracefully',
        'Meeting PCI-DSS compliance requirements',
      ],
      results: [
        'Zero transaction loss in production',
        '99.995% success rate',
        'Processed $50M+ in transactions',
        'Passed security audit on first attempt',
      ],
      tech: ['Golang', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS'],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Project Case Studies
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12">
          Detailed technical implementations and results
        </p>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap ml-4">
                    {project.period}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {project.category}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                    Problem
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                    Solution
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                    Architecture
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.architecture.map((component, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {component}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                    Technical Challenges
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                        <svg className="w-4 h-4 mr-2 mt-0.5 text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                    Results & Impact
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-start text-sm">
                        <svg className="w-5 h-5 mr-2 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700 dark:text-slate-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
