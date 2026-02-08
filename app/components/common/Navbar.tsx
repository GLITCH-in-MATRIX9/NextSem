"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Palette,
  Calculator,
  CheckSquare,
  Folder,
  UserCheck,
  BookOpen,
  AlertCircle,
  Users,
  MessageSquare,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const featureIcons = {
    "Semester Planner": Calendar,
    "Design Mania": Palette,
    "CGPA Calculator": Calculator,
    "Attendance Calculator": CheckSquare,
    "Resource Vault": Folder,
    "Senior Connect": UserCheck,
    "College Process Explainer": BookOpen,
    "Do’s & Don’ts": AlertCircle,
    "Buddy Matcher": Users,
    "Response Forum": MessageSquare,
  };

  const renderItem = (item) => {
    const Icon = featureIcons[item];
    return (
      <li
        key={item}
        className="flex items-center gap-2 cursor-pointer rounded-md px-2 py-1 transition hover:bg-zinc-100 hover:text-zinc-900"
      >
        {Icon && <Icon size={16} className="text-zinc-500" />}
        <span>{item}</span>
      </li>
    );
  };

  return (
    <nav className="w-full border-b border-zinc-200 bg-white px-4 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between font-medium text-zinc-900">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/LOGO.png" alt="NextSem Logo" width={70} height={70} priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/" className="hover:opacity-70">Home</Link>

          {/* Features Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:opacity-70">
              Features <span className="text-sm">▾</span>
            </button>

            <div className="absolute left-1/2 top-full z-50 mt-4 hidden w-[580px] -translate-x-1/2 rounded-xl border border-zinc-200 bg-white p-5 shadow-lg group-hover:block">
              <div className="grid grid-cols-3 gap-6 text-sm">
                
                {/* TOOLS */}
                <div>
                  <p className="mb-3 font-semibold text-zinc-900">Tools</p>
                  <ul className="space-y-2 text-zinc-600">
                    {["Semester Planner","Design Mania","CGPA Calculator","Attendance Calculator","Resource Vault"].map(renderItem)}
                  </ul>
                </div>

                {/* GUIDANCE */}
                <div>
                  <p className="mb-3 font-semibold text-zinc-900">Guidance</p>
                  <ul className="space-y-2 text-zinc-600">
                    {["Senior Connect","College Process Explainer","Do’s & Don’ts"].map(renderItem)}
                  </ul>
                </div>

                {/* PEER HELP */}
                <div>
                  <p className="mb-3 font-semibold text-zinc-900">Peer Help</p>
                  <ul className="space-y-2 text-zinc-600">
                    {["Buddy Matcher","Response Forum"].map(renderItem)}
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <Link href="/contact" className="hover:opacity-70">Contact</Link>
          <Link href="/about" className="hover:opacity-70">About Us</Link>
        </div>

        {/* Sign In */}
        <Link href="/Authentication/Login" className="hidden md:block">
          <button className="rounded-full border border-zinc-900 px-4 py-1.5 text-sm hover:bg-zinc-900 hover:text-white">
            Sign In
          </button>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-zinc-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 border-t border-zinc-200 pt-2">
          <Link href="/" className="block px-2 py-2 rounded text-zinc-700 hover:bg-zinc-100">
            Home
          </Link>

          {/* Mobile Features */}
          <div>
            <button
              className="w-full flex justify-between items-center px-2 py-2 rounded text-zinc-700 hover:bg-zinc-100"
              onClick={() => setFeaturesOpen(!featuresOpen)}
            >
              Features {featuresOpen ? "▴" : "▾"}
            </button>

            {featuresOpen && (
              <div className="mt-2 ml-2 space-y-1">
                {Object.keys(featureIcons).map(item => {
                  const Icon = featureIcons[item];
                  return (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-2 py-1 rounded text-zinc-600 hover:bg-zinc-100 cursor-pointer"
                    >
                      <Icon size={16} className="text-zinc-500" />
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/contact" className="block px-2 py-2 rounded text-zinc-700 hover:bg-zinc-100">
            Contact
          </Link>
          <Link href="/about" className="block px-2 py-2 rounded text-zinc-700 hover:bg-zinc-100">
            About Us
          </Link>
          <Link href="/Authentication/Login" className="block px-2 py-2 rounded text-zinc-700 hover:bg-zinc-100">
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
