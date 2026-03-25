"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const animatedStats = [
  { end: 1240, suffix: "+", label: "Resources" },
  { end: 15, suffix: "K+", label: "Downloads" },
  { end: 48, suffix: "", label: "Subjects" },
  { end: 6, suffix: "", label: "Branches" },
];

function useCountUp(end: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function StatCounter({
  end,
  suffix,
  label,
  start,
}: {
  end: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(end, 1600, start);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black text-white tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersStarted(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes heroSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(-6deg); }
          50%       { transform: translate(6px, -10px) rotate(-4deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(8deg); }
          50%       { transform: translate(-8px, -14px) rotate(6deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(3deg); }
          50%       { transform: translate(4px, -8px) rotate(5deg); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .hero-h1     { animation: heroSlideUp 0.6s ease-out 0.1s both; }
        .hero-sub    { animation: heroSlideUp 0.6s ease-out 0.25s both; }
        .hero-badges { animation: heroSlideUp 0.6s ease-out 0.4s both; }
        .hero-stats  { animation: heroFadeIn 0.8s ease-out 0.55s both; }
        .float-1 { animation: float1 4s ease-in-out infinite; }
        .float-2 { animation: float2 5s ease-in-out infinite; }
        .float-3 { animation: float3 3.5s ease-in-out infinite; }
        .marquee-track { animation: marquee 22s linear infinite; }
      `}</style>

      <section className="relative bg-black text-white overflow-hidden rounded-3xl mb-10">
        {/* Floating decorative cards */}
        {/* <div className="absolute top-6 right-8 hidden lg:block">
          <div className="float-1 px-3 py-2 bg-white text-black border-2 border-black rounded-xl text-sm font-black shadow-lg opacity-90">
            📝 DSA Notes
          </div>
        </div>
        <div className="absolute top-20 right-48 hidden lg:block">
          <div className="float-2 px-3 py-2 bg-[#FFB800] text-black border-2 border-black rounded-xl text-sm font-black shadow-lg">
            📋 OS PYQs
          </div>
        </div>
        <div className="absolute top-10 right-28 hidden lg:block">
          <div className="float-3 px-3 py-2 bg-[#00C853] text-white border-2 border-black rounded-xl text-sm font-black shadow-lg">
            ⭐ Important Qs
          </div>
        </div>
        <div className="absolute bottom-16 right-16 hidden lg:block">
          <div className="float-1 px-3 py-2 bg-[#2979FF] text-white border-2 border-black rounded-xl text-sm font-black shadow-lg">
            🔬 Lab Manual
          </div>
        </div> */}

        {/* Dotted pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Main content */}
        {/* Main content */}
        <div className="relative z-10 px-8 pt-5 pb-10 flex flex-col lg:flex-row items-end justify-between gap-10">
          {" "}
          {/* Left text — keep everything inside this new wrapper div */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="hero-badges flex flex-wrap items-center gap-2 mb-5">
              <span className="px-3 py-1 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full">
                🏛️ IGDTUW
              </span>
              <span className="px-3 py-1 border-2 border-white text-white text-xs font-black uppercase tracking-widest rounded-full">
                Free Forever
              </span>
            </div>

            <h1 className="hero-h1 text-5xl md:text-6xl font-black leading-none tracking-tight mb-4">
              Resource
              <br />
              <span className="relative inline-block">
                Vault.
                <span
                  className="absolute -bottom-1 left-0 h-2 w-full opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF4444, #FFB800, #00C853)",
                  }}
                />
              </span>
            </h1>

            <p className="hero-sub text-lg text-gray-300 font-medium leading-relaxed mb-6 max-w-lg">
              Every note, PYQ, and lab manual you need — curated by students,
              for students of IGDTUW. Stop searching. Start studying.
            </p>

            {/* Subject quick pills */}
            <div className="hero-badges flex flex-wrap gap-2">
              {[
                "DSA",
                "OS",
                "DBMS",
                "COA",
                "CN",
                "ML",
                "Math III",
                "Python",
              ].map((s, i) => (
                <span
                  key={s}
                  className="px-3 py-1.5 border border-gray-600 text-gray-300 text-xs font-bold rounded-full hover:border-white hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          {/* Right image */}
          {/* <Image
            src="/studing-group-caricature.png"
            alt="Resource Vault"
            width={300}
            height={300}
            className="flex drop-shadow-2xl"
          /> */}
          <div className="hidden lg:flex flex-shrink-0 items-end justify-center rounded-2xl overflow-hidden p-4">
            <Image
              src="/studying-group-caricature.png"
              alt="Resource Vault"
              width={450}
              height={450}
              className="object-contain rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="hero-stats border-t-2 border-gray-800 px-8 py-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {animatedStats.map((s) => (
              <StatCounter key={s.label} {...s} start={countersStarted} />
            ))}
          </div>
        </div>

        {/* Scrolling ticker */}
        <div className="border-t border-gray-800 overflow-hidden py-2.5">
          <div className="flex">
            <div className="marquee-track flex gap-8 whitespace-nowrap">
              {[...Array(2)].map((_, block) => (
                <span key={block} className="flex gap-8">
                  {[
                    "📝 Notes",
                    "📋 PYQs",
                    "⭐ Important Qs",
                    "🔬 Lab Manuals",
                    "📚 Syllabus",
                    "📖 Books",
                    "🎯 1240+ Resources",
                    "🔥 Students Approved",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-xs font-bold text-gray-500 uppercase tracking-widest"
                    >
                      {item}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
