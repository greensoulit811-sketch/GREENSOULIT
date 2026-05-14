import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react'; 
import founderImg from '@/components/image/founder.jpeg';

const FounderSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row bg-white rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
            <img 
              src={founderImg} 
              alt="Tareque Mahmud" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[2000ms]"
            />
            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-3xl font-black text-white mb-4">Tareque Mahmud</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-green-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>  
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-green-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-green-500 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Message Side */}
          <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center relative">
            <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
              <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 0C13.4315 0 0 13.4315 0 30V100H40V30C40 24.4772 44.4772 20 50 20V0H30Z" fill="black"/>
                <path d="M100 0C83.4315 0 70 13.4315 70 30V100H110V30C110 24.4772 114.477 20 120 20V0H100Z" fill="black"/>
              </svg>
            </div>

            <h4 className="text-green-600 font-black tracking-widest uppercase text-xs mb-6">Guiding Visionary</h4>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mb-8 leading-tight">
              A Message From Our Founder
            </h2>
            
            <p className="text-xl lg:text-xl text-gray-600 leading-relaxed font-medium mb-10">
              "We're building the future of digital experiences. Join us on this exciting journey as we push the boundaries of what's possible."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-20 h-[4px] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
              <span className="text-gray-400 font-bold uppercase tracking-widest text-xs font-mono">Vision 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
