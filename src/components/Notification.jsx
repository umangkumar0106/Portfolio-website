import React from 'react';
import { X, Check, Info, AlertCircle } from 'lucide-react';

const NotificationIcon = ({ type }) => {
  switch (type) {
    case 'success': return <Check className="w-5 h-5 text-green-500" />;
    case 'error': return <AlertCircle className="w-5 h-5 text-red-500" />;
    default: return <Info className="w-5 h-5 text-blue-500" />;
  }
};

const Notification = ({ notification, onClose }) => {
  if (!notification) return null;

  return (
    <div className={`fixed top-24 right-4 max-w-sm w-full bg-white rounded-xl shadow-2xl z-10000 transform transition-all duration-300 ${
      notification ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className={`flex items-center p-4 border-l-4 ${
        notification.type === 'success' ? 'border-green-500' : 
        notification.type === 'error' ? 'border-red-500' : 
        'border-blue-500'
      }`}>
        <NotificationIcon type={notification.type} />
        <span className="ml-3 text-gray-800">{notification.message}</span>
        <button 
          onClick={onClose}
          className="ml-auto text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Notification;
