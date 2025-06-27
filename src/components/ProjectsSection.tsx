
import React, { useState } from 'react';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const projectCategories = [
    {
      title: "البرمجة",
      description: "مشاريع تطوير البرمجيات والتطبيقات",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      projects: ["موقع المدرسة الثانوية - طوره الطالب يوسف جبلي", "موقع النادي - طورته الطالبة مريم بن سعد"]
    },
    {
      title: "المونتاج",
      description: "مشاريع تحرير الفيديو والمحتوى البصري",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
      projects: ["فيديو عن الطائرة الدرون", "فيديو عن الواقع الافتراضي والمعزز", "فيديو عن تاريخ مايكروسوفت", "مشاريع أخرى"],
      projectImages: [
        "/lovable-uploads/38904ef5-633d-46e9-a045-1946a832fb5f.png",
        "/lovable-uploads/cbb9ea77-c1bc-4a2f-b9b4-184eeef3a583.png", 
        "/lovable-uploads/c56878d5-677e-4ebb-8c52-88df85ec6022.png",
        "/lovable-uploads/7492eca3-f835-4e73-bdfe-43f8e43bb5c3.png"
      ]
    },
    {
      title: "الشعارات",
      description: "تصميم الهويات البصرية والشعارات",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
      projects: ["شعار النادي للطالب يوسف جبلي", "شعار الجزري للطالب عبدالله", "شعار قسطنطين لمريم بن سعد"],
      projectImages: [
        "/lovable-uploads/7396f1fd-91ec-49c7-95e4-072ffe8089b4.png",
        "/lovable-uploads/304fbf61-8f34-4a77-84cf-c4f66503e8e8.png",
        "/lovable-uploads/2fef6b93-2803-4e61-94e7-52fb65e62868.png"
      ]
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
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-arabic">
            استكشف المشاريع المبتكرة التي طورها أعضاء النادي
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
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed font-arabic">
                  {category.description}
                </p>

                {selectedCategory === category.title && (
                  <div className="bg-gray-900/50 rounded-lg p-4 mb-4 border border-neon-green/30">
                    <h4 className="text-neon-green font-semibold mb-2 font-arabic">المشاريع:</h4>
                    <ul className="space-y-3">
                      {category.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="font-arabic">
                          {category.projectImages && category.projectImages[projectIndex] && (
                            <div className="mb-2">
                              <img 
                                src={category.projectImages[projectIndex]} 
                                alt={project}
                                className="w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <span className="text-gray-300 text-sm">• {project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button 
                  onClick={() => showProjects(category.title)}
                  className="w-full bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 border border-neon-green text-neon-green py-2 px-4 rounded-lg hover:from-neon-green hover:to-neon-cyan hover:text-black transition-all duration-300 font-semibold font-arabic"
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
