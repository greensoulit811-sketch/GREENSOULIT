import React, { useEffect, useState } from 'react';
import { ArrowRight, Globe, BarChart3, ShoppingBag, Mail, Home, Cpu, Rocket, Calendar, Users, Stethoscope, Layout, GraduationCap, Car, Camera, Scale, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchCaseStudies } from '../../services/api';
import { CaseStudy } from '../../types';

const iconMap: Record<string, any> = {
  'Digital Strategy': Globe,
  'SEO & Analytics': BarChart3,
  'Web Development': ShoppingBag,
  'Email Marketing': Mail,
  'Digital Marketing': Home,
  'AI Solutions': Cpu,
  'Branding & UI/UX': Rocket,
  'App Development': Calendar,
  'B2B Marketing': Users,
  'Healthcare SEO': Stethoscope,
  'Product Design': Layout,
  'Education Tech': GraduationCap,
  'Lead Generation': Car,
  'Influencer Marketing': Camera,
  'Local SEO': Scale
};

const CaseStudies: React.FC = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchCaseStudies().then((data) => {
      setCaseStudies(data);
      setIsLoading(false);
    });
  }, []);

  const displayedStudies = showAll ? caseStudies : caseStudies.slice(0, 6);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100 selection:text-green-900 overflow-x-hidden relative">
      
      {/* Integrated Cinematic Hero - Matching Payment Color */}
      <section className="bg-[#0f172a] pt-24 pb-24 text-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#22c55e_0%,transparent_70%)] opacity-20"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#22c55e 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-green-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
             Our Success Stories
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            Real Impact, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 ml-3">
               Proven Results.
            </span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Explore how we've helped brands scale their digital presence through <br className="hidden md:block" /> 
            data-driven strategies and innovative technology.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading ? (
            [1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-96 bg-gray-100 rounded-[1.5rem] animate-pulse"></div>
            ))
          ) : (
            displayedStudies.map((study, i) => {
              const Icon = iconMap[study.category] || Globe;
              return (
                <div
                  key={study.id}
                  className="group bg-white rounded-[1.5rem] border border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-6 right-6">
                      <div className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/20 text-green-600 text-[10px] font-black uppercase tracking-widest shadow-xl">
                        {study.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h4 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                      {study.title}
                    </h4>
                    <p className="text-gray-500 font-medium text-sm mb-10 line-clamp-3 leading-relaxed">
                      {study.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <Link 
                        to={`/case-studies/${study.id}`} 
                        className="inline-flex items-center gap-2 text-gray-900 font-black text-xs uppercase tracking-widest group/btn hover:text-green-600 transition-colors"
                      >
                        View Details 
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform text-green-500" />
                      </Link>
                      <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-50 group-hover:text-green-500 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Load More Button */}
        {!isLoading && caseStudies.length > 6 && (
          <div className="mt-24 flex justify-center pb-24">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-12 py-5 bg-[#0a0f1a] text-white rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-green-600 transition-all duration-500 flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">{showAll ? 'Show Less' : 'Load More projects'}</span>
              {showAll ? (
                <ChevronUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;
