
import React from 'react';
import { Calendar } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      title: "ورشة الذكاء الاصطناعي",
      date: "15 ديسمبر 2024",
      time: "6:00 مساءً",
      description: "تعلم أساسيات التعلم الآلي وتطبيقاته العملية",
      status: "قريباً"
    },
    {
      title: "هاكاثون الويب",
      date: "22 ديسمبر 2024",
      time: "9:00 صباحاً",
      description: "مسابقة تطوير مواقع الويب في 48 ساعة",
      status: "التسجيل مفتوح"
    },
    {
      title: "محاضرة الأمن السيبراني",
      date: "5 يناير 2025",
      time: "7:00 مساءً",
      description: "كيفية حماية البيانات والأنظمة من الهجمات",
      status: "قريباً"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            الفعاليات القادمة
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            لا تفوت الفرصة للمشاركة في فعالياتنا المتنوعة وتطوير مهاراتك التقنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-neon-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-neon-cyan/20"
            >
              <div className="flex items-center mb-4">
                <Calendar className="text-neon-cyan mr-3" size={24} />
                <span className="font-orbitron text-sm text-neon-cyan font-semibold">
                  {event.status}
                </span>
              </div>
              
              <h3 className="font-orbitron font-bold text-xl text-white mb-3">
                {event.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <p className="font-poppins text-gray-300">
                  <span className="font-semibold">التاريخ:</span> {event.date}
                </p>
                <p className="font-poppins text-gray-300">
                  <span className="font-semibold">الوقت:</span> {event.time}
                </p>
              </div>
              
              <p className="font-poppins text-gray-400 text-sm leading-relaxed">
                {event.description}
              </p>
              
              <button className="mt-6 w-full bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan text-neon-cyan py-2 px-4 rounded-lg hover:from-neon-cyan hover:to-neon-blue hover:text-black transition-all duration-300 font-poppins font-semibold">
                التفاصيل
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
