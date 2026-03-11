import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'Professional Networking Platform',
    description: 'A comprehensive networking platform connecting professionals across industries. Features include profile management, messaging, job postings, and skill endorsements.',
    image: 'https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JraW5nJTIwcGxhdGZvcm0lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzczMjM1Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Spring Boot', 'React', 'PostgreSQL', 'REST API'],
  },
  {
    title: 'Recreator 3D',
    description: 'Innovative platform for converting recycled plastic waste into 3D printing filament. Includes material tracking, quality control, and production management.',
    image: 'https://images.unsplash.com/photo-1739169169463-450148af26ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjBmaWxhbWVudCUyMHJlY3ljbGluZ3xlbnwxfHx8fDE3NzMyMzU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Django', 'Next.js', 'MySQL', 'IoT Integration'],
  },
  {
    title: 'U2GroupApp Web Platform',
    description: 'Enterprise web platform for team collaboration and project management. Features real-time updates, task tracking, and analytics dashboards.',
    image: 'https://images.unsplash.com/photo-1762330916606-535dbcfd4a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBwbGF0Zm9ybSUyMGFwcGxpY2F0aW9uJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzIzNTc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MongoDB'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl text-white">Featured Projects</h2>
            <div className="w-20 h-1 bg-emerald-600" />
            <p className="text-zinc-400 text-lg max-w-2xl">
              A selection of projects showcasing my expertise in backend development,
              API design, and full-stack applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="bg-zinc-950 border-zinc-800 overflow-hidden hover:border-emerald-600/50 transition-all group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl text-white">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-zinc-700 text-white hover:bg-emerald-600 hover:border-emerald-600"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 text-white hover:bg-zinc-800"
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
