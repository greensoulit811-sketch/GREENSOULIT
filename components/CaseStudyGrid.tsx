import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
}

const CaseStudyGrid: React.FC<CaseStudyGridProps> = ({ caseStudies }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-green-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-green-500"></div>
              <span className="text-green-600 text-xs font-black uppercase tracking-[0.4em]">Our Impact</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-5xl font-black text-gray-900 leading-tight">
              Real Results, <br />
              <span className="text-green-600">Exceptional</span> Stories
            </h2>
          </div>
          <div className="pb-2">
            <Link to="/case-studies" className="group inline-flex items-center gap-3 text-gray-900 font-black text-sm uppercase tracking-widest hover:text-green-600 transition-colors">
              See more projects
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* Grid for Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(0, 3).map((study) => (
            <Link 
              key={study.id} 
              to={`/case-studies/${study.id}`}
              className="group relative h-[500px] rounded-[1.5rem] overflow-hidden bg-gray-900 flex flex-col justify-end p-8 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Content Area */}
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-block px-4 py-1.5 rounded-full bg-green-500 text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg shadow-green-500/30">
                  {study.category}
                </div>
                
                <h4 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight group-hover:text-green-400 transition-colors">
                  {study.title}
                </h4>
                
                <p className="text-gray-400 font-medium text-sm mb-8 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {study.description}
                </p>

                <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest group/link">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform text-green-500" />
                </div>
              </div>

              {/* Decorative Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-green-500/0 rounded-[1.5rem] group-hover:border-green-500/30 transition-all duration-500 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
