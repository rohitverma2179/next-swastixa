"use client";

import React from "react";

export default function TrustSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-white font-bold text-[30px] sm:text-[40px] lg:text-[48px] leading-tight mb-8">
            Why Gurugram Developers Trust a Digital Marketing Agency for Real Estate
          </h2>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-[#131317] via-[#0F0F12] to-[#0A0A0C] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="space-y-6 text-[#CECECE] text-[16px] sm:text-[18px] leading-[1.9]">
            <p>
              Gurugram is a competitive property market in Delhi NCR, with many projects competing for the same buyers. A specialist team understands launch calendars, channel partners, buyer objections and site-visit conversion.
            </p>

            <p>
              Developers trust a digital marketing agency for real estate when it speaks their language and shares clear numbers. Working with a real estate marketing agency in Gurugram also means faster decisions, easier meetings and a team that knows local micro-markets, from Golf Course Road to Sohna Road.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
