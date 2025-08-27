import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="ml-80">
        {renderSection()}
      </main>
    </div>
  );
}