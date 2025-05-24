
import React from 'react';
import { X } from 'lucide-react';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogoModal: React.FC<LogoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <h3 className="text-white font-bold text-lg font-arabic">
            شعار النادي
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 text-center">
          <img
            src="/lovable-uploads/a632fae9-732e-43b4-9f6d-379129daa088.png"
            alt="Digital Minds Logo"
            className="w-32 h-32 mx-auto rounded-full border-4 border-neon-cyan"
          />
          <h4 className="text-white font-bold text-xl mt-4 font-arabic">
            العقول الرقمية
          </h4>
          <p className="text-gray-300 text-sm mt-2 font-arabic">
            ثانوية بوحارة عبد الرزاق
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoModal;
