"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BuddyMatching() {
  const textLines = [
    "Do you feel you lack the right connections for projects or studies?",
    "Struggling to find teammates who are equally motivated as you?",
    "Tired of doing projects alone while others work in groups?",
    "Don't know whom to approach for hackathons or semester projects?",
    "Wish you had a study buddy who actually studies with you?",
    "Confused about how others build amazing projects together?",
    "Looking for people with the same skills and interests as yours?",
    "Feel stuck because you don't have the right peer group?",
    "Want a partner who matches your learning speed and goals?",
    "Stop guessing. Start matching with the right people.",
  ];

  const [index, setIndex]   = useState(0);
  const [phase, setPhase]   = useState<"idle" | "exit" | "enter">("idle");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // ── refs ──
  const headerGirlRef = useRef<HTMLDivElement>(null);   // header illustration
  const headerRef     = useRef<HTMLDivElement>(null);
  const girl1Ref      = useRef<HTMLDivElement>(null);
  const girl2Ref      = useRef<HTMLDivElement>(null);
  const card1Ref      = useRef<HTMLDivElement>(null);
  const card2Ref      = useRef<HTMLDivElement>(null);
  const btn1Ref       = useRef<HTMLDivElement>(null);
  const btn2Ref       = useRef<HTMLDivElement>(null);
  const sparkle1Ref   = useRef<HTMLDivElement>(null);   // star particles on header girl
  const sparkle2Ref   = useRef<HTMLDivElement>(null);
  const sparkle3Ref   = useRef<HTMLDivElement>(null);

  // ── All GSAP animations ──
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");

      /* ─── HEADER GIRL ─── */

      // Entrance: slides in from right with bounce
      gsap.fromTo(
        headerGirlRef.current,
        { x: 120, opacity: 0, scale: 0.75, rotate: 8 },
        { x: 0, opacity: 1, scale: 1, rotate: 0,
          duration: 1.2, ease: "back.out(1.8)", delay: 0.3 }
      );

      // Idle float up-down
      gsap.to(headerGirlRef.current, {
        y: -12, duration: 2.0, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 1.6,
      });

      // Idle gentle sway
      gsap.to(headerGirlRef.current, {
        rotation: 2.5, duration: 3.2, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 1.8,
      });

      // Sparkle particles around header girl
      const sparkles = [sparkle1Ref, sparkle2Ref, sparkle3Ref];
      sparkles.forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)", delay: 1.2 + i * 0.2 }
        );
        gsap.to(ref.current, {
          scale: 1.4, opacity: 0.6,
          duration: 0.8 + i * 0.25,
          ease: "sine.inOut", yoyo: true, repeat: -1,
          delay: 1.8 + i * 0.3,
        });
        // each star orbits slightly
        gsap.to(ref.current, {
          y: -10 - i * 4,
          x: (i % 2 === 0 ? 5 : -5),
          duration: 1.5 + i * 0.4,
          ease: "sine.inOut", yoyo: true, repeat: -1,
          delay: 2.0 + i * 0.2,
        });
      });

      /* ─── CARD GIRLS ─── */

      // Entrance
      gsap.fromTo(girl1Ref.current,
        { y: 80, opacity: 0, scale: 0.7, rotate: -8 },
        { y: 0, opacity: 1, scale: 1, rotate: 0,
          duration: 1.1, ease: "back.out(1.7)", delay: 0.7 }
      );
      gsap.fromTo(girl2Ref.current,
        { y: 80, opacity: 0, scale: 0.7, rotate: 8 },
        { y: 0, opacity: 1, scale: 1, rotate: 0,
          duration: 1.1, ease: "back.out(1.7)", delay: 0.95 }
      );

      // Idle float
      gsap.to(girl1Ref.current, {
        y: -14, duration: 2.2, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 1.9,
      });
      gsap.to(girl2Ref.current, {
        y: -14, duration: 2.6, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 2.2,
      });

      // Idle sway
      gsap.to(girl1Ref.current, {
        rotation: 3, duration: 3.5, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 2.1,
      });
      gsap.to(girl2Ref.current, {
        rotation: -3, duration: 3.0, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 2.4,
      });

      /* ─── CARDS ─── */
      gsap.fromTo(card1Ref.current,
        { y: 60, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)", delay: 0.3 }
      );
      gsap.fromTo(card2Ref.current,
        { y: 60, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)", delay: 0.5 }
      );

      /* ─── BUTTONS ─── */
      gsap.fromTo(btn1Ref.current,
        { scale: 0, opacity: 0, rotate: -20 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.7, ease: "back.out(2)", delay: 1.4 }
      );
      gsap.fromTo(btn2Ref.current,
        { scale: 0, opacity: 0, rotate: 20 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.7, ease: "back.out(2)", delay: 1.6 }
      );
      gsap.to(btn1Ref.current, {
        scale: 1.06, duration: 1.4, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 2.3,
      });
      gsap.to(btn2Ref.current, {
        scale: 1.06, duration: 1.6, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 2.6,
      });
    };

    init();
  }, []);

  // ── Hover handlers: card girls ──
  const onCard1Enter = async () => {
    const { gsap } = await import("gsap");
    gsap.to(girl1Ref.current, { y: -28, scale: 1.12, rotation: 5, duration: 0.5, ease: "back.out(1.8)", overwrite: "auto" });
    gsap.to(btn1Ref.current,  { scale: 1.18, duration: 0.3, ease: "back.out(2)", overwrite: "auto" });
  };
  const onCard1Leave = async () => {
    const { gsap } = await import("gsap");
    gsap.to(girl1Ref.current, { y: -14, scale: 1, rotation: 2, duration: 0.6, ease: "elastic.out(1,0.5)", overwrite: "auto" });
    gsap.to(btn1Ref.current,  { scale: 1.06, duration: 0.4, ease: "back.out(1.4)", overwrite: "auto" });
  };
  const onCard2Enter = async () => {
    const { gsap } = await import("gsap");
    gsap.to(girl2Ref.current, { y: -28, scale: 1.12, rotation: -5, duration: 0.5, ease: "back.out(1.8)", overwrite: "auto" });
    gsap.to(btn2Ref.current,  { scale: 1.18, duration: 0.3, ease: "back.out(2)", overwrite: "auto" });
  };
  const onCard2Leave = async () => {
    const { gsap } = await import("gsap");
    gsap.to(girl2Ref.current, { y: -14, scale: 1, rotation: -2, duration: 0.6, ease: "elastic.out(1,0.5)", overwrite: "auto" });
    gsap.to(btn2Ref.current,  { scale: 1.06, duration: 0.4, ease: "back.out(1.4)", overwrite: "auto" });
  };

  // ── Header hover: girl reacts ──
  const onHeaderEnter = async () => {
    const { gsap } = await import("gsap");
    gsap.to(headerGirlRef.current, {
      scale: 1.1, y: -18, rotation: -3,
      duration: 0.5, ease: "back.out(1.8)", overwrite: "auto",
    });
  };
  const onHeaderLeave = async () => {
    const { gsap } = await import("gsap");
    gsap.to(headerGirlRef.current, {
      scale: 1, y: -12, rotation: 2,
      duration: 0.7, ease: "elastic.out(1,0.5)", overwrite: "auto",
    });
  };

  // ── Text cycling ──
  useEffect(() => {
    const t = setTimeout(() => setPhase("exit"), 3200);
    return () => clearTimeout(t);
  }, [index]);
  useEffect(() => {
    if (phase === "exit") {
      const t = setTimeout(() => { setIndex(p => (p+1) % textLines.length); setPhase("enter"); }, 480);
      return () => clearTimeout(t);
    }
    if (phase === "enter") {
      const t = setTimeout(() => setPhase("idle"), 500);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    const fn = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans relative overflow-hidden">
      <style jsx global>{`
        @keyframes textEnter {
          0%   { opacity:0; transform:translateY(22px) scale(0.97); filter:blur(4px); }
          100% { opacity:1; transform:translateY(0) scale(1); filter:blur(0); }
        }
        @keyframes textExit {
          0%   { opacity:1; transform:translateY(0) scale(1); filter:blur(0); }
          100% { opacity:0; transform:translateY(-22px) scale(0.97); filter:blur(4px); }
        }
        @keyframes textIdle { 0%,100% { opacity:1; } }
        @keyframes marquee  { 0% { transform:translateX(0%); } 100% { transform:translateX(-50%); } }
        @keyframes pulseShadow {
          0%,100% { box-shadow:0 0 40px rgba(0,0,0,0.1); }
          50%     { box-shadow:0 0 60px rgba(0,0,0,0.15); }
        }
        @keyframes shimmer {
          0%   { transform:translateX(-100%); }
          100% { transform:translateX(100%); }
        }
        @keyframes bounceIn {
          0%   { transform:scale(0.3) rotate(-10deg); opacity:0; }
          50%  { transform:scale(1.05) rotate(2deg); }
          70%  { transform:scale(0.9) rotate(-1deg); }
          100% { transform:scale(1) rotate(0deg); opacity:1; }
        }
        @keyframes shadowPulse {
          0%,100% { transform:scaleX(1); opacity:0.18; }
          50%     { transform:scaleX(0.75); opacity:0.09; }
        }

        .animate-bounce-in    { animation:bounceIn 0.8s cubic-bezier(0.68,-0.55,0.265,1.55) forwards; }
        .animate-marquee      { animation:marquee 30s linear infinite; }
        .animate-pulse-shadow { animation:pulseShadow 3s ease-in-out infinite; }
        .animate-shimmer      { animation:shimmer 2s infinite; }
        .girl-shadow          { animation:shadowPulse 2.4s ease-in-out infinite; }
      `}</style>

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-zinc-100 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gray-100 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3 opacity-50" />

      <main className="flex-grow container mx-auto max-w-7xl px-4 py-6 relative z-10">

        {/* ── HEADER ── */}
        <div
          ref={headerRef}
          onMouseEnter={onHeaderEnter}
          onMouseLeave={onHeaderLeave}
          className="relative mb-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 bg-black p-6 md:p-8 rounded-[50px] shadow-2xl overflow-hidden group animate-bounce-in"
          style={{
            transform:`perspective(1000px) rotateX(${(mousePosition.y-400)*0.005}deg) rotateY(${(mousePosition.x-600)*0.005}deg)`,
          }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[50px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-shimmer" />
          </div>

          <div className="max-w-lg z-10 relative">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
              Buddy Matching<span className="text-gray-400">.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Connect with like-minded individuals to collaborate on projects or study together.
            </p>
          </div>

          {/* Header illustration with GSAP + sparkle stars */}
          <div className="relative h-40 w-full md:h-52 md:w-[380px] flex justify-center items-center flex-shrink-0">

            {/* Sparkle star 1 — top left of girl */}
            <div
              ref={sparkle1Ref}
              className="absolute z-20 opacity-0"
              style={{ top: "5%", left: "18%", pointerEvents: "none" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD700"
                style={{ filter:"drop-shadow(0 0 5px #FFD700)" }}>
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
              </svg>
            </div>

            {/* Sparkle star 2 — top right */}
            <div
              ref={sparkle2Ref}
              className="absolute z-20 opacity-0"
              style={{ top: "2%", right: "14%", pointerEvents: "none" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff"
                style={{ filter:"drop-shadow(0 0 4px #fff)" }}>
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
              </svg>
            </div>

            {/* Sparkle star 3 — mid right */}
            <div
              ref={sparkle3Ref}
              className="absolute z-20 opacity-0"
              style={{ top: "30%", right: "6%", pointerEvents: "none" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFE033"
                style={{ filter:"drop-shadow(0 0 4px #FFE033)" }}>
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
              </svg>
            </div>

            {/* Glow behind girl */}
            <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl animate-pulse-shadow" />

            {/* The girl image — GSAP controlled */}
            <div
              ref={headerGirlRef}
              className="relative w-full h-full opacity-0"
              style={{ transformOrigin: "bottom center" }}
            >
              <Image
                src="/girls-group.png"
                alt="Buddy Illustration"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Animated Text ── */}
        <div className="h-24 flex items-center justify-center mb-6 px-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent" />
          <p
            key={index}
            className="text-2xl md:text-3xl font-black text-center leading-tight max-w-5xl relative z-10"
            style={{
              background:"linear-gradient(90deg,#000,#3f3f46,#71717a,#000)",
              backgroundSize:"200% auto",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
              animation:
                phase==="enter" ? "textEnter 0.48s cubic-bezier(0.22,1,0.36,1) forwards"
              : phase==="exit"  ? "textExit  0.45s cubic-bezier(0.55,0,1,0.45) forwards"
              : "textIdle 0.1s linear forwards",
            }}
          >
            {textLines[index]}
          </p>
        </div>

        {/* ── PRO TIP ── */}
        <div className="mb-8 mx-auto max-w-4xl relative group animate-bounce-in" style={{animationDelay:"0.2s"}}>
          <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 via-zinc-200 to-gray-200 rounded-full opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500" />
          <div className="relative bg-white border-2 border-black rounded-full p-3 pl-5 pr-8 flex items-center gap-5 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02]">
            <div className="h-14 w-14 flex-shrink-0 bg-black rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <div className="relative h-8 w-8">
                <Image src="/bulb.png" alt="Tip" fill className="object-contain brightness-0 invert" />
              </div>
            </div>
            <p className="text-base text-zinc-900 font-semibold flex-grow leading-snug">
              <span className="font-black text-xl mr-2">PRO TIP:</span>
              Update your{" "}
              <span className="font-black text-lg underline decoration-black decoration-4 underline-offset-4 cursor-pointer hover:scale-105 inline-block">
                profile
              </span>{" "}
              to unlock smart matching!
            </p>
            <div className="hidden sm:block text-black transition-all duration-300 transform group-hover:translate-x-2 group-hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Card 1: Study Buddy */}
          <Link href="/peer-help/buddy" className="block" prefetch={true}>
            <div
              ref={card1Ref}
              onMouseEnter={onCard1Enter}
              onMouseLeave={onCard1Leave}
              className="group bg-white rounded-[38px] border-2 border-black shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden cursor-pointer flex flex-col opacity-0"
              style={{ maxWidth:"92%", margin:"0 auto", width:"100%", height:420 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[38px]" />

              <div className="px-6 pt-6 pb-3 relative z-10">
                <h2 className="text-3xl font-black text-black mb-1 text-center">Study Buddy</h2>
                <p className="text-zinc-600 text-center text-sm font-medium mb-4 leading-tight">
                  Collaborate on coursework and prepare for exams together.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl border border-black">
                    <span className="h-6 w-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                    <p className="text-black text-sm font-bold">Match based on courses</p>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl border border-black">
                    <span className="h-6 w-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                    <p className="text-black text-sm font-bold">Share knowledge and notes</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative border-t-2 border-zinc-100 mt-3 mx-4">
                <div className="girl-shadow absolute bottom-2 left-6"
                  style={{ width:160, height:18,
                    background:"radial-gradient(ellipse,rgba(0,0,0,0.22) 0%,transparent 70%)",
                    borderRadius:"50%", transformOrigin:"center" }}
                />
                <div
                  ref={girl1Ref}
                  className="absolute bottom-0 left-0 opacity-0"
                  style={{ width:230, height:230, transformOrigin:"bottom center" }}
                >
                  <Image src="/card11.png" alt="Study Buddy" fill className="object-contain object-bottom drop-shadow-xl" />
                </div>
                <div
                  ref={btn1Ref}
                  className="absolute bottom-4 right-4 flex flex-col items-center gap-1.5 opacity-0"
                >
                  <div className="relative h-[88px] w-[88px] rounded-full bg-black text-white font-bold text-center flex items-center justify-center p-3 text-sm leading-tight shadow-2xl overflow-hidden">
                    <span className="relative z-10">Find Your<br />Buddy</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest animate-pulse">Click me</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Project Partner */}
          <Link href="/peer-help/project-partner" className="block" prefetch={true}>
            <div
              ref={card2Ref}
              onMouseEnter={onCard2Enter}
              onMouseLeave={onCard2Leave}
              className="group bg-white rounded-[38px] border-2 border-black shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden cursor-pointer flex flex-col opacity-0"
              style={{ maxWidth:"92%", margin:"0 auto", width:"100%", height:420 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[38px]" />

              <div className="px-6 pt-6 pb-3 relative z-10">
                <h2 className="text-3xl font-black text-black mb-1 text-center">Project Partner</h2>
                <p className="text-zinc-600 text-center text-sm font-medium mb-4 leading-tight">
                  Build amazing projects and bring your ideas to life.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl border border-black">
                    <span className="h-6 w-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                    <p className="text-black text-sm font-bold">Collaborate on projects</p>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl border border-black">
                    <span className="h-6 w-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                    <p className="text-black text-sm font-bold">Match by tech stack</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative border-t-2 border-zinc-100 mt-3 mx-4">
                <div className="girl-shadow absolute bottom-2 left-6"
                  style={{ width:160, height:18,
                    background:"radial-gradient(ellipse,rgba(0,0,0,0.22) 0%,transparent 70%)",
                    borderRadius:"50%", transformOrigin:"center" }}
                />
                <div
                  ref={girl2Ref}
                  className="absolute bottom-0 left-0 opacity-0"
                  style={{ width:230, height:230, transformOrigin:"bottom center" }}
                >
                  <Image src="/card22.png" alt="Project Partner" fill className="object-contain object-bottom drop-shadow-xl" />
                </div>
                <div
                  ref={btn2Ref}
                  className="absolute bottom-4 right-4 flex flex-col items-center gap-1.5 opacity-0"
                >
                  <div className="relative h-[88px] w-[88px] rounded-full bg-black text-white font-bold text-center flex items-center justify-center p-3 text-sm leading-tight shadow-2xl overflow-hidden">
                    <span className="relative z-10">Find Your<br />Partner</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest animate-pulse">Click me</span>
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* ── Ticker ── */}
        <div className="mt-12 overflow-hidden relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="inline-flex items-center gap-3 bg-white border-2 border-black px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl">🎉</span>
                <span className="text-black font-semibold">500+ matches made this week!</span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}