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
    "Stop guessing. Start matching with the right people."
  ];

  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate-slide-in-right");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setAnimationClass("animate-slide-out-left");
    }, 3500);

    const switchTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % textLines.length);
      setAnimationClass("animate-slide-in-right");
    }, 4000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(switchTimer);
    };
  }, [index]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-zinc-50 via-gray-50 to-zinc-100 font-sans relative overflow-hidden">
      
      <style jsx global>{`
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-50px); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(82, 82, 91, 0.3); }
          50% { box-shadow: 0 0 40px rgba(82, 82, 91, 0.6); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
          50% { transform: scale(1.05) rotate(2deg); }
          70% { transform: scale(0.9) rotate(-1deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-in-right { animation: slideInRight 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-slide-out-left { animation: slideOutLeft 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%; 
          animation: gradient-shift 8s ease infinite; 
        }
        .animate-bounce-in { animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
        .group:hover .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-300/40 to-zinc-300/40 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-zinc-300/40 to-gray-400/40 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-gray-200/30 to-zinc-300/30 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-gray-400 to-zinc-500 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      <main className="flex-grow container mx-auto max-w-7xl px-4 py-6 relative z-10">
        
        {/* Header Section with Parallax Effect */}
        <div 
          ref={headerRef}
          className="relative mb-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-zinc-900 via-gray-900 to-zinc-800 p-6 md:p-8 rounded-[60px] border-2 border-white/10 shadow-2xl overflow-hidden group animate-bounce-in animate-gradient"
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - 400) * 0.01}deg) rotateY(${(mousePosition.x - 600) * 0.01}deg)`,
          }}
        >
          {/* Animated border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-zinc-700 to-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-[60px]"></div>
          
          {/* Shimmer overlay */}
          <div className="absolute inset-0 shimmer-effect rounded-[60px] overflow-hidden"></div>

          <div className="max-w-lg z-10 relative">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-zinc-300 animate-gradient drop-shadow-lg">
              Buddy Matching<span className="text-gray-400 animate-pulse">.</span>
            </h1>
            <p className="text-zinc-200 text-lg md:text-xl leading-relaxed font-light">
              Connect with like-minded individuals to collaborate on projects or study together.
            </p>
          </div>

          <div className="relative h-40 w-full md:h-48 md:w-[350px] flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-zinc-600/20 rounded-full blur-2xl animate-pulse-glow"></div>
            <Image 
              src="/girls-group.png" 
              alt="Buddy Illustration" 
              fill 
              className="object-contain drop-shadow-2xl animate-float relative z-10" 
              priority
            />
          </div>
        </div>

        {/* Animated Text Section with Typing Effect */}
        <div className="h-20 flex items-center justify-center mb-6 px-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <p 
            key={index}
            className={`text-2xl md:text-3xl font-black text-center leading-tight max-w-5xl relative z-10 ${animationClass}`}
            style={{
              background: 'linear-gradient(90deg, #18181b, #3f3f46, #71717a, #18181b)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-shift 3s linear infinite',
            }}
          >
            {textLines[index]}
          </p>
        </div>

        {/* Enhanced TIP SECTION */}
        <div className="mb-8 mx-auto max-w-4xl relative group animate-bounce-in" style={{ animationDelay: '0.2s' }}>
          {/* Multi-layer glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500 animate-pulse-glow"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full opacity-30 group-hover:opacity-60 blur-md transition-all duration-500"></div>
          
          <div className="relative bg-white/95 backdrop-blur-xl border-2 border-white/80 rounded-full p-3 pl-5 pr-8 flex items-center gap-5 shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]">
            
            {/* Animated Icon Container */}
            <div className="h-14 w-14 flex-shrink-0 bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-300 rounded-full flex items-center justify-center border-2 border-yellow-400/50 shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-pulse-glow">
              <div className="relative h-8 w-8">
                <Image src="/bulb.png" alt="Tip" fill className="object-contain animate-float" />
              </div>
              {/* Sparkle effects */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Enhanced Text with Gradient */}
            <p className="text-base text-zinc-700 font-semibold flex-grow leading-snug">
              <span className="font-black text-xl mr-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">PRO TIP:</span> 
              Update your <span className="font-black text-lg text-blue-600 underline decoration-blue-400 decoration-4 underline-offset-4 cursor-pointer hover:text-purple-600 hover:decoration-purple-400 transition-all duration-300 hover:scale-105 inline-block">profile</span> to unlock smart matching!
            </p>
            
            {/* Animated Arrow */}
            <div className="hidden sm:block text-zinc-400 group-hover:text-purple-500 transition-all duration-300 transform group-hover:translate-x-2 group-hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Enhanced Cards Section with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: Study Buddy */}
          <Link href="/peer-help/buddy" className="block" prefetch={true}>
            <div 
              ref={card1Ref}
              className="group bg-white rounded-[45px] p-5 shadow-2xl flex flex-col items-center border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] hover:-translate-y-3 transition-all duration-500 relative overflow-hidden animate-bounce-in cursor-pointer h-[400px]"
              style={{ animationDelay: '0.4s' }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-[45px]"></div>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h2 className="text-4xl font-black text-zinc-900 mb-2 text-center group-hover:text-blue-600 transition-all duration-500 relative z-10 group-hover:scale-110">
                Study Buddy
              </h2>
              
              <p className="text-zinc-600 text-center text-base font-medium mb-3 px-4 leading-tight relative z-10">
                Collaborate on coursework and prepare for exams together.
              </p>
              
              <div className="space-y-2 mb-3 w-full max-w-md relative z-10">
                <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 p-2 rounded-xl border border-green-200 group-hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="h-6 w-6 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md">✓</span>
                  <p className="text-zinc-800 text-sm font-bold">Match based on courses</p>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-xl border border-blue-200 group-hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="h-6 w-6 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md">✓</span>
                  <p className="text-zinc-800 text-sm font-bold">Share knowledge and notes</p>
                </div>
              </div>

              <div className="mt-auto flex w-full items-center justify-between gap-3 pt-3 border-t-2 border-zinc-100 relative z-10">
                <div className="relative h-44 w-44 transition-all duration-700 group-hover:scale-110 group-hover:rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <Image src="/card11.png" alt="Study Buddy" fill className="object-contain relative z-10" />
                </div>
                <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-center flex items-center justify-center p-3 text-base leading-tight shadow-2xl group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-all duration-500 hover:from-blue-600 hover:to-purple-600 overflow-hidden">
                  <span className="relative z-10">Find Your<br/>Buddy</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Project Partner */}
            <Link href="/peer-help/project-partner" className="block" prefetch={true}>
            <div 
              ref={card2Ref}
              className="group bg-white rounded-[45px] p-5 shadow-2xl flex flex-col items-center border-2 border-purple-100 hover:border-purple-300 hover:shadow-[0_20px_60px_rgba(147,51,234,0.3)] hover:-translate-y-3 transition-all duration-500 relative overflow-hidden animate-bounce-in cursor-pointer h-[400px]"
              style={{ animationDelay: '0.6s' }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-red-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-red-500/5 transition-all duration-500 rounded-[45px]"></div>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-purple-400/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-pink-400/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h2 className="text-4xl font-black text-zinc-900 mb-2 text-center group-hover:text-purple-600 transition-all duration-500 relative z-10 group-hover:scale-110">
                Project Partner
              </h2>
              
              <p className="text-zinc-600 text-center text-base font-medium mb-3 px-4 leading-tight relative z-10">
                Build amazing projects and bring your ideas to life.
              </p>

              <div className="space-y-2 mb-3 w-full max-w-md relative z-10">
                <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 p-2 rounded-xl border border-purple-200 group-hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="h-6 w-6 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md">✓</span>
                  <p className="text-zinc-800 text-sm font-bold">Collaborate on projects</p>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-pink-50 to-red-50 p-2 rounded-xl border border-pink-200 group-hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="h-6 w-6 bg-gradient-to-br from-pink-400 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md">✓</span>
                  <p className="text-zinc-800 text-sm font-bold">Match by tech stack</p>
                </div>
              </div>

              <div className="mt-auto flex w-full items-center justify-between gap-3 pt-3 border-t-2 border-zinc-100 relative z-10">
                <div className="relative h-44 w-44 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <Image src="/card22.png" alt="Project Partner" fill className="object-contain relative z-10" />
                </div>
                <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white font-bold text-center flex items-center justify-center p-3 text-base leading-tight shadow-2xl group-hover:shadow-[0_20px_40px_rgba(147,51,234,0.6)] group-hover:scale-110 transition-all duration-500 hover:from-purple-600 hover:to-pink-600 overflow-hidden">
                  <span className="relative z-10">Find Your<br/>Partner</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Success Stories Ticker */}
        <div className="mt-12 overflow-hidden relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-zinc-200">
                <span className="text-2xl">🎉</span>
                <span className="text-zinc-700 font-semibold">500+ matches made this week!</span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}