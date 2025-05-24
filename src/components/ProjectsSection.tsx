
import React, { useState } from 'react';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const projectCategories = [
    {
      title: "البرمجة",
      description: "مشاريع تطوير البرمجيات والتطبيقات",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      projects: ["تطبيق إدارة المهام", "موقع المدرسة الإلكتروني", "نظام المكتبة الذكي"]
    },
    {
      title: "المونتاج",
      description: "مشاريع تحرير الفيديو والمحتوى البصري",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
      projects: ["فيديو تعريفي بالنادي", "مونتاج الفعاليات", "إعلانات المسابقات"]
    },
    {
      title: "الشعارات",
      description: "تصميم الهويات البصرية والشعارات",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
      projects: ["شعار النادي الجديد", "هوية الفعاليات", "تصاميم وسائل التواصل"]
    },
    {
      title: "الفيديوهات التعليمية",
      description: "محتوى تعليمي مرئي متخصص",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      projects: ["دروس البرمجة", "شروحات التقنيات الحديثة", "ورش العمل المسجلة"]
    },
    {
      title: "البودكاست",
      description: "محتوى صوتي تقني وتعليمي",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400",
      projects: ["بودكاست العقول الرقمية", "حوارات مع الخبراء", "نصائح تقنية يومية"]
    },
    {
      title: "الذكاء الاصطناعي",
      description: "مشاريع التعلم الآلي والذكاء الاصطناعي",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      projects: ["نموذج تصنيف الصور", "مساعد ذكي للطلاب", "تحليل البيانات التعليمية"]
    }
  ];

  const showProjects = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              مشاريع الأعضاء
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
            Explore innovative projects developed by club members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-neon-green transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-orbitron font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
                  {category.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                  {category.description}
                </p>

                {selectedCategory === category.title && (
                  <div className="bg-gray-900/50 rounded-lg p-4 mb-4 border border-neon-green/30">
                    <h4 className="text-neon-green font-semibold mb-2" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>المشاريع:</h4>
                    <ul className="space-y-1">
                      {category.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="text-gray-300 text-sm" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                          • {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button 
                  onClick={() => showProjects(category.title)}
                  className="w-full bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 border border-neon-green text-neon-green py-2 px-4 rounded-lg hover:from-neon-green hover:to-neon-cyan hover:text-black transition-all duration-300 font-semibold"
                  style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}
                >
                  {selectedCategory === category.title ? 'إخفاء المشاريع' : 'عرض المشاريع'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
