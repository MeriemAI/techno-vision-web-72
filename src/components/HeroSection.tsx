
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-orbitron font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 glitch">
          نحو مستقبل
          <span className="block text-neon-cyan neon-text">رقمي واعد</span>
        </h1>
        <p className="font-poppins text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          ننطلق معاً نحو آفاق التكنولوجيا المتقدمة ونبني جسور الإبداع في عالم البرمجة والذكاء الاصطناعي
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-cyan text-black font-bold py-4 px-8 rounded-full neon-glow transition-all duration-300 transform hover:scale-105 font-poppins text-lg"
          >
            انضم إلينا
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-poppins text-lg"
          >
            استكشف أنشطتنا
          </Button>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-neon-cyan rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
