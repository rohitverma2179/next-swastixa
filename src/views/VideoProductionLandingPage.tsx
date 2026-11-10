"use client";

import React from "react";
import HeroSection from "@/components/videoproductionlanding/HeroSection";
import HeroSecond from "@/components/videoproductionlanding/HeroSecond";
import AboutSection from "@/components/videoproductionlanding/AboutSection";
import WhyChooseUsSection from "@/components/videoproductionlanding/WhyChooseUsSection";
import ServicesSection from "@/components/videoproductionlanding/ServicesSection";
import ProcessSection from "@/components/videoproductionlanding/ProcessSection";
import ClientsSection from "@/components/videoproductionlanding/ClientsSection";
import TrustSection from "@/components/videoproductionlanding/TrustSection";
import StrategyCallSection from "@/components/videoproductionlanding/StrategyCallSection";
import FAQSection from "@/components/videoproductionlanding/FAQSection";

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a video production house in Gurugram do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A video production house in Gurugram plans, shoots and edits videos for brands, from the first idea to the final file. This includes scripting, storyboarding, filming, editing, sound and delivery for corporate films, ads, product videos and more. Swastixa Digital handles each stage with one in-house team, so your message stays consistent.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a video production company in Gurugram charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on the video type, length, number of shoot days, locations, crew and editing needs. A short interview video usually costs less than a full brand film or ad with a larger crew. Swastixa Digital, a video production company in Gurugram, shares a clear scope and quote after understanding your brief, which you can discuss on a free strategy call.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to make a corporate video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A corporate video usually takes a few weeks from brief to final delivery, depending on length, scripting, shoot days and feedback rounds. Simple interview videos can move faster, while brand films with several locations need more time. Sharing your goals, references and approvals early helps keep the schedule smooth. Swastixa Digital, a video production house in Gurgaon, shares a clear timeline after the brief.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a brand film and an explainer video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A brand film tells your story and values to build emotion and recall, while an explainer video shows viewers how a product or service works. Brand films feel cinematic and long-lasting, and explainers are direct and focused on one clear idea. Many brands use both, and Swastixa Digital, a video production company in Gurugram, can make both.",
      },
    },
    {
      "@type": "Question",
      name: "How is a video production house in Gurgaon different from a freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A video production house offers a full team under one roof, while a freelancer usually handles one or two roles. At a video production house in Gurgaon, scripting, camera, lighting, sound and editing work together, which brings consistent quality and dependable timelines. Freelancers can suit very small tasks, but larger brand projects benefit from a coordinated crew.",
      },
    },
    {
      "@type": "Question",
      name: "What should I prepare before a video shoot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prepare a clear goal, your target audience, key messages, references you like and a list of people and locations involved. Share brand guidelines, logos and product samples in advance, and get decision-makers to approve the script before the shoot day. Swastixa Digital, a video production house in Gurgaon, guides you through this brief step by step.",
      },
    },
    {
      "@type": "Question",
      name: "Can a video be shot at my office or location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a video can be planned at your office, factory, store, event venue or any other suitable location. Swastixa Digital, a video production house in Gurugram, discusses the space first, then plans lighting, sound and camera positions to suit it. A well-planned location shoot feels authentic and often saves the cost of arranging a separate set.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right video production company in Gurugram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose a video production company in Gurugram by reviewing its past work, its in-house crew, its process and how clearly it explains cost and timelines. Ask who will script, shoot and edit your video, and how feedback is handled. Swastixa Digital welcomes these questions on a free strategy call.",
      },
    },
    {
      "@type": "Question",
      name: "Which types of videos can a business use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Businesses commonly use corporate films, brand films, product videos, ad films, explainer videos, testimonial videos, event highlights and short reels. The right choice depends on your goal, audience and where the video will play. Swastixa Digital, a video production company in Gurugram, helps you pick the format that fits, so every video has a clear purpose.",
      },
    },
    {
      "@type": "Question",
      name: "Who does Swastixa Digital make videos for, and how can I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swastixa Digital makes videos for brands of every size and industry across Gurugram and Delhi NCR, and has worked with names including DLF Homes, Emaar India and M3M. To get started, book a free strategy call at https://swastixa.com/. As a video production house in Gurugram, we will review your idea and suggest the right video.",
      },
    },
  ],
};

export default function VideoProductionLandingPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      {/* Sections */}
      <HeroSection />
      <HeroSecond />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProcessSection />
      <ClientsSection />
      <TrustSection />
      <StrategyCallSection />
      <FAQSection />
    </div>
  );
}

