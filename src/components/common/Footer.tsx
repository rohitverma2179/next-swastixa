"use client";

import React from "react";
import { Link, useLocation } from "@/lib/router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
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
      { label: "FAQ", path: "/frequently-asked-questions" },
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
  // {
  //   title: "Gurugram",
  //   links: [
  //     {
  //       label: "Real Estate Marketing Agency In Gurugram",
  //       path: "/real-estate-marketing-agency-in-gurugram",
  //     },
  //     {
  //       label: "Video Production House In Gurugram",
  //       path: "/video-production-house-in-gurugram",
  //     },
  //   ],
  // },
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="relative bg-black text-white pt-12 sm:pt-16 pb-0 overflow-hidden border-t border-white/5">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[360px] sm:w-[680px] h-[220px] bg-blue-600/8 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        {/* Elevated Floating Dark Card (Reference Design Structure in Dark Mode) */}
        <div className="rounded-[24px] sm:rounded-[32px] border border-white/10 bg-gradient-to-b from-[#111218] via-[#0C0D12] to-[#090A0E] px-6 sm:px-10 lg:px-14 pt-10 sm:pt-14 pb-8 sm:pb-10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] relative overflow-hidden">
          {/* Top hairline shimmer */}
          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-white text-[14px] sm:text-[15px] font-semibold tracking-tight mb-4">
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
                              : "text-[#9CA3AF] hover:text-white"
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

            {/* Social Media Icons */}
            <div className="col-span-2 md:col-span-1 flex flex-col justify-end items-start md:items-end">
              <div className="mt-4 md:mt-0">
                <div className="flex justify-start md:justify-end gap-3">
                  <a
                    href="https://www.facebook.com/share/1BavrtTDFV/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <FaFacebookF size={18} />
                  </a>

                  <a
                    href="https://www.instagram.com/swastixadigital?igsh=ZHQwMmthamV3a3Vu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/swastixa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                  <a
                    href="https://youtube.com/@swastixadigital?si=Pfy9tRbjKuLInRJE"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <FaYoutube size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card Bottom Divider & Copyright + Legal Links */}
          <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[#8B8B8B] text-center sm:text-left order-2 sm:order-1">
              © SwastixaDigital {new Date().getFullYear()}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5 sm:gap-7 text-[13px] text-[#9CA3AF] order-1 sm:order-2">
              <Link
                to="/privacy-policy"
                className="underline underline-offset-4 decoration-white/25 hover:text-white hover:decoration-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/privacy-policy"
                className="underline underline-offset-4 decoration-white/25 hover:text-white hover:decoration-white transition-colors duration-200"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Faded Watermark Logo Peeking Below the Floating Card */}
      <div
        aria-hidden="true"
        className="relative z-10 mt-3 sm:mt-5 lg:mt-7 px-4 sm:px-8 lg:px-12 flex justify-center overflow-hidden select-none pointer-events-none"
      >
        <img
          loading="lazy"
          decoding="async"
          src="https://cdn.swastixa.com/Swastixa_white.png"
          alt=""
          className="w-full max-w-[1300px] h-auto object-contain "
         
        />
      </div>
    </footer>
  );
}
