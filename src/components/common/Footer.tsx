"use client";

import React from "react";
import { Link, useLocation } from "@/lib/router";
// import swastixawhite from "../../assets/Swastixa_white.png";

const footerGroups = [
  {
    title: "Pages",
    links: [
      { label: "Home", path: "/" },
      { label: "Work", path: "/work/video-production" },
      { label: "About", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Careers", path: "/careers" },
      { label: "Blog", path: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Development", path: "/services/website-development" },
      { label: "SEO Agency", path: "/services/seo-agency" },
      { label: "Content Marketing", path: "/services/content-marketing" },
      { label: "Social Media Marketing", path: "/services/social-media-marketing" },
      { label: "Performance Marketing", path: "/services/performance-marketing" },
      { label: "Video Production House", path: "/services/video-production-house" },
      { label: "Influencer Marketing", path: "/services/influencer-marketing" },
      { label: "Packaging Design", path: "/services/packaging-design" },
    ],
  },
  {
    title: "Work",
    links: [
      // { label: "Video Production", path: "/work/video-production" },
      { label: "Commercial Films", path: "/work/video-production/films" },
      { label: "Construction Films", path: "/work/video-production/construction" },
      { label: "Social Media Management", path: "/work/social-media-management" },
      { label: "Reels", path: "/work/reels" },
      { label: "Branding", path: "/work/branding" },
      { label: "Print", path: "/work/print" },
    ],
  },
  {
    title: "Gurugram",
    links: [
      {
        label: "Real Estate Marketing Agency In Gurugram",
        path: "/real-estate-marketing-agency-in-gurugram",
      },
      {
        label: "Video Production House In Gurugram",
        path: "/video-production-house-in-gurugram",
      },
    ],
  },
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Subtle Ambient Glow matching Swastixa dark theme */}
      <div className="absolute -top-24 left-1/4 w-[300px] sm:w-[450px] h-[220px] bg-blue-600/8 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[280px] sm:w-[400px] h-[200px] bg-indigo-600/8 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-16 pb-8 relative z-10">
        {/* Top Row: Logo + All Page URLs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Logo Column */}
          <div className="lg:col-span-3 flex items-start">
            <Link
              to="/"
              className="inline-flex items-center focus:outline-none"
              aria-label="Swastixa Digital Home"
            >
              <img
                loading="lazy"
                decoding="async"
                src="https://cdn.swastixa.com/Swastixa-footot-logo.svg"
                alt="Swastixa Digital"
                className="w-44 sm:w-48 h-auto object-contain"
              />
            </Link>
          </div>

          {/* All Pages URL Columns */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-white text-sm font-semibold uppercase tracking-[0.16em] mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className={`text-[13.5px] sm:text-[14px] leading-relaxed transition-colors duration-200 inline-block ${
                            isActive
                              ? "text-white font-medium"
                              : "text-[#A1A1AA] hover:text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-[13px] text-[#A1A1AA]">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors duration-200"
            >
              Terms &amp; Conditions
            </Link>
          </div>

          <p className="text-[13px] text-[#8B8B8B] text-center sm:text-right">
            © SwastixaDigital {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

