"use client";

import React from "react";

const whyChooseItems = [
  {
    title: "One in-house team:",
    description:
      "Scripting, shooting and editing sit together, so your message stays consistent from idea to final cut.",
  },
  {
    title: "Story first:",
    description:
      "Every video starts with a clear message, a defined audience and one simple call to action.",
  },
  {
    title: "Every industry:",
    description:
      "We make videos for different brands, products and audiences, so the style always fits your market.",
  },
  {
    title: "Clear process:",
    description:
      "You know what happens at each stage, from the first brief to the final delivery.",
  },
  {
    title: "Ready to use:",
    description:
      "As a video production company in Gurugram, we deliver films prepared for your website, presentations, events and online channels.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-white font-bold text-[28px] sm:text-[40px] lg:text-[48px] leading-tight">
            Why Choose Swastixa Digital as Your Video Production Company In Gurugram
          </h2>

          <p className="mt-4 sm:mt-5 text-[#A1A1A1] text-[16px] sm:text-[19px] max-w-3xl mx-auto leading-relaxed">
            A good production partner combines storytelling, technical skill and clear communication. Here is what you get with us:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseItems.map((item, index) => {
            const isLastCard = index === 4;

            return (
              <div
                key={index}
                className={`
                  group relative rounded-[20px] border border-white/10
                  bg-gradient-to-b from-[#121215] via-[#0E0E11] to-[#0A0A0C]
                  p-6 sm:p-8 overflow-hidden transition-all duration-300
                  hover:border-white/25 hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                  ${isLastCard ? "md:col-span-2 lg:col-span-1" : ""}
                `}
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <h3 className="text-white text-[20px] sm:text-[22px] font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-[#8B8B8B] text-[15px] sm:text-[16px] leading-[1.8]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

