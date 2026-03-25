"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Animated Word with Smooth Motion */
function AnimatedWord() {
  const words = ["Notes", "PYQs", "Help", "Senior", "Buddy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex justify-center min-w-65 h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 flex items-center justify-center font-extrabold tracking-wide text-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="w-full h-[80vh] bg-white text-black px-6 py-8 flex flex-col">
      {/* 🔍 Search Bar (TOP) */}
      <div className="w-full flex justify-center mb-10">
        <div className="flex w-full max-w-3xl items-center border border-black/20 rounded-full bg-white shadow-sm shadow-black/5 px-4 py-2 text-lg transition-all duration-300 hover:shadow-md focus-within:border-black focus-within:shadow-md focus-within:bg-black focus-within:text-white">
          <Search className="mr-3 transition-colors" />

          <input
            placeholder="Search for notes, PYQs, subjects..."
            className="flex-1 bg-transparent outline-none px-2 placeholder:text-black/70 focus:placeholder:text-white/60"
          />

          {/* Button */}
          <button className="ml-2 px-4 py-1.5 rounded-full border border-black/20 text-sm font-medium bg-white text-black transition-all duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white">
            Search
          </button>
        </div>
      </div>

      {/* 🧠 Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
        {/* Heading (STRICT 2 LINES) */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl tracking-tight">
          <span className="block">
            Find Your <AnimatedWord />
          </span>
          <span className="block mt-1 text-black/90">In Seconds.</span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg mt-4 max-w-xl text-gray-700 leading-relaxed">
          Stop wasting time. Everything you need for your semester — one search
          away.
        </p>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["DSA Notes", "OS PYQs", "DBMS Important", "AI Unit 2"].map(
            (item) => (
              <button
                key={item}
                className="border border-black/20 px-5 py-2.5 rounded-full text-sm font-medium bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-sm hover:shadow"
              >
                {item}
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
