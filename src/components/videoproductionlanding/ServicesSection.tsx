"use client";

import React, { useState } from "react";
import {
  Building2,
  Film,
  Package,
  Clapperboard,
  Lightbulb,
  Mic,
  Camera,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface VideoServiceItem {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const videoServices: VideoServiceItem[] = [
  {
    number: "01",
    icon: Building2,
    title: "Corporate Films",
    description:
      "A corporate film tells people who you are and why they should trust you. We script and shoot company profiles, leadership messages, culture films and presentation videos that explain your business clearly. Our video production company in Gurugram team keeps the tone professional, the visuals clean and the story easy for clients, partners and employees to follow from the first scene to the last.",
  },
  {
    number: "02",
    icon: Film,
    title: "Brand Films",
    description:
      "A brand film shares your story, values and personality in a way that people remember. We build the concept, write the script and shoot with care for light, sound and detail. The result is a film that feels true to your brand, speaks to many audiences and can be used across your website, events and online channels for a long time.",
  },
  {
    number: "03",
    icon: Package,
    title: "Product Videos",
    description:
      "Product videos show what you sell, how it works and why it matters. As a video production house in Gurugram, we shoot features, details and real use in a clean visual style, with clear shots and simple messaging. Good lighting and careful framing make even small details look sharp. These videos help buyers understand your product quickly, support your sales team and make your website, catalogue and presentations more convincing.",
  },
  {
    number: "04",
    icon: Clapperboard,
    title: "Ad Films",
    description:
      "Ad films must capture attention fast. We develop short, sharp concepts with strong visuals, tight editing and a clear call to action. Every ad is planned around one question: will the audience remember it? Whether you need a thirty-second spot or a brief teaser, our video production house Gurgaon team plans each frame to deliver your message quickly and keep viewers watching until the end.",
  },
  {
    number: "05",
    icon: Lightbulb,
    title: "Explainer Videos",
    description:
      "Explainer videos turn complex ideas into simple stories. Our video production company in Gurugram writes a clear script, plans visuals that support each point and adds voice-over where needed. They work well for new products, services, processes and company updates, helping viewers understand your offer in a minute or two. Your team can reuse them in sales meetings and training.",
  },
  {
    number: "06",
    icon: Mic,
    title: "Testimonial and Interview Videos",
    description:
      "Real voices build trust. We record customers, team members and leaders on camera with proper lighting, clean sound and relaxed direction, so people speak naturally. We then edit their words into a clear, honest story that helps new audiences feel confident about your brand and your people. Short questions prepared in advance keep every conversation focused and comfortable. These videos suit case studies, hiring and customer stories.",
  },
  {
    number: "07",
    icon: Camera,
    title: "Event Coverage",
    description:
      "Events deserve to be remembered and shared. Our crew covers conferences, product launches, brand meets and celebrations, capturing key moments, speakers and reactions. We then edit highlight reels and full-length recaps that you can share with attendees, partners and people who could not be there. As a video production house in Gurgaon, we plan camera positions with your event team in advance, so nothing important is missed.",
  },
  {
    number: "08",
    icon: Smartphone,
    title: "Short-Form Videos",
    description:
      "Short videos get watched. Our video production house in Gurugram team creates reels and vertical clips that deliver one clear message in a few seconds, often cut from larger shoots to save time and cost. Each short video keeps your brand look consistent, uses clear text and sound, and is prepared for the platforms your audience already uses. It can be refreshed quickly for new offers.",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = videoServices.length;
  const activeService = videoServices[activeIndex];
  const ActiveIcon = activeService.icon;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[500px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[450px] bg-indigo-600/10 blur-[180px] pointer-events-none rounded-full" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        data-aos="fade-down"
        className="max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
      >
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-2">
          <h2 className="text-white font-bold text-[28px] sm:text-[44px] lg:text-[54px] leading-tight tracking-tight">
            Our Video Production Services
          </h2>

          <p className="mt-4 sm:mt-5 text-[#A1A1A1] text-[16px] sm:text-[20px] max-w-3xl mx-auto leading-relaxed">
            As a video production house in Gurugram, we offer eight video formats for every stage of your brand journey.
          </p>
        </div>

        {/* Interactive Director's Studio Console Showcase */}
        <div className=" p-4 sm:p-6 lg:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.75)] backdrop-blur-md mb-12 sm:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Panel: 8 Format Selector Buttons */}
            <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-2.5">
              {videoServices.map((service, index) => {
                const IconComp = service.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={service.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group relative flex items-center gap-2.5 sm:gap-3.5 w-full text-left px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? "border-blue-400/50 bg-gradient-to-r from-blue-600/20 via-indigo-500/10 to-white/[0.03] text-white shadow-[0_0_25px_rgba(59,130,246,0.14)]"
                        : "border-white/5 bg-white/[0.02] text-[#9CA3AF] hover:bg-white/[0.05] hover:border-white/15 hover:text-white"
                    }`}
                  >
                    {/* Active left accent bar */}
                    <span
                      className={`absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-r-full transition-all duration-300 ${
                        isActive
                          ? "bg-blue-400 opacity-100"
                          : "bg-white/20 opacity-0 group-hover:opacity-60"
                      }`}
                    />

                    <span
                      className={`font-mono text-[11px] sm:text-xs font-semibold shrink-0 transition-colors ${
                        isActive ? "text-blue-400" : "text-white/35 group-hover:text-white/60"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div
                      className={`hidden sm:flex w-8 h-8 rounded-lg items-center justify-center shrink-0 border transition-colors ${
                        isActive
                          ? "border-blue-400/40 bg-blue-500/15 text-blue-300"
                          : "border-white/10 bg-white/[0.03] text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      <IconComp className="w-4 h-4 stroke-[1.8]" />
                    </div>

                    <span className="text-[12.5px] sm:text-[15px] font-semibold leading-snug line-clamp-2 lg:line-clamp-1">
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Panel: Cinema Viewfinder Stage */}
            <div className="lg:col-span-7 relative rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-br from-[#161620] via-[#0E0E14] to-[#08080C] p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[430px]">
              {/* Backlight radial glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/15 blur-[110px] pointer-events-none rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/15 blur-[110px] pointer-events-none rounded-full" />

              {/* Viewfinder corner brackets */}
              <span className="pointer-events-none absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/25 rounded-tl-sm" />
              <span className="pointer-events-none absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/25 rounded-tr-sm" />
              <span className="pointer-events-none absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/25 rounded-bl-sm" />
              <span className="pointer-events-none absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/25 rounded-br-sm" />

              {/* Watermark Number */}
              <div className="pointer-events-none absolute right-6 sm:right-10 top-14 sm:top-16 font-mono font-bold text-[88px] sm:text-[130px] leading-none text-white/[0.03] select-none">
                {activeService.number}
              </div>

              {/* Top Stage Bar: Active Icon + Counter + Prev/Next */}
              <div className="relative z-10 flex items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-300 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.18)]">
                    <ActiveIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-white/60">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-white font-semibold">{activeService.number}</span>
                    <span>/</span>
                    <span>0{total}</span>
                  </div>
                </div>

                {/* Prev / Next Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous Service"
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next Service"
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Center Detail Area: All 8 stacked in grid-area 1/1 for zero layout shift & full DOM presence */}
              <div className="relative z-10 grid my-auto py-6 sm:py-8">
                {videoServices.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={service.number}
                      aria-hidden={!isActive}
                      className={`col-start-1 row-start-1 flex flex-col justify-center transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-2 pointer-events-none select-none"
                      }`}
                    >
                      <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-tight">
                        {service.title}
                      </h3>

                      <div className="w-16 h-[2px] rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-transparent my-4 sm:my-5" />

                      <p className="text-[#D4D4D8] text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.82]">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Interactive Progress Segments */}
              <div className="relative z-10 pt-5 border-t border-white/10 flex items-center gap-1.5 sm:gap-2">
                {videoServices.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={service.number}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Select ${service.title}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "flex-[2] bg-gradient-to-r from-blue-400 to-indigo-400 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                          : "flex-1 bg-white/15 hover:bg-white/30"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mid-Section Call to Action */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-2">
          <a
            href="https://swastixa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center bg-white text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-[0_10px_35px_rgba(255,255,255,0.15)] text-sm sm:text-base md:text-lg max-w-3xl cursor-pointer leading-snug"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
