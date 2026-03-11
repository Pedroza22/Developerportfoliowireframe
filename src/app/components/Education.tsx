import { GraduationCap, Award } from 'lucide-react';
import { Card } from './ui/card';

const education = [
  {
    degree: 'Software Engineering',
    institution: 'Universidad Tecnológica',
    period: '2017 - 2022',
    description: 'Comprehensive study of software development, computer science fundamentals, algorithms, data structures, and software architecture.',
    icon: GraduationCap,
  },
  {
    degree: 'Technologist in Systems Analysis and Development',
    institution: 'Instituto Técnico Superior',
    period: '2015 - 2017',
    description: 'Focused on systems analysis, database design, programming fundamentals, and software development methodologies.',
    icon: Award,
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl text-white">Education</h2>
            <div className="w-20 h-1 bg-emerald-600" />
            <p className="text-zinc-400 text-lg max-w-2xl">
              Academic background and qualifications in software engineering and systems development.
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu) => {
              const Icon = edu.icon;
              return (
                <Card
                  key={edu.degree}
                  className="bg-zinc-950 border-zinc-800 p-8 hover:border-emerald-600/50 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-600/10 p-4 rounded-xl group-hover:bg-emerald-600/20 transition-colors">
                        <Icon className="text-emerald-400" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl text-white mb-1">{edu.degree}</h3>
                        <p className="text-emerald-400">{edu.institution}</p>
                        <p className="text-zinc-500 text-sm mt-1">{edu.period}</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">{edu.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
