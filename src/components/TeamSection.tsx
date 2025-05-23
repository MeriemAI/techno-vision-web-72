
import React, { useState } from 'react';
import { Crown, Users } from 'lucide-react';

const TeamSection = () => {
  const [showFemales, setShowFemales] = useState(false);
  const [showMales, setShowMales] = useState(false);

  const femaleMembers = [
    "أستاذة هراكتي اخلاص",
    "مريم بن سعد", 
    "بن مدني طوبة هبة الرحمن",
    "علاء بولعروق",
    "زارف رحمة اسيل",
    "رزين اماني",
    "زرمان مروة",
    "عمراني دعاء",
    "بولنوار هديل",
    "بوشعبي ريم"
  ];

  const maleMembers = [
    "أستاذ لعمارة محمد أمين",
    "بن عرب أحمد خليل",
    "جبلي يوسف",
    "زايدي يوسف", 
    "حجي عمر",
    "حداد لؤي"
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/60 to-gray-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl mb-8">
            فريق
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> العقول الرقمية</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
            مجموعة من الخبراء والمبدعين الذين يقودون التحول الرقمي
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Club President */}
          <div className="lg:col-span-3 flex justify-center mb-8">
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-cyan transition-all duration-500 transform hover:scale-105 max-w-md w-full">
              <div className="text-center">
                <div className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-40 animate-pulse"></div>
                  <Crown size={40} className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple relative z-10" />
                </div>
                
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple font-semibold mb-4 text-xl" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                  رئيس النادي
                </p>
                
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-600 rounded-xl p-4">
                  <p className="text-white text-lg font-bold" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                    راعد بولخرفان
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Female Members */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-purple transition-all duration-500">
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full opacity-40 animate-pulse"></div>
                <Users size={40} className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue relative z-10" />
              </div>
              
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue font-semibold mb-4 text-lg" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                العضوات
              </p>
              
              <button 
                onClick={() => setShowFemales(!showFemales)}
                className="w-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple text-neon-purple py-2 px-4 rounded-lg hover:from-neon-purple hover:to-neon-blue hover:text-black transition-all duration-300 font-semibold"
                style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}
              >
                {showFemales ? 'إخفاء الأسماء' : 'عرض الأسماء'}
              </button>

              {showFemales && (
                <div className="mt-4 bg-gray-900/50 rounded-lg p-4 border border-neon-purple/30">
                  <ul className="space-y-2">
                    {femaleMembers.map((member, index) => (
                      <li key={index} className="text-gray-300 text-sm" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                        • {member}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Male Members */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-green transition-all duration-500">
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full opacity-40 animate-pulse"></div>
                <Users size={40} className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan relative z-10" />
              </div>
              
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan font-semibold mb-4 text-lg" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                الأعضاء
              </p>
              
              <button 
                onClick={() => setShowMales(!showMales)}
                className="w-full bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 border border-neon-green text-neon-green py-2 px-4 rounded-lg hover:from-neon-green hover:to-neon-cyan hover:text-black transition-all duration-300 font-semibold"
                style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}
              >
                {showMales ? 'إخفاء الأسماء' : 'عرض الأسماء'}
              </button>

              {showMales && (
                <div className="mt-4 bg-gray-900/50 rounded-lg p-4 border border-neon-green/30">
                  <ul className="space-y-2">
                    {maleMembers.map((member, index) => (
                      <li key={index} className="text-gray-300 text-sm" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                        • {member}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
