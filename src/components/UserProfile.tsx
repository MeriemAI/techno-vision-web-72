
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User, Camera, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RegisteredUser {
  name: string;
  email: string;
  profileImage?: string;
  description?: string;
  coverPhoto?: string;
}

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
  user: RegisteredUser;
  onUserUpdate: (updatedUser: RegisteredUser) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose, user, onUserUpdate }) => {
  const [editedUser, setEditedUser] = useState<RegisteredUser>(user);
  const [descriptionLength, setDescriptionLength] = useState(user.description?.length || 0);
  const { toast } = useToast();

  useEffect(() => {
    setEditedUser(user);
    setDescriptionLength(user.description?.length || 0);
  }, [user]);

  const handleProfileImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditedUser(prev => ({ ...prev, profileImage: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverPhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditedUser(prev => ({ ...prev, coverPhoto: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (newName: string) => {
    setEditedUser(prev => ({ ...prev, name: newName }));
  };

  const handleDescriptionChange = (newDescription: string) => {
    if (newDescription.length <= 1000) {
      setEditedUser(prev => ({ ...prev, description: newDescription }));
      setDescriptionLength(newDescription.length);
    }
  };

  const handleSave = () => {
    // Update localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userIndex = registeredUsers.findIndex((u: RegisteredUser) => u.email === user.email);
    
    if (userIndex !== -1) {
      registeredUsers[userIndex] = editedUser;
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      localStorage.setItem('currentUser', JSON.stringify(editedUser));
    }

    onUserUpdate(editedUser);
    toast({
      title: "تم التحديث بنجاح!",
      description: "تم حفظ تغييرات الملف الشخصي",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Cover Photo Section */}
        <div className="relative h-48 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-t-2xl overflow-hidden">
          {editedUser.coverPhoto && (
            <img
              src={editedUser.coverPhoto}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          )}
          <label
            htmlFor="cover-upload"
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 cursor-pointer hover:bg-black/70 transition-colors"
          >
            <Camera size={20} />
          </label>
          <input
            id="cover-upload"
            type="file"
            accept="image/*"
            onChange={handleCoverPhotoUpload}
            className="hidden"
          />
          <button
            onClick={onClose}
            className="absolute top-4 left-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center -mt-16 mb-8">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-gray-800">
                {editedUser.profileImage ? (
                  <AvatarImage src={editedUser.profileImage} alt={editedUser.name} />
                ) : (
                  <AvatarFallback className="bg-gradient-to-r from-neon-cyan to-neon-purple">
                    <User size={32} className="text-white" />
                  </AvatarFallback>
                )}
              </Avatar>
              <label
                htmlFor="profile-upload"
                className="absolute -bottom-2 -right-2 bg-neon-cyan text-black rounded-full p-2 cursor-pointer hover:bg-neon-blue transition-colors"
              >
                <Upload size={16} />
              </label>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleProfileImageUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Name Section */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2 font-arabic">
              الاسم
            </label>
            <input
              type="text"
              value={editedUser.name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none font-arabic"
              placeholder="أدخل اسمك"
            />
          </div>

          {/* Email Section (Read-only) */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2 font-arabic">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              value={editedUser.email}
              disabled
              className="w-full px-4 py-2 bg-gray-600/50 border border-gray-600 rounded-lg text-gray-400 cursor-not-allowed"
            />
            <p className="text-gray-400 text-sm mt-1 font-arabic">
              لا يمكن تعديل البريد الإلكتروني
            </p>
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <label className="block text-white font-semibold mb-2 font-arabic">
              الوصف الشخصي
            </label>
            <textarea
              value={editedUser.description || ''}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none font-arabic resize-none"
              placeholder="اكتب وصفاً عن نفسك..."
              rows={4}
              maxLength={1000}
            />
            <div className="flex justify-between mt-1">
              <p className="text-gray-400 text-sm font-arabic">
                أقصى حد: 1000 حرف
              </p>
              <p className={`text-sm ${descriptionLength > 900 ? 'text-red-400' : 'text-gray-400'}`}>
                {descriptionLength}/1000
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-purple hover:via-neon-blue hover:to-neon-cyan text-black font-bold py-3 rounded-lg transition-all duration-500 font-arabic"
            >
              حفظ التغييرات
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-gray-700 font-arabic"
            >
              إلغاء
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
