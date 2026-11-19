"use client";

import { useState, useId } from "react";

export default function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-zinc-700 py-6">
      <h3 className="text-xl md:text-2xl text-white">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`faq-answer-${id}`}
          className="w-full flex justify-between items-center text-left cursor-pointer"
        >
          <span>{question}</span>
          <span className="text-white text-2xl ml-4" aria-hidden="true">
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>

      {open && (
        <div
          id={`faq-answer-${id}`}
          role="region"
          className="mt-4 text-gray-400 leading-relaxed"
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
