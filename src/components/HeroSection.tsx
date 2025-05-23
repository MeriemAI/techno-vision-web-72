
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto animate-fade-in z-10">
        <div className="mb-8">
          <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 glitch">
            Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple animate-pulse">
              Minds
            </span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-6 rounded-full animate-pulse"></div>
        </div>
        
        <p className="font-poppins text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          <span className="text-neon-cyan font-semibold">نبني المستقبل الرقمي</span> بأفكار مبتكرة وتقنيات متطورة
          <br />
          <span className="text-lg text-gray-400 mt-2 block">حيث تلتقي العقول الرقمية لتشكيل عالم الغد</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-purple hover:via-neon-blue hover:to-neon-cyan text-black font-bold py-6 px-10 rounded-full neon-glow transition-all duration-500 transform hover:scale-110 hover:rotate-2 font-poppins text-xl shadow-2xl"
          >
            انضم للعقول الرقمية
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black py-6 px-10 rounded-full transition-all duration-500 transform hover:scale-110 hover:-rotate-2 font-poppins text-xl bg-gray-900/30 backdrop-blur-sm"
          >
            اكتشف عالمنا الرقمي
          </Button>
        </div>
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-3 h-3 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-cyan rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-neon-green rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border-2 border-neon-purple rotate-45 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;
