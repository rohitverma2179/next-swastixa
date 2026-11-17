"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

import ScrollToTop from "@/components/common/ScrollToTop";
import ScrollButton from "@/components/common/ScrollButton";

const Header = dynamic(() => import("@/components/common/Header"));
const Footer = dynamic(() => import("@/components/common/Footer"));

function BlogHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8" aria-label="Primary navigation">
        <a href="/" aria-label="Swastixa Digital home">
          <img src="/logo.webp" alt="Swastixa Digital" width="150" height="42" className="h-10 w-auto" />
        </a>
        <div className="flex items-center gap-5 text-sm text-gray-200 md:gap-8">
          <a href="/blog" className="hover:text-white">Blog</a>
          <a href="/services" className="hidden hover:text-white sm:block">Services</a>
          <a href="/#contact" className="rounded-lg border border-white/30 px-4 py-2 hover:bg-white hover:text-black">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function BlogFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Swastixa Digital. All rights reserved.</p>
      <nav className="mt-4 flex justify-center gap-6" aria-label="Footer navigation">
        <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
        <a href="/services" className="hover:text-white">Services</a>
        <a href="/#contact" className="hover:text-white">Contact</a>
      </nav>
    </footer>
  );
}

export default function Providers({ children }) {
  const pathname = usePathname();
  const isBlog = pathname === "/blog" || pathname.startsWith("/blog/");

  useEffect(() => {
    if (isBlog) return;
    let cleanup = () => {};
    let cancelled = false;

    Promise.all([import("lenis"), import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: Lenis }, { default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });
        lenis.on("scroll", ScrollTrigger.update);
        const updateLenis = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);
        cleanup = () => {
          lenis.destroy();
          gsap.ticker.remove(updateLenis);
        };
      },
    );

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [isBlog]);

  return (
    <>
      {!isBlog && <Toaster position="top-right" />}
      <ScrollToTop />
      {!isBlog && <ScrollButton />}
      {isBlog ? <BlogHeader /> : <Header />}
      {children}
      {isBlog ? <BlogFooter /> : <Footer />}
    </>
  );
}
