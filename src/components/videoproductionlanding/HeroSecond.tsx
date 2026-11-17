"use client";

import React from "react";

const highlightedBrands = [
  "DLF Homes",
  "Emaar India",
  "M3M",
  "Signature Global",
];

const workflowStages = [
  { num: "01", title: "Concept" },
  { num: "02", title: "Scripting" },
  { num: "03", title: "Shooting" },
  { num: "04", title: "Editing" },
];

export default function HeroSecond() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-blue-600/10 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-12 right-12 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-indigo-600/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Subtle Background Pattern */}
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

          {/* Right Column: Glass Frame Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[520px] group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-sky-400/25 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="relative rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-[#181820]/90 to-[#0A0A0E]/95 p-3 sm:p-4 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950 border border-white/10">
                  <img
                    src="https://cdn.swastixa.com/video-production-house/swastixa-digital-video-production-company-gurugram.png"
                    alt="Swastixa Digital - Video Production House In Gurugram"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Exact Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-[#D4D4D8] text-[17px] sm:text-[19px] lg:text-[21px] leading-[1.8] font-normal">
              Swastixa Digital is a video production house in Gurugram that creates brand films, corporate videos, product videos and ad films for businesses across industries. As a video production company in Gurugram, we handle concept, scripting, shooting and editing with one in-house team. We have worked with brands such as DLF Homes, Emaar India, M3M and Signature Global.
            </p>

            {/* Workflow Pillars mirroring the narrative */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 mt-8 mb-8">
              {workflowStages.map((item) => (
                <div
                  key={item.num}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 sm:p-4 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="text-xs font-mono font-semibold text-blue-400 tracking-wider">
                    {item.num}
                  </div>
                  <div className="text-sm sm:text-[15px] font-semibold text-white mt-1">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Brand Badges */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2.5">
                {highlightedBrands.map((brand) => (
                  <span
                    key={brand}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-white text-xs sm:text-sm font-semibold tracking-wide hover:border-white/20 transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

