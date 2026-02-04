import React from 'react';
import { Anuphan, Poppins } from 'next/font/google';

// 1. Load Fonts
const anuphan = Anuphan({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-anuphan',
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['700'],
  variable: '--font-poppins',
});

// Decoration Component Helper
const DecorItem = ({ src, className }: { src: string, className: string }) => (
  <img src={src} alt="Decoration" className={`absolute object-contain flex items-center justify-center ${className}`} />
);

export default function DesignMania() {
  return (
    <div className={`w-full max-w-screen relative overflow-hidden ${anuphan.className}`}>
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* Top Items */}
        <DecorItem src="/Star 48.png" className="top-[420px] left-[2%] w-10 h-10 text-xs text-gray-500" />
        <DecorItem src="/Star 47.png" className="top-150 left-[4%] w-12.5 h-12.5 -rotate-12" />
        <DecorItem src="/Star42.png" className="top-112.5 -right-10 w-45 h-45" />
        <DecorItem src="/Star 54.png" className="top-175 right-[5%] w-6.25 h-6.25" />

        {/* Bottom Items */}
        <DecorItem src="/Polygon 2.png" className="bottom-12.5 -left-5 w-45 h-45" />
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

      {/* CARDS SECTION */}
      <main className="relative z-10 px-[4%] py-8 w-full pb-20">
        <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold mb-8 text-black text-left md:text-left max-w-175 mx-auto">
          Select a Process to get started:
        </h2>
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-175 mx-auto place-items-center">
          {/* CARD 1: CHEAT SHEET */}
          <div className="w-full max-w-[320px] h-70 p-6 flex flex-col justify-between bg-white text-black border-2 border-black rounded-3xl shadow-[0_5px_25px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 group hover:bg-gray-900 hover:text-white">
            <div>
              <h3 className="text-[1.5rem] font-bold mb-2">Cheat-sheet</h3>
              <p className="text-[0.9rem] font-bold leading-snug max-w-45">
                Here is the cheat sheet for DSA, CS Fundamentals, etc.
              </p>
            </div>
            <img 
              src="/books.png" 
              alt="Clipboard" 
              className="self-end w-35 h-1000 object-contain -translate-y-8" 
            />
          </div>
          {/* CARD 2: TO-DO LISTS (Updated to Uplift Image) */}
          <div className="w-full max-w-[320px] h-70 p-6 flex flex-col justify-between bg-white text-black border-2 border-black rounded-3xl shadow-[0_5px_25px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 group hover:bg-gray-900 hover:text-white">
            <div>
              <h3 className="text-[1.5rem] font-bold mb-2">To-do Lists</h3>
              <p className="text-[0.9rem] font-bold leading-snug max-w-45">
                Never forget to complete to do your tasks. Make a list right away
              </p>
            </div>
            <img 
              src="/list.png" 
              alt="Clipboard" 
              className="self-end w-35 h-1000 object-contain -translate-y-18" 
            />
          </div>
          {/* CARD 3: STICKERS */}
          <div className="w-full max-w-[320px] h-70 p-6 flex flex-col justify-between bg-white text-black border-2 border-black rounded-3xl shadow-[0_5px_25px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 group hover:bg-gray-900 hover:text-white">
            <div>
              <h3 className="text-[1.5rem] font-bold mb-2">Stickers</h3>
              <p className="text-[0.9rem] font-bold leading-snug max-w-45">
                Loved our stickers? Click here and download them.
              </p>
            </div>
            <img 
              src="/sticker.png" 
              alt="Stickers" 
              className="self-end w-40 h-1000 object-contain -translate-y-4" 
            />
          </div>
          {/* CARD 4: ROAD MAP */}
          <div className="w-full max-w-[320px] h-70 p-6 flex flex-col justify-between bg-white text-black border-2 border-black rounded-3xl shadow-[0_5px_25px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 group hover:bg-gray-900 hover:text-white">
            <div>
              <h3 className="text-[1.5rem] font-bold mb-2">Road Map</h3>
              <p className="text-[0.9rem] font-bold leading-snug max-w-45">
                Need help in your career? Find the road map for MI, SDE, etc.
              </p>
            </div>
            <img 
              src="/road.png" 
              alt="Roadmap" 
              className="self-end w-45 h-1000 object-contain -translate-y-8" 
            />
          </div>
        </div>
      </main>
    </div>
  );
}