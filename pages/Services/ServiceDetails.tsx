import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Target, 
  Layers, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  BarChart3,
  MousePointer2,
  Sparkles,
  PhoneCall,
  Globe,
  Facebook,
  Video,
  Palette
} from "lucide-react";
import { Service } from '../../types';
import { fetchServices } from '../../services/api';

interface ServiceDetailsProps {
  activeService: Service;
}

// --- EXTENDED SERVICE CONTENT MAP ---
const SERVICE_CONTENT: Record<string, { 
  title1: string; importance: string; 
  title2: string; scope: string; 
  title3: string; process: string;
  benefits: string[];
  features: { title: string; desc: string; icon: any }[];
}> = {
  "website-design": {
    title1: "ওয়েবসাইটের গুরুত্ব",
    importance: "একটি ওয়েবসাইট আপনার ব্যবসাকে ইন্টারনেটে ২৪ ঘণ্টা সচল রেখে গ্রাহকের কাছে পেশাদারিত্ব এবং বিশ্বস্ততা বাড়িয়ে তোলে। এর মাধ্যমে খুব সহজে পৃথিবীর যেকোনো প্রান্তের মানুষের কাছে নিজের পণ্য বা সেবা পৌঁছে দিয়ে ব্যবসার দ্রুত প্রচার করা সম্ভব হয়। সরাসরি পণ্য বিক্রয় বা সেবার তথ্য প্রদানের মাধ্যমে এটি আপনার সময় বাঁচায় এবং ব্যবসার মুনাফা বৃদ্ধিতে কার্যকর ভূমিকা রাখে। সেই সাথে এটি গুগল সার্চের মাধ্যমে নতুন গ্রাহক খুঁজে পেতে সাহায্য করে এবং বিজ্ঞাপনের খরচ কমিয়ে ব্যবসাকে আধুনিক রূপ দান করে। এমনকি আপনার অনুপস্থিতিতেও এটি গ্রাহকদের প্রয়োজনীয় তথ্য দিয়ে সহায়তা করে এবং ডেটা অ্যানালিটিক্সের মাধ্যমে ব্যবসার সঠিক সিদ্ধান্ত নিতে সাহায্য করে। সব মিলিয়ে একটি মানসম্মত ওয়েবসাইট আপনার ব্যবসার দীর্ঘমেয়াদী সম্পদ হিসেবে কাজ করে।",
    title2: "আমাদের সেবা সমূহ",
    scope: "আমরা আধুনিক UI/UX ডিজাইন থেকে শুরু করে ফুল-স্ট্যাক ডেভেলপমেন্ট এবং হাই-পারফরম্যান্স সিকিউরিটি ম্যানেজমেন্টের পূর্ণাঙ্গ সেবা প্রদান করি। আমাদের তৈরি প্রতিটি ওয়েবসাইট হাই-কনভার্টিং এবং বিজনেস গ্রোথ নিশ্চিত করার জন্য বিশেষভাবে অপ্টিমাইজ করা হয়। এছাড়াও আমরা নিয়মিত রক্ষণাবেক্ষণ, সিকিউরিটি আপডেট এবং টেকনিক্যাল সাপোর্ট প্রদানের মাধ্যমে আপনার ডিজিটাল সম্পদকে সর্বদা সুরক্ষিত ও সচল রাখি। আমরা ই-কমার্স সলিউশন, পোর্টফোলিও ওয়েবসাইট এবং কাস্টম ওয়েব অ্যাপ্লিকেশন তৈরিতে দক্ষ যা আপনার ব্র্যান্ডকে প্রতিযোগিতায় এগিয়ে রাখবে। গ্রাহকের চাহিদা অনুযায়ী আমরা ইউনিক ফিচার এবং থার্ড-পার্টি এপিআই ইন্টিগ্রেশন নিশ্চিত করি যাতে ওয়েবসাইটটি হয় সম্পূর্ণ ফাংশনাল ও ডাইনামিক।",
    title3: "আধুনিক প্রযুক্তি",
    process: "আমরা বিশ্বের লেটেস্ট টেকনোলজি যেমন React, Next.js এবং আধুনিক ডাটাবেস সিস্টেম ব্যবহার করি যা আপনার সাইটকে সুপার ফাস্ট এবং স্কেলেবল করে তোলে। ডাটা সুরক্ষার জন্য আমরা উন্নত এনক্রিপশন এবং প্রিমিয়াম ক্লাউড হোস্টিং নিশ্চিত করি যাতে কোনো ডাউনটাইম ছাড়াই গ্রাহক সেবা বজায় থাকে। সেই সাথে সঠিক মার্কেটিং ডাটা পেতে আমরা অ্যাডভান্স সার্ভার সাইড ট্র্যাকিং এবং এআই অপ্টিমাইজেশন ব্যবহার করি। আমরা কোডিং স্ট্যান্ডার্ড এবং এসইও ফ্রেন্ডলি আর্কিটেকচার অনুসরণ করি যাতে গুগল সার্চে আপনার সাইট দ্রুত র‍্যাঙ্ক করতে পারে। এছাড়াও অটোমেটেড ব্যাকআপ এবং ২৪/৭ সার্ভার মনিটরিংয়ের মাধ্যমে আমরা আপনার সাইটের নিরবিচ্ছিন্ন পারফরম্যান্স এবং হাই-স্পিড লোডিং টাইম নিশ্চিত করি।",
    benefits: [
      "২৪ ঘণ্টা ব্যবসা সচল রাখা",
      "পেশাদারিত্ব ও বিশ্বস্ততা বৃদ্ধি",
      "গুগল সার্চে টপ র‍্যাঙ্কিং",
      "বিজ্ঞাপনের খরচ কমানো"
    ],
    features: [
      { title: "UI/UX, and Branding", desc: "একটি ওয়েবসাইটের নান্দনিক ডিজাইন এবং ব্র্যান্ডের পরিচয় তৈরি করাই এই ধাপের কাজ। এটি ব্যবহারকারীর অভিজ্ঞতাকে সহজ করে এবং বিশ্বাসের জায়গা তৈরি করে।", icon: Palette },
      { title: "Frontend Development", desc: "ডিজাইনের নকশাকে কোডিংয়ের মাধ্যমে ব্রাউজারে দৃশ্যমান করা হয়। আমরা হাই-কোয়ালিটি কোডিং নিশ্চিত করি যা সব ডিভাইসে রেসপনসিভ থাকে।", icon: Globe },
      { title: "Backend Development", desc: "এটি ওয়েবসাইটের মূল মস্তিষ্ক যা তথ্য সুরক্ষা, ডাটাবেস এবং যাবতীয় ফাংশনালিটি নিয়ন্ত্রণ করে গ্রাহকের সাথে সার্ভারের যোগসূত্র তৈরি করে।", icon: Cpu },
      { title: "Database Management", desc: "এটি হলো ওয়েবসাইটের যাবতীয় তথ্য (ইউজার নেম, প্রোডাক্ট লিস্ট) সুশৃঙ্খলভাবে জমা রাখার ব্যবস্থা যাতে প্রয়োজনে দ্রুত এক্সেস করা যায়।", icon: Layers },
      { title: "Admin Dashboard", desc: "কোনো কোডিং না জেনেই ওয়েবসাইটের কন্টেন্ট পরিবর্তন বা ইউজারদের ম্যানেজ করার জন্য আমরা একটি সহজ ইউজার ফ্রেন্ডলি কন্ট্রোল প্যানেল তৈরি করি।", icon: Target },
      { title: "Hosting & SSL", desc: "আমরা হাই-স্পিড আনলিমিটেড হোস্টিং এবং ফ্রি এসএসএল সার্টিফিকেট প্রদান করি যা আপনার সাইটকে সারাবিশ্বের মানুষের কাছে দৃশ্যমান ও নিরাপদ রাখে।", icon: ShieldCheck },
      { title: "Server Side Tracking", desc: "অ্যাড-ব্লকার থাকলেও নির্ভুলভাবে ভিজিটরদের তথ্য পাওয়ার জন্য আমরা ব্রাউজারের বদলে সরাসরি সার্ভার থেকে ডেটা সংগ্রহ করার ব্যবস্থা করি।", icon: Zap }
    ]
  },
  "facebook-ads-boosting": {
    title1: "Precision Audience Targeting",
    importance: "Don't just reach people; reach the *right* people. Our data-driven approach ensures your budget is spent on high-intent customers.",
    title2: "ROI-Focused Campaigns",
    scope: "We handle everything from ad copy and creative design to pixel setup and sophisticated retargeting funnels.",
    title3: "Continuous Optimization",
    process: "We don't just 'set and forget'. We monitor daily, performing A/B tests to squeeze every bit of value from your ad spend.",
    benefits: [
      "Lower Cost Per Acquisition",
      "High-Converting Ad Creatives",
      "Advanced Audience Filtering",
      "Detailed Analytics Reporting"
    ],
    features: [
      { title: "A/B Testing", desc: "Rigorous testing of headlines, images, and audiences.", icon: BarChart3 },
      { title: "Pixel Integration", desc: "Advanced tracking to measure every conversion accurately.", icon: Target },
      { title: "Retargeting Funnels", desc: "Re-engage visitors who didn't convert the first time.", icon: TrendingUp }
    ]
  },
  "facebook-business-page-setup": {
    title1: "Professional First Impressions",
    importance: "A Facebook page is often the first point of contact for your customers. A professional setup builds instant trust and credibility.",
    title2: "Complete Brand Optimization",
    scope: "From high-quality cover design to automated messaging and SEO-friendly business descriptions.",
    title3: "Engagement Strategy",
    process: "We optimize every element of your page to ensure it's not just a profile, but a community-building asset.",
    benefits: [
      "Custom Graphic Design",
      "Verified Business Info",
      "Call-to-Action Optimization",
      "Instant Credibility Boost"
    ],
    features: [
      { title: "Page SEO", desc: "Keywords optimized to help people find you on Facebook and Google.", icon: Globe },
      { title: "Auto-Reply Setup", desc: "Never miss a customer query with professional automated responses.", icon: Zap },
      { title: "App Integration", desc: "Connect your WhatsApp, Website, and Shop seamlessly.", icon: Layers }
    ]
  },
  "ai-logo-design": {
    title1: "AI-Powered Content Mastery",
    importance: "The future of marketing is cinematic. AI allows us to create high-impact video content that stops the scroll.",
    title2: "Future-Ready Media",
    scope: "AI voiceovers, automated video editing, and trend-responsive content creation that scales your brand.",
    title3: "Efficiency & Quality",
    process: "We combine human creativity with AI efficiency to deliver professional video assets at unprecedented speeds.",
    benefits: [
      "Viral-Ready Content",
      "Scalable Production",
      "Engaging Voiceovers",
      "Modern Video Aesthetics"
    ],
    features: [
      { title: "AI Voice Generation", desc: "Studio-quality narration in multiple languages and tones.", icon: Sparkles },
      { title: "Smart Transitions", desc: "AI-enhanced editing for smooth, high-retention video content.", icon: Layers },
      { title: "Trend Syncing", desc: "Content designed to perform optimally within social algorithms.", icon: TrendingUp }
    ]
  },
  "social-media-marketing": {
    title1: "Organic Brand Dominance",
    importance: "Social media is the heartbeat of your brand. We keep it active, engaging, and growing consistently.",
    title2: "Community Engagement",
    scope: "Content calendars, daily posting, engagement management, and influencer outreach to build a loyal following.",
    title3: "Data-Led Growth",
    process: "We analyze engagement metrics to refine our content strategy, ensuring every post contributes to your goals.",
    benefits: [
      "Consistent Posting Schedule",
      "Higher Organic Reach",
      "Brand Authority Building",
      "Customer Loyalty Growth"
    ],
    features: [
      { title: "Content Calendar", desc: "Strategically planned posts to ensure your brand is always active.", icon: Layers },
      { title: "Analytics Tracking", desc: "Monthly reports showing your growth and engagement levels.", icon: BarChart3 },
      { title: "Creative Assets", desc: "Unique, branded graphics and captions for every post.", icon: Palette }
    ]
  }
};

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ activeService }) => {
  const navigate = useNavigate();
  const [allServices, setAllServices] = useState<Service[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchServices().then(setAllServices);
  }, [activeService.id]);

  const customContent = useMemo(() => {
    return SERVICE_CONTENT[activeService.slug] || {
      title1: "Strategic Importance",
      importance: `In the modern digital landscape, ${activeService.title} is not just an option—it's a necessity for any brand aiming for market dominance and sustainable growth.`,
      title2: "Our Comprehensive Scope",
      scope: `We provide end-to-end solutions for ${activeService.title}, handling every technical and creative aspect to ensure your brand stands out from the competition.`,
      title3: "Results-Driven Process",
      process: `Our methodology is built on transparency and measurable results. We don't just deliver a service; we deliver a partnership focused on your business objectives.`,
      benefits: [
        "Expert Strategy & Planning",
        "Premium Execution Quality",
        "Regular Performance Updates",
        "Scalable Growth Solutions"
      ],
      features: [
        { title: "Custom Strategy", desc: "Personalized approach tailored to your specific business niche.", icon: Target },
        { title: "Quality Assurance", desc: "Rigorous standards to ensure every deliverable is world-class.", icon: ShieldCheck },
        { title: "Growth Mindset", desc: "Every action we take is designed to move your business forward.", icon: TrendingUp }
      ]
    };
  }, [activeService]);

  const relatedServices = useMemo(() => {
    return allServices
      .filter(s => s.id !== activeService.id)
      .slice(0, 3);
  }, [allServices, activeService]);

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-green-100 selection:text-green-900">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[140px] animate-pulse"></div>
           <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
           <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-green-600 text-xs font-black uppercase tracking-[0.3em] mb-6 hover:gap-4 transition-all group px-6 py-2 rounded-full border border-green-100 hover:bg-green-50"
          >
             <ChevronRight className="w-4 h-4 rotate-180" /> Back to Solutions
          </Link>
          
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-green-50 border border-green-100 text-green-600 text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
             <Sparkles className="w-3.5 h-3.5" />
             {activeService.category || "Premium Solution"}
          </div>
          
          <h1 className="text-2xl md:text-6xl font-black mb-10 leading-[1.02] tracking-tighter text-gray-900 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {activeService.title}
          </h1>
          <p className="text-gray-500 md:text-xl max-w-4xl mx-auto font-medium leading-relaxed mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150">
            {activeService.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <Link to="/contact" className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-700 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-green-200">
              Launch Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* --- CORE STRATEGY SECTION --- */}
      <section className="py-14 bg-[#030712] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[150px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[150px] -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group bg-white/5 border border-white/10 lg:p-12 p-4 rounded-[1.5rem] hover:bg-white/10 transition-all duration-700">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-green-500 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Target className="w-8 h-8 text-green-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight">{customContent.title1}</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-lg">{customContent.importance}</p>
            </div>

            <div className="group bg-white/5 border border-white/10 lg:p-12 p-4 rounded-[1.5rem] hover:bg-white/10 transition-all duration-700">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-500 group-hover:-rotate-6 transition-all duration-500 shadow-lg">
                <Layers className="w-8 h-8 text-emerald-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight">{customContent.title2}</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-lg">{customContent.scope}</p>
            </div>

            <div className="group bg-white/5 border border-white/10 lg:p-12 p-4 rounded-[1.5rem] hover:bg-white/10 transition-all duration-700">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Zap className="w-8 h-8 text-green-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight">{customContent.title3}</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-lg">{customContent.process}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS & FEATURES --- */}
      <section className="py-14 relative bg-gray-50/50">
        <div className="container mx-auto px-4">
          {activeService.slug === 'website-design' ? (
            /* Special Full-Width Layout for Website Design */
            <div className="space-y-20">
              <div className="w-full">
                <h2 className="text-2xl md:text-6xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  Why Choose Our <br />
                  <span className="text-green-600">Expert Approach?</span>
                </h2>
                <p className="text-gray-600 text-xl font-medium leading-relaxed mb-12">
                  We don't just deliver a service; we build a foundation for your digital success. 
                  Our team combines years of industry expertise with the latest market trends.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {customContent.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-bold text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {customContent.features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="bg-white p-4 lg:p-10 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start gap-8 group">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-50 transition-colors">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black mb-4 text-gray-900 leading-tight">{feature.title}</h4>
                        <p className="text-gray-500 font-medium leading-relaxed text-lg">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Original Split Layout for Other Services */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              {/* Left: Why Us Content */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                    Why Choose Our <br />
                    <span className="text-green-600">Expert Approach?</span>
                  </h2>
                  <p className="text-gray-600 text-xl font-medium leading-relaxed">
                    We don't just deliver a service; we build a foundation for your digital success. 
                    Our team combines years of industry expertise with the latest market trends.
                  </p>
                </div>

                <div className="space-y-6">
                  {customContent.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-bold text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Feature Cards (Single Column) */}
              <div className="grid grid-cols-1 gap-6">
                {customContent.features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="bg-white p-10 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex items-start gap-8 group">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-50 transition-colors">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black mb-3 text-gray-900">{feature.title}</h4>
                        <p className="text-gray-500 font-medium leading-relaxed text-lg">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- CINEMATIC WORKFLOW --- */}
      <section className="py-14 bg-white relative">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
             Our Success Blueprint
          </div>
          <h2 className="text-2xl md:text-6xl lg:text-5xl font-black mb-8 text-gray-900 tracking-tight">The <span className="text-green-600">Roadmap</span> to Results</h2>
          <p className="text-gray-500 text-xl font-medium mb-24 max-w-2xl mx-auto">A transparent, step-by-step methodology designed for your business growth.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             {[
               { step: "01", title: "Discovery", desc: "We dive deep into your brand identity, business goals, and current market positioning." },
               { step: "02", title: "Strategy", desc: "A custom-tailored roadmap is built with clear KPIs and conversion targets." },
               { step: "03", title: "Execution", desc: "Our elite team of designers and developers brings the vision to life with precision." },
               { step: "04", title: "Success", desc: "Launch, monitor, and optimize for continuous growth and market dominance." }
             ].map((item, i) => (
               <div key={i} className="relative p-10 border border-gray-100 rounded-[1.5rem] bg-gray-50/50 group hover:border-green-500/30 transition-all duration-500 hover:bg-white hover:shadow-2xl text-left overflow-hidden">
                  <span className="text-8xl font-black text-gray-100 absolute -bottom-4 -right-4 group-hover:text-green-500/10 transition-colors duration-500 select-none">{item.step}</span>
                  <div className="relative z-10">
                    <h4 className="text-2xl font-black mb-6 text-green-600">{item.title}</h4>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- RELATED SERVICES --- */}
      {relatedServices.length > 0 && (
        <section className="py-14 bg-gray-50/30">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-6xl text-center lg:text-5xl font-black mb-12 text-gray-900">Explore Other <span className="text-green-600">Solutions</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service) => (
                <Link 
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="group bg-white p-8 rounded-[1.5rem] border border-gray-100 hover:border-green-500/50 transition-all shadow-sm hover:shadow-xl"
                >
                  <h4 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors">{service.title}</h4>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{service.description}</p>
                  <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-widest">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- PREMIUM CALL TO ACTION --- */}
      <section className="py-24 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4">
           <div className="bg-[#030712] rounded-[1.5rem] p-16 md:p-24 text-center relative overflow-hidden group shadow-[0_60px_120px_-20px_rgba(0,0,0,0.4)]">
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[150px] -mr-64 -mt-64 group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] -ml-40 -mb-40"></div>
              
              <div className="relative z-10 text-white">
                 <h2 className="text-2xl md:text-7xl font-black mb-10 leading-[1.05] tracking-tight">
                   Let's Build Your
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600"> Digital Dynasty.</span>
                 </h2>
                 <p className="text-gray-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                   Ready to transform your business with a <strong>{activeService.title}</strong> strategy that actually delivers? 
                   Our experts are standing by to help you scale.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                   <Link to="/contact" className="group w-full sm:w-auto bg-green-500 text-white px-4 py-4  rounded-xl font-black text-xl hover:bg-green-400 transition-all hover:scale-105 shadow-[0_20px_60px_rgba(34,197,94,0.3)] active:scale-95 flex items-center gap-1.5">
                     Get Free Consultation
                     <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                   </Link>
                   <Link to="/services" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-4 py-4 rounded-xl font-black text-xl hover:bg-white/10 transition-all">
                     View More Solutions
                   </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;

