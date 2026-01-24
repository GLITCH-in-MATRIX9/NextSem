
// // import Image from "next/image";

// // export default function BuddyMatching() {
// //   return (
// //     <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
// //       <main className="flex-grow container mx-auto max-w-6xl px-4 py-4">
        
// //         {/* Header Section - Contained Image */}
// //         <div className="relative mb-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 bg-black p-8 md:p-10 rounded-[40px] border border-zinc-800 shadow-2xl overflow-hidden">
// //           <div className="max-w-lg z-10">
// //             <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
// //               Buddy Matching
// //             </h1>
// //             <p className="text-zinc-400 text-lg leading-relaxed">
// //               Connect with like-minded individuals to collaborate on projects or study together.
// //             </p>
// //             <p className="text-zinc-400 text-lg font-medium italic mt-1">
// //               Choose your preferred matching type below.
// //             </p>
// //           </div>

// //           <div className="relative h-56 w-full md:h-72 md:w-[400px] flex justify-center items-center">
// //             <Image 
// //               src="/girls-group.png" 
// //               alt="Buddy Illustration" 
// //               fill 
// //               className="object-contain" 
// //               priority
// //             />
// //           </div>
// //         </div>

// //         {/* Two Cards Section - Reduced Gaps & Increased Image Sizes */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
// //           {/* Card 1: Study Buddy */}
// //           <div className="bg-white rounded-[40px] p-6 shadow-lg flex flex-col items-center border border-zinc-100">
// //             <h2 className="text-4xl font-black text-zinc-900 mb-2 text-center">Study Buddy</h2>
            
// //             <p className="text-zinc-700 text-center text-lg font-medium mb-4 px-2 leading-snug">
// //               Find a study partner to collaborate on coursework, prepare for exams, and share knowledge together.
// //             </p>
            
// //             <div className="space-y-2 mb-4 w-full max-w-sm">
// //               <div className="flex items-center gap-3">
// //                 <span className="flex-shrink-0 h-6 w-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
// //                 <p className="text-zinc-800 text-lg font-semibold">Match based on courses and subjects</p>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <span className="flex-shrink-0 h-6 w-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
// //                 <p className="text-zinc-800 text-lg font-semibold">Share knowledge, notes and resources</p>
// //               </div>
// //             </div>

// //             <div className="mt-auto flex w-full items-center justify-between border-t border-zinc-50">
// //               {/* Increased Image Size */}
// //               <div className="relative h-64 w-64 md:h-80 md:w-80">
// //                 <Image src="/card11.png" alt="Study Buddy" fill className="object-contain" />
// //               </div>
// //               <button className="h-40 w-40 rounded-full bg-zinc-200 text-zinc-900 font-black text-center flex items-center justify-center p-4 text-xl leading-tight hover:bg-zinc-900 hover:text-white transition-all duration-300">
// //                 Find Your <br/> Study Buddy
// //               </button>
// //             </div>
// //           </div>

// //           {/* Card 2: Project Partner */}
// //           <div className="bg-white rounded-[40px] p-6 shadow-lg flex flex-col items-center border border-zinc-100">
// //             <h2 className="text-4xl font-black text-zinc-900 mb-2 text-center">Project Partner</h2>
            
// //             <p className="text-zinc-700 text-center text-lg font-medium mb-4 px-2 leading-snug">
// //               Connect with developers and creators to build amazing projects and bring your ideas to life.
// //             </p>

// //             <div className="space-y-2 mb-4 w-full max-w-sm">
// //               <div className="flex items-center gap-3">
// //                 <span className="flex-shrink-0 h-6 w-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
// //                 <p className="text-zinc-800 text-lg font-semibold">Collaborate on exciting projects</p>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <span className="flex-shrink-0 h-6 w-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
// //                 <p className="text-zinc-800 text-lg font-semibold">Match based on tech stack and skills</p>
// //               </div>
// //             </div>

