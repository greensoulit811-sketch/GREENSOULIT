import React, { useEffect, useState } from "react";
import { fetchTeam } from "../../services/api";
import { TeamMember } from "../../types";
import FounderSection from "./components/FounderSection";
import TeamGrid from "./components/TeamGrid";

const About: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    fetchTeam().then(setTeam);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedMember]);

  return (
    <div className="pb-24">
      {/* Our Story */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/30 -z-10 skew-x-[-12deg] translate-x-20"></div>
        <div className="absolute top-40 left-10 w-24 h-24 bg-green-200/20 rounded-full blur-2xl animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Content Side */}
            <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-10 duration-1000">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-black uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                Our Journey
              </div>

              <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                Crafting Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                  Success Stories
                </span>
              </h2>

              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  Founded in 2024,{" "}
                  <span className="text-green-600 font-black">
                    Green Soul IT
                  </span>{" "}
                  started with a simple but powerful mission: to bridge the gap
                  between businesses and their digital potential.
                </p>
                <p className="text-gray-500 text-lg border-l-4 border-green-500 pl-6 py-2">
                  "We don't just provide services; we build long-term
                  partnerships that drive sustainable growth in an ever-evolving
                  digital world."
                </p>
                <p className="text-lg">
                  Today, we are a global team of data-driven marketers, creative
                  designers, and expert developers dedicated to one goal—scaling
                  your brand beyond boundaries.
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-10 pt-12">
                <div className="group">
                  <div className="flex items-baseline gap-1">
                    <h4 className="text-5xl font-black text-gray-900 group-hover:text-green-600 transition-colors">
                      100
                    </h4>
                    <span className="text-3xl font-black text-green-500">
                      +
                    </span>
                  </div>
                  <p className="text-sm font-black text-gray-400 uppercase tracking-widest mt-2">
                    Projects Delivered
                  </p>
                  <div className="w-10 h-1 bg-green-100 mt-4 group-hover:w-20 transition-all duration-500"></div>
                </div>
                <div className="group">
                  <div className="flex items-baseline gap-1">
                    <h4 className="text-5xl font-black text-gray-900 group-hover:text-green-600 transition-colors">
                      95
                    </h4>
                    <span className="text-3xl font-black text-green-500">
                      %
                    </span>
                  </div>
                  <p className="text-sm font-black text-gray-400 uppercase tracking-widest mt-2">
                    Client Retention
                  </p>
                  <div className="w-10 h-1 bg-green-100 mt-4 group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Image Side - Creative Stack */}
            <div className="order-1 lg:order-2 relative animate-in fade-in slide-in-from-right-10 duration-1000">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                <img
                  src="https://socialprisma.com/public/storage/service/20241125122400.webp"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -left-10 w-48 h-48 border-[12px] border-green-50 rounded-[3rem] -z-10 rotate-12"></div>

              {/* Floating Experience Badge */}
              <div
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl z-20 animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                    3+
                  </div>
                  <div>
                    <p className="text-gray-900 font-black leading-none text-lg">
                      Years
                    </p>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                      Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - New */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-green-600 font-black tracking-[0.2em] uppercase text-xs mb-4">
              Our DNA
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-5xl font-black text-gray-900">
              What Drives Us <span className="text-green-600">Forward</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Data Driven",
                desc: "We rely on hard facts and real-time data to optimize every campaign for maximum ROI.",
                icon: "📊",
                color: "bg-blue-50 text-blue-600",
              },
              {
                title: "Result Oriented",
                desc: "Success is measured in conversions and growth. We are obsessed with delivering tangible impact.",
                icon: "🎯",
                color: "bg-green-50 text-green-600",
              },
              {
                title: "Creative Spirit",
                desc: "We push boundaries with innovative designs and storytelling that resonates with your audience.",
                icon: "💡",
                color: "bg-orange-50 text-orange-600",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}
                >
                  {value.icon}
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Team Section */}
      <TeamGrid members={team} />
      {/* Modal for Member Details */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setSelectedMember(null)}
            >
              &times;
            </button>
            <div className="text-center">
              <img
                src={selectedMember.photo}
                alt={selectedMember.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-2xl font-bold mb-1">{selectedMember.name}</h4>
              <p className="text-green-600 font-medium mb-1">
                {selectedMember.role}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                {selectedMember.company}
              </p>
              <p className="text-gray-600 text-sm">{selectedMember.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
