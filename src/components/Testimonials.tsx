'use client';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Nakanishi has been instrumental in developing our platform. His expertise in modern web technologies and attention to detail have significantly contributed to our success. He consistently delivers high-quality work and provides valuable technical insights.",
      author: "John Smith",
      role: "CTO, Tech Innovations Inc.",
      company: "Tech Innovations"
    },
    {
      quote: "Working with Nakanishi was an absolute pleasure! His problem-solving skills and dedication to delivering exceptional results are truly impressive. He transformed our vision into reality with precision and creativity.",
      author: "Sarah Johnson",
      role: "Product Manager, Digital Solutions",
      company: "Digital Solutions"
    },
    {
      quote: "Nakanishi is one of the best professionals we've worked with in software development. His communication skills, technical expertise, and ability to handle complex projects make him an invaluable team member.",
      author: "Michael Chen",
      role: "Engineering Director, Global Tech",
      company: "Global Tech"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          <span className="gradient-text-green">Client Testimonials</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
          What clients say about working with me
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <svg className="w-10 h-10 text-green-600 dark:text-green-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {testimonial.role}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
