import React from 'react';
import { Badge } from './ui/badge';
import { Mail, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'C++', color: 'bg-blue-200 text-blue-900 border-blue-400' },
    { name: 'C', color: 'bg-gray-200 text-gray-900 border-gray-400' },
    { name: 'Python', color: 'bg-green-200 text-green-900 border-green-400' },
    { name: 'Rust', color: 'bg-orange-200 text-orange-900 border-orange-400' },
    { name: 'Linux Kernel', color: 'bg-yellow-200 text-yellow-900 border-yellow-400' },
    { name: 'Operating Systems', color: 'bg-purple-200 text-purple-900 border-purple-400' },
    { name: 'Computer Architecture', color: 'bg-red-200 text-red-900 border-red-400' },
    { name: 'Distributed Systems', color: 'bg-teal-200 text-teal-900 border-teal-400' },
    { name: 'Assembly', color: 'bg-indigo-200 text-indigo-900 border-indigo-400' },
    { name: 'LLVM', color: 'bg-pink-200 text-pink-900 border-pink-400' }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:john@example.com', label: 'john@example.com', color: 'bg-red-600 hover:bg-red-700 border-red-500' },
    { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub', color: 'bg-gray-900 hover:bg-black border-gray-700' },
    { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn', color: 'bg-blue-700 hover:bg-blue-800 border-blue-600' },
    { icon: Twitter, href: 'https://twitter.com/johndoe', label: 'Twitter', color: 'bg-sky-600 hover:bg-sky-700 border-sky-500' }
  ];

  return (
    <section id="about" className="min-h-screen pt-16 pb-16">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-24 h-24 bg-purple-500 opacity-10"></div>
            <div className="absolute top-8 right-8 w-16 h-16 bg-blue-500 opacity-10"></div>
            
            <div className="relative space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 flex items-center justify-center border border-purple-500">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-purple-700 text-sm uppercase tracking-wider font-medium">Welcome</span>
              </div>
              <h1 className="text-5xl text-slate-900 font-bold">
                Hi, I'm John Doe
              </h1>
              <p className="text-xl text-slate-700 max-w-2xl leading-relaxed">
                Systems engineer passionate about building 
                <span className="text-purple-700 font-semibold"> high-performance systems </span>
                and exploring 
                <span className="text-blue-700 font-semibold"> low-level programming</span>.
              </p>
            </div>
          </div>
          
          {/* About Me Section */}
          <div className="bg-white border-2 border-slate-200 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600"></div>
              <h2 className="text-2xl text-slate-900 font-bold">About Me</h2>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                I'm a systems engineer with 6+ years of experience developing operating systems,
                compilers, and distributed infrastructure. I specialize in low-level programming with C/C++
                and have a deep understanding of computer architecture and performance optimization.
              </p>
              <p>
                When I'm not optimizing kernel code, you can find me contributing to open source systems projects,
                writing technical articles about operating systems internals, or exploring emerging technologies
                in computer architecture. I believe in building robust, efficient systems that power our digital world.
              </p>
              <p>
                Currently working as a Senior Systems Engineer at a cloud infrastructure company
                where I design and implement high-performance distributed systems. I'm passionate about
                mentoring engineers and advancing the field of systems programming.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-teal-600"></div>
              <h2 className="text-2xl text-slate-900 font-bold">Skills & Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill.name} 
                  className={`px-4 py-2 border-2 ${skill.color} hover:scale-105 transition-transform duration-200 cursor-default font-medium`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-red-600"></div>
              <h2 className="text-2xl text-slate-900 font-bold">Get In Touch</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a 
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-3 p-4 ${link.color} text-white transition-all duration-300 hover:scale-105 shadow-lg group border-2`}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;