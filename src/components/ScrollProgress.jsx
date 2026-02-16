
const ScrollProgress = ({ scrollProgress }) => {
  return (
    <div 
      className="fixed top-0 left-0 h-1 transition-all duration-300 bg-linear-to-r from-blue-500 to-blue-600 z-9999"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgress;
