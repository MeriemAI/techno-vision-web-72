
import React, { useState } from 'react';
import { Calendar, Info } from 'lucide-react';

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      title: "ورشة الذكاء الاصطناعي",
      date: "قريباً",
      description: "تعلم أساسيات التعلم الآلي وتطبيقاته العملية",
      purpose: "تهدف هذه الورشة إلى تعليم الطلاب المفاهيم الأساسية للذكاء الاصطناعي وكيفية تطبيقها في مشاريع عملية مفيدة للمجتمع.",
      status: "قريباً"
    },
    {
      title: "مسابقة الروبوتيات",
      date: "قريباً", 
      description: "مسابقة تطوير وبرمجة الروبوتات في 48 ساعة",
      purpose: "مسابقة تهدف لتطوير مهارات الطلاب في مجال الروبوتيات والبرمجة وحل المشاكل التقنية من خلال العمل الجماعي.",
      status: "التسجيل مفتوح"
    },
    {
      title: "محاضرة الأمن السيبراني",
      date: "قريباً",
      description: "كيفية حماية البيانات والأنظمة من الهجمات",
      purpose: "محاضرة توعوية حول أهمية الأمن السيبراني وكيفية حماية المعلومات الشخصية والمؤسسية من التهديدات الرقمية.",
      status: "قريباً"
    }
  ];

  const toggleEventDetails = (index: number) => {
    setSelectedEvent(selectedEvent === index ? null : index);
  };

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              الفعاليات القادمة
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
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
              
              <h3 className="font-orbitron font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
                {event.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <p className="text-gray-300" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                  <span className="font-semibold">التاريخ:</span> {event.date}
                </p>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                {event.description}
              </p>

              {selectedEvent === index && (
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4 border border-neon-cyan/30">
                  <h4 className="text-neon-cyan font-semibold mb-2" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>الهدف من الفعالية:</h4>
                  <p className="text-gray-300 text-sm" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                    {event.purpose}
                  </p>
                </div>
              )}
              
              <button 
                onClick={() => toggleEventDetails(index)}
                className="mt-6 w-full bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan text-neon-cyan py-2 px-4 rounded-lg hover:from-neon-cyan hover:to-neon-blue hover:text-black transition-all duration-300 font-semibold flex items-center justify-center"
                style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}
              >
                <Info className="ml-2" size={16} />
                {selectedEvent === index ? 'إخفاء التفاصيل' : 'التفاصيل'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
