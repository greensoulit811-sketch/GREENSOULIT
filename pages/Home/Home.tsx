import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import {
  fetchServices,
  fetchCaseStudies,
  fetchTestimonials,
} from "../../services/api";
import { Service, CaseStudy, Testimonial } from "../../types";

import ImageCollection from "./components/ImageCollection";
import HeroSlider from "./components/HeroSlider";
import VideoSection from "./components/VideoSection";
import ServiceGrid from "../../components/ServiceGrid";
import CaseStudyGrid from "../../components/CaseStudyGrid";
import WhyWorkWithUs from "./components/WhyWorkWithUs";

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    fetchServices().then((data) => setServices(data));
    fetchCaseStudies().then(setCaseStudies);
    fetchTestimonials().then(setTestimonials);
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="flex flex-col w-full">
      <HeroSlider />

      <VideoSection></VideoSection>

      {/* Services Overview - New Premium Grid */}
      <ServiceGrid services={services} />

      <ImageCollection></ImageCollection>

      {/* Case Studies */}
      <CaseStudyGrid caseStudies={caseStudies} />

      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* Ultimate Testimonials Spotlight */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-50/30 rounded-full blur-[150px] -mr-96 -mt-96 animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/20 rounded-full blur-[150px] -ml-48 -mb-48 animate-bounce"
            style={{ animationDuration: "15s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-px w-12 bg-green-500"></div>
                <span className="text-xs font-black text-green-500 uppercase tracking-[0.4em]">
                  Testimonials
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1]">
                Real Results for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                  Real Companies.
                </span>
              </h3>
            </div>
            <div className="flex items-center space-x-12">
              <div className="text-center">
                <p className="text-4xl font-black text-gray-900">500+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">
                  Projects Done
                </p>
              </div>
              <div className="w-px h-12 bg-gray-100"></div>
              <div className="text-center">
                <p className="text-4xl font-black text-green-500">99%</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Spotlight Container */}
          <div className="relative bg-[#0f172a] rounded-[1.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] min-h-[600px]">
            {/* Ambient Background for the inner card */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#22c55e_0%,transparent_50%)]"></div>
            </div>

            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className={`absolute inset-0 flex flex-col lg:flex-row transition-all duration-1000 ease-in-out transform ${
                  idx === activeTestimonial
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 translate-x-full scale-95 pointer-events-none"
                }`}
              >
                {/* Left Side: Visual / Image */}
                <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>

                  {/* Floating Metric Card */}
                  <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-400 text-xs font-black uppercase tracking-widest mb-1">
                          Impact Delivered
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {t.metric || "Significant Growth"}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center relative">
                  <Quote className="absolute top-10 right-10 w-24 h-24 text-white/5" />

                  <div className="flex space-x-1 mb-10">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-5 h-5 ${s <= (t.rating || 5) ? "fill-green-500 text-green-500" : "text-white/20"}`}
                      />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-12 leading-tight">
                    "{t.feedback}"
                  </p>

                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-px bg-green-500"></div>
                    <div>
                      <h5 className="text-2xl font-black text-white leading-none mb-2">
                        {t.name}
                      </h5>
                      <p className="text-green-500 font-bold text-sm uppercase tracking-widest">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Overlays */}
            <div className="absolute bottom-10 right-10 flex items-center space-x-4 z-20">
              <button
                onClick={() =>
                  setActiveTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length,
                  )
                }
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-green-500 hover:border-green-500 transition-all group"
              >
                <ArrowRight className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial(
                    (prev) => (prev + 1) % testimonials.length,
                  )
                }
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-green-500 hover:border-green-500 transition-all group"
              >
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Progress Dots inside the dark card */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[180px] flex space-x-2 z-20">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === activeTestimonial
                      ? "bg-green-500 w-12"
                      : "bg-white/20 w-4 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trusted By Marquee Section */}
          {/* <div className="mt-32">
             <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.5em] mb-12">Trusted By World-Class Brands</p>
             <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="text-2xl font-black text-gray-900 tracking-tighter italic">GOOGLE</div>
                <div className="text-2xl font-black text-gray-900 tracking-tighter italic">META</div>
                <div className="text-2xl font-black text-gray-900 tracking-tighter italic">AMAZON</div>
                <div className="text-2xl font-black text-gray-900 tracking-tighter italic">NETFLIX</div>
                <div className="text-2xl font-black text-gray-900 tracking-tighter italic">SPOTIFY</div>
             </div>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-bold text-black mb-8">
            Ready to Scale Your Business?
          </h3>
          <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of successful companies growing with our data-driven
            strategies.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 shadow-xl transition-all inline-block"
          >
            Start Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
