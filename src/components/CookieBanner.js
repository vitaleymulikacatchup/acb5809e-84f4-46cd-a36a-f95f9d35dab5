import React, { useState } from 'react';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="container-custom py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Our site uses cookies</h3>
            <p className="text-sm text-gray-600">
              Like most websites, we use cookies to make our site work the way you expect it to, improve your experience on our site, analyze site usage, and assist in our marketing efforts. By clicking "Accept All Cookies", you agree to the storing of all categories of cookies on your device. If you wish to accept or reject some categories of cookies, please click "Cookie Preferences".
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-cf-light-blue hover:text-blue-700 font-medium text-sm">
              Cookie Preferences
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium px-4 py-2 rounded text-sm">
              Reject All
            </button>
            <button className="bg-cf-light-blue hover:bg-blue-700 text-white font-medium px-4 py-2 rounded text-sm">
              Accept All Cookies
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;