// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

// ✅ fetchServices import path ঠিক করো:
import { fetchServices } from "../services/api"; 
// উদাহরণ: যদি file থাকে src/services/serviceApi.ts তাহলে:
// import { fetchServices } from "../services/serviceApi";



// Remove NavbarProps as auth is no longer needed


type Service = {
  id: string;
  title: string;
  slug: string;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Services এখন API থেকে আসবে (slug mismatch হবে না)
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        // শুধু title + slug লাগবে navbar এ
        const mapped = data.map((s: any) => ({
          id: s.id,
          title: s.title,
          slug: s.slug,
        }));
        setServices(mapped);
      } catch (e) {
        // fallback: empty থাকলেও navbar ভাঙবে না
        setServices([]);
      }
    };

    loadServices();
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="https://i.ibb.co/CsWG4pPh/Whats-App-Image-2026-01-27-at-6-26-53-PM.jpg"
              alt="Logo"
              className="h-14 w-auto rounded-md"
            />
            <span className="ml-2 text-xl font-black text-gray-600 hidden sm:block group-hover:text-gray-800 transition">
              Digital Marketing Agency
            </span>
          </Link>

          {/* Desktop Menu - Links (Center) */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <Link to="/services" className="nav-link !mr-0">Services</Link>
                <ChevronDown className="w-4 h-4 text-gray-600 transition-transform group-hover:rotate-180" />
              </div>

              <div
                className="absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-2 z-50 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
              >
                {services.length === 0 ? (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    No services found
                  </div>
                ) : (
                  services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => navigate(`/services/${service.slug}`)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      {service.title}
                    </button>
                  ))
                )}
              </div>
            </div>

            <Link to="/case-studies" className="nav-link">Case Studies</Link>
            <Link to="/invoice" className="nav-link">Payment</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Desktop Menu - Button (Right Side) */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link 
              to="/contact" 
              className="relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#22c55e,_#22c55e30,_#22c55e)] button-wrapper"
            >
              <button className="relative z-10 bg-gray-900 text-white rounded-full px-10 py-3.5 font-bold text-md">
                Hire Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-6 space-y-2">
          {["/", "/about", "/case-studies", "/blog", "/contact"].map((path, i) => (
            <Link
              key={i}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700"
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </Link>
          ))}

          {/* Mobile Services Dropdown */}
          <div className="border-t pt-2">
            <p className="text-gray-600 font-semibold mb-2">Services</p>

            {services.length === 0 ? (
              <p className="text-sm text-gray-500 px-2">No services found</p>
            ) : (
              services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    navigate(`/services/${service.slug}`);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  {service.title}
                </button>
              ))
            )}
          </div>
          <div className="pt-4 border-t">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="relative inline-block w-full p-0.5 rounded-full overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#22c55e,_#22c55e30,_#22c55e)] button-wrapper"
            >
              <button className="relative z-10 w-full bg-gray-900 text-white rounded-full py-3 font-bold text-sm">
                Hire Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;