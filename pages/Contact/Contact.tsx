import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, ArrowRight, Send, Globe, ChevronDown, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactSubmit, fetchServices } from '../../services/api';
import { Service } from '../../types';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [services, setServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    service: '', 
    message: '' 
  });

  useEffect(() => {
    fetchServices().then(setServices);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await contactSubmit(formData);
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('idle');
      alert('Something went wrong! Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/8801607183592', '_blank');
  };

  return (
    <div className="bg-white font-plus-jakarta selection:bg-green-100 selection:text-green-900 overflow-x-hidden">
      
      {/* Cinematic Dark Hero Section */}
      <section className="bg-[#030712] pt-24 pb-20 text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: `radial-gradient(#22c55e 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Get in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Touch.
            </span>
          </h1>
          <p className='text-center px-[25%] text-white'>Connect with us to discuss your project requirements, ask questions, or learn more about how we can support your business growth.</p>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="relative overflow-hidden pt-20 pb-32">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-green-50 rounded-full blur-[120px] opacity-60 pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] opacity-60 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left Section: Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-700 font-extrabold tracking-wider uppercase text-[10px] sm:text-xs">
                    Contact Details
                  </span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
                  Let's Discuss Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                    Next Digital Venture
                  </span>
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                  Ready to transform your brand? Our experts are here to help you scale with data-driven marketing strategies and high-end design.
                </p>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "Our Office",
                    content: "South Banasree, Road 12, House 26, Dhaka",
                    color: "text-blue-600",
                    bg: "bg-blue-500/10",
                    border: "group-hover:border-blue-200"
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "greensoulit@gmail.com",
                    color: "text-purple-600",
                    bg: "bg-purple-500/10",
                    border: "group-hover:border-purple-200"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+88 01607-183592",
                    color: "text-orange-600",
                    bg: "bg-orange-500/10",
                    border: "group-hover:border-orange-200"
                  },
                  {
                    icon: Globe,
                    title: "Social Media",
                    content: "@greensoulit",
                    color: "text-green-600",
                    bg: "bg-green-500/10",
                    border: "group-hover:border-green-200"
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`group relative p-8 bg-white/40 backdrop-blur-md border border-gray-100 rounded-[1.5rem] ${item.border} hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-green-300 transition-all duration-500 overflow-hidden`}>
                    {/* Hover Background Glow */}
                    <div className={`absolute -right-10 -top-10 w-32 h-32 ${item.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    <div className="relative z-10">
                      <div className={`${item.bg} ${item.color} w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500 shadow-sm`}>
                        <item.icon className="w-8 h-8" />
                      </div>
                      <h5 className="font-extrabold text-gray-900 text-xl mb-2 tracking-tight">{item.title}</h5>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.content}</p>
                    </div>

                    {/* Decorative Bottom Corner Element */}
                    <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-10 transition-opacity">
                      <item.icon className="w-12 h-12" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openWhatsApp}
                  className="group relative inline-flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] active:scale-95 overflow-hidden"
                >
                  <MessageCircle className="w-6 h-6 animate-bounce" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Section: Premium Form */}
            <div className="relative lg:sticky lg:top-32">
              <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/10 to-emerald-500/10 rounded-[1.5rem] blur-2xl -z-10 animate-pulse" />
              
              <div className="bg-white p-8 sm:p-12 rounded-[1.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
                {status === 'success' ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h4 className="text-3xl text-gray-900 font-black mb-4">Message Sent!</h4>
                    <p className="text-gray-500 mb-10 max-w-xs mx-auto text-lg">
                      We've received your inquiry. Expect a response within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-xl hover:shadow-gray-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div className="space-y-10">
                    <div className="space-y-3">
                      <h4 className="text-3xl font-black text-gray-900">Send us a message</h4>
                      <p className="text-gray-500 font-medium">Have a question or idea? We'd love to connect.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black text-gray-600 uppercase tracking-widest ml-1">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-50 focus:border-green-500/30 focus:bg-white focus:ring-8 focus:ring-green-500/5 transition-all outline-none text-gray-900 font-medium"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black text-gray-600 uppercase tracking-widest ml-1">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-50 focus:border-green-500/30 focus:bg-white focus:ring-8 focus:ring-green-500/5 transition-all outline-none text-gray-900 font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-600 uppercase tracking-widest ml-1">Email ID</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="david@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-50 focus:border-green-500/30 focus:bg-white focus:ring-8 focus:ring-green-500/5 transition-all outline-none text-gray-900 font-medium"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-600 uppercase tracking-widest ml-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 342 123-456"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-50 focus:border-green-500/30 focus:bg-white focus:ring-8 focus:ring-green-500/5 transition-all outline-none text-gray-900 font-medium"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-600 uppercase tracking-widest ml-1">Select Service</label>
                        <div className="relative group">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-50 focus:border-green-500/30 focus:bg-white focus:ring-8 focus:ring-green-500/5 transition-all outline-none text-gray-900 font-medium appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Choose a service</option>
                            {services.map(service => (
                              <option key={service.id} value={service.title}>
                                {service.title}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 pointer-events-none transition-colors" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-600 uppercase tracking-widest ml-1">Message</label>
                        <textarea
                          name="message"
                          placeholder="Tell us about your project or idea..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-50 focus:border-green-500/30 focus:bg-white focus:ring-8 focus:ring-green-500/5 transition-all outline-none text-gray-900 font-medium resize-none"
                        />
                      </div>

                      <div className="flex items-center space-x-3 ml-1">
                        <input 
                          type="checkbox" 
                          required 
                          className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500" 
                        />
                        <span className="text-sm text-gray-500 font-medium">
                          You agree to our <a href="#" className="text-gray-900 border-b border-gray-900">terms</a> and <a href="#" className="text-gray-900 border-b border-gray-900">privacy policy</a>.
                        </span>
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3.5 rounded-2xl font-bold transition-all flex items-center justify-center space-x-3 disabled:opacity-50 shadow-2xl shadow-green-200"
                      >
                        {status === 'loading' ? (
                          <span className="flex items-center space-x-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Processing...</span>
                          </span>
                        ) : (
                          <>
                            <span className="text-lg">Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Google Map Section */}
      <div className="overflow-hidden">
        <div className="mx-auto relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative overflow-hidden shadow-2xl border-white h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=South+Banasree+Road+12+House+26+Dhaka&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(10%) contrast(1.1) brightness(1.05)' }}
              loading="lazy"
              allowFullScreen
              title="Office Location"
            ></iframe>
            
            {/* Map Overlay Card */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 max-w-xs hidden md:block">
              <h6 className="font-black text-gray-900 mb-2">Visit Our Creative Space</h6>
              <p className="text-sm text-gray-600 leading-relaxed">
                South Banasree, Road 12, House 26, Dhaka. We're open Mon-Fri, 10am - 7pm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
