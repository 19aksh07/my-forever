
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-4 text-center relative">
      {/* Decorative line */}
      <div className="w-40 h-px bg-gradient-to-r from-transparent via-rose-300/40 to-transparent mx-auto mb-12" />
      
      {/* Main footer message */}
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-2xl md:text-3xl text-rose-200 font-light leading-relaxed font-['Cormorant_Garamond'] italic mb-6">
          "Built for my darling, who changed maybe into forever."
        </p>
        
        <div className="flex items-center justify-center gap-3 text-pink-400">
          <Heart size={24} fill="currentColor" className="animate-pulse" />
          <span className="text-rose-300/80 font-['Playfair_Display'] text-lg">
            With endless love
          </span>
          <Heart size={24} fill="currentColor" className="animate-pulse" />
        </div>
      </div>

      {/* Decorative hearts */}
      <div className="absolute bottom-12 left-12 opacity-15">
        <Heart size={28} fill="currentColor" className="text-purple-400 animate-pulse" />
      </div>
      <div className="absolute bottom-16 right-16 opacity-15">
        <Heart size={24} fill="currentColor" className="text-pink-400 animate-pulse" />
      </div>
      <div className="absolute bottom-8 left-1/4 opacity-10">
        <Heart size={20} fill="currentColor" className="text-red-400 animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;
