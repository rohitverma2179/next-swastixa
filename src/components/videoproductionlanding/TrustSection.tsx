"use client";

import React from "react";
import PixelCard from "@/components/services/PixelCard";

const trustParagraphs = [
  "Gurugram is a major business hub in Delhi NCR, with corporate offices, startups and growing consumer brands side by side. Attention is hard to win, and good video helps a brand stand out.",
  "Working with a video production house in Gurugram also brings faster meetings, easier shoot planning and a team that knows local offices and locations, from Cyber Hub to Golf Course Road.",
];

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-black relative overflow-hidden border-t border-white/5">
      {/* Swastixa Blue / Indigo Ambient Glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-600/10 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-indigo-600/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Subtle dot grid overlay matching theme */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Side: Heading + Interactive PixelCard Narrative Panels */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-white font-bold text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.2] tracking-tight">
              Why Brands Trust a Video Production House In Gurugram
            </h2>

            {/* <div className="w-20 h-[2px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-transparent mt-5 mb-7 sm:mb-8" /> */}

            <div className="space-y-4 sm:space-y-5">
              {trustParagraphs.map((paragraph, index) => (
                <PixelCard
                  key={index}
                  variant="blue"
                  className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#13141B] via-[#0D0E13] to-[#090A0D] p-5 sm:p-7 hover:border-blue-400/40 transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.45)]"
                >
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-blue-400/50 transition-colors duration-300" />
                  <p className="text-[#CECECE] group-hover:text-white text-[15.5px] sm:text-[17.5px] leading-[1.82] transition-colors duration-300">
                    {paragraph}
                  </p>
                </PixelCard>
              ))}
            </div>
          </div>

          {/* Right Side: Glass Frame Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-sky-400/25 rounded-3xl blur-2xl opacity-65 group-hover:opacity-95 transition-opacity duration-500 -z-10" />

              <div className="relative rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-[#181820]/90 to-[#0A0A0E]/95 p-3 sm:p-4 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950 border border-white/10">
                  <img
                    src="https://cdn.swastixa.com/video-production-house/why-brands-trust-video-production-house-gurugram.png"
                    alt="Why Brands Trust a Video Production House In Gurugram"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
