
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'الفعاليات', href: '#events' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'انضم إلينا', href: '#team' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
            Digital Minds
          </div>
          
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <span className="text-sm text-gray-300 font-semibold arabic-font">
              العقول الرقمية - ثانوية بوهارة عبد الرزاق
            </span>
          </div>
          
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 text-sm font-medium arabic-font"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
