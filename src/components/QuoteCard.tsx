
import React from 'react';

interface Quote {
  quote: string;
  author: string;
}

interface QuoteCardProps {
  quote: Quote;
  index: number;
}

const QuoteCard = ({ quote, index }: QuoteCardProps) => {
  return (
    <div 
      className="quote-card rounded-2xl p-8 md:p-12 my-8 mx-4 md:mx-8 scroll-fade-in relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 pointer-events-none" />
      
      <div className="relative z-10">
        <blockquote className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-rose-100 mb-6 font-['Cormorant_Garamond'] italic">
          "{quote.quote}"
        </blockquote>
        
        <cite className="text-amber-300/80 font-medium text-sm md:text-base font-['Playfair_Display'] not-italic">
          — {quote.author}
        </cite>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 text-purple-400/20 text-6xl font-['Dancing_Script']">"</div>
      <div className="absolute bottom-4 right-4 text-pink-400/20 text-6xl font-['Dancing_Script'] rotate-180">"</div>
    </div>
  );
};

export default QuoteCard;
