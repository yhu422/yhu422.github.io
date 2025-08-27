import React from 'react';
import { Home, User, Briefcase, BookOpen } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: 'about', label: 'About', icon: User, color: 'from-purple-600 to-pink-600' },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase, color: 'from-blue-600 to-teal-600' },
    { id: 'blog', label: 'Blog', icon: BookOpen, color: 'from-orange-600 to-red-600' }
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-80 bg-slate-900 border-r-2 border-slate-700 z-50">
      <div className="p-8">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-700 mb-4 flex items-center justify-center border-2 border-slate-600">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl text-white mb-2 font-medium">John Doe</h1>
          <p className="text-slate-300 text-sm">Systems Engineer</p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mt-3"></div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          {sections.map((section) => {
            const IconComponent = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full flex items-center gap-4 p-4 transition-all duration-200 group border-l-4 ${
                  isActive 
                    ? 'bg-slate-800 border-l-indigo-500 shadow-lg' 
                    : 'border-l-transparent hover:bg-slate-800/50 hover:border-l-slate-600'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${section.color} flex items-center justify-center transition-transform duration-200 ${
                  isActive ? 'scale-110 shadow-lg' : 'group-hover:scale-105'
                } border border-slate-600`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className={`transition-colors duration-200 font-medium ${
                  isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {section.label}
                </span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-indigo-500 border border-indigo-400"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="w-full h-px bg-slate-700 mb-6"></div>
          <div className="flex gap-3">
            <a href="https://github.com/johndoe" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors border border-slate-600">
              <span className="text-slate-300 hover:text-white text-sm font-medium">GH</span>
            </a>
            <a href="https://linkedin.com/in/johndoe" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors border border-slate-600">
              <span className="text-slate-300 hover:text-white text-sm font-medium">LI</span>
            </a>
            <a href="https://twitter.com/johndoe" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors border border-slate-600">
              <span className="text-slate-300 hover:text-white text-sm font-medium">TW</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;