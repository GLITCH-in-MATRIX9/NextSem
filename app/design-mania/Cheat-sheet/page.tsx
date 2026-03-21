import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// Decoration Component Helper
const DecorItem = ({ src, className }: { src: string, className: string }) => (
  <img src={src} alt="Decoration" className={`absolute object-contain flex items-center justify-center ${className}`} />
);
const ExploreCard = ({ title, desc, btnText, btnColor, iconPath }: any) => (
  <div className="bg-white border border-black-900 p-4 flex items-center gap-6 shadow-sm">
    <div className="shrink-0 w-16 h-16">
      <img src={iconPath} alt={title} className="w-full h-full object-contain" />
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-xl text-black-900">
        {title} <span className="font-normal text-base text-gray-500">: {desc}</span>
      </h4>
      <button className={`${poppins.className} mt-4 px-4 py-2 rounded-2xl text-sm font-medium transition-all hover:opacity-80 ${btnColor}`}>
        {btnText}
      </button>
    </div>
  </div>
);

const CheatSheetCentral = () => {
  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans text-gray-900 pb-20 relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* Top Items */}
        <DecorItem src="/Star 48.png" className="top-[420px] left-[2%] w-10 h-10 text-xs text-gray-500" />
        <DecorItem src="/Star 47.png" className="top-150 left-[4%] w-12.5 h-12.5 -rotate-12" />
        <DecorItem src="/Star42.png" className="top-202.5 -right-10 w-45 h-45" />
        <DecorItem src="/Star 54.png" className="top-275 right-[5%] w-6.25 h-6.25" />

        {/* Bottom Items */}
        <DecorItem src="/Polygon 2.png" className="top-190.5 -left-5 w-45 h-45" />
        <DecorItem src="/Star 54.png" className="bottom-10 left-[15%] w-6.25 h-6.25" />
        <DecorItem src="/Polygon 7.png" className="bottom-25 -right-2 w-30 h-30" />
        <DecorItem src="/Star 48.png" className="bottom-5 right-[10%] w-12.5 h-12.5" />
      </div>
      
      {/* HERO SECTION */}
      <header className="relative z-10 bg-black text-white px-[5%] py-4 flex flex-col md:flex-row justify-between items-center bg-[radial-gradient(circle_at_85%_50%,#333333_0%,#000000_65%)]">
        {/* Header Text */}
        <div className="w-full md:max-w-[50%] text-center md:text-left mb-6 md:mb-0">
          <h1 className={`${poppins.className} text-3xl md:text-[3.5rem] font-bold mb-4 tracking-tight leading-tight`}>
            Design Mania
          </h1>
          <p className="text-sm md:text-[1.1rem] leading-relaxed text-[#BBBBBB] font-normal">
            College isn't just about clearing semesters; it's the studio where you design your reality. Don't just follow the template—design it your way.
          </p>
        </div>
        {/* Header Image */}
        <div className="w-full md:max-w-[50%] flex justify-center md:justify-end">
          <img 
            src="/design_girl.png" 
            alt="Designer Hero" 
            className="w-full max-w-137.5 h-auto object-contain"
          />
        </div>
      </header>

      <div className="w-full bg-white relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="max-w-6xl mx-auto px-4 py-10 relative">
          <div className="mb-12 relative">
            <section className="bg-white w-full border-b border-gray-100 shadow-sm"></section>
            <h2 className="text-5xl font-bold mb-3 tracking-tight">Cheat-sheet Central</h2>
            <p className=" text-black-500 text-xl font-medium">Make concept faster. Review, practice and ace your interview</p>
            
            {/* IMAGE 2: Apple and Books - Adjust coordinates/size here */}
            <div className="absolute" style={{ top: '-80px', right: '-10px', width: '220px', height: '220px' }}>
              <img src="/books.png" alt="Books icon" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 relative z-10">

        {/* --- MIDDLE SECTION (IMAGE-ONLY BOXES) --- */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-start">
          
          {/* IMAGE 3: "How to make most out of..." */}
          <div className="relative rounded-3xl overflow-hidden" style={{ width: '100%', height: '400px' }}>
             <img src="/Frame 35.png" alt="How to guide" className="w-full h-full object-contain" />
          </div>

          {/* IMAGE 4: "Key Topics Inside" */}
          <div className="relative rounded-3xl overflow-hidden" style={{ width: '100%', height: '400px' }}>
             <img src="/Frame 34.png" alt="Key topics" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* --- EXPLORE SECTION --- */}
        <div>
          <h3 className="text-3xl font-bold mb-8">Explore Cheat-sheets :</h3>
          <div className="grid md:grid-cols-2 gap-6">
            
            <ExploreCard 
              title="DSA Patterns" 
              desc="Essential algorithms, data structure, problem patterns"
              btnText="View DSA Sheet"
              btnColor="bg-[#AEDCFF] text-[#000000]"
              iconPath="/image 15.png"
            />

            <ExploreCard 
              title="CS Fundamentals" 
              desc="Operating systems, network, and data base core concepts"
              btnText="View CS Funda Sheet"
              btnColor="bg-[#C2F4CE] text-[#000000]"
              iconPath="/image 16.png"
            />

            <ExploreCard 
              title="Interview Prep" 
              desc="Behavioral questions, tips, scenarios"
              btnText="Start Prep"
              btnColor="bg-[#FDE882] text-[#000000]"
              iconPath="/image 17.png"
            />

            <ExploreCard 
              title="Quick Reference" 
              desc="Language specific resources, channels, etc."
              btnText="View References"
              btnColor="bg-[#FF7B6E] text-black-900"
              iconPath="/image 18.png"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

// CRITICAL: This default export MUST match the function name and be at the bottom
export default CheatSheetCentral;