// //             <div className="mt-auto flex w-full items-center justify-between border-t border-zinc-50">
// //               {/* Increased Image Size */}
// //               <div className="relative h-64 w-64 md:h-80 md:w-80">
// //                 <Image src="/card22.png" alt="Project Partner" fill className="object-contain" />
// //               </div>
// //               <button className="h-40 w-40 rounded-full bg-zinc-200 text-zinc-900 font-black text-center flex items-center justify-center p-4 text-xl leading-tight hover:bg-zinc-900 hover:text-white transition-all duration-300">
// //                 Find Your <br/> Project Partner
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }
// import Image from "next/image";

// export default function BuddyMatching() {
//   return (
//     <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
//       <main className="flex-grow container mx-auto max-w-6xl px-4 py-2">
        
//         {/* Header Section */}
//         <div className="relative mb-4 mt-2 flex flex-col md:flex-row items-center justify-between gap-6 bg-black p-8 md:p-10 rounded-[40px] border border-zinc-800 shadow-2xl overflow-hidden">
//           <div className="max-w-lg z-10">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
//               Buddy Matching
//             </h1>
//             <p className="text-zinc-400 text-lg leading-relaxed">
//               Connect with like-minded individuals to collaborate on projects or study together.
//             </p>
//           </div>

//           <div className="relative h-48 w-full md:h-64 md:w-[380px] flex justify-center items-center">
//             <Image 
//               src="/girls-group.png" 
//               alt="Buddy Illustration" 
//               fill 
//               className="object-contain" 
//               priority
//             />
//           </div>
//         </div>

//         {/* Integrated TIP Section - Placed between Header and Cards */}
//         <div className="mb-4 mx-auto max-w-2xl bg-white border border-zinc-100 rounded-2xl p-3 flex items-center gap-3 shadow-sm">
//           <div className="relative h-8 w-8 flex-shrink-0">
//             <Image src="/bulb.png" alt="Tip" fill className="object-contain" />
//           </div>
//           <p className="text-xs text-zinc-600">
//             <span className="font-bold">TIP:</span> Update your <span className="text-blue-500 underline cursor-pointer">profile</span> first to show your skills to potential matches!
//           </p>
//         </div>

//         {/* Cards Section - Shorter Height & Larger Images */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          
//           {/* Card 1: Study Buddy */}
//           <div className="bg-white rounded-[32px] p-5 shadow-lg flex flex-col items-center border border-zinc-50">
//             <h2 className="text-3xl font-black text-zinc-900 mb-1 text-center">Study Buddy</h2>
            
//             <p className="text-zinc-600 text-center text-base font-medium mb-3 px-2">
//               Collaborate on coursework and prepare for exams together.
//             </p>
            
//             <div className="space-y-1 mb-3 w-full max-w-xs">
//               <div className="flex items-center gap-2">
//                 <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-[10px]">✓</span>
//                 <p className="text-zinc-800 text-sm font-semibold">Match based on courses</p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-[10px]">✓</span>
//                 <p className="text-zinc-800 text-sm font-semibold">Share knowledge and notes</p>
//               </div>
//             </div>

//             <div className="mt-auto flex w-full items-center justify-around gap-2 pt-2 border-t border-zinc-50">
//               {/* Maximized Image Size */}
//               <div className="relative h-72 w-72 lg:h-80 lg:w-80 transition-transform hover:scale-105 duration-300">
//                 <Image src="/card11.png" alt="Study Buddy" fill className="object-contain" />
//               </div>
//               <button className="h-32 w-32 rounded-full bg-zinc-900 text-white font-bold text-center flex items-center justify-center p-3 text-lg leading-tight shadow-md hover:bg-zinc-800 transition-colors">
//                 Find Your <br/> Buddy
//               </button>
//             </div>
//           </div>

