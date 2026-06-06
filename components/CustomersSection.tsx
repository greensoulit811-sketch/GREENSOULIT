import React from "react";
import { Star } from "lucide-react";

const sampleCustomers = [
  {
    id: 1,
    name: "Acme Co",
    photo: "https://i.pravatar.cc/150?img=12",
    review: "Great results — our leads doubled in three months.",
    service: "Facebook Ads",
    rating: 5,
    metric: "400% Social Reach",
  },
  {
    id: 2,
    name: "Bright Labs",
    photo: "https://i.pravatar.cc/150?img=8",
    review: "Professional team and fast delivery.",
    service: "Website Design",
    rating: 4,
  },
  {
    id: 3,
    name: "GreenLeaf",
    photo: "https://i.pravatar.cc/150?img=3",
    review: "Their strategy improved our organic traffic significantly.",
    service: "SEO",
    rating: 5,
    metric: "120% Organic Growth",
  },
  {
    id: 4,
    name: "NovaTech",
    photo: "https://i.pravatar.cc/150?img=24",
    review: "Responsive and data-driven approach.",
    service: "AI Customer Assistant",
    rating: 4,
  },
  {
    id: 5,
    name: "Orbit Solutions",
    photo: "https://i.pravatar.cc/150?img=5",
    review: "Clear communication and measurable ROI.",
    service: "Video Marketing",
    rating: 5,
    metric: "3x Conversion Rate",
  },
  {
    id: 6,
    name: "PixelWave",
    photo: "https://i.pravatar.cc/150?img=18",
    review: "Creative visuals that convert.",
    service: "Creative Design",
    rating: 5,
  },
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
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-black text-white mb-2 leading-[1.05] tracking-tight">
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
          {Array.from({ length: 9 }).map((_, i) => {
            const c = sampleCustomers[i % sampleCustomers.length];
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
