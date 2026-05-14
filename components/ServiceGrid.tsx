import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceGridProps {
  services: Service[];
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  const displayServices = services.slice(0, 5);
  
  if (displayServices.length === 0) return null;

  const cardStyles = [
    { 
      bg: 'bg-[#EBF5FF]', 
      accent: 'bg-blue-400',
      text: 'text-gray-900', 
      highlight: 'text-blue-600',
      hover: 'hover:shadow-blue-200/50',
      glow: 'from-blue-200/40 to-transparent',
    }, // 1
    { 
      bg: 'bg-[#E6F9F1]', 
      accent: 'bg-emerald-400',
      text: 'text-gray-900', 
      highlight: 'text-emerald-600',
      hover: 'hover:shadow-emerald-200/50',
      glow: 'from-emerald-200/40 to-transparent',
    }, // 2
    { 
      bg: 'bg-[#F3F4F6]', 
      accent: 'bg-gray-400',
      text: 'text-gray-900', 
      highlight: 'text-gray-600',
      hover: 'hover:shadow-gray-300/50',
      glow: 'from-gray-200/40 to-transparent',
    }, // 3
    { 
      bg: 'bg-[#FFF7ED]', 
      accent: 'bg-orange-400',
      text: 'text-gray-900', 
      highlight: 'text-orange-600',
      hover: 'hover:shadow-orange-200/50',
      glow: 'from-orange-200/40 to-transparent',
    }, // 4
    { 
      bg: 'bg-[#FEF2F2]', 
      accent: 'bg-rose-400',
      text: 'text-gray-900', 
      highlight: 'text-rose-600',
      hover: 'hover:shadow-rose-200/50',
      glow: 'from-rose-200/40 to-transparent',
    }, // 5
  ];

  const renderTitle = (title: string, index: number) => {
    const words = title.split(' ');
    if (index === 0 && words.length >= 2) {
      return (
        <>
          {words[0]} <span className={cardStyles[0].highlight}>{words.slice(1).join(' ')}</span>
        </>
      );
    }
    if (index === 1 && words.length >= 2) {
      return (
        <>
          <span className={cardStyles[1].highlight}>{words[0]}</span> {words.slice(1).join(' ')}
        </>
      );
    }
    return title;
  };

  return (
    <section className="lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100/50 blur-[100px] -z-10"></div>
          <p className="text-[12px] md:text-[12px] lg:text-[16px] font-bold text-green-500 uppercase tracking-[0.3em] mb-6">Innovative Solutions</p>
          <h2 className="text-2xl md:text-6xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            Our  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">Services</span>
          </h2>
        </div>

        {/* The 5-Card Grid - Purely Typography Driven */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-10">
          
          {displayServices.map((service, index) => {
            const isWide = index === 0;
            const style = cardStyles[index];
            const colSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';
            
            return (
              <div 
                key={service.id}
                className={`${colSpan} min-h-[40px] ${style.bg} rounded-[1.5rem] p-6 md:p-14 relative group overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] ${style.hover} border border-white/50 flex flex-col justify-between`}
              >
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className={`absolute top-[-10%] left-[-10%] w-96 h-96 bg-gradient-radial ${style.glow} blur-[100px] -z-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700`}></div>
                
                {/* Card Numbering */}
                <span className="absolute top-10 right-10 text-8xl font-black text-black/[0.03] select-none group-hover:text-black/[0.05] transition-colors duration-700">
                  0{index + 1}
                </span>

                <div className={`h-full flex flex-col ${isWide ? 'md:flex-row md:items-center' : ''} relative z-10`}>
                  <div className={isWide ? 'flex-1 pr-12' : ''}>
                    {/* Tiny Accent Bar */}
                    <div className={`w-12 h-1.5 ${style.accent} rounded-full mb-8 transform origin-left group-hover:scale-x-150 transition-transform duration-700`}></div>
                    
                    <h3 className={`${isWide ? 'text-xl md:text-5xl' : 'text-xl'} font-black mb-6 leading-[1.1] text-gray-900 tracking-tight`}>
                      {renderTitle(service.title, index)}
                    </h3>
                    
                    <p className="text-gray-500 font-medium mb-10 max-w-xs leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity line-clamp-4">
                      {service.description}
                    </p>
                    
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="inline-flex items-center gap-3 font-bold text-gray-900 group/link transition-all"
                    >
                      <span className="relative">
                        Learn More
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover/link:w-full transition-all duration-300"></span>
                      </span>
                      <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover/link:bg-gray-900 group-hover/link:text-white group-hover/link:border-gray-900 transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </Link>
                  </div>
                  
                  {/* Space for removed icon/image */}
                  {isWide && <div className="flex-1"></div>}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;




