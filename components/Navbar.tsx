import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Home as HomeIcon, Info, Briefcase, Phone, ChevronRight, Globe, Rocket, Share2, Layout, ShieldCheck } from "lucide-react";
import { fetchServices } from "../services/api"; 

type Service = {
  id: string;
  title: string;
  slug: string;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'menu' | 'categories'>('menu');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        const mapped = data.map((s: any) => ({
          id: s.id,
          title: s.title,
          slug: s.slug,
        }));
        setServices(mapped);
      } catch (e) {
        setServices([]);
      }
    };
    loadServices();
  }, []);

  const isActive = (path: string) => pathname === path;

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`relative py-1 text-[16px] font-semibold tracking-[0.05em] transition-all duration-300 ${
        isActive(to) ? 'text-green-600' : 'text-gray-600 hover:text-gray-900'
      } group`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 h-[2px] bg-green-600 transition-all duration-500 rounded-full ${
        isActive(to) ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </Link>
  );

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <style>
        {`
          @keyframes spin-gradient {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .button-wrapper::before {
            content: '';
            position: absolute;
            inset: -100%;
            background: conic-gradient(from 0deg, #22c55e, #10b98130, #22c55e);
            animation: spin-gradient 4s linear infinite;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <img
                src="https://i.ibb.co/CsWG4pPh/Whats-App-Image-2026-01-27-at-6-26-53-PM.jpg"
                alt="Logo"
                className="relative h-12 w-auto rounded-lg shadow-sm"
              />
            </div>
            <span className="ml-3 text-lg font-bold text-gray-800 hidden lg:block tracking-tight">
              Digital Marketing <span className="text-green-600">Agency</span>
            </span>
          </Link>

          {/* Desktop Menu - Links (Center) */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>

            {/* Services Dropdown */}
            <div className="relative group">
              <div className={`flex items-center gap-1 cursor-pointer py-1 text-[13px] font-semibold tracking-[0.05em] transition-all duration-300 ${
                pathname.startsWith('/services') ? 'text-green-600' : 'text-gray-600 hover:text-gray-900'
              }`}>
                <Link to="/services" className="!mr-0">Services</Link>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${pathname.startsWith('/services') ? 'text-green-600' : 'text-gray-400'}`} />
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-green-600 transition-all duration-500 rounded-full ${
                  pathname.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl py-3 z-50 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="px-4 py-2 border-b border-gray-50 mb-2">
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest">Our Expertise</span>
                </div>
                {services.length === 0 ? (
                  <div className="px-6 py-4 text-sm text-gray-500">No services found</div>
                ) : (
                  services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => navigate(`/services/${service.slug}`)}
                      className="w-full text-left px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors flex items-center justify-between group/item"
                    >
                      {service.title}
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                    </button>
                  ))
                )}
              </div>
            </div>

            <NavLink to="/case-studies">Casestudies</NavLink>
            <NavLink to="/invoice">Payment</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Desktop Menu - Button (Right Side) */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/contact" 
              className="relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 button-wrapper"
            >
              <button className="relative z-10 bg-gray-900  text-green-600 rounded-full px-10 py-3 font-medium text-lg">
                Hire Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Tabbed Premium Experience */}
      <div className={`md:hidden fixed inset-x-0 top-20 bg-white border-t border-gray-100 z-[100] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        
        {/* Tab Switcher */}
        <div className="flex border-b border-gray-100">
          <button 
            onClick={() => setActiveTab('menu')}
            className={`flex-1 py-4 text-[12px] font-black uppercase tracking-widest transition-all ${activeTab === 'menu' ? 'text-green-600 border-b-2 border-green-600 bg-green-50/30' : 'text-gray-400'}`}
          >
            Menu
          </button>
          <button 
            onClick={() => setActiveTab('categories')}
            className={`flex-1 py-4 text-[12px] font-black uppercase tracking-widest transition-all ${activeTab === 'categories' ? 'text-green-600 border-b-2 border-green-600 bg-green-50/30' : 'text-gray-400'}`}
          >
            Services
          </button>
        </div>

        <div className="px-4 py-4 space-y-8 overflow-y-auto max-h-[60vh] custom-scrollbar">
          
          {activeTab === 'menu' ? (
            /* Main Menu List */
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Casestudies", path: "/case-studies" },
                { name: "Payment", path: "/invoice" },
                { name: "Contact", path: "/contact" }
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-black tracking-tight flex items-center justify-between p-2 rounded-xl transition-all ${isActive(item.path) ? 'text-green-600 bg-green-50' : 'text-gray-900 hover:bg-gray-50'}`}
                >
                  {item.name}
                  {isActive(item.path) && <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>}
                </Link>
              ))}
            </nav>
          ) : (
            /* Services List - Line by Line (No Icons) */
            <div className="flex flex-col">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => { navigate(`/services/${service.slug}`); setIsOpen(false); }}
                  className="w-full flex items-center justify-between py-3 border-b border-gray-50 last:border-0 group active:bg-gray-50 px-2 transition-colors text-left"
                >
                  <span className="text-[12px] font-bold text-gray-700 group-hover:text-green-600 transition-colors flex-grow pr-4 text-left">
                    {service.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* Bottom Action Section */}
          <div className="pt-4 border-t border-gray-100">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gray-950 text-white text-center py-4 rounded-2xl font-black text-sm shadow-xl transition-all active:scale-[0.98]"
            >
              Start Your Project
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
