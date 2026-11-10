"use client";

import React from "react";
import OptimizedVideo from "@/components/common/OptimizedVideo";

export default function StrategyCallSection() {
  return (
    <section
      id="strategy-call"
      className="card-section relative flex flex-col justify-center min-h-[75svh] sm:min-h-[85svh] lg:min-h-screen w-full items-center overflow-hidden bg-black py-20 sm:py-24 border-t border-white/5"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <OptimizedVideo
          src="/conversion-centered.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/80" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[300px] sm:h-[500px] bg-blue-600/15 blur-[190px] pointer-events-none rounded-full z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-indigo-500/15 blur-[150px] pointer-events-none rounded-full z-10" />

      {/* Center Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 text-center my-auto">
        <h2 className="text-white font-bold text-[32px] sm:text-[48px] lg:text-[60px] leading-tight mb-6 sm:mb-8">
          Let’s Plan Your Next Video
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-[#CECECE] text-[16px] sm:text-[19px] leading-[1.85]">
            Swastixa Digital is ready to turn your idea into a film that people watch and remember. Talk to a video production house in Gurugram that understands your audience, your message and your goals.
          </p>
        </div>

        {/* CTA Block */}
        <div className="max-w-3xl mx-auto">
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-2  px-5 sm:px-8 py-4 sm:py-5 text-[#E4E4E7] text-sm sm:text-base md:text-lg leading-relaxed shadow-[0_15px_45px_rgba(0,0,0,0.65)]">
            <a
                href="https://swastixa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center bg-white text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-[0_10px_35px_rgba(255,255,255,0.15)] text-sm sm:text-base md:text-lg max-w-3xl cursor-pointer leading-snug"
              >
                Book a Free Strategy Call
              </a>
          </p>
        </div>
      </div>
    </section>
  );
}

