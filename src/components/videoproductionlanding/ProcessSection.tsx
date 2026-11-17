"use client";

import React, { useState } from "react";
import { FileText, Clapperboard, Video, Scissors, Send } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: FileText,
    title: "Brief:",
    description:
      "We learn about your brand, audience, goals and where the video will be shown.",
  },
  {
    step: "02",
    icon: Clapperboard,
    title: "Script and storyboard:",
    description:
      "We write the story and plan every scene before the camera rolls.",
  },
  {
    step: "03",
    icon: Video,
    title: "Shoot:",
    description:
      "Our crew films with the right lighting, sound and direction for each scene.",
  },
  {
    step: "04",
    icon: Scissors,
    title: "Edit:",
    description:
      "We cut, grade and add music and graphics, and share drafts for your feedback.",
  },
  {
    step: "05",
    icon: Send,
    title: "Deliver:",
    description:
      "We export final files in the formats you need for each platform.",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden border-t border-white/5">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[450px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-indigo-600/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-white font-bold text-[28px] sm:text-[40px] lg:text-[48px] leading-tight tracking-tight">
            Our Video Production Process
          </h2>

          <p className="mt-4 sm:mt-5 text-[#A1A1A1] text-[16px] sm:text-[19px] max-w-2xl mx-auto leading-relaxed">
            Our process is simple, transparent and built around your goals.
          </p>
        </div>

        {/* Center-Spine Alternating Zigzag Timeline (Left-Spine on Mobile/Tablet) */}
        <div className="relative">
          {/* Vertical Glowing Spine Line */}
          <div className="absolute left-6 sm:left-7 lg:left-1/2 top-4 bottom-4 w-[2px] lg:-translate-x-1/2 bg-gradient-to-b from-blue-500/20 via-blue-400/50 to-indigo-500/20" />

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {processSteps.map((item, index) => {
              const IconComp = item.icon;
              const isLeft = index % 2 === 0;
              const isActive = activeStep === index;

              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className="relative flex items-center lg:justify-between group cursor-pointer"
                >
                  {/* Spine Node Circle */}
                  <div
                    className={`
                      absolute left-6 sm:left-7 lg:left-1/2 -translate-x-1/2 z-20
                      w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center
                      transition-all duration-300
                      ${
                        isActive
                          ? "border-blue-400 bg-[#0F172A] text-blue-300 scale-110 shadow-[0_0_28px_rgba(59,130,246,0.45)]"
                          : "border-white/15 bg-[#101015] text-white/60 group-hover:border-blue-400/50 group-hover:text-white"
                      }
                    `}
                  >
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                    {isActive && (
                      <span className="absolute -inset-1 rounded-2xl border border-blue-400/40 animate-pulse pointer-events-none" />
                    )}
                  </div>

                  {/* Horizontal Connector Beam (Desktop) */}
                  <div
                    className={`
                      hidden lg:block absolute top-1/2 -translate-y-1/2 h-[1.5px] w-10 z-10 transition-all duration-300
                      ${isLeft ? "right-1/2 mr-7" : "left-1/2 ml-7"}
                      ${
                        isActive
                          ? "bg-gradient-to-r from-blue-400 to-indigo-400 opacity-100"
                          : "bg-white/15 opacity-60 group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* Left Spacer / Card Slot */}
                  <div
                    className={`w-full pl-16 sm:pl-20 lg:pl-0 lg:w-[calc(50%-4.25rem)] ${
                      isLeft ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                  >
                    <div
                      className={`
                        relative rounded-2xl sm:rounded-3xl border p-6 sm:p-8 overflow-hidden transition-all duration-300
                        ${
                          isActive
                            ? "border-blue-400/45 bg-gradient-to-br from-[#161824] via-[#0F1017] to-[#0A0A0E] -translate-y-0.5 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(59,130,246,0.1)]"
                            : "border-white/10 bg-gradient-to-b from-[#131317] via-[#0E0E12] to-[#09090C] hover:border-white/25 shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
                        }
                      `}
                    >
                      {/* Top accent line */}
                      <div
                        className={`absolute top-0 left-6 right-6 h-[1.5px] transition-opacity duration-300 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent ${
                          isActive ? "opacity-100" : "opacity-25 group-hover:opacity-75"
                        }`}
                      />

                      {/* Subtle Watermark Step Number */}
                      <span className="pointer-events-none absolute right-5 top-3 font-mono font-bold text-[44px] sm:text-[54px] leading-none text-white/[0.04] select-none">
                        {item.step}
                      </span>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-md font-mono text-xs font-semibold border transition-colors ${
                              isActive
                                ? "border-blue-400/40 bg-blue-500/15 text-blue-300"
                                : "border-white/10 bg-white/[0.04] text-white/50"
                            }`}
                          >
                            {item.step}
                          </span>

                          <h3 className="text-white text-[20px] sm:text-[23px] font-semibold tracking-tight">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-[#A1A1AA] group-hover:text-[#D4D4D8] text-[15px] sm:text-[16px] leading-[1.8] transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Outro statement anchored cleanly beneath the spine */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto text-center">
          <div className="inline-block rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-6 sm:px-8 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
            <p className="text-[#CECECE] text-[15.5px] sm:text-[18px] leading-relaxed font-normal">
              This is how a video production house in Gurgaon should work: clear steps, shared goals and regular check-ins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
