import { Code2, Gamepad2, Plane, Lightbulb } from 'lucide-react';
import { Card } from './ui/card';

const hobbies = [
  {
    name: 'Programming',
    description: 'Exploring new technologies and building side projects',
    icon: Code2,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    name: 'Video Games',
    description: 'Gaming and game design appreciation',
    icon: Gamepad2,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
  {
    name: 'Traveling',
    description: 'Discovering new cultures and places',
    icon: Plane,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
  },
  {
    name: 'Tech Innovation',
    description: 'Following emerging technologies and trends',
    icon: Lightbulb,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
  },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl text-white">Hobbies & Interests</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto" />
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Beyond coding, here are some of the things I'm passionate about.
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby) => {
              const Icon = hobby.icon;
              return (
                <Card
                  key={hobby.name}
                  className="bg-zinc-900 border-zinc-800 p-6 hover:border-emerald-600/50 transition-all hover:scale-105 group text-center"
                >
                  <div className="space-y-4">
                    <div className={`${hobby.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                      <Icon className={hobby.color} size={32} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{hobby.name}</h3>
                      <p className="text-zinc-400 text-sm">{hobby.description}</p>
                    </div>
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
