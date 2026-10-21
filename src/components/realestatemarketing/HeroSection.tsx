"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] pt-24 pb-16 overflow-hidden flex items-center bg-black">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1300px] mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="text-white font-bold leading-[1.1] text-[34px] sm:text-[46px] md:text-[58px] lg:text-[70px] tracking-tight">
            Real Estate Marketing Agency In Gurugram for Developers, Builders and Brokers
          </h1>
          <p className="mt-6 text-[#CECECE] text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Strategy, content, video, search and performance marketing for property launches, delivered by one team.
          </p>
        </div>

        {/* CTA Link from content */}
        <div className="text-center mb-12">
          <a
            href="https://swastixa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center bg-white text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-[0_10px_35px_rgba(255,255,255,0.15)] text-base sm:text-lg max-w-2xl"
          >
            Book a Free Strategy Call 
          </a>
        </div>

        {/* Intro Paragraph Card */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-[#141418] via-[#0E0E12] to-[#0A0A0D] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <p className="text-[#CECECE] text-[16px] sm:text-[18px] leading-[1.9] text-center sm:text-left">
            Swastixa Digital is a Gurugram-based digital marketing agency for real estate that helps developers, builders and brokers generate qualified buyer leads and build trusted project brands. As a real estate marketing agency in Gurugram, we bring strategy, content marketing, video production, website development, search optimization and performance marketing together in one team. We have worked with brands such as DLF Homes, Emaar India, M3M and Signature Global.
          </p>
        </div>

      </div>
    </section>
  );
}
