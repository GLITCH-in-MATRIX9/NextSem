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
    <div className="flex min-h-screen flex-col bg-white font-sans relative overflow-hidden">
      
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
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes pulse-shadow {
          0%, 100% { box-shadow: 0 0 40px rgba(0, 0, 0, 0.1); }
          50% { box-shadow: 0 0 60px rgba(0, 0, 0, 0.15); }
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
        .animate-pulse-shadow { animation: pulse-shadow 3s ease-in-out infinite; }
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
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-zinc-100 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gray-100 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3 opacity-50"></div>

      {/* Minimal Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-black rounded-full opacity-10 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      <main className="flex-grow container mx-auto max-w-7xl px-4 py-6 relative z-10">
        
        {/* Header Section */}
        <div 
          ref={headerRef}
          className="relative mb-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 bg-black p-6 md:p-8 rounded-[50px] shadow-2xl overflow-hidden group animate-bounce-in"
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - 400) * 0.005}deg) rotateY(${(mousePosition.x - 600) * 0.005}deg)`,
          }}
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 shimmer-effect rounded-[50px] overflow-hidden"></div>

          <div className="max-w-lg z-10 relative">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
              Buddy Matching<span className="text-gray-400">.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Connect with like-minded individuals to collaborate on projects or study together.
            </p>
          </div>

          <div className="relative h-40 w-full md:h-48 md:w-[350px] flex justify-center items-center">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl animate-pulse-shadow"></div>
            <Image 
              src="/girls-group.png" 
              alt="Buddy Illustration" 
              fill 
              className="object-contain drop-shadow-2xl animate-float relative z-10" 
              priority
            />
          </div>
        </div>

        {/* Animated Text Section */}
        <div className="h-20 flex items-center justify-center mb-6 px-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
          <p 
            key={index}
            className={`text-2xl md:text-3xl font-black text-center leading-tight max-w-5xl relative z-10 ${animationClass}`}
            style={{
              background: 'linear-gradient(90deg, #000000, #3f3f46, #71717a, #000000)',
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
          <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 via-zinc-200 to-gray-200 rounded-full opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500"></div>
          
          <div className="relative bg-white border-2 border-black rounded-full p-3 pl-5 pr-8 flex items-center gap-5 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02]">
            
            {/* Animated Icon Container */}
            <div className="h-14 w-14 flex-shrink-0 bg-black rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <div className="relative h-8 w-8">
                <Image src="/bulb.png" alt="Tip" fill className="object-contain brightness-0 invert" />
              </div>
            </div>
            
            {/* Enhanced Text */}
            <p className="text-base text-zinc-900 font-semibold flex-grow leading-snug">
              <span className="font-black text-xl mr-2">PRO TIP:</span> 
              Update your <span className="font-black text-lg underline decoration-black decoration-4 underline-offset-4 cursor-pointer hover:scale-105 inline-block">profile</span> to unlock smart matching!
            </p>
            
            {/* Animated Arrow */}
            <div className="hidden sm:block text-black transition-all duration-300 transform group-hover:translate-x-2 group-hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Enhanced Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: Study Buddy */}
          <Link href="/peer-help/buddy" className="block" prefetch={true}>
            <div 
              className="group bg-white rounded-[45px] p-5 shadow-xl flex flex-col items-center border-2 border-black hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden animate-bounce-in cursor-pointer h-[400px]"
              style={{ animationDelay: '0.4s' }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[45px]"></div>

              <h2 className="text-4xl font-black text-black mb-2 text-center group-hover:scale-110 transition-all duration-500 relative z-10">
                Study Buddy
              </h2>
              
              <p className="text-zinc-700 text-center text-base font-medium mb-3 px-4 leading-tight relative z-10">
                Collaborate on coursework and prepare for exams together.
              </p>
              
              <div className="space-y-2 mb-3 w-full max-w-md relative z-10">
                <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-xl border border-black group-hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="h-6 w-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                  <p className="text-black text-sm font-bold">Match based on courses</p>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-xl border border-black group-hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="h-6 w-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                  <p className="text-black text-sm font-bold">Share knowledge and notes</p>
                </div>
              </div>

              <div className="mt-auto flex w-full items-center justify-between gap-3 pt-3 border-t-2 border-zinc-200 relative z-10">
                <div className="relative h-44 w-44 transition-all duration-700 group-hover:scale-110 group-hover:rotate-2">
                  <div className="absolute inset-0 bg-gray-200 rounded-full blur-2xl"></div>
                  <Image src="/card11.png" alt="Study Buddy" fill className="object-contain relative z-10" />
                </div>
                <div className="relative h-28 w-28 rounded-full bg-black text-white font-bold text-center flex items-center justify-center p-3 text-base leading-tight shadow-2xl group-hover:scale-110 transition-all duration-500 overflow-hidden">
                  <span className="relative z-10">Find Your<br/>Buddy</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Project Partner */}
          <Link href="/peer-help/project-partner" className="block" prefetch={true}>
            <div 
              className="group bg-white rounded-[45px] p-5 shadow-xl flex flex-col items-center border-2 border-black hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden animate-bounce-in cursor-pointer h-[400px]"
              style={{ animationDelay: '0.6s' }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[45px]"></div>

              <h2 className="text-4xl font-black text-black mb-2 text-center group-hover:scale-110 transition-all duration-500 relative z-10">
                Project Partner
              </h2>
              
              <p className="text-zinc-700 text-center text-base font-medium mb-3 px-4 leading-tight relative z-10">
                Build amazing projects and bring your ideas to life.
              </p>

              <div className="space-y-2 mb-3 w-full max-w-md relative z-10">
                <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-xl border border-black group-hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="h-6 w-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                  <p className="text-black text-sm font-bold">Collaborate on projects</p>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-xl border border-black group-hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="h-6 w-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                  <p className="text-black text-sm font-bold">Match by tech stack</p>
                </div>
              </div>

              <div className="mt-auto flex w-full items-center justify-between gap-3 pt-3 border-t-2 border-zinc-200 relative z-10">
                <div className="relative h-44 w-44 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-2">
                  <div className="absolute inset-0 bg-gray-200 rounded-full blur-2xl"></div>
                  <Image src="/card22.png" alt="Project Partner" fill className="object-contain relative z-10" />
                </div>
                <div className="relative h-28 w-28 rounded-full bg-black text-white font-bold text-center flex items-center justify-center p-3 text-base leading-tight shadow-2xl group-hover:scale-110 transition-all duration-500 overflow-hidden">
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
