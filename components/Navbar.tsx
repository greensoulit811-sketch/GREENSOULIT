import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { fetchServices } from "../services/api"; 

type Service = {
  id: string;
  title: string;
  slug: string;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

            <NavLink to="/case-studies">Portfolio</NavLink>
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
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 bg-white border-t transition-all duration-500 ease-in-out ${isOpen ? 'top-20 opacity-100 visible h-auto pb-10 shadow-2xl' : '-top-full opacity-0 invisible h-0'}`}>
        <div className="px-6 pt-6 space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Portfolio", path: "/case-studies" },
            { name: "Contact", path: "/contact" }
          ].map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-lg font-semibold tracking-tight ${isActive(item.path) ? 'text-green-600' : 'text-gray-800'}`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Services Section */}
          <div className="border-t pt-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Our Services</p>
            <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto pr-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    navigate(`/services/${service.slug}`);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl transition-colors"
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="relative inline-block w-full p-0.5 rounded-full overflow-hidden button-wrapper"
            >
              <button className="relative z-10 w-full bg-gray-900 text-white rounded-full py-3 font-medium text-sm">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
