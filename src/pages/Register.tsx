
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import EnhancedAnimatedBackground from '@/components/EnhancedAnimatedBackground';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

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
    
    if (!name || !email) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Check if email already exists
    if (existingUsers.some((user: any) => user.email === email)) {
      toast({
        title: "خطأ",
        description: "هذا البريد الإلكتروني مسجل مسبقاً",
        variant: "destructive",
      });
      return;
    }

    // Add new user
    const newUser = { name, email, profileImage };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

    // Set current user as logged in
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    toast({
      title: "تم التسجيل بنجاح!",
      description: "مرحباً بك في مجتمع العقول الرقمية",
    });

    // Navigate to community page
    setTimeout(() => {
      navigate('/community');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      <EnhancedAnimatedBackground />
      
      <div className="relative z-10 p-8">
        <div className="max-w-md mx-auto">
          <Link to="/" className="inline-flex items-center text-white hover:text-neon-cyan transition-colors mb-8 font-arabic">
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
                <p className="text-gray-300 text-sm font-arabic">
                  اختر صورة شخصية
                </p>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-white font-semibold mb-2 font-arabic">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none font-arabic"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-white font-semibold mb-2 font-arabic">
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
                className="w-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-purple hover:via-neon-blue hover:to-neon-cyan text-black font-bold py-3 rounded-lg transition-all duration-500 font-arabic"
              >
                إنشاء حساب جديد
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
