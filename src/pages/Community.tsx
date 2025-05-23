
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Crown } from 'lucide-react';
import EnhancedAnimatedBackground from '@/components/EnhancedAnimatedBackground';

const Community = () => {
  const registeredMembers = [
    { name: "أحمد محمد", role: "مطور ويب", joinDate: "2024" },
    { name: "فاطمة العلي", role: "مصممة جرافيك", joinDate: "2024" },
    { name: "خالد السعدي", role: "خبير ذكاء اصطناعي", joinDate: "2024" },
    { name: "نور الدين", role: "منتج فيديو", joinDate: "2024" },
    { name: "سارة أحمد", role: "مطورة تطبيقات", joinDate: "2024" },
    { name: "يوسف الحسن", role: "محلل بيانات", joinDate: "2024" }
  ];

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
              مجتمع العقول الرقمية
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto arabic-font">
              تعرف على جميع الأعضاء المسجلين في النادي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registeredMembers.map((member, index) => (
              <div key={index} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-neon-cyan transition-all duration-500 transform hover:scale-105">
                <div className="text-center">
                  <div className="relative mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-40 animate-pulse"></div>
                    <Users size={32} className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple relative z-10" />
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-2 arabic-font">
                    {member.name}
                  </h3>
                  
                  <p className="text-neon-cyan text-sm mb-2 arabic-font">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-400 text-xs arabic-font">
                    انضم في {member.joinDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/register">
              <Button className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-purple hover:via-neon-blue hover:to-neon-cyan text-black font-bold py-4 px-8 rounded-full neon-glow transition-all duration-500 transform hover:scale-110 text-lg arabic-font">
                انضم إلى المجتمع
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
