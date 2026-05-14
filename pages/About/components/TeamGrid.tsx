import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { TeamMember } from '../../../types';

interface TeamGridProps {
  members: TeamMember[];
}

const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const visibleMembers = isExpanded ? members : members.slice(0, 10);

  return (
    <section className="lg:py-24 py-10 bg-gray-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-6xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Meet Our Innovation at <span className="text-green-600">Green Soul IT</span> Family
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            The brilliant minds behind our success. Hover over each member to discover their role and passion.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 transition-all duration-700">
          {visibleMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={`group relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-10`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Profile Image */}
              <img 
                src={member.photo} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />

              {/* Bottom Gradient Overlay (Always Visible) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                
                {/* Social Icons (Visible on Hover) */}
                <div className="flex gap-3 mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <a href="#" className="text-white/70 hover:text-green-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white/70 hover:text-green-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white/70 hover:text-green-400 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>

                {/* Name & Role */}
                <h3 className="text-white font-black text-xl mb-1 leading-tight">
                  {member.name}
                </h3>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                  {member.role}
                </p>
                
                {/* Short Bio (Hidden by default, shown on hover) */}
                <p className="text-white/40 text-sm font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 mt-2">
                  {member.details}
                </p>
              </div>

              {/* Status Dot */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!isExpanded && members.length > 10 && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setIsExpanded(true)}
              className="bg-[#2D343E] text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-gray-900 transition-all shadow-xl hover:-translate-y-1"
            >
              View All
            </button>
          </div>
        )}

        {/* Bottom Stats or Action */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-10 opacity-50">
           <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-gray-900">25+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Experts</span>
           </div>
           <div className="w-px h-10 bg-gray-200"></div>
           <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-gray-900">10+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Countries Served</span>
           </div>
           <div className="w-px h-10 bg-gray-200"></div>
           <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-gray-900">100%</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Success Rate</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
