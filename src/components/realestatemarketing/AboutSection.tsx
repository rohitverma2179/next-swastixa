"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-blue-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Heading */}
        <h2 className="text-white text-center font-bold text-[30px] sm:text-[40px] lg:text-[48px] leading-tight max-w-4xl mx-auto mb-12">
          About Swastixa Digital, a Real Estate Marketing Agency In Gurugram
        </h2>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-[#141417] via-[#0F0F12] to-[#0A0A0C] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="space-y-6 text-[#CECECE] text-[16px] sm:text-[18px] leading-[1.9]">
            <p>
              Swastixa means eternal flow in Sanskrit, and that idea shapes how we work. We study your project, your buyers and your market, then build marketing that moves smoothly from first impression to site visit.
            </p>

            <p>
              Buyers compare projects, watch walkthroughs, read reviews and ask AI assistants for advice before they call a developer. We design every campaign around that journey.
            </p>

            <p>
              Our team supports developers, builders and brokers across Delhi NCR as a real estate marketing agency in Gurgaon focused on predictable enquiries, not scattered campaigns.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
