export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Background
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Senior Backend Engineer with 5+ years of experience designing and implementing scalable, 
              high-performance systems using Golang. Specialized in microservices architecture, distributed 
              systems, and cloud-native applications.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Based in Tokyo, Japan. Experienced in working with both Japanese and international teams, 
              delivering mission-critical systems for enterprise clients across finance, e-commerce, and SaaS industries.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Work Philosophy
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              I believe in building systems that are not just functional, but <strong>reliable, maintainable, and scalable</strong>. 
              My approach emphasizes:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-slate-900 dark:text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>System reliability first</strong> - Designing for failure, implementing proper error handling and monitoring</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-slate-900 dark:text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Clean architecture</strong> - Writing maintainable code that scales with team growth</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-slate-900 dark:text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Performance optimization</strong> - Profiling, benchmarking, and continuous improvement</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-slate-900 dark:text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Team collaboration</strong> - Clear documentation, code reviews, and knowledge sharing</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">20+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">99.9%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">10M+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Requests/Day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
