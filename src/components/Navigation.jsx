import React, { useRef, useEffect } from 'react';
import { Download } from 'lucide-react';
import { NAV_ITEMS } from '../constants/data';

const Navigation = ({ isScrolled, onDownloadCV }) => {
  const navRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isNavOpen]);

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/98 backdrop-blur-md shadow-lg' : 'bg-slate-900/95 backdrop-blur-md'
    }`}>
      <div className="flex items-center justify-between max-w-6xl py-4 pr-8 mx-auto">
        <a href="#home" className="text-xl font-bold text-white transition-all duration-300 hover:bg-linear-to-r hover:from-blue-500 hover:to-blue-600 hover:bg-clip-text hover:text-transparent">
          UMANG KUMAR
        </a>
        
        {/* Desktop Navigation */}
        <ul className="items-center hidden space-x-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-white transition-all duration-300 rounded-full hover:text-transparent hover:bg-linear-to-r hover:from-blue-500 hover:to-blue-600 hover:bg-clip-text hover:bg-white/10"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button 
              onClick={onDownloadCV}
              className="flex items-center gap-2 px-4 py-2 text-white transition-all duration-300 rounded-full hover:text-transparent hover:bg-linear-to-r hover:from-blue-500 hover:to-blue-600 hover:bg-clip-text hover:bg-white/10"
            >
              Download Resume <Download className="w-4 h-4" />
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="flex flex-col p-2 cursor-pointer md:hidden z-1001"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isNavOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isNavOpen ? 'opacity-0 translate-x-5' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isNavOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-slate-900 transition-transform duration-300 ${
        isNavOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {NAV_ITEMS.map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-white text-xl hover:text-transparent hover:bg-linear-to-r hover:from-blue-500 hover:to-blue-600 hover:bg-clip-text transition-all duration-300 transform ${
                isNavOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
              style={{ transitionDelay: isNavOpen ? `${index * 0.1}s` : '0s' }}
              onClick={() => setIsNavOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => {
              onDownloadCV();
              setIsNavOpen(false);
            }}
            className={`text-white text-xl hover:text-transparent hover:bg-linear-to-r hover:from-blue-500 hover:to-blue-600 hover:bg-clip-text transition-all duration-300 transform flex items-center gap-2 ${
              isNavOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
            style={{ transitionDelay: isNavOpen ? '0.6s' : '0s' }}
          >
            Download CV <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
