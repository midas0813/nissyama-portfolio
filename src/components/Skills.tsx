export function Skills() {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Golang', level: 'Expert', years: '5+' },
        { name: 'Microservices Architecture', level: 'Expert', years: '4+' },
        { name: 'RESTful API Design', level: 'Expert', years: '5+' },
        { name: 'gRPC', level: 'Advanced', years: '3+' },
        { name: 'GraphQL', level: 'Intermediate', years: '2+' },
      ]
    },
    {
      title: 'Databases & Storage',
      skills: [
        { name: 'PostgreSQL', level: 'Expert', years: '5+' },
        { name: 'Redis', level: 'Advanced', years: '4+' },
        { name: 'MongoDB', level: 'Advanced', years: '3+' },
        { name: 'Elasticsearch', level: 'Intermediate', years: '2+' },
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS (EC2, ECS, Lambda, RDS)', level: 'Expert', years: '4+' },
        { name: 'Docker & Kubernetes', level: 'Advanced', years: '4+' },
        { name: 'Terraform', level: 'Advanced', years: '3+' },
        { name: 'CI/CD (GitHub Actions, GitLab CI)', level: 'Advanced', years: '4+' },
      ]
    },
    {
      title: 'System Design & Architecture',
      skills: [
        { name: 'Distributed Systems', level: 'Expert', years: '4+' },
        { name: 'Event-Driven Architecture', level: 'Advanced', years: '3+' },
        { name: 'Message Queues (RabbitMQ, Kafka)', level: 'Advanced', years: '3+' },
        { name: 'Caching Strategies', level: 'Expert', years: '4+' },
      ]
    },
    {
      title: 'Monitoring & Observability',
      skills: [
        { name: 'Prometheus & Grafana', level: 'Advanced', years: '3+' },
        { name: 'ELK Stack', level: 'Intermediate', years: '2+' },
        { name: 'Distributed Tracing (Jaeger)', level: 'Intermediate', years: '2+' },
      ]
    },
    {
      title: 'Frontend & Full Stack',
      skills: [
        { name: 'TypeScript', level: 'Advanced', years: '4+' },
        { name: 'React & Next.js', level: 'Advanced', years: '3+' },
        { name: 'Tailwind CSS', level: 'Intermediate', years: '2+' },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="border border-slate-200 dark:border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {skill.years} years
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-slate-900 dark:bg-white rounded-full transition-all duration-1000"
                        style={{ 
                          width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '80%' : '60%' 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
