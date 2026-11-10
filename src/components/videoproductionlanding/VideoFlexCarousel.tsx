"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  ArrowUpRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface VideoServiceItem {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const VIDEO_SERVICES: VideoServiceItem[] = [
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

interface VideoFlexCarouselProps {
  items?: VideoServiceItem[];
}

export default function VideoFlexCarousel({
  items = VIDEO_SERVICES,
}: VideoFlexCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const lastDeltaXRef = useRef(0);

  const total = items.length;

  const renderCards = useCallback(
    (index: number, animate = true) => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const isTablet =
        typeof window !== "undefined" &&
        window.innerWidth >= 768 &&
        window.innerWidth < 1024;

      const spacing = isMobile ? 310 : isTablet ? 380 : 440;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        let diff = (i - index) % total;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        const absDiff = Math.abs(diff);

        if (absDiff > 2) {
          gsap.set(card, {
            display: "none",
            autoAlpha: 0,
          });
          return;
        }

        let x = diff * spacing;
        const y = 0;
        let z = 0;
        let rotateY = 0;
        let scale = 1;
        let opacity = 1;
        let zIndex = 10;

        if (diff === 0) {
          x = 0;
          z = isMobile ? 15 : 40;
          rotateY = 0;
          scale = 1;
          opacity = 1;
          zIndex = 40;
        } else if (absDiff === 1) {
          x = diff * spacing;
          z = isMobile ? -30 : -60;
          rotateY = isMobile ? diff * -6 : diff * -12;
          scale = isMobile ? 0.91 : 0.93;
          opacity = isMobile ? 0.45 : 0.75;
          zIndex = 30;
        } else if (absDiff === 2) {
          x = diff * (spacing * 0.94);
          z = -140;
          rotateY = diff * -20;
          scale = 0.84;
          opacity = isMobile ? 0 : 0.35;
          zIndex = 20;
        }

        const targetStyles = {
          display: "flex",
          x,
          y,
          z,
          rotateY,
          scale,
          autoAlpha: opacity,
          force3D: true,
          backfaceVisibility: "hidden",
        };

        if (animate) {
          gsap.to(card, {
            ...targetStyles,
            duration: 0.42,
            ease: "power2.out",
            overwrite: "auto",
            onStart: () => {
              card.style.zIndex = String(zIndex);
              card.style.pointerEvents = "auto";
            },
          });
        } else {
          gsap.set(card, targetStyles);
          card.style.zIndex = String(zIndex);
          card.style.pointerEvents = "auto";
        }
      });
    },
    [total]
  );

  const goTo = useCallback(
    (nextIdx: number) => {
      const normalized = (nextIdx + total) % total;
      activeIndexRef.current = normalized;
      setActiveIndex(normalized);
      renderCards(normalized, true);
    },
    [total, renderCards]
  );

  const handlePrev = useCallback(() => {
    goTo(activeIndexRef.current - 1);
  }, [goTo]);

  const handleNext = useCallback(() => {
    goTo(activeIndexRef.current + 1);
  }, [goTo]);

  useEffect(() => {
    renderCards(0, false);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        {
          y: 40,
          autoAlpha: 0,
          scale: 0.9,
        },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            once: true,
          },
          onComplete: () => {
            renderCards(activeIndexRef.current, false);
          },
        }
      );
    }, container);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        renderCards(activeIndexRef.current, false);
      }, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      ctx.revert();
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [renderCards]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    lastDeltaXRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;

    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
      isDraggingRef.current = false;
      return;
    }

    lastDeltaXRef.current = dx;
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const delta = lastDeltaXRef.current;
    if (delta < -40) {
      handleNext();
    } else if (delta > 40) {
      handlePrev();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="w-full relative flex flex-col items-center select-none outline-none focus:outline-none"
    >
      {/* 3D Stage & Navigation Arrows */}
      <div className="w-full relative flex items-center justify-center">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Service"
          className="absolute left-0 sm:left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-[#121218]/90 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
        </button>

        <div
          ref={stageRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="w-full h-[540px] sm:h-[550px] lg:h-[560px] relative flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible touch-pan-y"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = index === activeIndex;

            return (
              <div
                key={service.number}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onClick={() => {
                  if (!isActive) goTo(index);
                }}
                className={`
                  absolute w-[84vw] max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]
                  min-h-[490px] sm:min-h-[500px] lg:min-h-[510px] max-h-[530px]
                  rounded-[28px] p-5 sm:p-8
                  flex flex-col justify-between
                  transition-colors duration-300
                  ${
                    isActive
                      ? "border-2 border-white/40 bg-gradient-to-b from-[#1A1A22] via-[#121217] to-[#0A0A0D] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.06)]"
                      : "border border-white/10 bg-gradient-to-b from-[#141418] via-[#0E0E12] to-[#08080A] hover:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
                  }
                `}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                {isActive && (
                  <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                )}

                {/* Card Header */}
                <div className="relative z-10 flex items-center justify-between shrink-0">
                  <div
                    className={`
                      w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center
                      transition-colors duration-300
                      ${
                        isActive
                          ? "bg-white/10 border border-white/30 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                          : "bg-white/[0.04] border border-white/10 text-white/60"
                      }
                    `}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-white/40 text-base sm:text-lg font-semibold tracking-wider">
                      {service.number}
                    </span>
                    <div
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300
                        ${
                          isActive
                            ? "border-white/30 bg-white/10 text-white"
                            : "border-white/10 bg-white/[0.03] text-white/40"
                        }
                      `}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Card Body - Full content visible without truncation */}
                <div className="relative z-10 my-auto py-4 overflow-y-auto">
                  <h3 className="text-white font-bold text-xl sm:text-[25px] leading-tight tracking-tight mb-2.5">
                    {service.title}
                  </h3>

                  <div className="w-10 h-[1.5px] bg-white/25 rounded-full mb-3.5" />

                  <p className="text-[#A1A1AA] text-[13.5px] sm:text-[15px] leading-[1.68]">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-white/50 shrink-0">
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-white/80 animate-pulse" : "bg-white/20"
                      }`}
                    />
                    {isActive ? "Currently Viewing" : "Click to View"}
                  </span>

                  <span className="font-mono text-[11px] text-white/40">
                    {service.number} / 08
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Service"
          className="absolute right-0 sm:right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-[#121218]/90 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
        </button>
      </div>

      {/* Bottom Pagination Bar */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-2xl px-4 z-20">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold font-mono text-white">
            {items[activeIndex]?.number || "01"}
          </span>
          <div className="h-4 w-[1px] bg-white/20" />
          <span className="text-sm font-semibold text-[#CECECE]">
            {items[activeIndex]?.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {items.map((item, idx) => (
            <button
              key={item.number}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Go to ${item.title}`}
              className={`
                h-2 rounded-full transition-all duration-300 cursor-pointer
                ${
                  idx === activeIndex
                    ? "w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

