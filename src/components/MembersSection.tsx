
import React, { useState, useEffect } from 'react';
import { Users, Crown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface RegisteredUser {
  name: string;
  email: string;
  profileImage?: string;
  description?: string;
}

const MembersSection = () => {
  const [members, setMembers] = useState<RegisteredUser[]>([]);

  useEffect(() => {
    // Get all registered users from localStorage
    const registeredUsers = localStorage.getItem('registeredUsers');
    if (registeredUsers) {
      setMembers(JSON.parse(registeredUsers));
    }

    // Listen for changes to localStorage (when new users register)
    const handleStorageChange = () => {
      const users = localStorage.getItem('registeredUsers');
      setMembers(users ? JSON.parse(users) : []);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events when users register on the same tab
    const handleNewRegistration = () => {
      const users = localStorage.getItem('registeredUsers');
      setMembers(users ? JSON.parse(users) : []);
    };

    window.addEventListener('userRegistered', handleNewRegistration);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userRegistered', handleNewRegistration);
    };
  }, []);

  return (
    <section id="members" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/30 to-gray-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl mb-8">
            أعضاء
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue"> النادي</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-arabic">
            تعرف على جميع أعضاء مجتمع العقول الرقمية
          </p>
        </div>

        {members.length === 0 ? (
          <div className="text-center py-16">
            <Users size={80} className="text-gray-500 mx-auto mb-6" />
            <h3 className="text-2xl text-gray-400 mb-4 font-arabic">
              لا يوجد أعضاء مسجلين بعد
            </h3>
            <p className="text-gray-500 font-arabic">
              كن أول من ينضم إلى مجتمعنا الرقمي
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
                <Users className="text-neon-cyan mr-3" size={24} />
                <span className="text-white font-bold text-lg font-arabic">
                  {members.length} عضو مسجل
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-neon-cyan transition-all duration-500 transform hover:scale-105 group"
                >
                  <div className="text-center">
                    <div className="relative mb-4 mx-auto w-20 h-20">
                      <Avatar className="w-full h-full border-2 border-neon-cyan/50 group-hover:border-neon-cyan transition-colors">
                        {member.profileImage ? (
                          <AvatarImage src={member.profileImage} alt={member.name} />
                        ) : (
                          <AvatarFallback className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white text-lg font-bold">
                            {member.name.charAt(0)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-neon-cyan to-neon-blue text-black rounded-full p-1">
                        <Crown size={12} />
                      </div>
                    </div>
                    
                    <h3 className="text-white font-bold text-lg mb-2 font-arabic truncate">
                      {member.name}
                    </h3>
                    
                    <p className="text-neon-cyan text-sm mb-3 truncate">
                      {member.email}
                    </p>
                    
                    {member.description && (
                      <p className="text-gray-300 text-xs leading-relaxed font-arabic line-clamp-2">
                        {member.description}
                      </p>
                    )}
                    
                    <div className="mt-4 px-3 py-1 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/30 rounded-full">
                      <span className="text-neon-cyan text-xs font-semibold font-arabic">
                        عضو نشط
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MembersSection;
