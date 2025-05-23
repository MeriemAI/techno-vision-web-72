
import React from 'react';
import { Crown, Users } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      role: "رئيس النادي",
      title: "قائد الرؤية التقنية",
      icon: Crown,
      description: "يقود فريق العقول المبدعة نحو آفاق جديدة في عالم التكنولوجيا",
      gradient: "from-neon-cyan to-neon-blue",
      speciality: "الذكاء الاصطناعي والقيادة التقنية"
    },
    {
      role: "عضو",
      title: "مطور برمجيات",
      icon: Users,
      description: "يساهم في تطوير المشاريع التقنية والحلول البرمجية المبتكرة",
      gradient: "from-neon-green to-neon-cyan",
      speciality: "تطوير تطبيقات الويب"
    },
    {
      role: "عضو",
      title: "محلل بيانات",
      icon: Users,
      description: "يعمل على تحليل البيانات وتطوير نماذج الذكاء الاصطناعي",
      gradient: "from-neon-blue to-neon-purple",
      speciality: "علوم البيانات والتعلم الآلي"
    },
    {
      role: "عضو",
      title: "مصمم واجهات",
      icon: Users,
      description: "يصمم واجهات مستخدم جذابة وسهلة الاستخدام",
      gradient: "from-neon-purple to-neon-cyan",
      speciality: "تصميم تجربة المستخدم"
    },
    {
      role: "عضو",
      title: "مهندس أنظمة",
      icon: Users,
      description: "يدير البنية التحتية التقنية والحلول السحابية",
      gradient: "from-neon-cyan to-neon-green",
      speciality: "الحوسبة السحابية وأمن المعلومات"
    },
    {
      role: "عضو",
      title: "مطور تطبيقات",
      icon: Users,
      description: "يطور تطبيقات الهاتف المحمول باستخدام أحدث التقنيات",
      gradient: "from-neon-green to-neon-blue",
      speciality: "تطوير تطبيقات الموبايل"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/60 to-gray-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-8">
            فريق
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple"> العقول المبدعة</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Afeesh, Arial, sans-serif'}}>
            مجموعة من الخبراء والمبدعين الذين يقودون التحول الرقمي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-cyan transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon with animated glow */}
                  <div className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse`}></div>
                    <member.icon 
                      size={40} 
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} relative z-10 group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        filter: 'drop-shadow(0 0 10px currentColor)'
                      }}
                    />
                  </div>
                  
                  <div className="text-center">
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} font-semibold mb-4 text-lg`} style={{fontFamily: 'Afeesh, Arial, sans-serif'}}>
                      {member.title}
                    </p>
                    
                    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-600 rounded-xl p-4 mb-4 group-hover:border-neon-cyan/50 transition-all duration-300">
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300" style={{fontFamily: 'Afeesh, Arial, sans-serif'}}>
                        {member.description}
                      </p>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-neon-cyan text-xs font-medium" style={{fontFamily: 'Afeesh, Arial, sans-serif'}}>
                        التخصص: {member.speciality}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-neon-cyan/20 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-neon-purple/20 rotate-45 animate-pulse"></div>
    </section>
  );
};

export default TeamSection;
