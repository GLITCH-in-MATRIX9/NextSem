"use client"; // This line fixes the 'styled-jsx' error

import React from 'react';

const Card = ({ imagePath, isMain = false, delay = "0s" }: { imagePath: string; isMain?: boolean; delay?: string }) => (
  <div 
    style={{ animationDelay: delay }}
    className={`
      relative bg-[#1A1A1A] rounded-[40px] overflow-hidden flex flex-col items-center justify-center
      ${isMain ? 'w-[340px] h-[580px] z-10' : 'w-[280px] h-[480px]'}
      transition-all duration-300 hover:scale-105 shadow-2xl
      animate-float
    `}
  >
    <img 
      src={imagePath} 
      alt="Study illustration" 
      className="w-full h-full object-cover block"
    />
  </div>
);

export default function StudyHero() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-row items-center gap-10 max-w-7xl">
        
        {/* Left Card */}
        <Card imagePath="/card1.png" delay="0s" />

        {/* Center Card (Larger) */}
        <Card imagePath="/card2.png" isMain={true} delay="0.8s" />

        {/* Right Card */}
        <Card imagePath="/card3.png" delay="1.6s" />

      </div>
    </div>
  );
}