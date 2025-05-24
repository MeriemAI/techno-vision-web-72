
import React, { useState, useEffect } from 'react';
import { Users, Crown, Lock, CheckCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import MemberVerificationModal from './MemberVerificationModal';

interface RegisteredUser {
  name: string;
  email: string;
  profileImage?: string;
  description?: string;
}

interface PredefinedMember {
  name: string;
  email: string;
  code: string;
}

const predefinedMembers: PredefinedMember[] = [
  { name: 'الاستاذة حركاتي اخلاص', email: 'ikhlassehr@gmail.com', code: 'hk010503' },
  { name: 'مريم بن سعد', email: 'MeriemAI2009@gmail.com', code: 'mb584210' },
  { name: 'بن مداني توبة هبة الرحمان', email: 'taoubaben94@gmail.com', code: 'bt478528' },
  { name: 'ألاء بولعروق', email: 'alouaboulaa@gmail.com', code: 'ab795143' },
  { name: 'رزين أماني', email: 'amanirezine@gmail.com', code: 'ra721965' },
  { name: 'زرمان مروى', email: 'marwazarmane@gmail.com', code: 'zm792863' },
  { name: 'عمراني دعاء', email: 'damrani893@gmail.com', code: 'ad479822' },
  { name: 'بوشيبي ريم', email: 'rymbouchibi88@gmail.com', code: 'bm148576' },
  { name: 'الأستاذ لعمارة محمد أمين', email: 'lamara.inf@gmail.com', code: 'la489512' },
  { name: 'بن عراب أحمد خليل', email: 'khalil.benarab@gmail.com', code: 'bk754935' },
  { name: 'جبلي يوسف', email: 'youcefdjebli6032@gmail.com', code: 'dy482967' },
  { name: 'زايدي يوسف', email: 'zaidi.youcef2009@gmail.com', code: 'zy159437' },
  { name: 'حاجي عمر', email: 'mji098om@gmail.com', code: 'ho459276' },
  { name: 'حداد لؤي', email: 'hlouai03@gmail.com', code: 'hl147862' },
  { name: 'عبد الله', email: 'abdallahbensaad2012@gmail.com', code: 'ab148967' },
  { name: 'يمنى', email: 'yomna@gmail.com', code: 'yu489527' }
];

const MembersSection = () => {
  const [registeredUsers, setRegisteredUsers] = useState<RegisteredUser[]>([]);
  const [selectedMember, setSelectedMember] = useState<PredefinedMember | null>(null);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);

  useEffect(() => {
    // Get all registered users from localStorage
    const users = localStorage.getItem('registeredUsers');
    if (users) {
      setRegisteredUsers(JSON.parse(users));
    }

    // Listen for changes to localStorage (when new users register)
    const handleStorageChange = () => {
      const updatedUsers = localStorage.getItem('registeredUsers');
      setRegisteredUsers(updatedUsers ? JSON.parse(updatedUsers) : []);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userRegistered', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userRegistered', handleStorageChange);
    };
  }, []);

  const handleMemberClick = (member: PredefinedMember) => {
    // Check if this member is already registered
    const isRegistered = registeredUsers.some(user => user.email === member.email);
    
    if (isRegistered) {
      // Check if current user is this member
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        const current = JSON.parse(currentUser);
        if (current.email === member.email) {
          // Already logged in as this member, no action needed
          return;
        }
      }
    }
    
    setSelectedMember(member);
    setIsVerificationOpen(true);
  };

  const handleVerificationSuccess = (newUser: RegisteredUser) => {
    setRegisteredUsers(prev => [...prev, newUser]);
  };

  const isRegistered = (email: string) => {
    return registeredUsers.some(user => user.email === email);
  };

  const getRegisteredUser = (email: string) => {
    return registeredUsers.find(user => user.email === email);
  };

  return (
    <>
      <section id="members" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/30 to-gray-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl mb-8">
              أعضاء
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue"> النادي</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-arabic">
              أعضاء نادي العقول الرقمية - انقر على اسمك للدخول إلى حسابك
            </p>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
              <Users className="text-neon-cyan mr-3" size={24} />
              <span className="text-white font-bold text-lg font-arabic">
                {predefinedMembers.length} عضو في النادي
              </span>
              <div className="mx-3 w-px h-6 bg-gray-600"></div>
              <CheckCircle className="text-green-400 mr-2" size={20} />
              <span className="text-green-400 font-bold text-sm font-arabic">
                {registeredUsers.length} مسجل
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {predefinedMembers.map((member, index) => {
              const registeredUser = getRegisteredUser(member.email);
              const memberIsRegistered = isRegistered(member.email);
              
              return (
                <div 
                  key={index} 
                  className={`bg-gray-800/40 backdrop-blur-sm border ${
                    memberIsRegistered 
                      ? 'border-green-500/50 hover:border-green-400' 
                      : 'border-gray-700 hover:border-neon-cyan'
                  } rounded-2xl p-6 transition-all duration-500 transform hover:scale-105 group cursor-pointer relative`}
                  onClick={() => handleMemberClick(member)}
                >
                  {/* Registered Badge */}
                  {memberIsRegistered && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-lg">
                        <CheckCircle size={12} className="mr-1" />
                        مسجل
                      </Badge>
                    </div>
                  )}

                  <div className="text-center">
                    <div className="relative mb-4 mx-auto w-20 h-20">
                      <Avatar className={`w-full h-full border-2 ${
                        memberIsRegistered 
                          ? 'border-green-500/70 group-hover:border-green-400' 
                          : 'border-neon-cyan/50 group-hover:border-neon-cyan'
                      } transition-colors`}>
                        {registeredUser?.profileImage ? (
                          <AvatarImage src={registeredUser.profileImage} alt={member.name} />
                        ) : (
                          <AvatarFallback className={`${
                            memberIsRegistered 
                              ? 'bg-gradient-to-r from-green-500 to-green-600' 
                              : 'bg-gradient-to-r from-neon-cyan to-neon-purple'
                          } text-white text-lg font-bold`}>
                            {member.name.charAt(0)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 ${
                        memberIsRegistered 
                          ? 'bg-gradient-to-r from-green-500 to-green-600' 
                          : 'bg-gradient-to-r from-neon-cyan to-neon-blue'
                      } text-black rounded-full p-1`}>
                        {memberIsRegistered ? <Crown size={12} /> : <Lock size={12} />}
                      </div>
                    </div>
                    
                    <h3 className="text-white font-bold text-lg mb-2 font-arabic truncate">
                      {member.name}
                    </h3>
                    
                    <p className={`text-sm mb-3 truncate ${
                      memberIsRegistered ? 'text-green-400' : 'text-neon-cyan'
                    }`}>
                      {member.email}
                    </p>
                    
                    {registeredUser?.description && (
                      <p className="text-gray-300 text-xs leading-relaxed font-arabic line-clamp-2 mb-3">
                        {registeredUser.description}
                      </p>
                    )}
                    
                    <div className={`mt-4 px-3 py-1 ${
                      memberIsRegistered 
                        ? 'bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30' 
                        : 'bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/30'
                    } rounded-full`}>
                      <span className={`text-xs font-semibold font-arabic ${
                        memberIsRegistered ? 'text-green-400' : 'text-neon-cyan'
                      }`}>
                        {memberIsRegistered ? 'عضو مسجل ✓' : 'انقر للتسجيل'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MemberVerificationModal
        isOpen={isVerificationOpen}
        onClose={() => setIsVerificationOpen(false)}
        member={selectedMember}
        onSuccess={handleVerificationSuccess}
      />
    </>
  );
};

export default MembersSection;
