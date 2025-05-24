
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
import UserProfile from './UserProfile';

interface RegisteredUser {
  name: string;
  email: string;
  profileImage?: string;
  description?: string;
  coverPhoto?: string;
}

const Navigation = () => {
  const [currentUser, setCurrentUser] = useState<RegisteredUser | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'الفعاليات', href: '#events' },
    { name: 'المشاريع', href: '#projects' }
  ];

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }

    // Listen for login/logout events
    const handleStorageChange = () => {
      const user = localStorage.getItem('currentUser');
      setCurrentUser(user ? JSON.parse(user) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/');
  };

  const handleJoinClick = () => {
    navigate('/register');
  };

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleUserUpdate = (updatedUser: RegisteredUser) => {
    setCurrentUser(updatedUser);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
              Digital Minds
            </div>
            
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img 
                  src="/lovable-uploads/a632fae9-732e-43b4-9f6d-379129daa088.png" 
                  alt="Digital Minds Logo" 
                  className="w-10 h-10 rounded-full border-2 border-neon-cyan"
                />
                <span className="text-sm text-gray-300 font-semibold font-arabic">
                  العقول الرقمية - ثانوية بوحارة عبد الرزاق
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 text-sm font-medium font-arabic"
                >
                  {item.name}
                </a>
              ))}
              
              {/* User Profile or Join Button */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                {currentUser ? (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div 
                      className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={handleProfileClick}
                    >
                      <Avatar className="w-8 h-8">
                        {currentUser.profileImage ? (
                          <AvatarImage src={currentUser.profileImage} alt={currentUser.name} />
                        ) : (
                          <AvatarFallback className="bg-gradient-to-r from-neon-cyan to-neon-purple">
                            <User size={16} className="text-white" />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <span className="text-white text-sm font-medium font-arabic hover:text-neon-cyan transition-colors">
                        {currentUser.name}
                      </span>
                    </div>
                    <Button
                      onClick={handleLogout}
                      variant="ghost"
                      size="sm"
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                    >
                      <LogOut size={16} />
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={handleJoinClick}
                    className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-purple hover:via-neon-blue hover:to-neon-cyan text-black font-bold py-2 px-4 rounded-full transition-all duration-500 text-sm font-arabic"
                  >
                    انضم إلينا
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* User Profile Modal */}
      {currentUser && (
        <UserProfile
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          user={currentUser}
          onUserUpdate={handleUserUpdate}
        />
      )}
    </>
  );
};

export default Navigation;
