export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 animate-fade-in-up">
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="space-y-8">
          <div className="animate-fade-in-up animation-delay-100">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Background
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Full Stack Software Engineer with 5+ years of experience building modern web applications 
              from frontend to backend. Specialized in React, Next.js, Node.js, TypeScript, and Golang, 
              with expertise in both client-side and server-side development.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Based in Tokyo, Japan. Passionate about creating seamless user experiences backed by robust, 
              scalable architectures. Experienced in working with international teams and delivering 
              production-ready applications for startups and enterprises.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Full Stack Philosophy
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              I believe in building complete solutions that deliver value across the entire stack:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>User-centric frontend</strong> - Crafting intuitive, responsive interfaces with React and modern CSS</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Robust backend systems</strong> - Building scalable APIs and microservices with Node.js and Golang</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>End-to-end ownership</strong> - From database design to deployment and monitoring</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Modern best practices</strong> - TypeScript, testing, CI/CD, and clean architecture</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fade-in-up animation-delay-300">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">30+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
