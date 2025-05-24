
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MemberData {
  name: string;
  email: string;
  code: string;
}

interface MemberVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: MemberData | null;
  onSuccess: (member: MemberData) => void;
}

const MemberVerificationModal: React.FC<MemberVerificationModalProps> = ({ 
  isOpen, 
  onClose, 
  member, 
  onSuccess 
}) => {
  const [enteredCode, setEnteredCode] = useState('');
  const { toast } = useToast();

  const handleVerify = () => {
    if (!member) return;

    if (enteredCode.trim() === member.code) {
      // Check if this member is already claimed
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const existingUser = registeredUsers.find((user: any) => user.email === member.email);
      
      if (existingUser) {
        toast({
          title: "خطأ",
          description: "هذا الحساب مُسجل بالفعل من قبل شخص آخر",
          variant: "destructive",
        });
        return;
      }

      // Register the member
      const newUser = {
        name: member.name,
        email: member.email,
        profileImage: null,
        description: 'عضو في نادي العقول الرقمية'
      };

      const updatedUsers = [...registeredUsers, newUser];
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
      localStorage.setItem('currentUser', JSON.stringify(newUser));

      // Trigger events
      window.dispatchEvent(new CustomEvent('userRegistered'));
      window.dispatchEvent(new CustomEvent('storage'));

      toast({
        title: "تم التحقق بنجاح!",
        description: `مرحباً بك ${member.name}، تم تسجيل دخولك بنجاح`,
      });

      onSuccess(newUser);
      setEnteredCode('');
      onClose();
    } else {
      toast({
        title: "كود خاطئ",
        description: "الكود الذي أدخلته غير صحيح، هذا الحساب لا ينتمي إليك",
        variant: "destructive",
      });
    }
  };

  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <h3 className="text-white font-bold text-lg font-arabic">
            تحقق من الهوية
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={24} />
            </div>
            <h4 className="text-white font-bold text-lg mb-2 font-arabic">
              {member.name}
            </h4>
            <p className="text-gray-300 text-sm font-arabic">
              أدخل الكود الخاص بك للوصول إلى حسابك
            </p>
          </div>
          
          <div className="space-y-4">
            <input
              type="text"
              value={enteredCode}
              onChange={(e) => setEnteredCode(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none text-center text-lg tracking-wider"
              placeholder="أدخل الكود"
              maxLength={8}
            />
          </div>
        </div>
        
        <div className="flex gap-4 p-6 pt-0">
          <Button
            onClick={handleVerify}
            disabled={!enteredCode.trim()}
            className="flex-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-purple hover:via-neon-blue hover:to-neon-cyan text-black font-bold py-2 rounded-lg transition-all duration-500 font-arabic disabled:opacity-50"
          >
            تحقق
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
  );
};

export default MemberVerificationModal;