//           {/* Card 2: Project Partner */}
//           <div className="bg-white rounded-[32px] p-5 shadow-lg flex flex-col items-center border border-zinc-50">
//             <h2 className="text-3xl font-black text-zinc-900 mb-1 text-center">Project Partner</h2>
            
//             <p className="text-zinc-600 text-center text-base font-medium mb-3 px-2">
//               Build amazing projects and bring your ideas to life.
//             </p>

//             <div className="space-y-1 mb-3 w-full max-w-xs">
//               <div className="flex items-center gap-2">
//                 <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-[10px]">✓</span>
//                 <p className="text-zinc-800 text-sm font-semibold">Collaborate on projects</p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-[10px]">✓</span>
//                 <p className="text-zinc-800 text-sm font-semibold">Match by tech stack</p>
//               </div>
//             </div>

//             <div className="mt-auto flex w-full items-center justify-around gap-2 pt-2 border-t border-zinc-50">
//               {/* Maximized Image Size */}
//               <div className="relative h-72 w-72 lg:h-80 lg:w-80 transition-transform hover:scale-105 duration-300">
//                 <Image src="/card22.png" alt="Project Partner" fill className="object-contain" />
//               </div>
//               <button className="h-32 w-32 rounded-full bg-zinc-900 text-white font-bold text-center flex items-center justify-center p-3 text-lg leading-tight shadow-md hover:bg-zinc-800 transition-colors">
//                 Find Your <br/> Partner
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BuddyMatching() {
  const textLines = [
    "Do you feel you lack the right connections for projects or studies?",
    "Struggling to find teammates who are equally motivated as you?",
    "Tired of doing projects alone while others work in groups?",
    "Don’t know whom to approach for hackathons or semester projects?",
    "Wish you had a study buddy who actually studies with you?",
    "Confused about how others build amazing projects together?",
    "Looking for people with the same skills and interests as yours?",
    "Feel stuck because you don’t have the right peer group?",
    "Want a partner who matches your learning speed and goals?",
    "Stop guessing. Start matching with the right people."
  ];

  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate-slide-in-right");

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

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans relative overflow-hidden">
      
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-slide-in-right { animation: slideInRight 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-slide-out-left { animation: slideOutLeft 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* Background Decor Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3"></div>

      <main className="flex-grow container mx-auto max-w-6xl px-4 py-6">
        
        {/* Header Section */}
        <div className="relative mb-6 mt-2 flex flex-col md:flex-row items-center justify-between gap-6 bg-black p-8 md:p-12 rounded-[48px] border border-zinc-800 shadow-2xl overflow-hidden group hover:shadow-blue-900/20 transition-all duration-500">
          <div className="max-w-lg z-10 relative">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
              Buddy Matching <span className="text-blue-500">.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              Connect with like-minded individuals to collaborate on projects or study together.
            </p>
          </div>

          <div className="relative h-56 w-full md:h-72 md:w-[420px] flex justify-center items-center animate-float">
            <Image 
              src="/girls-group.png" 
              alt="Buddy Illustration" 
              fill 
              className="object-contain drop-shadow-xl" 
              priority
            />
          </div>
        </div>

        {/* Animated Text Section */}
        <div className="h-20 flex items-center justify-center mb-6 px-4 overflow-hidden relative">
          <p 
            key={index}
            className={`text-2xl md:text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight max-w-4xl ${animationClass}`}
          >
            {textLines[index]}
          </p>
        </div>

        {/* IMPROVED TIP SECTION */}
        <div className="mb-10 mx-auto max-w-3xl relative group z-10">
          {/* Animated Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30 group-hover:opacity-60 blur-md transition duration-500"></div>
          
          {/* Main Tip Box Content */}
          <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-full p-3 pl-4 pr-8 flex items-center gap-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.01]">
            
            {/* Icon Container with Circle Background */}
            <div className="h-12 w-12 flex-shrink-0 bg-yellow-100 rounded-full flex items-center justify-center border border-yellow-200 shadow-inner group-hover:rotate-12 transition-transform duration-300">
              <div className="relative h-7 w-7 animate-pulse">
                <Image src="/bulb.png" alt="Tip" fill className="object-contain" />
              </div>
            </div>
            
            {/* Tip Text */}
            <p className="text-base text-zinc-600 font-medium flex-grow leading-snug">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide">PRO TIP:</span> 
              {" "}Update your <span className="text-zinc-900 font-extrabold underline decoration-blue-400 underline-offset-4 cursor-pointer hover:text-blue-600 hover:decoration-blue-600 transition-all">profile</span> to unlock smart matching!
            </p>
            
            {/* Decorative Arrow */}
            <div className="hidden sm:block text-zinc-300 group-hover:text-blue-500 transition-colors duration-300 transform group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: Study Buddy */}
          <div className="group bg-white rounded-[40px] p-5 shadow-xl flex flex-col items-center border border-zinc-100 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-4xl font-black text-zinc-900 mb-1 text-center group-hover:text-blue-600 transition-colors">Study Buddy</h2>
            
            <p className="text-zinc-600 text-center text-lg font-medium mb-3 px-2 leading-tight">
              Collaborate on coursework and prepare for exams together.
            </p>
            
            <div className="space-y-2 mb-2 w-full max-w-sm">
              <div className="flex items-center gap-3 bg-zinc-50 p-2 rounded-xl">
                <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">✓</span>
                <p className="text-zinc-800 text-sm font-bold">Match based on courses</p>
              </div>
              <div className="flex items-center gap-3 bg-zinc-50 p-2 rounded-xl">
                <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">✓</span>
                <p className="text-zinc-800 text-sm font-bold">Share knowledge and notes</p>
              </div>
            </div>

            <div className="mt-auto flex w-full items-center justify-around gap-2 pt-2 border-t border-zinc-100">
              <div className="relative h-72 w-72 transition-transform duration-500 group-hover:scale-110">
                <Image src="/card11.png" alt="Study Buddy" fill className="object-contain" />
              </div>
              <button className="h-32 w-32 rounded-full bg-zinc-900 text-white font-bold text-center flex items-center justify-center p-3 text-lg leading-tight shadow-lg group-hover:bg-blue-600 group-hover:scale-105 transition-all duration-300">
                Find Your <br/> Buddy
              </button>
            </div>
          </div>

          {/* Card 2: Project Partner */}
          <div className="group bg-white rounded-[40px] p-5 shadow-xl flex flex-col items-center border border-zinc-100 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-4xl font-black text-zinc-900 mb-1 text-center group-hover:text-purple-600 transition-colors">Project Partner</h2>
            
            <p className="text-zinc-600 text-center text-lg font-medium mb-3 px-2 leading-tight">
              Build amazing projects and bring your ideas to life.
            </p>

            <div className="space-y-2 mb-2 w-full max-w-sm">
              <div className="flex items-center gap-3 bg-zinc-50 p-2 rounded-xl">
                <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">✓</span>
                <p className="text-zinc-800 text-sm font-bold">Collaborate on projects</p>
              </div>
              <div className="flex items-center gap-3 bg-zinc-50 p-2 rounded-xl">
                <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">✓</span>
                <p className="text-zinc-800 text-sm font-bold">Match by tech stack</p>
              </div>
            </div>

            <div className="mt-auto flex w-full items-center justify-around gap-2 pt-2 border-t border-zinc-100">
              <div className="relative h-72 w-72 transition-transform duration-500 group-hover:scale-110">
                <Image src="/card22.png" alt="Project Partner" fill className="object-contain" />
              </div>
              <button className="h-32 w-32 rounded-full bg-zinc-900 text-white font-bold text-center flex items-center justify-center p-3 text-lg leading-tight shadow-lg group-hover:bg-purple-600 group-hover:scale-105 transition-all duration-300">
                Find Your <br/> Partner
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}