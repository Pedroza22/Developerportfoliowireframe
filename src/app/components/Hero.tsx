import { Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #27272a 1px, transparent 1px),
            linear-gradient(to bottom, #27272a 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-emerald-400 text-lg">Hi, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white">
                Julián Pedroza
              </h1>
              <h2 className="text-2xl sm:text-3xl text-zinc-400">
                Software Engineer & Backend Developer
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-xl">
              Building scalable systems and digital solutions with modern technologies.
              Specialized in backend development, REST APIs, and full-stack applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                View Projects
                <ExternalLink className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800"
              >
                Download CV
                <Download className="ml-2" size={18} />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-600/20 blur-3xl rounded-full" />
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzMyMjY0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Julián Pedroza"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
