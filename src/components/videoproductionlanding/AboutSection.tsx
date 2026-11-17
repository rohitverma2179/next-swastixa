"use client";

import React from "react";
import { GlimmerWrap } from "@/components/ui/glimmer-wrap";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-black relative overflow-hidden border-t border-white/5">
      {/* Glimmer Wrap */}
      <GlimmerWrap
        className="absolute inset-0 pointer-events-none z-0"
        glintCount={120}
        speed={0.55}
        maxSize={2.4}
        flareSize={42}
        flashFrequency={0.01}
        enableParallax={true}
      />

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-amber-500/5 blur-[170px] pointer-events-none rounded-full" />

      {/* Subtle grid pattern overlay */}
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

            
          
          {/* Left Side: Location 3D Map Pin Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-blue-600/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-500 -z-10" />

              <div className="relative rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-[#181820]/90 to-[#0A0A0E]/95 p-3 sm:p-4 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950 border border-white/10">
                  <img
                    src="https://cdn.swastixa.com/video-production-house/about-swastixa-digital-video-production-house-gurugram.jpeg"
                    alt="About Swastixa Digital, a Video Production House In Gurugram"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>


          {/* Right Side: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-white font-bold text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.2] tracking-tight mb-6 sm:mb-8">
              About Swastixa Digital, a Video Production House In Gurugram
            </h2>

            <div className="space-y-5 text-[#CECECE] text-[16px] sm:text-[18px] leading-[1.85]">
              <p>
                Swastixa means eternal flow in Sanskrit, and that idea guides our work. We shape stories that flow naturally from the first idea to the final frame, with a clear message and a clear audience at every step.
              </p>

              <p>
                A strong video explains your offer, builds trust and gives viewers a reason to act. We plan every film around your audience, your message and the screen where it will be watched.
              </p>

              <p>
                Our team works with startups, established companies and growing brands across Delhi NCR as a video production house Gurgaon businesses can rely on for steady quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
