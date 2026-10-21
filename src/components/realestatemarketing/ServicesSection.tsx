"use client";

import React, { useState } from "react";
import {
  Megaphone,
  FileText,
  Video,
  Search,
  Bot,
  Globe,
  Share2,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Our digital marketing services give your project a complete online presence, from first impression to enquiry. We plan campaigns around each launch phase, keep messaging consistent across channels and report on what drives site visits. We also align messaging with your sales team. Planning, creative and media sit with one team, which keeps decisions fast and every channel working toward more qualified buyers.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Content Marketing",
    description:
      "Content marketing builds trust before a buyer ever calls your sales team. As a real estate marketing agency in Gurgaon, we create project pages, brochures, blogs, location guides and investor explainers that answer real buyer questions in clear language. Strong content also feeds search and AI engines, so your project is easy to find when families research neighbourhoods, builders, prices and possession timelines.",
  },
  {
    number: "03",
    icon: Video,
    title: "Video Production",
    description:
      "Buyers want to see a home before they visit it, and video is the fastest way to show it. Our in-house team produces project films, walkthroughs, aerial footage, amenity reels and launch videos made for YouTube, Instagram and paid ads. Every video shows scale, location and lifestyle honestly, helping serious buyers shortlist your project and book a site visit with confidence.",
  },
  {
    number: "04",
    icon: Search,
    title: "SEO Services",
    description:
      "SEO, or search engine optimization, helps your project appear when buyers search on Google. Good SEO is a core strength of any digital marketing agency for real estate. We optimise project pages, local listings, site structure and technical health, then build content around searches for location, budget and configuration. Steady SEO also reduces your dependence on paid leads over time and keeps working after a campaign ends.",
  },
  {
    number: "05",
    icon: Bot,
    title: "AEO and GEO Services",
    description:
      "AEO, or Answer Engine Optimization, structures your content so search engines can lift it as a direct answer. GEO, or Generative Engine Optimization, helps AI tools such as ChatGPT and Gemini understand and mention your brand. Together they place your project where buyers now ask questions, supported by clear facts, structured data and consistent brand information that keeps AI answers about your project accurate.",
  },
  {
    number: "06",
    icon: Globe,
    title: "Website Development",
    description:
      "Your website is where every campaign lands, so it must load fast and convert visitors into enquiries. Our real estate lead generation agency in Gurgaon builds mobile-friendly project websites and landing pages with clear floor plans, location maps, enquiry forms and WhatsApp-ready calls to action, so buyers can reach your sales team quickly. Each page is built for search visibility, speed and easy tracking of every enquiry.",
  },
  {
    number: "07",
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Social media keeps your project visible between launches and site visits. Swastixa Digital, a real estate marketing agency in Gurugram, manages content calendars, reels, community engagement and paid social across Instagram, Facebook, LinkedIn and YouTube. Our approach keeps your brand voice consistent across every post and gives buyers and channel partners a steady reason to follow, trust and engage with your updates.",
  },
  {
    number: "08",
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Performance marketing focuses on measurable outcomes. We run Google, Meta and YouTube campaigns with tight audience targeting, tested creatives and full conversion tracking, so every rupee of your ad budget is accountable. As a real estate lead generation agency in Gurgaon, we judge success by qualified enquiries and site visits, and we move budgets toward whatever the data shows is working as campaigns run.",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[450px] bg-indigo-600/10 blur-[180px] pointer-events-none rounded-full" />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-white font-bold text-[32px] sm:text-[44px] lg:text-[54px] leading-tight tracking-tight">
            Our Real Estate Marketing Services
          </h2>

          <p className="mt-5 text-[#A1A1A1] text-[17px] sm:text-[20px] max-w-3xl mx-auto leading-relaxed">
            As a digital marketing agency for real estate, we offer eight connected services that cover your full buyer journey.
          </p>
        </div>

        {/* 8 Connected Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="
                  group relative rounded-[24px] border border-white/10
                  bg-gradient-to-b from-[#15151A] via-[#101014] to-[#0A0A0E]
                  p-8 sm:p-10 lg:p-11 flex flex-col justify-between
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:border-blue-500/40
                  hover:shadow-[0_20px_50px_rgba(0,102,255,0.12)]
                  overflow-hidden
                "
              >
                {/* Top Glowing Accent Line */}
                <div 
                  className={`
                    absolute top-0 left-0 w-full h-[1.5px] transition-all duration-500
                    bg-gradient-to-r from-transparent via-blue-400 to-transparent
                    ${isHovered ? "opacity-100" : "opacity-25"}
                  `} 
                />

                {/* Subtle Radial Glow on Hover */}
                <div 
                  className={`
                    absolute -top-24 -right-24 w-56 h-56 rounded-full bg-blue-500/15 blur-[80px]
                    pointer-events-none transition-opacity duration-500
                    ${isHovered ? "opacity-100" : "opacity-0"}
                  `}
                />

                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div 
                      className="
                        w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10
                        flex items-center justify-center text-white
                        transition-all duration-300
                        group-hover:bg-blue-500/20 group-hover:border-blue-400/50 group-hover:text-blue-400
                        group-hover:scale-105 shadow-inner
                      "
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-white/20 group-hover:text-blue-400/60 font-mono text-base font-semibold transition-colors duration-300">
                        {service.number}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/30 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-white text-[24px] sm:text-[28px] font-semibold mb-4 tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-[#8B8B8B] text-[15px] sm:text-[16px] leading-[1.85] group-hover:text-[#A8A8A8] transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Bottom subtle accent line */}
                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div className="h-[2px] w-8 rounded-full bg-blue-500/30 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-blue-400 transition-colors duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-Section Call to Action Card */}
        
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <a
              href="https://swastixa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-center bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-neutral-200 shadow-[0_10px_35px_rgba(255,255,255,0.15)] text-base sm:text-lg max-w-3xl"
            >
              Book a Free Strategy Call 
            </a>
          </div>

      </div>
    </section>
  );
}