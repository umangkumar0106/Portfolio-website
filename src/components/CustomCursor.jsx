
const CustomCursor = ({ cursorPos }) => {
  return (
    <div 
      className="fixed hidden w-5 h-5 transition-transform duration-300 ease-out bg-indigo-500 rounded-full pointer-events-none z-9999 mix-blend-difference md:block"
      style={{
        left: cursorPos.x,
        top: cursorPos.y,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export default CustomCursor;
