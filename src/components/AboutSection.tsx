
import React from 'react';
import { Brain, Code, Zap, Cpu, Network, Rocket } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "الذكاء الاصطناعي",
      description: "نطور حلول الذكاء الاصطناعي والتعلم الآلي لحل التحديات المعقدة",
      color: "neon-cyan"
    },
    {
      icon: Code,
      title: "البرمجة المتقدمة",
      description: "نتقن أحدث لغات البرمجة وتقنيات التطوير العصرية",
      color: "neon-green"
    },
    {
      icon: Network,
      title: "الشبكات والأمان",
      description: "نبني أنظمة آمنة ومتطورة لحماية البيانات والشبكات",
      color: "neon-blue"
    },
    {
      icon: Zap,
      title: "الابتكار التقني",
      description: "نحول الأفكار الإبداعية إلى حلول تقنية متطورة",
      color: "neon-purple"
    },
    {
      icon: Cpu,
      title: "الحوسبة السحابية",
      description: "نصمم بنى تحتية سحابية قابلة للتوسع والتطوير",
      color: "neon-cyan"
    },
    {
      icon: Rocket,
      title: "ريادة الأعمال",
      description: "نحول المشاريع التقنية إلى شركات ناشئة ناجحة",
      color: "neon-green"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-gray-900/30 to-gray-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
              Digital Minds
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-8 rounded-full"></div>
          <p className="font-poppins text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            مجتمع من المبدعين والمطورين الذين يشكلون مستقبل التكنولوجيا
            <br />
            <span className="text-neon-cyan font-semibold">نحن لا نتبع الاتجاهات، بل نخلقها</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-neon-cyan transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`text-${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={56} />
                </div>
                
                <h3 className="font-orbitron font-bold text-2xl text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="font-poppins text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple opacity-20 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
