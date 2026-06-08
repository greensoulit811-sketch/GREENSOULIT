import React from "react";
import { Star } from "lucide-react";

const sampleCustomers = [
  {
    id: 1,
    name: "Acme Co",
    photo: "/customer1.jpg", // <--- Replace with your local image name here
    review: "Great results — our leads doubled in three months. Great results — our leads doubled in three months. Great results — our leads doubled in three months.Great results — our leads doubled in three months.",
    service: "Facebook Ads",
    rating: 5,
    metric: "400% Social Reach",
  },
  {
    id: 2,
    name: "Bright Labs",
    photo: "/customer2.jpg",
    review: "Professional team and fast delivery. They completely transformed our online presence. Professional team and fast delivery. They completely transformed our online presence.",
    service: "Website Design",
    rating: 4,
    metric: "150% Traffic Increase",
  },
  {
    id: 3,
    name: "GreenLeaf",
    photo: "https://i.pravatar.cc/150?img=3",
    review: "Their strategy improved our organic traffic significantly within just a few weeks.",
    service: "SEO",
    rating: 5,
    metric: "120% Organic Growth",
  },
  {
    id: 4,
    name: "TechWave",
    photo: "https://i.pravatar.cc/150?img=15",
    review: "Exceptional service! Our app downloads skyrocketed after their campaign.",
    service: "App Marketing",
    rating: 5,
    metric: "300% ROI",
  },
  {
    id: 5,
    name: "Nexus Solutions",
    photo: "https://i.pravatar.cc/150?img=22",
    review: "The team was highly professional and delivered ahead of schedule.",
    service: "Branding",
    rating: 4,
    metric: "Brand Lift 40%",
  },
  {
    id: 6,
    name: "Elevate Inc.",
    photo: "https://i.pravatar.cc/150?img=33",
    review: "Their content marketing drove high-quality leads consistently.",
    service: "Content Strategy",
    rating: 5,
    metric: "2x Lead Volume",
  },
  {
    id: 7,
    name: "Global Reach",
    photo: "https://i.pravatar.cc/150?img=44",
    review: "Outstanding communication and measurable results. Highly recommend.",
    service: "PPC Campaigns",
    rating: 5,
    metric: "Lowered CPA by 30%",
  },
  {
    id: 8,
    name: "Pinnacle Brands",
    photo: "https://i.pravatar.cc/150?img=55",
    review: "Creative approach to our social media helped us reach a younger audience.",
    service: "Social Media Management",
    rating: 4,
    metric: "50k New Followers",
  },
  {
    id: 9,
    name: "Apex Dynamics",
    photo: "https://i.pravatar.cc/150?img=66",
    review: "They overhauled our email marketing and our open rates went through the roof.",
    service: "Email Marketing",
    rating: 5,
    metric: "45% Open Rate",
  },
  {
    id: 10,
    name: "Lumina Corp",
    photo: "https://i.pravatar.cc/150?img=7",
    review: "Their analytics insights helped us optimize our funnel effectively.",
    service: "Data Analytics",
    rating: 4,
    metric: "20% Conversion Bump",
  },
  {
    id: 11,
    name: "Synergy Tech",
    photo: "https://i.pravatar.cc/150?img=18",
    review: "A fantastic partner for scaling our operations and reaching new markets.",
    service: "Market Expansion",
    rating: 5,
    metric: "Opened 3 New Markets",
  },
  {
    id: 12,
    name: "Horizon Media",
    photo: "https://i.pravatar.cc/150?img=29",
    review: "They delivered a stunning video campaign that went viral.",
    service: "Video Production",
    rating: 5,
    metric: "1M+ Views",
  }
];

const CustomersSection: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Full-width hero background */}
      <section className="bg-[#0f172a] pt-16 pb-16 text-center relative overflow-hidden mb-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#22c55e_0%,transparent_70%)] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-green-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
             Our Customers
          </div>
          <h1 className="text-3xl sm:text-7xl lg:text-7xl font-black text-white mb-2 leading-[1.2] sm:leading-[1.05] tracking-tighter">
            Real Results for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 ml-2">Real Companies.</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            See authentic feedback from our clients and the measurable impact we've delivered.
          </p>
        </div>
      </section>

      <div className="container py-8 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid of testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCustomers.map((c, i) => {
            return (
              <div key={i} className="bg-white border border-green-200 rounded-[1.5rem] p-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 min-h-[220px] flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <img src={c.photo} alt={c.name} className="w-14 h-14 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-extrabold text-gray-900 text-lg">{c.name}</h4>
                        <p className="text-sm text-gray-500">{c.service}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className={`w-4 h-4 ${s < c.rating ? "text-green-500 fill-current" : "text-gray-200"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-base mb-4 flex-grow">{c.review}</p>
                <div className="text-sm text-gray-500 mt-2">{c.metric || 'Impact Delivered'}</div>
              </div>
            );
          })}
        </div>

        {/* Commitment row */}
        <div className="mt-12 bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h4 className="font-bold text-gray-900">Our Commitment to You</h4>
            <p className="text-sm text-gray-600">Quality service, timely delivery, and measurable results.</p>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold">✓</div>
              <p className="text-xs text-gray-600 mt-2">Secure Process</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold">⚡</div>
              <p className="text-xs text-gray-600 mt-2">Fast Delivery</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold">⭐</div>
              <p className="text-xs text-gray-600 mt-2">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default CustomersSection;
