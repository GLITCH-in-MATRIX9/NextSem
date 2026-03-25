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
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const featureIcons: any = {
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

  const featureUrlMap: Record<string, string> = {
    "Semester Planner": "/semester-planner",
    "Design Mania": "/design-mania",
    "CGPA Calculator": "/cgpa-calculator",
    "Attendance Calculator": "/attendance-calculator",
    "Resource Vault": "/resource-vault",
    "Senior Connect": "/senior-connect",
    "College Process Explainer": "/college-process-explainer",
    "Do’s & Don’ts": "/dos-and-donts",
    "Buddy Matcher": "/buddy-matching",
    "Response Forum": "/response-forum",
  };

  const renderItem = (item: string) => {
    const Icon = featureIcons[item];
    const href = featureUrlMap[item] ?? "#";

    return (
      <Link href={href} key={item}>
        <motion.li
          whileHover={{ scale: 1.03, x: 4 }}
          className="flex items-center gap-2 cursor-pointer rounded-md px-2 py-1 text-zinc-700 hover:bg-zinc-100/60"
        >
          <Icon size={16} className="text-zinc-500" />
          <span>{item}</span>
        </motion.li>
      </Link>
    );
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 h-20 
        bg-white backdrop-blur-md border-b border-zinc-200/50 shadow-sm">
        
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 font-medium text-zinc-900">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/LOGO.png" alt="Logo" width={60} height={60} priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/">Home</Link>
            </motion.div>

            {/* Features */}
            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <motion.button whileHover={{ scale: 1.05 }}>
                Features ▾
              </motion.button>

              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-145 rounded-xl border border-zinc-200/50 bg-white backdrop-blur-md p-5 shadow-lg z-50"
                  >
                    <div className="grid grid-cols-3 gap-6 text-sm">

                      <div>
                        <p className="mb-3 font-semibold">Tools</p>
                        <ul className="space-y-2">
                          {[
                            "Semester Planner",
                            "Design Mania",
                            "CGPA Calculator",
                            "Attendance Calculator",
                            "Resource Vault",
                          ].map(renderItem)}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-3 font-semibold">Guidance</p>
                        <ul className="space-y-2">
                          {[
                            "Senior Connect",
                            "College Process Explainer",
                            "Do’s & Don’ts",
                          ].map(renderItem)}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-3 font-semibold">Peer Help</p>
                        <ul className="space-y-2">
                          {["Buddy Matcher", "Response Forum"].map(renderItem)}
                        </ul>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/contact">Contact</Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/about">About Us</Link>
            </motion.div>
          </div>

          {/* Sign In */}
          <Link href="/Authentication/login" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-zinc-900 px-4 py-1.5 text-sm hover:bg-zinc-900 hover:text-white transition"
            >
              Sign In
            </motion.button>
          </Link>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-zinc-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden px-4 pb-4 bg-white/90 backdrop-blur-md border-t"
            >
              <Link href="/" className="block py-2">Home</Link>
              <Link href="/contact" className="block py-2">Contact</Link>
              <Link href="/about" className="block py-2">About</Link>
              <Link href="/Authentication/login" className="block py-2">Sign In</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* PAGE OFFSET (VERY IMPORTANT) */}
      <div className="h-20" />
    </>
  );
}