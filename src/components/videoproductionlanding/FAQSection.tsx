"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "Q1. What does a video production house in Gurugram do?",
    answer:
      "A video production house in Gurugram plans, shoots and edits videos for brands, from the first idea to the final file. This includes scripting, storyboarding, filming, editing, sound and delivery for corporate films, ads, product videos and more. Swastixa Digital handles each stage with one in-house team, so your message stays consistent.",
  },
  {
    question: "Q2. How much does a video production company in Gurugram charge?",
    answer:
      "The cost depends on the video type, length, number of shoot days, locations, crew and editing needs. A short interview video usually costs less than a full brand film or ad with a larger crew. Swastixa Digital, a video production company in Gurugram, shares a clear scope and quote after understanding your brief, which you can discuss on a free strategy call.",
  },
  {
    question: "Q3. How long does it take to make a corporate video?",
    answer:
      "A corporate video usually takes a few weeks from brief to final delivery, depending on length, scripting, shoot days and feedback rounds. Simple interview videos can move faster, while brand films with several locations need more time. Sharing your goals, references and approvals early helps keep the schedule smooth. Swastixa Digital, a video production house in Gurgaon, shares a clear timeline after the brief.",
  },
  {
    question: "Q4. What is the difference between a brand film and an explainer video?",
    answer:
      "A brand film tells your story and values to build emotion and recall, while an explainer video shows viewers how a product or service works. Brand films feel cinematic and long-lasting, and explainers are direct and focused on one clear idea. Many brands use both, and Swastixa Digital, a video production company in Gurugram, can make both.",
  },
  {
    question: "Q5. How is a video production house in Gurgaon different from a freelancer?",
    answer:
      "A video production house offers a full team under one roof, while a freelancer usually handles one or two roles. At a video production house in Gurgaon, scripting, camera, lighting, sound and editing work together, which brings consistent quality and dependable timelines. Freelancers can suit very small tasks, but larger brand projects benefit from a coordinated crew.",
  },
  {
    question: "Q6. What should I prepare before a video shoot?",
    answer:
      "Prepare a clear goal, your target audience, key messages, references you like and a list of people and locations involved. Share brand guidelines, logos and product samples in advance, and get decision-makers to approve the script before the shoot day. Swastixa Digital, a video production house in Gurgaon, guides you through this brief step by step.",
  },
  {
    question: "Q7. Can a video be shot at my office or location?",
    answer:
      "Yes, a video can be planned at your office, factory, store, event venue or any other suitable location. Swastixa Digital, a video production house in Gurugram, discusses the space first, then plans lighting, sound and camera positions to suit it. A well-planned location shoot feels authentic and often saves the cost of arranging a separate set.",
  },
  {
    question: "Q8. How do I choose the right video production company in Gurugram?",
    answer:
      "Choose a video production company in Gurugram by reviewing its past work, its in-house crew, its process and how clearly it explains cost and timelines. Ask who will script, shoot and edit your video, and how feedback is handled. Swastixa Digital welcomes these questions on a free strategy call.",
  },
  {
    question: "Q9. Which types of videos can a business use?",
    answer:
      "Businesses commonly use corporate films, brand films, product videos, ad films, explainer videos, testimonial videos, event highlights and short reels. The right choice depends on your goal, audience and where the video will play. Swastixa Digital, a video production company in Gurugram, helps you pick the format that fits, so every video has a clear purpose.",
  },
  {
    question: "Q10. Who does Swastixa Digital make videos for, and how can I get started?",
    answer: (
      <>
        Swastixa Digital makes videos for brands of every size and industry across Gurugram and Delhi NCR, and has worked with names including DLF Homes, Emaar India and M3M. To get started, book a free strategy call at{" "}
        <a
          href="https://swastixa.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-medium underline decoration-blue-400/70 underline-offset-4 hover:text-blue-400 transition-colors"
        >
          Swastixa Digital
        </a>
        . As a video production house in Gurugram, we will review your idea and suggest the right video.
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-16 sm:py-20 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[300px] sm:h-[400px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-white text-[28px] sm:text-[40px] lg:text-[48px] font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-r
                  from-[#17171B]
                  to-[#1B1B20]
                  transition-all
                  duration-300
                  hover:border-white/20
                "
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-5
                    sm:px-8
                    py-5
                    sm:py-6
                    text-left
                    cursor-pointer
                    gap-4
                  "
                >
                  <span className="text-white text-base sm:text-lg font-medium leading-snug">
                    {faq.question}
                  </span>

                  <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
                    <span className="absolute w-full h-[2px] rounded-full bg-white" />
                    <span
                      className={`
                        absolute
                        h-full
                        w-[2px]
                        rounded-full
                        bg-white
                        transition-all
                        duration-300
                        ease-in-out
                        ${isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"}
                      `}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-white/5 px-5 sm:px-8 py-5 sm:py-6 bg-white/[0.01]">
                        <p className="text-[#A1A1A1] text-[15px] sm:text-[16px] leading-[1.85] max-w-full">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

