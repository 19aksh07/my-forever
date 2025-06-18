import React from "react";
import { Heart } from "lucide-react";

const LandingSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 romantic-title glow-text font-['Playfair_Display']">
            For Ayushi,
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-rose-200 font-['Dancing_Script'] mb-8">
            My Always
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-rose-100/80 font-light leading-relaxed font-['Cormorant_Garamond'] italic">
            This is for the one who made darkness beautiful...
          </p>
          <p className="text-xl md:text-2xl text-rose-100/80 font-light leading-relaxed font-['Cormorant_Garamond'] italic">
            ...and the light even more radiant.
          </p>
        </div>

        {/* Decorative heart */}
        <div className="flex justify-center mb-8">
          <Heart
            size={48}
            className="text-pink-400 animate-pulse"
            fill="currentColor"
          />
        </div>

        {/* Call to action */}
        <div className="animate-bounce">
          <p className="text-rose-200/60 text-sm md:text-base font-['Playfair_Display']">
            Scroll to discover our story in verse
          </p>
          <div className="mt-4 text-pink-400">↓</div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60" />
      <div
        className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping opacity-50"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default LandingSection;
