import { Briefcase, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';

const experiences = [
  {
    role: 'Backend Software Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading backend development initiatives, designing RESTful APIs, and implementing microservices architecture.',
    skills: [
      'Clean Code & SOLID Principles',
      'RESTful API Design',
      'Microservices Architecture',
      'Test-Driven Development',
      'Database Design & Optimization',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2020 - 2022',
    description: 'Developed full-stack web applications using modern frameworks and best practices.',
    skills: [
      'Agile Development',
      'Code Review & Mentoring',
      'CI/CD Implementation',
      'Performance Optimization',
      'Security Best Practices',
    ],
  },
  {
    role: 'Junior Software Developer',
    company: 'StartUp Labs',
    period: '2019 - 2020',
    description: 'Contributed to various projects, learning industry best practices and modern development workflows.',
    skills: [
      'Version Control (Git)',
      'Unit & Integration Testing',
      'Documentation',
      'Problem Solving',
      'Team Collaboration',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl text-white">Work Experience</h2>
            <div className="w-20 h-1 bg-emerald-600" />
            <p className="text-zinc-400 text-lg max-w-2xl">
              My professional journey building scalable systems and leading development projects.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-800" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-emerald-600 rounded-full border-4 border-zinc-950" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                    <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-emerald-600/50 transition-all">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 lg:flex-row-reverse lg:justify-end">
                          <div className="bg-emerald-600/10 p-3 rounded-lg">
                            <Briefcase className="text-emerald-400" size={24} />
                          </div>
                          <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                            <h3 className="text-xl text-white">{exp.role}</h3>
                            <p className="text-emerald-400">{exp.company}</p>
                            <p className="text-zinc-500 text-sm">{exp.period}</p>
                          </div>
                        </div>

                        <p className="text-zinc-400">{exp.description}</p>

                        <div className="space-y-2">
                          <p className="text-white text-sm font-semibold">Key Skills & Learnings:</p>
                          <ul className="space-y-2">
                            {exp.skills.map((skill) => (
                              <li key={skill} className="flex items-start gap-2">
                                <CheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={16} />
                                <span className="text-zinc-400 text-sm">{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
