
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, User } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('User registered:', { name, email, profileImage });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-md mx-auto">
        <Link to="/" className="inline-flex items-center text-white hover:text-neon-cyan transition-colors mb-8">
          <ArrowLeft className="mr-2" size={20} />
          العودة للصفحة الرئيسية
        </Link>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
          <h1 className="font-orbitron font-bold text-3xl text-white mb-8 text-center">
            انضم للعقول الرقمية
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image Upload */}
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-2 border-neon-cyan"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center">
                    <User className="text-gray-400" size={32} />
                  </div>
                )}
                <label
                  htmlFor="profile-upload"
                  className="absolute bottom-0 right-0 bg-neon-cyan text-black rounded-full p-1 cursor-pointer hover:bg-neon-blue transition-colors"
                >
                  <Upload size={16} />
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <p className="text-gray-300 text-sm" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                اختر صورة شخصية
              </p>
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-white font-semibold mb-2" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                الاسم الكامل
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none"
                placeholder="أدخل اسمك الكامل"
                required
                style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-white font-semibold mb-2" style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}>
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none"
                placeholder="your@email.com"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-purple hover:via-neon-blue hover:to-neon-cyan text-black font-bold py-3 rounded-lg transition-all duration-500"
              style={{fontFamily: 'Noto Sans Arabic, Arial, sans-serif'}}
            >
              إنشاء حساب جديد
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
