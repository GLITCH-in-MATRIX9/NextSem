"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const footerLinks = {
    tools: [

      { name: "Semester Planner",       href: "/tools/sem-planner" },
      { name: "Design Mania",           href: "/tools/design" },
      { name: "CGPA Calculator",        href: "/tools/gpa-calculator" },
      { name: "Attendance Calculator",  href: "/tools/attendance-calculator" },
      { name: "Resource Vault",         href: "/tools/resources" },

    ],
    guidance: [
      { name: "Senior Connect",             href: "/guidance/senior-connect" },
      { name: "College Process Explainer",  href: "/guidance/process" },
      { name: "DOs and Don'ts",             href: "/guidance/dosanddonts" },
    ],
    peerHelp: [
      { name: "Buddy Matcher",   href: "/buddy-matching" },   // ← updated
      { name: "Response Forum",  href: "/peer-help/response" },
    ],
  };

  return (
    <footer className="w-full flex flex-col font-sans overflow-hidden">

      {/* SECTION 1 */}
      <div className="bg-black text-white px-8 pt-16 pb-32 relative min-h-[500px]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-row justify-between items-start w-full mb-16">

            {/* Tools */}
            <div className="w-1/3">
              <h3 className="text-2xl font-bold mb-4">Tools</h3>
              <ul className="space-y-2 text-base opacity-90">
                {footerLinks.tools.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white/70 transition">
                      • {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidance */}
            <div className="w-1/3 flex justify-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">Guidance</h3>
                <ul className="space-y-2 text-base opacity-90">
                  {footerLinks.guidance.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-white/70 transition">
                        • {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Peer Help */}
            <div className="w-1/3 flex justify-end">
              <div className="text-left min-w-[180px]">
                <h3 className="text-2xl font-bold mb-4">Peer Help</h3>
                <ul className="space-y-2 text-base opacity-90">
                  {footerLinks.peerHelp.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-white/70 transition">
                        • {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 z-20">
          <img src="/white_logo.png" alt="Logo" className="w-40 h-auto" />
        </div>

        {/* Character */}
        <div className="absolute right-8 bottom-0 z-10">
          <img src="/footer_img.png" alt="Character" className="w-[240px] h-auto" />
        </div>

        {/* Bottom ellipse */}
        <div className="absolute bottom-0 left-0 w-full">
          <img src="/footer_red_ellipse.png" alt="" className="w-full scale-110 translate-y-3" />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className={`py-16 flex flex-col items-center justify-center transition-colors ${isDarkMode ? "bg-[#121212]" : "bg-white"}`}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
          Made For Students
        </h2>
        <div className="flex gap-6">
          {["linkedin", "fb", "x", "insta"].map((icon) => (
            <a key={icon} href="#">
              <img src={`/${icon}.png`} alt={icon} className="w-9 h-9 hover:scale-110 transition" />
            </a>
          ))}
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="w-full bg-white border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-sm text-black/70">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-black">NextSem</span>. All rights reserved.
          </p>
          <div className="flex gap-5 mt-2 md:mt-0">
            <a href="#" className="hover:text-black transition">Privacy</a>
            <a href="#" className="hover:text-black transition">Terms</a>
            <a href="#" className="hover:text-black transition">Contact</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;