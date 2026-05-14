import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchServices } from "../../services/api";
import { Service } from "../../types";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Users,
  Target,
  BarChart3,
  Layers,
  ChevronRight
} from "lucide-react";

import ServiceDetails from './ServiceDetails';

const Services: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Development", "Design", "Marketing", "AI Video"];

  useEffect(() => {
    const getServices = async () => {
      try {
        setLoading(true);
        const data = await fetchServices();
        setServices(data);
      } catch (e) {
        console.error("Failed to load services:", e);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };
    getServices();
  }, []);

  const activeService = useMemo(() => {
    if (!slug) return null;
    return services.find((s) => String(s.slug) === String(slug)) || null;
  }, [services, slug]);

  const filteredServices = useMemo(() => {
    if (selectedCategory === "All") return services;
    
    const matched = services.filter(s => {
      const cat = selectedCategory.toLowerCase();
      const title = s.title?.toLowerCase() || "";
      const serviceCat = s.category?.toLowerCase() || "";

      // Standard match
      if (serviceCat === cat || title.includes(cat)) return true;

      // Special handling for Marketing to include Ads and Facebook
      if (cat === "marketing") {
        return title.includes("ads") || title.includes("facebook") || title.includes("social");
      }

      // Special handling for AI Video
      if (cat === "ai video") {
        return title.includes("ai") || title.includes("video");
      }

      return false;
    });

    // If Marketing is selected, show all relevant matches (limit removed)
    return matched;
  }, [services, selectedCategory]);

  const goToService = (s: Service) => {
    navigate(`/services/${encodeURIComponent(s.slug)}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-green-100 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
      </div>
    );
  }

  // Use the new Standalone Component for Detail View
  if (activeService) {
    return <ServiceDetails activeService={activeService} />;
  }

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100 selection:text-green-900 overflow-x-hidden relative">
      
      {/* Integrated Cinematic Hero - Matching Payment Color */}
      <section className="bg-[#0f172a] pt-24 pb-20 text-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#22c55e_0%,transparent_70%)] opacity-20"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#22c55e 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-green-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
             Our Expertise
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            Digital Solutions That <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 ml-3">
              Drive Growth.
            </span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            We combine strategic thinking with cutting-edge technology to build <br className="hidden md:block" /> 
            digital experiences that deliver measurable results.
          </p>
        </div>
      </section>

      {/* Modern Filter Tabs */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                  selectedCategory === cat
                    ? "bg-green-600 text-white shadow-[0_10px_25px_-5px_rgba(34,197,94,0.4)] scale-105 active:scale-95"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 border border-transparent hover:border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Service Grid */}
      <section className="py-28 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <div 
                  key={service.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="group bg-white rounded-[1.5rem] border border-green-200 p-10 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] hover:shadow-green-500/5 transition-all duration-700 hover:-translate-y-4 flex flex-col relative overflow-hidden animate-in fade-in slide-in-from-bottom-10 fill-mode-both"
                >
                  {/* Subtle Hover Gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Card Top: Icon & Category Badge */}
                  <div className="flex items-start justify-between mb-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-green-200 group-hover:rotate-6">
                      <Zap className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="bg-green-50 text-green-600 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border border-green-100 group-hover:bg-white transition-colors duration-500">
                      {service.category || "General"}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed mb-12 flex-grow text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.description.length > 120 ? service.description.slice(0, 120) + "..." : service.description}
                  </p>

                  {/* Premium Footer Button */}
                  <button
                    onClick={() => goToService(service)}
                    className="inline-flex items-center gap-3 text-gray-900 font-black text-[11px] uppercase tracking-[0.25em] group/btn transition-all"
                  >
                    <span className="relative">
                      Explore Details
                      <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500"></span>
                    </span>
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover/btn:bg-green-600 group-hover/btn:text-white group-hover/btn:border-green-600 transition-all duration-500">
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-gray-200 animate-in fade-in zoom-in duration-700">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">No Services Found</h3>
              <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto font-medium">
                We couldn't find any services in the <span className="text-green-600 font-bold">"{selectedCategory}"</span> category right now.
              </p>
              <button 
                onClick={() => setSelectedCategory("All")}
                className="bg-green-600 text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl shadow-green-100"
              >
                Show All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cinematic CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="bg-[#030712] rounded-[1.5rem] p-16 md:p-16 text-center relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-green-500/10 rounded-full blur-[150px] -mr-80 -mt-80 group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-emerald-500/5 rounded-full blur-[120px] -ml-40 -mb-40"></div>
              
              <div className="relative z-10">
                 <h2 className="text-5xl md:text-7xl font-black text-white mb-12 leading-[1.05] tracking-tight">
                   Let's build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Digital Empire.</span>
                 </h2>
                 <p className="text-gray-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium">
                    Ready to scale your business with data-driven strategies and world-class design?
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                   <Link 
                     to="/contact" 
                     className="w-full sm:w-auto bg-green-500 text-white px-16 py-6 rounded-[2rem] font-black text-lg hover:bg-green-400 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(34,197,94,0.3)] active:scale-95"
                   >
                     Get a Free Strategy Call
                   </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;