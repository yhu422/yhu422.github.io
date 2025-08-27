import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Clock, Sparkles, Twitter } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  gradient: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Understanding x86-64 Memory Management in Modern Operating Systems",
      excerpt: "Deep dive into virtual memory, page tables, and memory protection mechanisms in x86-64 architecture.",
      content: "In this article, we'll explore the intricacies of x86-64 memory management, including virtual addressing, page table structures, and how modern operating systems leverage these features...",
      publishedAt: "2024-01-15",
      readTime: "12 min read",
      tags: ["x86-64", "Operating Systems", "Memory Management"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Building High-Performance Network Drivers in Linux",
      excerpt: "Learn how to write efficient kernel-space network drivers with minimal latency and maximum throughput.",
      content: "Network performance is critical for modern systems. In this comprehensive guide, we'll cover the fundamentals of Linux network driver development...",
      publishedAt: "2024-01-08",
      readTime: "15 min read",
      tags: ["Linux Kernel", "Network Programming", "Device Drivers"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      id: 3,
      title: "Advanced Compiler Optimizations: From SSA to Machine Code",
      excerpt: "Exploring modern compiler optimization techniques including SSA form, register allocation, and instruction scheduling.",
      content: "Modern compilers are incredibly sophisticated pieces of software. In this article, we'll examine the optimization pipeline from high-level IR to optimized machine code...",
      publishedAt: "2024-01-02",
      readTime: "10 min read",
      tags: ["Compilers", "LLVM", "Code Optimization"],
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      id: 4,
      title: "Cache Coherency Protocols in Multi-Core Systems",
      excerpt: "Understanding MESI, MOESI, and other cache coherency protocols that enable efficient multi-core computing.",
      content: "Cache coherency is fundamental to multi-core processor design. We'll explore the protocols that ensure data consistency across CPU cores...",
      publishedAt: "2023-12-20",
      readTime: "13 min read",
      tags: ["Computer Architecture", "Multi-core", "Cache Systems"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 5,
      title: "Implementing Distributed Consensus with Raft Algorithm",
      excerpt: "Building fault-tolerant distributed systems using the Raft consensus algorithm in C++.",
      content: "Distributed consensus is a cornerstone of reliable distributed systems. In this article, we'll implement the Raft algorithm from scratch...",
      publishedAt: "2023-12-12",
      readTime: "18 min read",
      tags: ["Distributed Systems", "C++", "Consensus Algorithms"],
      gradient: "from-emerald-600 to-blue-600"
    },
    {
      id: 6,
      title: "Zero-Copy I/O and DMA in High-Performance Applications",
      excerpt: "Leveraging hardware features for efficient data movement without CPU overhead in systems programming.",
      content: "Zero-copy I/O techniques can dramatically improve performance in data-intensive applications. We'll explore DMA, memory mapping, and other hardware acceleration features...",
      publishedAt: "2023-12-05",
      readTime: "14 min read",
      tags: ["Systems Programming", "Performance", "Hardware"],
      gradient: "from-red-600 to-pink-600"
    }
  ];

  const tagColors = {
    'x86-64': 'bg-purple-200 text-purple-900 border-purple-400',
    'Operating Systems': 'bg-blue-200 text-blue-900 border-blue-400',
    'Memory Management': 'bg-cyan-200 text-cyan-900 border-cyan-400',
    'Linux Kernel': 'bg-yellow-200 text-yellow-900 border-yellow-400',
    'Network Programming': 'bg-green-200 text-green-900 border-green-400',
    'Device Drivers': 'bg-indigo-200 text-indigo-900 border-indigo-400',
    'Compilers': 'bg-orange-200 text-orange-900 border-orange-400',
    'LLVM': 'bg-red-200 text-red-900 border-red-400',
    'Code Optimization': 'bg-pink-200 text-pink-900 border-pink-400',
    'Computer Architecture': 'bg-violet-200 text-violet-900 border-violet-400',
    'Multi-core': 'bg-teal-200 text-teal-900 border-teal-400',
    'Cache Systems': 'bg-emerald-200 text-emerald-900 border-emerald-400',
    'Distributed Systems': 'bg-slate-200 text-slate-900 border-slate-400',
    'C++': 'bg-blue-200 text-blue-900 border-blue-400',
    'Consensus Algorithms': 'bg-lime-200 text-lime-900 border-lime-400',
    'Systems Programming': 'bg-gray-200 text-gray-900 border-gray-400',
    'Performance': 'bg-green-200 text-green-900 border-green-400',
    'Hardware': 'bg-amber-200 text-amber-900 border-amber-400'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="min-h-screen pt-16 pb-16">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-24 h-24 bg-orange-500 opacity-10"></div>
            
            <div className="relative space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-600 flex items-center justify-center border border-orange-500">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-orange-700 text-sm uppercase tracking-wider font-medium">Latest Articles</span>
              </div>
              <h1 className="text-4xl text-slate-900 font-bold">Systems Blog</h1>
              <p className="text-slate-700 max-w-2xl leading-relaxed">
                Sharing insights, tutorials, and deep dives into systems programming, 
                computer architecture, operating systems, and infrastructure engineering.
              </p>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 bg-white overflow-hidden">
                <div className="relative">
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${post.gradient}`}></div>
                  
                  <CardHeader className="pl-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{formatDate(post.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{post.readTime}</span>
                        </div>
                      </div>
                      <div className={`w-8 h-8 bg-gradient-to-br ${post.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-300 border border-slate-300`}></div>
                    </div>
                    
                    <CardTitle className="text-2xl group-hover:text-purple-700 transition-colors duration-300 cursor-pointer font-bold">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base text-slate-700 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pl-10">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          className={`text-xs border-2 hover:scale-105 transition-transform duration-200 font-medium ${
                            tagColors[tag as keyof typeof tagColors] || 'bg-gray-200 text-gray-900 border-gray-400'
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center text-white border-2 border-purple-500 shadow-xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-purple-100 max-w-lg mx-auto">
                More articles coming soon! Follow me on Twitter for the latest updates 
                and behind-the-scenes content.
              </p>
              <a 
                href="https://twitter.com/johndoe" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105 border-2 border-white/30 group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Follow on Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;