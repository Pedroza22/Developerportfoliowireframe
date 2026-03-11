import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/julianpedroza',
      icon: Github,
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/julianpedroza',
      icon: Linkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      url: 'mailto:julian.pedroza@email.com',
      icon: Mail,
      color: 'hover:text-emerald-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl text-white">Get In Touch</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto" />
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-zinc-950 border-zinc-800 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white text-sm">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-white mb-6">Let's Connect</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Whether you have a question or just want to say hi,
                  I'll try my best to get back to you!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Find me on</h4>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-emerald-600/50 transition-all group"
                      >
                        <div className="bg-zinc-900 p-3 rounded-lg group-hover:bg-emerald-600/10 transition-colors">
                          <Icon className={`text-zinc-400 ${link.color} transition-colors`} size={24} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{link.name}</p>
                          <p className="text-zinc-500 text-sm">{link.url.replace('https://', '').replace('mailto:', '')}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
