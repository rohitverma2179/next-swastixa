"use client";

import React, { useState, useEffect, useMemo } from "react";
const ICONS = [
  {
    url: "/assets/clients/dlf-logo.webp",
    alt: "DLF Limited - Leading Real Estate Developer Client of Swastixa Digital",
  },
  {
    url: "/assets/clients/emaar-logo.webp",
    alt: "Emaar India - Luxury Real Estate Developer Partner of Swastixa Digital",
  },
  {
    url: "/assets/clients/mthreem-logo.webp",
    alt: "M3M India - Commercial & Residential Real Estate Partner Logo",
  },
  {
    url: "/assets/clients/mrg-logo.webp",
    alt: "MRG World - Affordable Housing Developers Partner Logo",
  },
  {
    url: "/assets/clients/signature-global-logo.webp",
    alt: "Signature Global - Premium Real Estate Developer Partner Logo",
  },
  {
    url: "/assets/clients/ganga-logo.webp",
    alt: "Ganga Realty - Luxury Residential Developments Partner Logo",
  },
  {
    url: "/assets/clients/aarize-logo.webp",
    alt: "Aarize Group - Commercial Infrastructure & Real Estate Partner Logo",
  },
  {
    url: "/assets/clients/iris-logo.webp",
    alt: "Iris Broadway - Retail & Commercial Hub Partner Logo",
  },
  {
    url: "/assets/clients/tirasya-logo.webp",
    alt: "Tirasya Living - Real Estate & Hospitality Brand Partner Logo",
  },
  {
    url: "/assets/clients/bestmate-logo.webp",
    alt: "Bestmate - Pet Nutrition & Healthcare Brand Partner Logo",
  },
  {
    url: "/assets/clients/smart-world-logo.webp",
    alt: "Smartworld Developers - Modern Urban Living Partner Logo",
  },
  {
    url: "/assets/clients/sare-logo.webp",
    alt: "SARE Homes - Integrated Township Developer Partner Logo",
  },
  {
    url: "/assets/clients/panasonic-logo.webp",
    alt: "Panasonic India - Global Electronics & Appliances Brand Partner Logo",
  },
  {
    url: "/assets/clients/paramount-logo.webp",
    alt: "Paramount Group - Real Estate & Infrastructure Developer Partner Logo",
  },
  {
    url: "/assets/clients/rki-logo.webp",
    alt: "RKI Infrastructure & Engineering Developer Partner Logo",
  },
  {
    url: "/assets/clients/egrowthindia-logo.webp",
    alt: "eGrowth India - National B2B Business Ecosystem Partner Logo",
  },
  {
    url: "/assets/clients/bexex-logo.webp",
    alt: "Bexex - Logistics, Cargo & Supply Chain Solutions Partner Logo",
  },
  {
    url: "/assets/clients/kevvali-logo.webp",
    alt: "Kevvali - Lifestyle & Contemporary Fashion Apparel Partner Logo",
  },
  {
    url: "/assets/clients/grace-aesthetic-logo.webp",
    alt: "Grace Aesthetic Clinic - Cosmetic Dermatology & Wellness Partner Logo",
  },
  {
    url: "/assets/clients/ishaadrii-logo.webp",
    alt: "Ishaadrii - Handcrafted Designer Ethnic Wear Partner Logo",
  },
  {
    url: "/assets/clients/swadeshi-logo.webp",
    alt: "Swadeshi Blessings - Artisan Clay Handicrafts Brand Partner Logo",
  },
  {
    url: "/assets/clients/washguys-logo.webp",
    alt: "Washguys - Professional Automotive Cleaning & Detailing Partner Logo",
  },
  {
    url: "/assets/clients/kloy-logo.webp",
    alt: "Kloy - Premium Women's Western Wear Brand Partner Logo",
  },
  {
    url: "/assets/clients/one-group-logo.webp",
    alt: "One Group - Commercial & Residential Real Estate Partner Logo",
  },
];


// constants (adjust if needed)
const ICONS_PER_PAGE_DEFAULT = 8;
const MOBILE_BREAKPOINT = 430;
const ICONS_PER_PAGE_MOBILE = 6;

// assume ICONS array is imported/defined above

export default function LogoCarousel() {
  const [page, setPage] = useState(0);
  const [iconsPerPage, setIconsPerPage] = useState(ICONS_PER_PAGE_DEFAULT);

  // 1) handle resize -> set iconsPerPage     
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        setIconsPerPage(ICONS_PER_PAGE_MOBILE);
      } else {
        setIconsPerPage(ICONS_PER_PAGE_DEFAULT);
      }
    }

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2) compute total pages from ICONS length and iconsPerPage
  const totalPages = useMemo(() => {
    const totalIcons = ICONS.length;
    return Math.max(1, Math.ceil(totalIcons / iconsPerPage));
  }, [iconsPerPage]);

  // 3) clamp page when iconsPerPage or totalPages changes
  useEffect(() => {
    setPage((prev) => {
      // ensure page is within [0, totalPages-1]
      if (prev >= totalPages) return 0;
      return prev;
    });
  }, [totalPages]);

  // 4) single auto-slide effect (works for mobile & desktop)
  useEffect(() => {
    // if only one page, no need to start interval
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4000); // 4s — change if you want faster/slower

    return () => clearInterval(interval);
  }, [totalPages]);

  // 5) slice current icons (memoized)
  const currentIcons = useMemo(() => {
    const start = page * iconsPerPage;
    return ICONS.slice(start, start + iconsPerPage);
  }, [page, iconsPerPage]);

  // 6) grid columns string — keep mobile 3 columns when iconsPerPage === 6
  const gridClasses =
    iconsPerPage === ICONS_PER_PAGE_MOBILE
      ? "grid grid-cols-3 gap-6 sm:gap-10 md:gap-14 lg:gap-20"
      : "grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-14 lg:gap-20";

  return (
    <div className="min-h-1/2 sm:min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[1250px] px-4">
        <div className={gridClasses}>
          {currentIcons.map((icon, idx) => (
            <div
              key={`${icon.url}_${idx}_${page}`}
              className="flex items-end justify-center group transition-transform duration-300 hover:scale-110"
            >
              <img
                src={icon.url}
                alt={icon.alt}
                width={320}
                height={165}
                loading="lazy"
                decoding="async"
                className="
                  h-auto w-28 
                  sm:w-32 
                  md:w-40 
                  lg:w-48 
                  max-h-28 
                  sm:max-h-32 
                  md:max-h-40 
                  lg:max-h-48 
                  object-contain  
                  grayscale 
                  group-hover:grayscale-0 
                  transition
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}