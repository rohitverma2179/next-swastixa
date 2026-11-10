"use client";

import React from "react";

const processSteps = [
  {
    title: "Brief:",
    description:
      "We learn about your brand, audience, goals and where the video will be shown.",
  },
  {
    title: "Script and storyboard:",
    description:
      "We write the story and plan every scene before the camera rolls.",
  },
  {
    title: "Shoot:",
    description:
      "Our crew films with the right lighting, sound and direction for each scene.",
  },
  {
    title: "Edit:",
    description:
      "We cut, grade and add music and graphics, and share drafts for your feedback.",
  },
  {
    title: "Deliver:",
    description:
      "We export final files in the formats you need for each platform.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-indigo-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-white font-bold text-[28px] sm:text-[40px] lg:text-[48px] leading-tight">
            Our Video Production Process
          </h2>

          <p className="mt-4 sm:mt-5 text-[#A1A1A1] text-[16px] sm:text-[19px] max-w-2xl mx-auto leading-relaxed">
            Our process is simple, transparent and built around your goals.
          </p>
        </div>

        {/* 5 Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="
                group relative rounded-2xl border border-white/10
                bg-gradient-to-b from-[#131316] via-[#0E0E11] to-[#0A0A0C]
                p-6 sm:p-7 flex flex-col justify-between
                hover:border-white/25 hover:-translate-y-1 transition-all duration-300
                shadow-[0_15px_40px_rgba(0,0,0,0.5)]
              "
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

              <div>
                <h3 className="text-white text-[20px] sm:text-[22px] font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-[#8B8B8B] text-[14px] sm:text-[15px] leading-[1.75]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Outro statement */}
        <div className="max-w-4xl mx-auto text-center px-2 sm:p-6">
          <p className="text-[#CECECE] text-[16px] sm:text-[18px] leading-relaxed font-normal">
            This is how a video production house in Gurgaon should work: clear
            steps, shared goals and regular check-ins.
          </p>
        </div>
      </div>
    </section>
  );
}
