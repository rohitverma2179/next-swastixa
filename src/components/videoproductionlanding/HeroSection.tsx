"use client";

import React from "react";
import CursorGrid from "@/components/realestatemarketing/CursorGrid";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen pt-28 sm:pt-32 pb-16 overflow-hidden flex items-center justify-center bg-black">
      {/* Background Cursor Grid */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <CursorGrid
          cellSize={70}
          color="#ffffff"
          highlight="area"
          gridStyle="lines"
          radius={100}
          holdTime={150}
          fadeDuration={800}
          fillOpacity={0.06}
          gridOpacity={0.08}
          spotlight={0.6}
          clickPulse
          className="w-full h-full"
        />
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] lg:w-[650px] h-[250px] sm:h-[350px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-[1300px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 relative z-10">
        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-white font-bold leading-[1.12] text-[30px] sm:text-[44px] md:text-[56px] lg:text-[68px] tracking-tight">
            Video Production House In Gurugram for Brands of Every Size and
            Industry
          </h1>
          <p className="mt-5 sm:mt-6 text-[#CECECE] text-base sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Concept, scripting, shooting and editing, delivered by one in-house
            team.
          </p>
        </div>

        {/* CTA Link */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-2.5 rounded-2xl  backdrop-blur-md px-5 sm:px-7 py-3.5 sm:py-4 shadow-[0_10px_35px_rgba(0,0,0,0.45)] max-w-full">
            {/* <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-2"> */}
              <a
                href="https://swastixa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center bg-white text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-[0_10px_35px_rgba(255,255,255,0.15)] text-sm sm:text-base md:text-lg max-w-3xl cursor-pointer leading-snug"
              >
                Book a Free Strategy Call
              </a>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
