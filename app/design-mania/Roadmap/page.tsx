import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RoadmapPage() {
  // 1. DATA: Every box is defined here individually. 
  // You can add specific style overrides to any object in this list.
  const roadmaps = [
    { 
      title: "Machine Learning", 
      img: "/Ml.png", 
       
      imgPos: "scale(1.0) translate(0px, 0px)",
      desc: "From raw data to intelligent insights—your step-by-step path to mastery starts here." 
    },
    { 
      title: "Web Development", 
      img: "/Web d.png", 
      color: "bg-[#E3F2FD]", 
      imgPos: "scale(1.1) translate(0px, 5px)",
      desc: "Build the modern web—from stunning interfaces to scalable backends." 
    },
    { 
      title: "Data Science", 
      img: "/Data Science.png", 
     
      imgPos: "scale(1.0)",
      desc: "Transform raw data into meaningful insights and intelligent decisions." 
    },
    { 
      title: "DevOps", 
      img: "/Devops.png", 
      color: "bg-[#2C4A63]", 
      imgPos: "scale(1.0)",
      desc: "Bridge the gap between code and cloud with seamless automation and scale." 
    },
    { 
      title: "Cyber Security", 
      img: "/Cyber.png", 
      color: "bg-[#2C4A63]", 
      imgPos: "scale(1.0)",
      desc: "Protect digital assets and master the art of defensive engineering" 
    },
    { 
      title: "App Development", 
      img: "/App d.png", 
      color: "bg-[#E8EAF6]", 
      imgPos: "scale(1.2)",
      desc: "Build seamless experiences for the world’s most personal devices." 
    },
  ];

  // 2. DEFAULT STYLES (Global defaults for all cards)
  const defaults = {
    titleFont: "text-[28px] font-[700]",
    descFont: "text-[15px] font-medium max-w-[400px]",
    btnStyle: "w-[85%] py-3 bg-black text-white rounded-2xl font-bold text-sm tracking-widest",
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] font-sans">
      
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

      {/* SECTION HEADER */}
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 relative">
          <div className="mb-12 relative">
            <section className="bg-white w-full border-b border-gray-100 shadow-sm"></section>
            <h2 className="text-5xl font-bold mb-3 tracking-tight">Career Roadmaps</h2>
            <p className=" text-black-500 text-xl font-medium">Make concept faster. Review, practice and ace your interview</p>
            
            {/* IMAGE 2: Roadmaps side image - Adjust coordinates/size here */}
            <div className="absolute" style={{ top: '-70px', right: '-10px', width: '220px', height: '220px' }}>
              <img src="/road.png" alt="Books icon" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* ROADMAP GRID - Now rendering all 6 boxes */}
      <main className="px-10 pb-24 md:px-24 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {roadmaps.map((card, index) => (
            <div key={index} className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-black flex flex-col">
              
              {/* Image Section */}
              <div className={`${card.color} h-52 relative flex items-center justify-center overflow-hidden`}>
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                  style={{ transform: card.imgPos }} 
                />
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col items-center">
                <h3 className={`${defaults.titleFont} mb-3 leading-tight`}>
                  {card.title}
                </h3>
                
                <p className={`${defaults.descFont} text-gray-500 leading-relaxed mb-8`}>
                  {card.desc}
                </p>
                
                <button className={`${defaults.btnStyle} hover:bg-zinc-800 transition-all active:scale-95`}>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}