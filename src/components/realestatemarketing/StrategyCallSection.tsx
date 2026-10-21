"use client";

import React from "react";

export default function StrategyCallSection() {
  return (
    <section id="strategy-call" className="py-20 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-white font-bold text-[34px] sm:text-[44px] lg:text-[54px] leading-tight mb-8">
            Let&apos;s Plan Your Next Launch
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-[#CECECE] text-[17px] sm:text-[19px] leading-[1.85]">
              Swastixa Digital is ready to help you plan, launch and grow your next project. Talk to a real estate marketing agency in Gurugram that understands your buyers, your market and your goals.
            </p>

            {/* <p className="text-[#CECECE] text-[17px] sm:text-[19px] leading-[1.85]">
              Book a Free Strategy Call today at{" "}
              <a
                href="https://swastixa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-blue-300 transition-colors"
              >
                https://swastixa.com/
              </a>{" "}
              and let a real estate marketing agency in Gurugram turn your next launch into a steady stream of qualified enquiries.
            </p> */}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://swastixa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center bg-white text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-[0_10px_35px_rgba(255,255,255,0.15)] text-base sm:text-lg"
          >
            Book a Free Strategy Call
          </a>
        </div>

      </div>
    </section>
  );
}
