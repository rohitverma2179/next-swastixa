"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/common/Header";

const Toaster = dynamic(() => import("react-hot-toast").then((m) => m.Toaster), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"), { ssr: false });
const ScrollButton = dynamic(() => import("@/components/common/ScrollButton"), { ssr: false });

export default function Providers({ children }) {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    let lenisInstance = null;
    let tickerHandler = null;

    Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: Lenis }, { default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const updateLenis = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);

      lenisInstance = lenis;
      tickerHandler = updateLenis;
    });

    return () => {
      if (lenisInstance) lenisInstance.destroy();
      if (tickerHandler) {
        import("gsap").then(({ default: gsap }) => {
          gsap.ticker.remove(tickerHandler);
        });
      }
    };
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <ScrollToTop />
      <ScrollButton />
      <Header />
      {children}
    </>
  );
}
