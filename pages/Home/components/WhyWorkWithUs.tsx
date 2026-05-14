import React from 'react';
import { Star, Monitor, Lightbulb, MessageCircle } from 'lucide-react';

const strengths = [
  {
    title: "Industry Expertise & Experience",
    description: "Our deep industry knowledge and experience for tailored software solutions that meet your specific industry needs & goals.",
    icon: Star,
    color: "text-blue-500",
    bgColor: "bg-blue-50/50",
    iconColor: "#3b82f6"
  },
  {
    title: "Technology Proficiency & Capabilities",
    description: "Harness our advanced technological expertise to develop robust, scalable software solutions that propel your business forward with cutting-edge capabilities.",
    icon: Monitor,
    color: "text-green-500",
    bgColor: "bg-green-50/50",
    iconColor: "#22c55e"
  },
  {
    title: "Customized Solutions & Flexibility",
    description: "Enjoy tailored software solutions designed to fit your unique needs, offering flexibility and scalability to adapt and grow with your business.",
    icon: Lightbulb,
    color: "text-orange-500",
    bgColor: "bg-orange-50/50",
    iconColor: "#f59e0b"
  },
  {
    title: "Transparency & Communication",
    description: "Experience clear communication and transparency at every step, ensuring you're informed and involved in the software development process from start to finish.",
    icon: MessageCircle,
    color: "text-purple-500",
    bgColor: "bg-purple-50/50",
    iconColor: "#a855f7"
  }
];

const WhyWorkWithUs: React.FC = () => {
  return (
    <section className="py-20 bg-[#f0f7ff] overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[120px] -ml-64 -mt-64"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-100/10 rounded-full blur-[120px] -mr-72 -mb-72"></div>
      
      {/* Faint Grid lines or shapes like in the image */}
      <div className="absolute top-10 right-10 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H100V100H0V0Z" fill="currentColor" />
          <path d="M100 100H200V200H100V100Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100H100V200H0V100Z" fill="currentColor" />
          <path d="M100 0H200V100H100V0Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">Our Strengths</p>
          <h2 className="text-xl lg:text-5xl font-black text-gray-900 mb-8">
            Why <span className="text-green-500">Work</span> with Us
          </h2>
          <p className="text-gray-500 max-w-4xl mx-auto text- font-medium leading-relaxed">
            Work with us for expert, innovative, reliable, and customized software solutions, backed by efficient support, top-quality security, collaborative efforts, and agile methodologies
          </p>
        </div>

        {/* Auto-sliding Marquee */}
        <div className="relative">
          <div className="flex w-max animate-marquee-slow">
            {/* Double the array to create a seamless loop */}
            {[...strengths, ...strengths].map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[412px] pr-6"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-[1.5rem] p-10 border border-white/50 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 group h-full">
                  <div className={`w-20 h-20 ${item.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className={`w-10 h-10 ${item.color}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-6 leading-tight">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 25s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default WhyWorkWithUs;
