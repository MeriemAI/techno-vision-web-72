
import React from 'react';
import { Book, Users, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            من نحن؟
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نادي تقنية المعلومات هو مجتمع نشط من المطورين والمبرمجين والمبدعين الذين يسعون لتطوير مهاراتهم التقنية ومشاركة المعرفة في عالم التكنولوجيا المتطور
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-neon-cyan transition-all duration-300 transform hover:scale-105">
            <div className="text-neon-cyan mb-4">
              <Book size={48} />
            </div>
            <h3 className="font-orbitron font-bold text-xl text-white mb-3">التعلم والتطوير</h3>
            <p className="font-poppins text-gray-300 leading-relaxed">
              نقدم ورش عمل متخصصة في البرمجة، الذكاء الاصطناعي، وأحدث التقنيات لتطوير مهاراتك العملية
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-neon-green transition-all duration-300 transform hover:scale-105">
            <div className="text-neon-green mb-4">
              <Users size={48} />
            </div>
            <h3 className="font-orbitron font-bold text-xl text-white mb-3">المجتمع والتواصل</h3>
            <p className="font-poppins text-gray-300 leading-relaxed">
              بناء شبكة قوية من العلاقات المهنية مع زملاء متخصصين في مجال التقنية من جميع أنحاء العالم
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-neon-blue transition-all duration-300 transform hover:scale-105">
            <div className="text-neon-blue mb-4">
              <Calendar size={48} />
            </div>
            <h3 className="font-orbitron font-bold text-xl text-white mb-3">الفعاليات والمسابقات</h3>
            <p className="font-poppins text-gray-300 leading-relaxed">
              مشاركة في هاكاثونات، مسابقات البرمجة، ومؤتمرات تقنية لتطبيق معرفتك في مشاريع حقيقية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
