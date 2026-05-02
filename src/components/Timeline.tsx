'use client';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
  type: 'work' | 'education';
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-emerald-500 to-green-500 md:left-1/2 md:-ml-px" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col md:gap-8`}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg md:left-1/2 md:-ml-2 z-10 pulse-dot" />
            
            {/* Content card */}
            <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} pl-20 md:pl-0`}>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-1 timeline-card">
                {/* Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                  item.type === 'work' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                }`}>
                  {item.type === 'work' ? '💼 Work' : '🎓 Education'}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-lg text-green-600 dark:text-green-400 font-medium mb-2">
                  {item.organization}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  📅 {item.period}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {item.description}
                </p>
                
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
            {/* Spacer for alternating layout */}
            <div className="hidden md:block w-[calc(50%-2rem)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
