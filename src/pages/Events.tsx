
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import EventsSection from '@/components/EventsSection';
import EnhancedAnimatedBackground from '@/components/EnhancedAnimatedBackground';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      <EnhancedAnimatedBackground />
      
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/website" className="inline-flex items-center text-white hover:text-neon-cyan transition-colors mb-8 arabic-font">
            <ArrowLeft className="mr-2" size={20} />
            العودة للصفحة الرئيسية
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
              فعاليات العقول الرقمية
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto arabic-font">
              تعرف على جميع الفعاليات والأنشطة القادمة
            </p>
          </div>
          
          <EventsSection />
        </div>
      </div>
    </div>
  );
};

export default Events;
