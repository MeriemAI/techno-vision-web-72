
import React from 'react';
import { Target, Users, Lightbulb, Trophy, Rocket, Globe } from 'lucide-react';

const GoalsSection = () => {
  const goals = [
    {
      icon: Target,
      title: "تطوير المهارات التقنية",
      description: "تعزيز قدرات الأعضاء في البرمجة والتقنيات الحديثة من خلال ورش العمل والدورات المتخصصة",
      gradient: "from-neon-cyan to-neon-blue"
    },
    {
      icon: Users,
      title: "بناء مجتمع تقني",
      description: "خلق بيئة تفاعلية تجمع المهتمين بالتكنولوجيا لتبادل المعرفة والخبرات",
      gradient: "from-neon-green to-neon-cyan"
    },
    {
      icon: Lightbulb,
      title: "تشجيع الابتكار",
      description: "دعم الأفكار الإبداعية وتحويلها إلى مشاريع تقنية قابلة للتطبيق",
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      icon: Trophy,
      title: "المشاركة في المسابقات",
      description: "تمثيل الجامعة في المسابقات التقنية المحلية والدولية وتحقيق الإنجازات",
      gradient: "from-neon-purple to-neon-cyan"
    },
    {
      icon: Rocket,
      title: "ريادة الأعمال التقنية",
      description: "توجيه الأعضاء نحو تأسيس شركاتهم الناشئة في مجال التكنولوجيا",
      gradient: "from-neon-cyan to-neon-green"
    },
    {
      icon: Globe,
      title: "التواصل العالمي",
      description: "بناء شراكات مع نوادي تقنية أخرى حول العالم لتبادل الخبرات والمعرفة",
      gradient: "from-neon-green to-neon-blue"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/30 to-gray-900/60 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-8">
            أهداف
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple"> النادي</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Afeesh, Arial, sans-serif'}}>
            نسعى لتحقيق رؤية طموحة تجمع بين التميز التقني والإبداع في عالم التكنولوجيا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-cyan transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${goal.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <goal.icon size={48} className="text-neon-cyan" />
                </div>
                
                <h3 className="font-orbitron font-bold text-xl text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300" style={{fontFamily: 'Afeesh, Arial, sans-serif'}}>
                  {goal.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300" style={{fontFamily: 'Afeesh, Arial, sans-serif'}}>
                  {goal.description}
                </p>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${goal.gradient} opacity-20 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
