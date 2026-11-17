"use client";

import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqSections, FAQItem } from "@/data/faqData";
import { Link } from "@/lib/router";

export default function FAQView() {
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openId, setOpenId] = useState<number | null>(1); // Only 1 FAQ open at a time

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredSections = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return faqSections
      .filter((section) =>
        selectedSection === "all" ? true : section.id === selectedSection
      )
      .map((section) => {
        if (!q) return section;

        const matchedFaqs = section.faqs.filter((faq) => {
          const inQuestion = faq.question.toLowerCase().includes(q);
          const inParasBefore =
            faq.paragraphsBefore?.some((p) => p.toLowerCase().includes(q)) ?? false;
          const inBullets =
            faq.bulletPoints?.some((b) => b.toLowerCase().includes(q)) ?? false;
          const inNumbers =
            faq.numberedPoints?.some((n) => n.toLowerCase().includes(q)) ?? false;
          const inParasAfter =
            faq.paragraphsAfter?.some((p) => p.toLowerCase().includes(q)) ?? false;

          return inQuestion || inParasBefore || inBullets || inNumbers || inParasAfter;
        });

        return {
          ...section,
          faqs: matchedFaqs,
        };
      })
      .filter((section) => section.faqs.length > 0);
  }, [selectedSection, searchQuery]);

  const totalResults = useMemo(() => {
    return filteredSections.reduce((sum, sec) => sum + sec.faqs.length, 0);
  }, [filteredSections]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none blur-3xl -z-10" />

      {/* Hero Header */}
      <section className="pt-32 pb-14 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-300 font-medium tracking-wider uppercase mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Frequently Asked Questions
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Everything You Need to Know About Swastixa Digital 
        </h1>

        <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Comprehensive answers to common questions about our company, integrated digital marketing services, working philosophy, and project execution.
        </p>

        {/* Search Bar */}
        <div className="mt-10 max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <svg
              className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, service, or question..."
              className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-white/60 focus:bg-white/[0.09] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 text-gray-400 hover:text-white text-sm px-1.5 py-0.5 rounded cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Section Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
          <button
            onClick={() => setSelectedSection("all")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedSection === "all"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            All Questions (30)
          </button>
          <button
            onClick={() => setSelectedSection("about-swastixa")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedSection === "about-swastixa"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            Company & Vision (8)
          </button>
          <button
            onClick={() => setSelectedSection("swastixa-services")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedSection === "swastixa-services"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            Our Services (8)
          </button>
          <button
            onClick={() => setSelectedSection("process-execution")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedSection === "process-execution"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            Process & Execution (14)
          </button>
        </div>
      </section>

      {/* Main FAQ Accordion List */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        {totalResults === 0 ? (
          <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/[0.02]">
            <p className="text-lg text-gray-300 font-medium">
              No matching questions found for &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Try searching with another keyword or select &ldquo;All Questions&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedSection("all");
              }}
              className="mt-6 px-5 py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-black text-sm font-semibold transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredSections.map((section) => (
              <div key={section.id} className="space-y-4">
                {/* Section Header */}
                <div className="border-b border-white/10 pb-4 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-white px-2.5 py-0.5 rounded bg-white/10 border border-white/20">
                      {section.badge}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* FAQ Cards */}
                <div className="space-y-3.5">
                  {section.faqs.map((faq: FAQItem) => {
                    const isOpen = openId === faq.id;

                    return (
                      <div
                        key={faq.id}
                        className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                          isOpen
                            ? "border-white/40 bg-gradient-to-r from-[#17171B] to-[#1C1C22] shadow-lg shadow-white/5"
                            : "border-white/10 bg-gradient-to-r from-[#121215] to-[#16161B] hover:border-white/20"
                        }`}
                      >
                        {/* Question Trigger */}
                        <button
                          onClick={() => toggleAccordion(faq.id)}
                          className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer transition-colors"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start gap-3.5">
                            <span className="text-xs font-semibold text-white/90 bg-white/10 border border-white/20 rounded-md px-2 py-0.5 mt-0.5 shrink-0">
                              Q{faq.id}
                            </span>
                            <span className="text-white text-base sm:text-lg font-medium leading-snug">
                              {faq.question}
                            </span>
                          </div>

                          <div className="relative flex items-center justify-center w-5 h-5 shrink-0 mt-1 text-gray-400">
                            {/* Horizontal Bar */}
                            <span className="absolute w-4 h-[2px] rounded-full bg-current transition-colors" />
                            {/* Vertical Bar */}
                            <span
                              className={`absolute h-4 w-[2px] rounded-full bg-current transition-transform duration-300 ease-in-out ${
                                isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
                              }`}
                            />
                          </div>
                        </button>

                        {/* Answer Accordion */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="border-t border-white/[0.07] px-6 py-5 text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
                                {/* Paragraphs Before */}
                                {faq.paragraphsBefore?.map((p, idx) => (
                                  <p key={idx} className="leading-relaxed">
                                    {p}
                                  </p>
                                ))}

                                {/* Bullet Points */}
                                {faq.bulletPoints && faq.bulletPoints.length > 0 && (
                                  <ul className="space-y-2 pl-1 my-2">
                                    {faq.bulletPoints.map((point, idx) => (
                                      <li key={idx} className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                        <span>{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}

                                {/* Numbered Points */}
                                {faq.numberedPoints && faq.numberedPoints.length > 0 && (
                                  <ol className="space-y-2.5 pl-1 my-2">
                                    {faq.numberedPoints.map((point, idx) => {
                                      const colonIdx = point.indexOf(":");
                                      if (colonIdx > -1) {
                                        const boldPart = point.substring(0, colonIdx);
                                        const restPart = point.substring(colonIdx);
                                        return (
                                          <li key={idx} className="flex items-start gap-2.5">
                                            <span className="text-xs font-semibold text-white bg-white/10 border border-white/20 rounded px-1.5 py-0.5 shrink-0 mt-0.5">
                                              {idx + 1}
                                            </span>
                                            <span>
                                              <strong className="text-white font-semibold">
                                                {boldPart}
                                              </strong>
                                              {restPart}
                                            </span>
                                          </li>
                                        );
                                      }
                                      return (
                                        <li key={idx} className="flex items-start gap-2.5">
                                          <span className="text-xs font-semibold text-white bg-white/10 border border-white/20 rounded px-1.5 py-0.5 shrink-0 mt-0.5">
                                            {idx + 1}
                                          </span>
                                          <span>{point}</span>
                                        </li>
                                      );
                                    })}
                                  </ol>
                                )}

                                {/* Paragraphs After */}
                                {faq.paragraphsAfter?.map((p, idx) => (
                                  <p key={idx} className="leading-relaxed">
                                    {p}
                                  </p>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-28">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12 text-center backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Still Have Questions?
          </h3>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Can&rsquo;t find what you&rsquo;re looking for? Reach out to our team directly. We are happy to discuss your specific requirements and explore how we can support your brand.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/#contact"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-sm sm:text-base transition-all shadow-lg shadow-white/10 cursor-pointer"
            >
              Get in Touch With Us
            </Link>
            <Link
              to="/services"
              className="px-6 py-3.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] text-white border border-white/10 font-medium text-sm sm:text-base transition-all cursor-pointer"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
