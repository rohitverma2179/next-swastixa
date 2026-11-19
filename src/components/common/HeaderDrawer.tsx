"use client";

import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Link } from "@/lib/router";

interface HeaderDrawerProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  isWorkOpen: boolean;
  setIsWorkOpen: (val: boolean) => void;
  workItems: Array<{ label: string; path: string }>;
  menuItems: string[];
  handleMenuClick: (item: string) => void;
  socialLinks: Array<{ icon: React.ReactNode; url: string; name: string }>;
}

const sidebarVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

const AnimatedText = ({ text }: { text: string }) => (
  <motion.span
    className="inline-block overflow-hidden"
    whileHover="hover"
    initial="initial"
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={{
          initial: { y: 0 },
          hover: {
            y: [-5, 5, 0],
            color: "#3a6cf4",
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              delay: i * 0.02,
            },
          },
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

export default function HeaderDrawer({
  isOpen,
  setIsOpen,
  isWorkOpen,
  setIsWorkOpen,
  workItems,
  menuItems,
  handleMenuClick,
  socialLinks,
}: HeaderDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 border-none z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            className="fixed top-0 right-0 w-[70%] sm:w-[60%] md:w-[26%] h-full bg-white/55 backdrop-blur text-[#243E84] z-[70] flex flex-col justify-between p-8 pr-7 pt-6"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation sidebar"
              className="self-end p-1 rounded-lg hover:bg-gray-200 transition bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <motion.ul
              className="space-y-6 text-center mt-10"
              initial="hidden"
              animate="show"
            >
              <motion.li
                variants={itemVariants}
                className="text-3xl sm:text-[42px] font-extrabold cursor-pointer"
              >
                <div
                  onClick={() => setIsWorkOpen(!isWorkOpen)}
                  className="flex justify-center items-center gap-2"
                >
                  <Link
                    to="/work"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsWorkOpen(!isWorkOpen);
                    }}
                    className="text-inherit no-underline"
                  >
                    <AnimatedText text="WORK" />
                  </Link>
                  <span>{isWorkOpen ? "−" : "+"}</span>
                </div>

                <AnimatePresence>
                  {isWorkOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-4 space-y-3 text-xl font-medium"
                    >
                      {workItems.map((work, i) => (
                        <li
                          key={i}
                          className="cursor-pointer hover:text-blue-600"
                        >
                          <Link
                            to={work.path}
                            onClick={() => {
                              setIsOpen(false);
                              setIsWorkOpen(false);
                            }}
                            className="text-inherit no-underline hover:text-blue-600 block"
                          >
                            {work.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              {menuItems
                .filter((item) => item !== "WORK")
                .map((item, i) => {
                  const href = item === "CONTACT" ? "/#contact" : `/${item.toLowerCase()}`;
                  return (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="text-3xl sm:text-[42px] font-extrabold cursor-pointer"
                    >
                      <Link
                        to={href}
                        onClick={() => handleMenuClick(item)}
                        className="text-inherit no-underline inline-block"
                      >
                        <AnimatedText text={item} />
                      </Link>
                    </motion.li>
                  );
                })}
            </motion.ul>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center gap-6 mt-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Swastixa on ${item.name}`}
                  className="text-black/70 hover:text-blue-400 text-2xl sm:text-3xl"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
