import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Swastixa",
  description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-md mx-auto">
        <span className="text-amber-500 text-sm tracking-widest uppercase font-semibold">Error 404</span>
        <h1 className="text-white text-6xl md:text-8xl font-bold mt-2">404</h1>
        <h2 className="text-white/90 text-xl md:text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">
          The page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block border border-white/30 text-white px-6 py-2.5 rounded-sm text-sm font-medium transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-block border border-white/10 text-white/80 px-6 py-2.5 rounded-sm text-sm font-medium transition-colors hover:border-white/30 hover:text-white"
          >
            Our Services
          </Link>
        </div>
      </div>
    </main>
  );
}
