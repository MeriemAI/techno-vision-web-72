
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Website = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-white hover:text-neon-cyan transition-colors mb-8">
          <ArrowLeft className="mr-2" size={20} />
          العودة للصفحة الرئيسية
        </Link>
        
        <div className="text-center">
          <h1 className="font-orbitron font-bold text-5xl text-white mb-8">
            مرحباً بكم في موقع العقول الرقمية
          </h1>
          <p className="text-xl text-gray-300 mb-8" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
            هذه هي باقي صفحات الموقع التي ستحتوي على المحتوى الإضافي
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
              <h3 className="text-neon-cyan font-bold text-xl mb-4">المشاريع</h3>
              <p className="text-gray-300 text-sm">تصفح جميع مشاريع الأعضاء</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
              <h3 className="text-neon-blue font-bold text-xl mb-4">الفعاليات</h3>
              <p className="text-gray-300 text-sm">معلومات تفصيلية عن الفعاليات</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
              <h3 className="text-neon-purple font-bold text-xl mb-4">المجتمع</h3>
              <p className="text-gray-300 text-sm">تفاعل مع أعضاء النادي</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
