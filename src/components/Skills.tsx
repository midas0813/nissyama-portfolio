export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React & Next.js', level: 'Expert', years: '5+' },
        { name: 'TypeScript', level: 'Expert', years: '5+' },
        { name: 'Tailwind CSS', level: 'Advanced', years: '3+' },
        { name: 'HTML5 & CSS3', level: 'Expert', years: '5+' },
        { name: 'State Management (Redux, Zustand)', level: 'Advanced', years: '4+' },
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js & Express', level: 'Expert', years: '5+' },
        { name: 'Golang', level: 'Advanced', years: '3+' },
        { name: 'RESTful API Design', level: 'Expert', years: '5+' },
        { name: 'GraphQL', level: 'Advanced', years: '3+' },
        { name: 'Microservices Architecture', level: 'Advanced', years: '3+' },
      ]
    },
    {
      title: 'Databases & Storage',
      icon: '💾',
      skills: [
        { name: 'PostgreSQL', level: 'Expert', years: '5+' },
        { name: 'MongoDB', level: 'Advanced', years: '4+' },
        { name: 'Redis', level: 'Advanced', years: '4+' },
        { name: 'Prisma ORM', level: 'Advanced', years: '3+' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS (EC2, S3, Lambda)', level: 'Advanced', years: '4+' },
        { name: 'Docker & Kubernetes', level: 'Advanced', years: '4+' },
        { name: 'CI/CD (GitHub Actions)', level: 'Advanced', years: '4+' },
        { name: 'Vercel & Netlify', level: 'Expert', years: '4+' },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in-up">
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 animate-fade-in-up animation-delay-100">
          Full stack expertise across modern web technologies
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up card-3d"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {skill.years}
                        </span>
                        <span className="text-xs px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-700 dark:text-green-300 rounded">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-full transition-all duration-1000 skill-bar"
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
