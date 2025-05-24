import React from 'react';
import { Brain, Code, Zap, Facebook, Instagram, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-700 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-20 h-20 border border-neon-cyan/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-16 h-16 border border-neon-green/10 rotate-45 animate-spin" style={{
        animationDuration: '20s'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Brain className="text-neon-cyan mr-3" size={40} />
              <h3 className="font-orbitron font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
                Digital Minds
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6" style={{
            fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
          }}>
              نحن مجتمع من العقول الرقمية المبدعة التي تشكل مستقبل التكنولوgiا.
              <br />
              <span className="text-neon-cyan font-semibold">نبني. نطور. نبدع.</span>
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="https://facebook.com/digitalmindsen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition-all duration-300 transform hover:scale-125" title="Digital Minds Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/digitalmindsen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-all duration-300 transform hover:scale-125" title="Digital Minds Instagram">
                <Instagram size={24} />
              </a>
              <a href="mailto:contact@digitalminds.com" className="text-gray-400 hover:text-neon-purple transition-all duration-300 transform hover:scale-125" title="Contact Us">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6 flex items-center">
              <Code className="text-neon-green mr-2" size={20} />
              <span style={{
              fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
            }}>روابط سريعة</span>
            </h4>
            <ul className="space-y-3 text-gray-300">
              {['الرئيسية', 'من نحن', 'الفعاليات', 'المشاريع', 'انضم إلينا'].map((link, index) => <li key={index}>
                  <a href="#" className="hover:text-neon-cyan transition-colors duration-300 hover:translate-x-2 transform inline-block" style={{
                fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
              }}>
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6 flex items-center">
              <Zap className="text-neon-purple mr-2" size={20} />
              <span style={{
              fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
            }}>تواصل معنا</span>
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="group">
                <p className="text-sm text-gray-400 mb-1" style={{
                fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
              }}>العنوان</p>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300" style={{
                fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
              }}>
                  الجزائر، قسنطينة، الخروب-مسينيسا
                </p>
              </div>
              <div className="group">
                <p className="text-sm text-gray-400 mb-1 flex items-center" style={{
                fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
              }}>
                  <Facebook size={16} className="ml-1 text-blue-500" />
                  فيسبوك
                </p>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Digital Minds
                </p>
              </div>
              <div className="group">
                <p className="text-sm text-gray-400 mb-1 flex items-center" style={{
                fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
              }}>
                  <Instagram size={16} className="ml-1 text-pink-500" />
                  انستغرام
                </p>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Digital Minds
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0" style={{
            fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
          }}>
              © 2025 Digital Minds. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span style={{
              fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
            }} className="text-rose-400 font-semibold text-right mx-0 my-0 py-[2px] px-0 text-base">طور من طرف المطورة مريم بن سعد 
تحت  إشراف الأستاذة حركاتي إخلاص</span>
              <span className="text-red-400 animate-pulse">♥</span>
              <span style={{
              fontFamily: 'Noto Sans Arabic, Arial, sans-serif'
            }}>من فريق العقول الرقمية</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;