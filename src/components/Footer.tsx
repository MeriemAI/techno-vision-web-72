
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-orbitron font-bold text-xl text-white mb-4">
              نادي تقنية المعلومات
            </h3>
            <p className="font-poppins text-gray-300 leading-relaxed">
              نحن نسعى لبناء جيل واعد من المبرمجين والمطورين الذين يقودون المستقبل التقني
            </p>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-lg text-white mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-2 font-poppins text-gray-300">
              <li><a href="#" className="hover:text-neon-cyan transition-colors duration-300">الرئيسية</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors duration-300">من نحن</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors duration-300">الفعاليات</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors duration-300">المشاريع</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-lg text-white mb-4">
              تواصل معنا
            </h4>
            <div className="space-y-2 font-poppins text-gray-300">
              <p>البريد الإلكتروني: info@itclub.com</p>
              <p>الهاتف: +966 50 123 4567</p>
              <p>العنوان: الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-poppins text-gray-400">
            © 2024 نادي تقنية المعلومات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
