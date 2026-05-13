import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show on Home page
  if (location.pathname === '/') return null;

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-12 text-sm font-medium">
          <nav className="flex items-center space-x-2 text-gray-400">
            <Link 
              to="/" 
              className="hover:text-green-600 transition-colors flex items-center gap-1.5"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              return (
                <React.Fragment key={to}>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                  {last ? (
                    <span className="text-green-600 font-bold">{capitalize(value)}</span>
                  ) : (
                    <Link 
                      to={to} 
                      className="hover:text-green-600 transition-colors"
                    >
                      {capitalize(value)}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
