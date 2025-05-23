
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Crown } from 'lucide-react';
import EnhancedAnimatedBackground from '@/components/EnhancedAnimatedBackground';

interface RegisteredUser {
  name: string;
  email: string;
  profileImage?: string;
}

const Community = () => {
  const [registeredUsers, setRegisteredUsers] = useState<RegisteredUser[]>([]);
  const [currentUser, setCurrentUser] = useState<RegisteredUser | null>(null);

  useEffect(() => {
    // Get registered users from localStorage
    const users = localStorage.getItem('registeredUsers');
    if (users) {
      setRegisteredUsers(JSON.parse(users));
    }

    // Get current logged-in user
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      <EnhancedAnimatedBackground />
      
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/website" className="inline-flex items-center text-white hover:text-neon-cyan transition-colors mb-8 font-arabic">
            <ArrowLeft className="mr-2" size={20} />
            العودة للصفحة الرئيسية
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
              مجتمع العقول الرقمية
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic">
              تعرف على جميع الأعضاء المسجلين في النادي
            </p>
          </div>
          
          {registeredUsers.length === 0 ? (
            <div className="text-center py-20">
              <Users size={80} className="text-gray-500 mx-auto mb-6" />
              <h2 className="text-2xl text-gray-400 mb-4 font-arabic">
                لا يوجد أعضاء مسجلين بعد
              </h2>
              <p className="text-gray-500 mb-8 font-arabic">
                كن أول من ينضم إلى مجتمعنا الرقمي
              </p>
              {!currentUser && (
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-purple hover:via-neon-blue hover:to-neon-cyan text-black font-bold py-4 px-8 rounded-full neon-glow transition-all duration-500 transform hover:scale-110 text-lg font-arabic">
                    انضم إلى المجتمع
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {registeredUsers.map((user, index) => (
                <div key={index} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-neon-cyan transition-all duration-500 transform hover:scale-105">
                  <div className="text-center">
                    <div className="relative mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                      {user.profileImage ? (
                        <img
                          src={user.profileImage}
                          alt={user.name}
                          className="w-full h-full rounded-full object-cover border-2 border-neon-cyan"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center">
                          <Users size={32} className="text-white" />
                        </div>
                      )}
                      {currentUser && currentUser.email === user.email && (
                        <div className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full p-1">
                          <Crown size={12} />
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-white font-bold text-lg mb-2 font-arabic">
                      {user.name}
                      {currentUser && currentUser.email === user.email && (
                        <span className="text-yellow-500 text-sm block">(أنت)</span>
                      )}
                    </h3>
                    
                    <p className="text-neon-cyan text-sm mb-2">
                      {user.email}
                    </p>
                    
                    <p className="text-gray-400 text-xs font-arabic">
                      عضو في النادي
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {!currentUser && (
            <div className="text-center mt-12">
              <Link to="/register">
                <Button className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-purple hover:via-neon-blue hover:to-neon-cyan text-black font-bold py-4 px-8 rounded-full neon-glow transition-all duration-500 transform hover:scale-110 text-lg font-arabic">
                  انضم إلى المجتمع
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
