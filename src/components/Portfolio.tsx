import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  gradient: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Custom Operating System Kernel",
      description: "A lightweight, educational x86-64 kernel with memory management and process scheduling",
      longDescription: "Developed a fully functional operating system kernel from scratch in C and Assembly. Features include virtual memory management, preemptive multitasking, device drivers, and a basic filesystem. The kernel supports dynamic memory allocation, process isolation, and inter-process communication primitives.",
      technologies: ["C", "Assembly", "x86-64", "GDB", "QEMU"],
      githubUrl: "https://github.com/johndoe/custom-kernel",
      imageUrl: "https://images.unsplash.com/photo-1628011636812-eb8acf17e7b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMGNvbXB1dGVyJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTc5MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "High-Performance C++ Compiler",
      description: "An optimizing compiler for a subset of C++ with advanced code generation",
      longDescription: "Built a complete compiler toolchain using LLVM backend for a C++ subset. Implemented lexical analysis, syntax parsing, semantic analysis, and multiple optimization passes. Features include register allocation, dead code elimination, and vectorization optimizations for modern CPU architectures.",
      technologies: ["C++", "LLVM", "Flex", "Bison", "CMake"],
      githubUrl: "https://github.com/johndoe/cpp-compiler",
      liveUrl: "https://compiler-demo.example.com",
      imageUrl: "https://images.unsplash.com/photo-1729531645925-85cae58f12a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY29tcHV0ZXIlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU2MTc5MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-blue-600 to-teal-600"
    },
    {
      id: 3,
      title: "Distributed Storage System",
      description: "Fault-tolerant, scalable distributed storage with consistency guarantees",
      longDescription: "Designed and implemented a distributed storage system capable of handling petabytes of data across thousands of nodes. Features include automatic replication, consistency protocols, failure detection, and dynamic load balancing. Built with C++ for performance-critical components and Python for orchestration.",
      technologies: ["C++", "Python", "gRPC", "Protocol Buffers", "Docker"],
      githubUrl: "https://github.com/johndoe/distributed-storage",
      imageUrl: "https://images.unsplash.com/photo-1611087889903-b4837b46857c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHw4Yml0JTIwcGl4ZWwlMjBhcnQlMjBzY3JlZW58ZW58MXx8fHwxNzU2MTc5MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 4,
      title: "Linux Kernel Module Suite",
      description: "Collection of Linux kernel modules for system monitoring and optimization",
      longDescription: "Developed a comprehensive suite of Linux kernel modules for system monitoring, performance analysis, and security enhancement. Includes modules for process tracking, network packet inspection, memory usage optimization, and real-time system call monitoring with minimal performance overhead.",
      technologies: ["C", "Linux Kernel API", "Netlink", "Proc FS", "Make"],
      githubUrl: "https://github.com/johndoe/kernel-modules",
      imageUrl: "https://images.unsplash.com/flagged/photo-1566850533054-f79b7940f2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHw4Yml0JTIwcGl4ZWwlMjBhcnQlMjBzY3JlZW58ZW58MXx8fHwxNzU2MTc5MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const techColors = {
    'C++': 'bg-blue-200 text-blue-900 border-blue-400',
    'C': 'bg-gray-200 text-gray-900 border-gray-400',
    'Python': 'bg-green-200 text-green-900 border-green-400',
    'Assembly': 'bg-red-200 text-red-900 border-red-400',
    'x86-64': 'bg-purple-200 text-purple-900 border-purple-400',
    'GDB': 'bg-yellow-200 text-yellow-900 border-yellow-400',
    'QEMU': 'bg-orange-200 text-orange-900 border-orange-400',
    'LLVM': 'bg-indigo-200 text-indigo-900 border-indigo-400',
    'Flex': 'bg-pink-200 text-pink-900 border-pink-400',
    'Bison': 'bg-teal-200 text-teal-900 border-teal-400',
    'CMake': 'bg-cyan-200 text-cyan-900 border-cyan-400',
    'gRPC': 'bg-violet-200 text-violet-900 border-violet-400',
    'Protocol Buffers': 'bg-emerald-200 text-emerald-900 border-emerald-400',
    'Docker': 'bg-blue-200 text-blue-900 border-blue-400',
    'Linux Kernel API': 'bg-slate-200 text-slate-900 border-slate-400',
    'Netlink': 'bg-lime-200 text-lime-900 border-lime-400',
    'Proc FS': 'bg-amber-200 text-amber-900 border-amber-400',
    'Make': 'bg-rose-200 text-rose-900 border-rose-400'
  };

  return (
    <section id="portfolio" className="min-h-screen pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="relative">
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-blue-500 opacity-10"></div>
            
            <div className="relative space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 flex items-center justify-center border border-blue-500">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-700 text-sm uppercase tracking-wider font-medium">My Work</span>
              </div>
              <h1 className="text-4xl text-slate-900 font-bold">Portfolio</h1>
              <p className="text-slate-700 max-w-2xl leading-relaxed">
                A collection of systems programming projects I've built, ranging from operating system kernels 
                to distributed infrastructure. Each project represents deep technical challenges in 
                computer systems and low-level programming.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 bg-white">
                <div className="aspect-video relative overflow-hidden border-b-2 border-slate-200">
                  <ImageWithFallback
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 pixelated"
                    style={{
                      imageRendering: 'pixelated'
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                
                <CardHeader className="space-y-3">
                  <div className={`w-12 h-1 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardTitle className="group-hover:text-purple-700 transition-colors duration-300 font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-700">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        className={`text-xs border-2 hover:scale-105 transition-transform duration-200 font-medium ${
                          techColors[tech as keyof typeof techColors] || 'bg-gray-200 text-gray-900 border-gray-400'
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-black text-white transition-all duration-300 hover:scale-105 shadow-lg group/link border-2 border-gray-700"
                    >
                      <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white transition-all duration-300 hover:scale-105 shadow-lg group/link border-2 border-transparent`}
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;