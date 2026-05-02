'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. I will respond within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Contact
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12">
          Available for full-time positions and consulting opportunities
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm currently open to new opportunities in backend engineering, 
              particularly roles involving Golang, microservices architecture, 
              and distributed systems.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-600 dark:text-slate-300">nakanishi.takashi@example.com</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-600 dark:text-slate-300">Tokyo, Japan</span>
              </div>

              <div className="flex items-center">
                <svg className="w-5 h-5 text-slate-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <a href="https://github.com" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                  github.com/nakanishi-takashi
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; 2024 Nakanishi Takashi. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
