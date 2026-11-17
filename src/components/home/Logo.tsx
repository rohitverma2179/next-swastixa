"use client";

import React, { useState, useEffect, useMemo } from "react";
const ICONS = [
  {
    url: "/assets/clients/dlf-logo.webp",
    alt: "DLF",
  },
  {
    url: "/assets/clients/emaar-logo.webp",
    alt: "Emaar",
  },
  {
    url: "/assets/clients/mthreem-logo.webp",
    alt: "M3M",
  },
  {
    url: "/assets/clients/mrg-logo.webp",
    alt: "MRG World",
  },
  {
    url: "/assets/clients/signature-global-logo.webp",
    alt: "Signature Global",
  },
  {
    url: "/assets/clients/ganga-logo.webp",
    alt: "Ganga Realty",
  },
  {
    url: "/assets/clients/aarize-logo.webp",
    alt: "Aarize Group",
  },
  {
    url: "/assets/clients/iris-logo.webp",
    alt: "Iris Broadway",
  },
  {
    url: "/assets/clients/tirasya-logo.webp",
    alt: "Tirasya",
  },
  {
    url: "/assets/clients/bestmate-logo.webp",
    alt: "Bestmate",
  },
  {
    url: "/assets/clients/smart-world-logo.webp",
    alt: "Smartworld Developers",
  },
  {
    url: "/assets/clients/sare-logo.webp",
    alt: "Sare Homes",
  },
  {
    url: "/assets/clients/panasonic-logo.webp",
    alt: "Panasonic",
  },
  {
    url: "/assets/clients/paramount-logo.webp",
    alt: "Paramount Group",
  },
  {
    url: "/assets/clients/rki-logo.webp",
    alt: "RKI",
  },
  {
    url: "/assets/clients/egrowthindia-logo.webp",
    alt: "eGrowth India",
  },
  {
    url: "/assets/clients/bexex-logo.webp",
    alt: "Bexex",
  },
  {
    url: "/assets/clients/kevvali-logo.webp",
    alt: "Kevvali",
  },
  {
    url: "/assets/clients/grace-aesthetic-logo.webp",
    alt: "Grace Aesthetic",
  },
  {
    url: "/assets/clients/ishaadrii-logo.webp",
    alt: "Ishaadrii",
  },
  {
    url: "/assets/clients/swadeshi-logo.webp",
    alt: "Swadeshi",
  },
  {
    url: "/assets/clients/washguys-logo.webp",
    alt: "Washguys",
  },
  {
    url: "/assets/clients/kloy-logo.webp",
    alt: "Kloy",
  },
  {
    url: "/assets/clients/one-group-logo.webp",
    alt: "One Group",
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
                alt={`${icon.alt || "Client"} - Swastixa Digital Partner Logo`}
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