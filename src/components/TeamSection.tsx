
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "أحمد محمد",
      role: "رئيس النادي",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      quote: "التكنولوجيا هي جسر المستقبل، والبرمجة هي لغته"
    },
    {
      name: "فاطمة علي",
      role: "نائب الرئيس",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      quote: "الذكاء الاصطناعي ليس مجرد تقنية، بل ثورة حقيقية"
    },
    {
      name: "عمر خالد",
      role: "مدير التطوير",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      quote: "كل مشكلة لها حل برمجي، نحن نبحث عن أفضل الطرق"
    },
    {
      name: "منى حسن",
      role: "مدير التصميم",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      quote: "التصميم الجيد يجعل التكنولوجيا أكثر إنسانية"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            فريق القيادة
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            تعرف على الأشخاص الذين يقودون رحلتنا في عالم التكنولوجيا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="relative mb-6 mx-auto w-32 h-32">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-gray-600 group-hover:border-neon-cyan transition-all duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="font-orbitron font-bold text-xl text-white mb-2">
                {member.name}
              </h3>
              
              <p className="font-poppins text-neon-cyan font-semibold mb-4">
                {member.role}
              </p>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-neon-cyan transition-all duration-300">
                <p className="font-poppins text-gray-300 text-sm italic leading-relaxed">
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
