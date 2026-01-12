"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const featureData = [
  {
    title: "Tools",
    desc: "I need to calculate or plan something right now.",
    backDesc: "Master your semester with our specialized toolkits.",
    buttons: [
      { label: "Semester Planner", link: "/tools/sem-planner" },
      { label: "Design Mania", link: "/tools/design" },
      { label: "CGPA Calculator", link: "/tools/gpa-calculator" },
      { label: "Attendance Calculator", link: "/tools/attendance-calculator" },
      { label: "Resource Vault", link: "/tools/resources" }
    ],
    img: "/tools-illustration.svg",
    arrow: "/arrow-white.svg",
    circle: "/circle-black.svg",
    line: "/line-black.svg",
    dark: false,
  },
  {
    title: "Guidance",
    desc: "I'm confused. I need clarity.",
    backDesc: "Navigate your engineering journey with expert advice.",
    buttons: [
      { label: "Senior-Connect", link: "/guidance/senior-connect" },
      { label: "College Process Explainer", link: "/guidance/process" },
      { label: "DO's and Donts's", link: "/guidance/dosanddonts" }
    ],
    img: "/guidance-illustration.svg",
    arrow: "/arrow-black.svg",
    circle: "/circle-white.svg",
    line: "/line-white.svg",
    dark: true,
  },
  {
    title: "Peer Help",
    desc: "I want to ask someone or find support.",
    backDesc: "Learn from those who have already conquered the path.",
    buttons: [
      { label: "Buddy Matcher", link: "/peer-help/buddy" },
      { label: "Response Forum", link: "/peer-help/response" }
    ],
    img: "/peer-help-illustration.svg",
    arrow: "/arrow-white.svg",
    circle: "/circle-black.svg",
    line: "/line-black.svg",
    dark: false,
  },
];

export default function Features() {
  const [hasAppeared, setHasAppeared] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasAppeared(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-12 px-4 md:px-10 font-sans overflow-hidden">
      {/* Container pop-in with smooth scale */}
      <div className={`max-w-7xl mx-auto border-[2px] border-black rounded-[40px] md:rounded-[50px] p-8 md:p-14 bg-[#F8F8F8] transition-all duration-1000 transform ${hasAppeared ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 px-2">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">What you get?</h2>
          <div className="max-w-[380px] mt-4 md:mt-0 md:text-right">
            <p className="text-[13px] text-zinc-600 leading-snug font-medium">
              Stop juggling apps. Plan your semester from here. <br />
              Categories, smart tools, peer support, and guidance; everything in one place.
            </p>
          </div>
        </div>

        {/* FLIPPING GRID WITH JUMPING ENTRANCE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureData.map((item, index) => (
            <div 
              key={index} 
              className={`group perspective-1000 h-[400px] cursor-pointer transition-all duration-1000 ${hasAppeared ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ 
                transitionDelay: `${index * 150}ms`, 
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' 
              }}
            >
              <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180 ease-in-out transform-gpu">
                
                {/* FRONT SIDE (UNFLIPPED) */}
                <div className={`absolute inset-0 backface-hidden rounded-[30px] p-6 border-[2px] border-black flex flex-col h-full z-10 ${
                  item.dark ? "bg-black text-white" : "bg-white text-black"
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <div className="relative w-10 h-10 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                      <Image src={item.circle} alt="" fill className="object-contain" />
                      <Image src={item.arrow} alt="icon" width={16} height={16} className="relative z-10" />
                    </div>
                  </div>

                  <div className="w-full mb-3 overflow-hidden">
                    <Image src={item.line} alt="" width={1000} height={2} className="w-full h-auto opacity-80" />
                  </div>

                  <p className="text-[13px] mb-3 leading-tight font-medium opacity-90">
                    {item.desc}
                  </p>
                  
                  {/* ILLUSTRATION with floating animation */}
                  <div className={`flex-1 rounded-[20px] overflow-hidden relative border-[1.5px] border-black transition-all duration-500 ${
                    item.dark ? "bg-white" : "bg-black"
                  }`}>
                    <div className="absolute inset-0 animate-float">
                      <Image src={item.img} alt={item.title} fill className="object-contain p-2 transition-transform duration-700 group-hover:scale-110" priority />
                    </div>
                  </div>
                </div>

                {/* BACK SIDE (FLIPPED) */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-[30px] p-7 border-[3px] border-black flex flex-col items-center justify-center text-center transition-all duration-500 transform-gpu ${
                  item.dark ? "bg-[#111] text-white" : "bg-white text-black shadow-xl"
                }`}>
                  <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter transition-all duration-500 group-hover:scale-105">{item.title}</h3>
                  <p className="text-[12px] leading-tight mb-6 font-medium opacity-70 px-4">{item.backDesc}</p>
                  
                  <div className="flex flex-col gap-2.5 w-full max-w-[200px]">
                    {item.buttons.map((btn, btnIndex) => (
                      <Link 
                        key={btnIndex}
                        href={btn.link} 
                        className={`py-2 px-5 rounded-xl border-[2px] border-black text-[10px] font-black uppercase tracking-widest transition-all 
                        hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none ${
                          item.dark ? "bg-white text-black hover:bg-zinc-200" : "bg-black text-white hover:bg-zinc-800"
                        }`}
                        style={{ transitionDelay: `${btnIndex * 50}ms` }}
                      >
                        {btn.label}
                      </Link>
                    ))}
                  </div>

                  <span className="mt-6 text-[9px] font-bold uppercase tracking-widest opacity-30">
                    Explore NextSem
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* SECTION FOOTER */}
        <div className={`mt-12 text-center space-y-2 transition-opacity duration-1000 delay-700 ${hasAppeared ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[11px] md:text-[12px] text-zinc-500 max-w-lg mx-auto leading-relaxed italic">
            "The power of education lies not in eliminating obstacles, but in equipping us with the tools and mindset to conquer them."
          </p>
          <p className="text-[11px] font-extrabold text-black uppercase tracking-widest">— Michael Brown</p>
        </div>
      </div>
    </section>
  );
}