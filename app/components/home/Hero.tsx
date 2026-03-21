"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";

function AnimatedNumber() {
  const [num, setNum] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prev) => (prev % 4) + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-black text-white ml-2 transition-transform duration-500">
      {num}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="w-full bg-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-6">

        {/* Search Bar */}
        <div className="mb-20 mt-2 flex justify-center">
          <div className="flex w-full max-w-xl items-center rounded-full bg-zinc-200 px-4 py-2 text-sm text-zinc-500 ">
            <input
              placeholder="What are we searching for today?"
              className="flex-1 bg-transparent outline-none"
            />
            <Search size={18} className="text-zinc-400" />
          </div>
        </div>

        {/* Heading */}
        <div className=" text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold text-zinc-900 transform">
            Reduce Your
          </h1>

          <div className="flex items-center justify-center gap-4">
            <button className="flex items-center justify-center rounded-full bg-black px-20 py-2 hover:opacity-80">
                <HiArrowLongRight
                    className="text-white text-4xl"
                    style={{ transform: "scaleX(4)" }} />
            </button>

            <span className="text-4xl md:text-7xl font-extrabold">
              Tension
            </span>
          </div>

          <h2 className="text-4xl md:text-7xl font-extrabold">
            For Semester <AnimatedNumber />
          </h2>
        </div>

        {/* Collaborators */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-sm text-zinc-500">Collaborators</p>

          <div className="flex justify-center gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-12 w-12 overflow-hidden rounded-full border border-zinc-300"
              >
                <Image
                  src="/image.png"
                  alt="Collaborator"
                  width={48}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
