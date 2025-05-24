
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RegisteredUser {
  name: string;
  email: string;
  profileImage?: string;
}

interface MessagingModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: RegisteredUser;
  currentUser: RegisteredUser;
}

const MessagingModal: React.FC<MessagingModalProps> = ({ isOpen, onClose, recipient, currentUser }) => {
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى كتابة رسالة",
        variant: "destructive",
      });
      return;
    }

    // For now, just show a success message since we don't have backend
    toast({
      title: "تم الإرسال",
      description: `تم إرسال رسالتك إلى ${recipient.name}`,
    });
    
    setMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <h3 className="text-white font-bold text-lg font-arabic">
            إرسال رسالة إلى {recipient.name}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none font-arabic resize-none"
            placeholder="اكتب رسالتك هنا..."
            maxLength={500}
          />
          <p className="text-gray-400 text-sm mt-1 text-right">
            {message.length}/500
          </p>
        </div>
        
        <div className="flex gap-4 p-6 pt-0">
          <Button
            onClick={handleSendMessage}
            className="flex-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-purple hover:via-neon-blue hover:to-neon-cyan text-black font-bold py-2 rounded-lg transition-all duration-500 font-arabic"
          >
            <Send size={16} className="ml-2" />
            إرسال
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

export default MessagingModal;
