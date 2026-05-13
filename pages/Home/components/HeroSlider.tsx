import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { fetchHeroSlider } from '../../../services/api';
import { useNavigate, Link } from 'react-router-dom';

interface Slide {
  id: string | number;
  image: string;
  title: string;
  subtitle: string;
}

const HeroSlider: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHeroSlider().then(setSlides);
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    
    // Progress bar logic
    const duration = 6000;
    const interval = 100;
    const step = (interval / duration) * 100;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [slides, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  if (slides.length === 0) return (
    <div className="h-[70vh] bg-white flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-950 group/hero">
      
      {/* SaaS Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-green-500/20 blur-[140px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[140px] rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Animated Background Images with Zoom & Dark Overlay */}
        {slides.map((slide, index) => (
          <div 
            key={`bg-${slide.id}`}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentIndex ? 'opacity-60' : 'opacity-0'}`}
          >
             <img 
               src={slide.image} 
               alt="" 
               className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear brightness-[0.4] ${index === currentIndex ? 'scale-110' : 'scale-100'}`}
             />
             <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-transparent to-gray-950/80"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-20">
        <div className="relative h-[600px] flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex flex-col items-center text-center justify-center transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${
                index === currentIndex 
                  ? 'opacity-100 scale-100 z-20 pointer-events-auto' 
                  : 'opacity-0 scale-95 z-0 pointer-events-none'
              }`}
            >
              {/* Announcement Badge */}
              <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-sm font-bold mb-10 shadow-sm transition-all duration-700 delay-100 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-400 font-black text-[10px] uppercase tracking-widest">New Release</span>
                <div className="w-px h-3 bg-white/20"></div>
                Explore {slide.title.split(' ')[0]} solutions
                <ChevronRight className="w-4 h-4 text-white/40" />
              </div>

              {/* Title with Perspective and Split Color */}
              <h2 className={`text-5xl sm:text-7xl lg:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tighter max-w-6xl mx-auto transition-all duration-1000 delay-300 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={(word === '&' || i === 2 || i === 3) ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300" : ""}>{word} </span>
                ))}
              </h2>

              {/* Subtitle with Delay */}
              <p className={`text-xl sm:text-2xl text-white/60 font-medium max-w-3xl mx-auto mb-14 leading-relaxed transition-all duration-1000 delay-500 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {slide.subtitle}. We deliver high-impact results using data-driven strategies and creative innovation.
              </p>

              {/* Buttons with Staggered Entry */}
              <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <Link
                  to="/services"
                  className="group relative w-full sm:w-auto overflow-hidden bg-green-500 text-white px-14 py-5 rounded-2xl font-black text-xl shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] transition-all hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Get Started <Zap className="w-5 h-5 fill-white" />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-white px-14 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-6 h-6 text-white/40 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Navigation & Progress Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-8 w-full max-w-md px-10">
        
        {/* Progress Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); setProgress(0); }}
              className={`group relative h-1.5 transition-all duration-500 overflow-hidden rounded-full ${
                i === currentIndex ? 'bg-white/20 w-16' : 'bg-white/10 w-4 hover:w-8 hover:bg-white/20'
              }`}
            >
              {i === currentIndex && (
                <div 
                  className="absolute inset-0 bg-green-500 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              )}
            </button>
          ))}
        </div>

        {/* Side Arrows */}
        {/* <div className="hidden lg:flex items-center gap-4 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500 absolute -left-64 bottom-0">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg flex items-center justify-center text-white/40 hover:text-green-400 hover:scale-110 transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg flex items-center justify-center text-white/40 hover:text-green-400 hover:scale-110 transition-all"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSlider;
