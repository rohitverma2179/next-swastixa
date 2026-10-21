"use client";

import { Link } from "@/lib/router";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-white text-6xl md:text-8xl font-bold">404</h1>
      <p className="text-white/70 mt-4 text-lg">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block border border-white/30 text-white px-8 py-3 rounded-sm transition-colors hover:border-white hover:bg-white hover:text-black"
      >
        Back to Home
      </Link>
    </main>
  );
}
