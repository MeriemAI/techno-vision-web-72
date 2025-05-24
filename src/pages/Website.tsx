
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import EnhancedAnimatedBackground from '@/components/EnhancedAnimatedBackground';

const Website = () => {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const handleEventsClick = () => {
    navigate('/events');
  };

  const handleCommunityClick = () => {
    navigate('/community');
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      <EnhancedAnimatedBackground />
      
      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-white hover:text-neon-cyan transition-colors mb-8 arabic-font">
            <ArrowLeft className="mr-2" size={20} />
            العودة للصفحة الرئيسية
          </Link>
          
          <div className="text-center">
            <h1 className="font-orbitron font-bold text-5xl text-white mb-8">
              مرحباً بكم في موقع العقول الرقمية
            </h1>
            <p className="text-xl text-gray-300 mb-8 arabic-font">
              هذه هي باقي صفحات الموقع التي ستحتوي على المحتوى الإضافي
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-neon-cyan transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={handleProjectsClick}
              >
                <h3 className="text-neon-cyan font-bold text-xl mb-4 arabic-font">المشاريع</h3>
                <p className="text-gray-300 text-sm arabic-font">تصفح جميع مشاريع الأعضاء</p>
              </div>
              
              <div 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-neon-blue transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={handleEventsClick}
              >
                <h3 className="text-neon-blue font-bold text-xl mb-4 arabic-font">الفعاليات</h3>
                <p className="text-gray-300 text-sm arabic-font">معلومات تفصيلية عن الفعاليات</p>
              </div>
              
              <div 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-neon-purple transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={handleCommunityClick}
              >
                <h3 className="text-neon-purple font-bold text-xl mb-4 arabic-font">المجتمع</h3>
                <p className="text-gray-300 text-sm arabic-font">تفاعل مع أعضاء النادي</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
