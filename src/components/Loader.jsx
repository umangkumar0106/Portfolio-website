import React from 'react';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center transition-opacity duration-500 bg-slate-900 z-10000">
      <div className="text-center text-white">
        <div className="w-12 h-12 mx-auto mb-4 border-4 rounded-full border-white/10 border-t-indigo-500 animate-spin" />
        <h2 className="text-xl">Loading Portfolio...</h2>
      </div>
    </div>
  );
};

export default Loader;
