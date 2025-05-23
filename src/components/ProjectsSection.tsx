
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "نظام إدارة المكتبة الذكي",
      description: "نظام متكامل لإدارة المكتبات باستخدام الذكاء الاصطناعي",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=400",
      tech: ["React", "Node.js", "AI"],
      author: "فريق التطوير الأول"
    },
    {
      title: "تطبيق الطقس التفاعلي",
      description: "تطبيق ويب لعرض حالة الطقس مع واجهة تفاعلية حديثة",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      tech: ["Vue.js", "API", "CSS"],
      author: "سارة أحمد"
    },
    {
      title: "منصة التعلم الإلكتروني",
      description: "منصة تعليمية تفاعلية للكورسات البرمجية",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      tech: ["Angular", "Firebase", "TypeScript"],
      author: "محمد علي"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            مشاريع الأعضاء
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            استكشف المشاريع المبتكرة التي طورها أعضاء النادي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-neon-green transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-orbitron font-bold text-xl text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="font-poppins text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-neon-green/20 text-neon-green px-2 py-1 rounded-md text-xs font-poppins font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-xs text-gray-400">
                    بواسطة: {project.author}
                  </span>
                  <button className="text-neon-cyan hover:text-white transition-colors duration-300 font-poppins text-sm font-semibold">
                    عرض المشروع ←
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
