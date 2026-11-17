"use client";

import React, { useState } from "react";
import { Users, Sparkles, Layers, Compass, MonitorPlay } from "lucide-react";

const whyChooseItems = [
  {
    num: "01",
    icon: Users,
    title: "One in-house team:",
    description:
      "Scripting, shooting and editing sit together, so your message stays consistent from idea to final cut.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "Story first:",
    description:
      "Every video starts with a clear message, a defined audience and one simple call to action.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Every industry:",
    description:
      "We make videos for different brands, products and audiences, so the style always fits your market.",
  },
  {
    num: "04",
    icon: Compass,
    title: "Clear process:",
    description:
      "You know what happens at each stage, from the first brief to the final delivery.",
  },
  {
    num: "05",
    icon: MonitorPlay,
    title: "Ready to use:",
    description:
      "As a video production company in Gurugram, we deliver films prepared for your website, presentations, events and online channels.",
  },
];

export default function WhyChooseUsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [spotPos, setSpotPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredIdx(index);
    setSpotPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden border-t border-white/5">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] bg-blue-600/10 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[280px] sm:w-[440px] h-[280px] sm:h-[440px] bg-indigo-600/10 blur-[170px] pointer-events-none rounded-full" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-white font-bold text-[28px] sm:text-[40px] lg:text-[48px] leading-tight tracking-tight">
            Why Choose Swastixa Digital as Your Video Production Company In Gurugram
          </h2>

          <p className="mt-4 sm:mt-5 text-[#A1A1A1] text-[16px] sm:text-[19px] max-w-3xl mx-auto leading-relaxed">
            A good production partner combines storytelling, technical skill and clear communication. Here is what you get with us:
          </p>
        </div>

        {/* 2 + 3 Asymmetric Architectural Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
          {whyChooseItems.map((item, index) => {
            const IconComp = item.icon;
            const isTopRow = index < 2;
            const isLast = index === 4;
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={item.num}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`
                  group relative rounded-3xl border border-white/10
                  bg-gradient-to-b from-[#13141B] via-[#0D0E13] to-[#08090C]
                  p-6 sm:p-8 overflow-hidden transition-all duration-300
                  hover:border-blue-400/40 hover:-translate-y-1
                  shadow-[0_18px_45px_rgba(0,0,0,0.6)]
                  ${isTopRow ? "lg:col-span-3" : "lg:col-span-2"}
                  ${isLast ? "md:col-span-2 lg:col-span-2" : ""}
                `}
              >
                {/* Cursor-following radial spotlight */}
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(380px circle at ${spotPos.x}px ${spotPos.y}px, rgba(59, 130, 246, 0.14), transparent 65%)`,
                  }}
                />

                {/* Top gradient hairline */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:via-blue-400/60 transition-colors duration-300" />

                {/* Subtle Bento Grid Decoration on Top Row Cards */}
                {isTopRow && (
                  <div
                    className="pointer-events-none absolute right-0 top-0 w-44 h-44 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                      maskImage:
                        "radial-gradient(circle at top right, black 20%, transparent 75%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at top right, black 20%, transparent 75%)",
                    }}
                  />
                )}

                {/* Watermark Number */}
                <span className="pointer-events-none absolute right-6 bottom-4 font-mono font-bold text-[52px] sm:text-[64px] leading-none text-white/[0.03] group-hover:text-blue-400/[0.08] transition-colors duration-300 select-none">
                  {item.num}
                </span>

                {/* Card Content */}
                <div
                  className={`relative z-10 flex ${
                    isTopRow
                      ? "flex-col sm:flex-row sm:items-start gap-5 sm:gap-6"
                      : "flex-col gap-5"
                  }`}
                >
                  {/* Icon Box */}
                  <div className="flex items-center justify-between sm:justify-start shrink-0">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl border border-white/15 bg-white/[0.04] text-blue-300 flex items-center justify-center transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-500/15 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(59,130,246,0.25)]">
                      <IconComp className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="font-mono text-xs font-semibold text-blue-400/80">
                        {item.num}
                      </span>
                      <span className="h-[1px] w-4 bg-white/20" />
                    </div>

                    <h3 className="text-white text-[20px] sm:text-[22px] font-semibold tracking-tight mb-3 group-hover:text-blue-100 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[#9CA3AF] group-hover:text-[#D4D4D8] text-[15px] sm:text-[16px] leading-[1.8] transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom animated accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-400/60 to-indigo-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
