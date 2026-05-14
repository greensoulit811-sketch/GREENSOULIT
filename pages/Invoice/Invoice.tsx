import React, { useState } from "react";
import { Copy, Check, ExternalLink, ShieldCheck, Smartphone, CreditCard, Banknote } from "lucide-react";

// ==================== TYPES ====================
interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  details: string[];
  copyValue?: string;
  link?: string;
  color: string;
}

// ==================== DATA ====================
const paymentMethods: PaymentMethod[] = [
  {
    id: "bkash",
    name: "bKash",
    icon: "https://download.logo.wine/logo/BKash/BKash-Logo.wine.png",
    details: ["01607183592", "Tap to Pay"],
    copyValue: "01607183592",
    link: "tel:01607183592",
    color: "bg-[#e2136e]",
  },
  {
    id: "nagad",
    name: "Nagad",
    icon: "https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg",
    details: ["01607183592", "Personal"],
    copyValue: "01607183592",
    link: "tel:01607183592",
    color: "bg-[#f7941d]",
  },
  {
    id: "bank",
    name: "Bank Transfer",
    icon: "https://img.freepik.com/free-vector/mobile-bank-users-transferring-money-currency-conversion-tiny-people-online-payment-cartoon-illustration_74855-14454.jpg?semt=ais_user_personalization&w=740&q=80",
    details: ["Dutch Bangla Bank Ltd", "A/C: 3031100347730"],
    copyValue: "3031100347730",
    color: "bg-blue-600",
  },
];

// ==================== COMPONENT ====================
const PaymentCard: React.FC<{ method: PaymentMethod }> = ({ method }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (method.copyValue) {
      navigator.clipboard.writeText(method.copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group relative bg-white rounded-[1.5rem] p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-gray-200 hover:border-green-300 transition-all duration-500 hover:-translate-y-2">
      {/* Top Banner Accent */}
      <div className={`absolute top-0 left-0 right-0 h-2 ${method.color} opacity-20 group-hover:opacity-100 transition-opacity rounded-t-[2rem]`}></div>

      {/* Image Area */}
      <div className="relative h-40 mb-6 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center p-4">
         <img
          src={method.icon}
          alt={method.name}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
        />
        {method.link && (
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black text-gray-900">{method.name}</h3>
          <div className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {method.id === 'bank' ? <CreditCard className="w-3 h-3 inline mr-1" /> : <Smartphone className="w-3 h-3 inline mr-1" />}
            {method.id === 'bank' ? 'Bank' : 'MFS'}
          </div>
        </div>

        <div className="space-y-1">
          {method.details.map((detail, idx) => (
            <p key={idx} className={`text-sm font-medium ${idx === 0 ? 'text-gray-900 text-lg font-bold' : 'text-gray-400'}`}>
              {detail}
            </p>
          ))}
        </div>

        {/* Action Button - Copy or Call */}
        <div className="pt-2 flex gap-3">
          {method.copyValue && (
            <button
              onClick={handleCopy}
              className={`flex-grow flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${
                copied 
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 active:scale-95'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Number'}
            </button>
          )}
          
          {method.link && (
            <a 
              href={method.link}
              className="w-14 bg-gray-900 text-white flex items-center justify-center rounded-xl hover:bg-black transition-colors active:scale-95"
            >
              <Smartphone className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
const PaymentInvoice: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50/50 overflow-hidden">
      {/* Cinematic Header Background */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[#0f172a] -skew-y-3 origin-top-left -mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#22c55e_0%,transparent_70%)] opacity-20"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#22c55e 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:py-32 py-20 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
            <ShieldCheck className="w-4 h-4" /> Secure Payment
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Safe & Easy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Checkout.</span>
          </h1>
          <p className="text-gray-400 text-lg font-medium leading-relaxed">
            Choose your preferred payment method below. Your transaction is protected with military-grade security.
          </p>
        </div>

        {/* Payment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mb-16">
          {paymentMethods.map((method) => (
            <PaymentCard key={method.id} method={method} />
          ))}
        </div>

        {/* Security & Support Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 md:gap-6 pt-12 border-t border-gray-300 w-full">
           <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                 <ShieldCheck className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-left">
                <p className="text-[10px] md:text-sm font-black text-gray-900 uppercase">100% Secure</p>
                <p className="text-[9px] md:text-xs text-gray-500">Encrypted</p>
              </div>
           </div>
           <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                 <Banknote className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-left">
                <p className="text-[10px] md:text-sm font-black text-gray-900 uppercase">Easy Refund</p>
                <p className="text-[9px] md:text-xs text-gray-500">7-Day Policy</p>
              </div>
           </div>
           <div className="col-span-2 md:col-span-1 flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                 <Smartphone className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-left">
                <p className="text-[10px] md:text-sm font-black text-gray-900 uppercase">24/7 Support</p>
                <p className="text-[9px] md:text-xs text-gray-500">Live Assistance</p>
              </div>
           </div>
        </div>

        <p className="mt-20 text-center text-gray-400 text-sm max-w-lg">
          Please confirm your payment via WhatsApp after successful transaction for faster processing. <br />
          <span className="font-bold text-gray-900">Green Soul IT</span> — Innovation that scales.
        </p>

      </div>
    </div>
  );
};

export default PaymentInvoice;
