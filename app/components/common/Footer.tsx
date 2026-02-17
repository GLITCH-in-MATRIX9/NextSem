// export default function Footer() {
//   return (
//     <footer className="w-full border-t border-zinc-200 bg-white px-6 py-4 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:bg-black dark:text-zinc-400">
//       © {new Date().getFullYear()} My App. All rights reserved.
//     </footer>
//   );
// }
"use client";

import React, { useEffect, useState } from 'react';

const Footer = () => {
  // We need this state to track if the website is in dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if 'dark' class exists on the html tag (common for Tailwind dark mode)
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Just in case someone toggles it while looking at the footer
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const footerLinks = {
    tools: [
      { name: "Semester Planner", href: "#" },
      { name: "Design Mania", href: "#" },
      { name: "CGPA Calculator", href: "#" },
      { name: "Attendance Calculator", href: "#" },
      { name: "Resource Vault", href: "#" }
    ],
    guidance: [
      { name: "Senior Connect", href: "#" },
      { name: "College Process Explainer", href: "#" },
      { name: "DOs and Don'ts", href: "#" }
    ],
    peerHelp: [
      { name: "Buddy Matcher", href: "#" },
      { name: "Response Forum", href: "#" }
    ]
  };

  return (
    <footer className="w-full flex flex-col font-sans overflow-hidden">
      {/* SECTION 1: HEADER AREA */}
      <div className="bg-black text-white px-10 pt-20 pb-40 relative min-h-[600px]">
        
        <div className="absolute inset-0 pointer-events-none z-0">
            <span className="absolute bottom-[18%] right-[32%] text-blue-400 text-[14px] animate-[pulse_0.8s_infinite] [animation-delay:0.1s]">★</span>
            <span className="absolute bottom-[28%] right-[25%] text-orange-600 text-[11px] animate-[pulse_0.6s_infinite] [animation-delay:0.3s]">★</span>
            <span className="absolute bottom-[12%] right-[22%] text-white text-[8px] opacity-60 animate-[pulse_1s_infinite]">●</span>
            <span className="absolute bottom-[35%] right-[28%] text-blue-500 text-[15px] animate-[pulse_0.7s_infinite] [animation-delay:0.5s]">★</span>
            <span className="absolute bottom-[22%] right-[38%] text-blue-300 text-[12px] animate-[pulse_0.9s_infinite] [animation-delay:0.2s]">✦</span>
            <span className="absolute bottom-[40%] right-[15%] text-white text-[10px] animate-[pulse_1.1s_infinite]">★</span>
            <span className="absolute bottom-[10%] right-[40%] text-orange-400 text-[9px] animate-[pulse_0.5s_infinite]">✦</span>
            
            <span className="absolute bottom-[15%] left-[40%] text-blue-500 text-xl animate-[pulse_0.5s_infinite]">★</span>
            <span className="absolute bottom-[22%] left-[44%] text-white text-[11px] opacity-40 animate-[pulse_1.2s_infinite] [animation-delay:0.4s]">●</span>
            <span className="absolute bottom-[18%] right-[40%] text-blue-400 text-lg animate-[pulse_0.8s_infinite] [animation-delay:0.6s]">★</span>
            <span className="absolute bottom-[8%] right-[46%] text-orange-500 text-[14px] animate-[pulse_0.7s_infinite] [animation-delay:0.1s]">★</span>
            <span className="absolute bottom-[25%] left-[48%] text-blue-300 text-[10px] animate-[pulse_1s_infinite]">✦</span>
            <span className="absolute bottom-[5%] left-[38%] text-white text-[8px] animate-[pulse_0.6s_infinite] [animation-delay:0.2s]">★</span>

            <span className="absolute top-[15%] left-[12%] text-blue-500 text-2xl animate-[pulse_1s_infinite]">★</span>
            <span className="absolute top-[35%] left-[35%] text-blue-400 text-sm animate-[pulse_0.9s_infinite] [animation-delay:0.8s]">✦</span>
            <span className="absolute top-[10%] right-[25%] text-orange-500 text-lg animate-[pulse_1.1s_infinite] [animation-delay:0.3s]">★</span>
            <span className="absolute top-[25%] right-[10%] text-blue-600 text-md animate-[pulse_0.7s_infinite]">★</span>
            <span className="absolute top-[50%] left-[8%] text-white text-[9px] opacity-30 animate-[pulse_1.3s_infinite]">●</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-row justify-between items-start w-full mb-20">
            <div className="w-1/3">
              <h3 className="text-[32px] font-bold mb-6">Tools</h3>
              <ul className="space-y-3 text-[20px] opacity-90">
                {footerLinks.tools.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                      • {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-1/3 flex justify-center">
              <div className="text-left">
                <h3 className="text-[32px] font-bold mb-6">Guidance</h3>
                <ul className="space-y-3 text-[20px] opacity-90">
                  {footerLinks.guidance.map(link => (
                    <li key={link.name}>
                      <a href={link.href} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                        • {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-1/3 flex justify-end">
              <div className="text-left min-w-[200px]">
                <h3 className="text-[32px] font-bold mb-6">Peer Help</h3>
                <ul className="space-y-3 text-[20px] opacity-90">
                  {footerLinks.peerHelp.map(link => (
                    <li key={link.name}>
                      <a href={link.href} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                        • {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 z-30">
          <img src="/white_logo.png" alt="Next Sem Logo" className="w-64 h-auto" />
        </div>

        <div className="absolute right-10 bottom-2 z-20">
          <img src="/footer_img.png" alt="Character" className="w-[350px] h-auto object-contain" />
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <img src="/footer_red_ellipse.png" alt="" className="w-full h-auto scale-110 translate-y-4" />
        </div>
      </div>

      {/* SECTION 2: MIDDLE AREA */}
      <div className={`py-24 flex flex-col items-center justify-center relative transition-colors duration-500 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
        <div className="absolute inset-0 pointer-events-none">
            <span className="absolute top-[45%] left-[15%] text-orange-500 text-lg animate-[pulse_0.8s_infinite]">★</span>
            <span className="absolute top-[65%] left-[10%] text-blue-600 text-sm animate-[pulse_0.6s_infinite] [animation-delay:0.2s]">★</span>
            <span className="absolute top-[55%] left-[26%] text-blue-600 text-3xl animate-[pulse_1s_infinite]">★</span>
            <span className="absolute top-[40%] right-[17%] text-orange-600 text-lg animate-[pulse_0.7s_infinite] [animation-delay:0.4s]">★</span>
            <span className="absolute top-[35%] right-[13%] text-orange-600 text-sm animate-[pulse_0.9s_infinite] [animation-delay:0.1s]">★</span>
            <span className="absolute top-[60%] right-[10%] text-blue-500 text-lg animate-[pulse_0.5s_infinite]">★</span>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
            <div className="relative mb-10 w-full flex justify-center items-center">
                <div className="flex items-center justify-center">
                    <h2 className={`text-4xl md:text-5xl font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        Made For Students
                    </h2>
                </div>
            </div>

            <div className="flex gap-8">
                <a href="#"><img src="/linkedin.png" alt="LinkedIn" className="w-12 h-12 hover:scale-110 transition-transform" /></a>
                <a href="#"><img src="/fb.png" alt="Facebook" className="w-12 h-12 hover:scale-110 transition-transform" /></a>
                <a href="#"><img src="/x.png" alt="X" className="w-12 h-12 hover:scale-110 transition-transform" /></a>
                <a href="#"><img src="/insta.png" alt="Instagram" className="w-12 h-12 hover:scale-110 transition-transform" /></a>
            </div>
        </div>
      </div>

      {/* SECTION 3: COPYRIGHT BAR */}
      <div className={`py-10 text-center text-base font-medium transition-colors ${isDarkMode ? 'bg-[#1a1a1a] text-gray-400' : 'bg-[#D9D9D9] text-black'}`}>
        © 2026 NextSem. All rights reserved. Content for educational purposes only.
      </div>
    </footer>
  );
};

export default Footer;