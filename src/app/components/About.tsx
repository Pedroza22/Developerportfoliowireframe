import { Code2, Database, Server, Globe, Blocks, Cpu } from 'lucide-react';
import { Card } from './ui/card';

const skills = [
  { name: 'Java', icon: Cpu, color: 'text-orange-400' },
  { name: 'Spring Boot', icon: Server, color: 'text-green-400' },
  { name: 'Django REST Framework', icon: Code2, color: 'text-emerald-400' },
  { name: 'Next.js', icon: Globe, color: 'text-blue-400' },
  { name: 'SQL / Databases', icon: Database, color: 'text-purple-400' },
  { name: 'API Development', icon: Blocks, color: 'text-pink-400' },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl text-white">About Me</h2>
            <div className="w-20 h-1 bg-emerald-600" />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Personal Story */}
            <div className="space-y-4">
              <h3 className="text-2xl text-white">My Journey</h3>
              <p className="text-zinc-400 leading-relaxed">
                I'm a passionate Software Engineer with a strong focus on backend development
                and building scalable, robust systems. My journey in technology has been driven
                by a desire to create solutions that make a real impact.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                With expertise in Java, Spring Boot, and Django REST Framework, I specialize
                in designing and implementing RESTful APIs, microservices architectures, and
                full-stack applications. I'm committed to writing clean, maintainable code
                following best practices and SOLID principles.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to
                open-source projects, and staying up-to-date with the latest developments
                in software engineering.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl text-white mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <Card
                      key={skill.name}
                      className="bg-zinc-900 border-zinc-800 p-6 hover:bg-zinc-800 transition-all hover:scale-105 hover:border-emerald-600/50"
                    >
                      <div className="space-y-3">
                        <Icon className={`${skill.color}`} size={32} />
                        <p className="text-white font-medium">{skill.name}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
