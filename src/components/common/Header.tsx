"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Link, useLocation, useNavigate } from "@/lib/router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const HeaderDrawer = dynamic(() => import("./HeaderDrawer"), { ssr: false });

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/share/1BavrtTDFV/", name: "Facebook" },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/swastixadigital?igsh=ZHQwMmthamV3a3Vu",
    name: "Instagram",
  },
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/swastixa/", name: "LinkedIn" },
  {
    icon: <FaYoutube />,
    url: "https://youtube.com/@swastixadigital?si=Pfy9tRbjKuLInRJE",
    name: "YouTube",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const isHome = location.pathname === "/";

  const workItems = [
    { label: "Production ", path: "/work/video-production" },
    { label: "Social Media ", path: "/work/social-media-management" },
  ];

  const menuItems = ["WORK", "ABOUT", "SERVICES", "CAREERS", "BLOG", "CONTACT"];

  const handleMenuClick = (item: string) => {
    setIsOpen(false);

    if (item === "CONTACT") {
      navigate("/#contact");
    } else {
      navigate(`/${item.toLowerCase()}`);
    }
  };

  return (
    <>
      <nav
        className={` w-full flex justify-between items-center px-6 py-0 z-50 transition-all duration-300 ${
          isHome
            ? "bg-white backdrop-blur-md "
            : "bg-black backdrop-blur-md "
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center space-x-2"
        >
          <img
            loading="lazy"
            decoding="async"
            src={
              isHome
                ? "/swastixa.webp"
                : "/Swastixa_white.webp"
            }
            alt="Swastixa Digital Logo - Digital Marketing & Web Development Agency"
            width={180}
            height={20}
            className="w-auto h-6 sm:h-7 object-contain"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`p-3 rounded-lg transition z-50 ${
            isHome ? "hover:bg-gray-200" : "hover:bg-white/10"
          }`}
        >
          <div className="space-y-1.5 relative w-6 h-6">
            <span
              className={`block w-6 h-0.5 absolute left-0 transition-all duration-300 ${
                isHome ? "bg-gray-700" : "bg-[#F0EADE]"
              } ${isOpen ? "rotate-45 top-3" : "top-1"}`}
            />

            <span
              className={`block w-6 h-0.5 absolute left-0 transition-all duration-300 ${
                isHome ? "bg-gray-700" : "bg-[#F0EADE]"
              } ${isOpen ? "opacity-0" : "top-3"}`}
            />

            <span
              className={`block w-6 h-0.5 absolute left-0 transition-all duration-300 ${
                isHome ? "bg-gray-700" : "bg-[#F0EADE]"
              } ${isOpen ? "-rotate-45 top-3" : "top-5"}`}
            />
          </div>
        </button>
      </nav>

      {/* ===== Sidebar (Menu Drawer loaded dynamically) ===== */}
      <HeaderDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isWorkOpen={isWorkOpen}
        setIsWorkOpen={setIsWorkOpen}
        workItems={workItems}
        menuItems={menuItems}
        handleMenuClick={handleMenuClick}
        socialLinks={socialLinks}
      />
    </>
  );
}
