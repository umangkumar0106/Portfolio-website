import React from 'react';

const ScrollProgress = ({ scrollProgress }) => {
  return (
    <div 
      className="fixed top-0 left-0 h-1 transition-all duration-300 bg-linear-to-r from-indigo-500 to-purple-600 z-9999"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgress;
