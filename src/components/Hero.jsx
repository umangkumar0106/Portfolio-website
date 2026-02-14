import { useRef, useEffect } from 'react';
import { PROFILE_IMAGE } from '../constants/data';

const Hero = ({ isLoading }) => {
  const heroSubtitleRef = useRef(null);

  useEffect(() => {
    if (!isLoading && heroSubtitleRef.current) {
      const text = 'Full Stack Developer';
      let i = 0;
      heroSubtitleRef.current.textContent = '';
      
      const timer = setInterval(() => {
        if (i < text.length) {
          heroSubtitleRef.current.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
        }
      }, 150);
      
      return () => clearInterval(timer);
    }
  }, [isLoading]);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden text-white bg-slate-900">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-20 h-20 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 opacity-10 top-1/4 left-1/10 animate-pulse" style={{animationDelay: '0s'}} />
        <div className="absolute w-16 h-16 rounded-full bg-linear-to-br from-purple-500 to-pink-600 opacity-10 top-3/5 right-1/10 animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute w-24 h-24 rounded-full bg-linear-to-br from-cyan-500 to-indigo-600 opacity-10 bottom-1/4 left-1/5 animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      <div className="z-10 grid items-center max-w-6xl gap-12 px-8 mx-auto md:grid-cols-2">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold md:text-6xl animate-fade-in-up">
            Umang Kumar
          </h1>
          <h2 
            ref={heroSubtitleRef}
            className="text-2xl text-transparent md:text-3xl bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text animate-fade-in-up"
            style={{animationDelay: '0.3s'}}
          />
          <p className="max-w-lg text-lg text-gray-300 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            "MCA student passionate about full-stack development, diving into the MERN stack and constantly learning new technologies to stay ahead."
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <a 
              href="#projects" 
              className="px-8 py-4 text-white transition-all duration-300 bg-purple-600 rounded-full hover:shadow-lg hover:-translate-y-1 hover:bg-purple-500"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 text-white transition-all duration-300 border-2 border-indigo-500 rounded-full hover:bg-indigo-500/10 hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-500 to-pink-600 opacity-30 animate-pulse" />
            <div className="absolute inset-0 border-2 border-indigo-500 rounded-full animate-spin" style={{animationDuration: '8s'}} />
            <img 
              src={PROFILE_IMAGE}
              alt="Umang Kumar"
              className="relative z-10 object-cover object-top transition-transform duration-300 border-4 rounded-full w-80 h-80 border-white/20 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
