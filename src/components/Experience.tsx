export function Experience() {
  const workExperience = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      location: 'Tokyo, Japan',
      description: 'Leading development of scalable web applications, mentoring junior developers, and architecting cloud-based solutions.',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Startup Solutions',
      period: '2020 - 2022',
      location: 'Tokyo, Japan',
      description: 'Developed full-stack applications using modern technologies and collaborated with cross-functional teams.',
      achievements: [
        'Built 10+ production features',
        'Reduced bug rate by 30%',
        'Introduced automated testing'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      location: 'Osaka, Japan',
      description: 'Contributed to client projects, learned best practices, and developed strong foundation in web development.',
      achievements: [
        'Delivered 15+ client projects',
        'Learned React and Node.js',
        'Received employee of the month'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Tokyo University',
      period: '2017 - 2019',
      location: 'Tokyo, Japan',
      description: 'Specialized in Artificial Intelligence and Machine Learning',
      achievements: [
        'GPA: 3.8/4.0',
        'Research on Neural Networks',
        'Published 2 papers'
      ]
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'Kyoto University',
      period: '2013 - 2017',
      location: 'Kyoto, Japan',
      description: 'Foundation in computer science, algorithms, and software engineering',
      achievements: [
        'GPA: 3.6/4.0',
        'Dean\'s List 4 semesters',
        'Programming Club President'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          <span className="gradient-text-green">Experience & Education</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-16">
          My professional journey and academic background
        </p>

        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
            <svg className="w-6 h-6 mr-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Work Experience
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-green-200 dark:bg-green-800"></div>
            
            {workExperience.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-green-600 dark:bg-green-400 rounded-full border-4 border-slate-50 dark:border-slate-900 z-10"></div>
                
                {/* Content card - alternating sides */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-lg text-green-600 dark:text-green-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </p>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
            <svg className="w-6 h-6 mr-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Education
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-green-200 dark:bg-green-800"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-green-600 dark:bg-green-400 rounded-full border-4 border-slate-50 dark:border-slate-900 z-10"></div>
                
                {/* Content card - alternating sides */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-green-600 dark:text-green-400 font-medium">
                          {edu.school}
                        </p>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {edu.location}
                    </p>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {edu.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
