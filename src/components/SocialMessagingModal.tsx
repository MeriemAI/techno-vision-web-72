
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { X, Send, User, Smile, Phone, Video } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface RegisteredUser {
  name: string;
  email: string;
  profileImage?: string;
}

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
}

interface SocialMessagingModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: RegisteredUser;
  currentUser: RegisteredUser;
}

const SocialMessagingModal: React.FC<SocialMessagingModalProps> = ({ 
  isOpen, 
  onClose, 
  recipient, 
  currentUser 
}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      loadMessages();
    }
  }, [isOpen, recipient.email, currentUser.email]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = () => {
    const allMessages = JSON.parse(localStorage.getItem('messages') || '[]');
    const conversationMessages = allMessages.filter((msg: Message) => 
      (msg.senderId === currentUser.email && msg.receiverId === recipient.email) ||
      (msg.senderId === recipient.email && msg.receiverId === currentUser.email)
    );
    setMessages(conversationMessages);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى كتابة رسالة",
        variant: "destructive",
      });
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: currentUser.email,
      receiverId: recipient.email,
      content: message.trim(),
      timestamp: new Date()
    };

    const allMessages = JSON.parse(localStorage.getItem('messages') || '[]');
    const updatedMessages = [...allMessages, newMessage];
    localStorage.setItem('messages', JSON.stringify(updatedMessages));

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    toast({
      title: "تم الإرسال",
      description: `تم إرسال رسالتك إلى ${recipient.name}`,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: Date) => {
    return new Date(timestamp).toLocaleTimeString('ar-SA', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800/95 backdrop-blur-sm border border-gray-600 rounded-2xl max-w-lg w-full h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Avatar className="w-10 h-10">
              {recipient.profileImage ? (
                <AvatarImage src={recipient.profileImage} alt={recipient.name} />
              ) : (
                <AvatarFallback className="bg-gradient-to-r from-neon-cyan to-neon-purple">
                  <User size={20} className="text-white" />
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <h3 className="text-white font-bold text-lg font-arabic">
                {recipient.name}
              </h3>
              <p className="text-green-400 text-sm font-arabic">متصل الآن</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Phone size={18} />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Video size={18} />
            </Button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              <p className="font-arabic">ابدأ محادثة جديدة</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.senderId === currentUser.email ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    msg.senderId === currentUser.email
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-black'
                      : 'bg-gray-700 text-white'
                  }`}
                >
                  <p className="font-arabic text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${
                    msg.senderId === currentUser.email ? 'text-black/70' : 'text-gray-400'
                  }`}>
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <div className="p-4 border-t border-gray-600">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Smile size={20} />
            </Button>
            <div className="flex-1 relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none font-arabic resize-none pr-12"
                placeholder="اكتب رسالة..."
                rows={1}
                maxLength={1000}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                size="sm"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-purple text-black rounded-full p-2 disabled:opacity-50"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-1 text-right font-arabic">
            اضغط Enter للإرسال
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMessagingModal;
