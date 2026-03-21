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

  const renderItem = (item: string) => {
    const Icon = featureIcons[item];
    return (
      <motion.li
        key={item}
        whileHover={{ scale: 1.03, x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center gap-2 cursor-pointer rounded-md px-2 py-1 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
      >
        <motion.div whileHover={{ rotate: 5 }}>
          <Icon size={16} className="text-zinc-500" />
        </motion.div>
        <span>{item}</span>
      </motion.li>
    );
  };

  return (
    <nav className="w-full border-b border-zinc-200 bg-white px-4 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between font-medium text-zinc-900">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/LOGO.png"
            alt="NextSem Logo"
            width={70}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/">Home</Link>
          </motion.div>

          {/* Features Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1"
            >
              Features <span className="text-sm">▾</span>
            </motion.button>

            <AnimatePresence>
              {featuresOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 z-50 w-[580px] -translate-x-1/2 mt-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-lg"
                >
                  <div className="absolute -top-4 left-0 h-4 w-full" />

                  <div className="grid grid-cols-3 gap-6 text-sm">

                    <div>
                      <p className="mb-3 font-semibold text-zinc-900">Tools</p>
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
                      <p className="mb-3 font-semibold text-zinc-900">Guidance</p>
                      <ul className="space-y-2">
                        {[
                          "Senior Connect",
                          "College Process Explainer",
                          "Do’s & Don’ts",
                        ].map(renderItem)}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-3 font-semibold text-zinc-900">Peer Help</p>
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
        <Link href="/Authentication/Login" className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-zinc-900 px-4 py-1.5 text-sm"
          >
            Sign In
          </motion.button>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-zinc-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-2 space-y-2 border-t border-zinc-200 pt-2 overflow-hidden"
          >
            <Link href="/" className="block px-2 py-2 rounded hover:bg-zinc-100">
              Home
            </Link>

            <div>
              <button
                className="w-full flex justify-between items-center px-2 py-2 rounded hover:bg-zinc-100"
                onClick={() => setFeaturesOpen(!featuresOpen)}
              >
                Features {featuresOpen ? "▴" : "▾"}
              </button>

              {featuresOpen && (
                <div className="mt-2 ml-2 space-y-1">
                  {Object.keys(featureIcons).map((item) => {
                    const Icon = featureIcons[item];
                    return (
                      <div
                        key={item}
                        className="flex items-center gap-2 px-2 py-1 rounded hover:bg-zinc-100"
                      >
                        <Icon size={16} className="text-zinc-500" />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/contact" className="block px-2 py-2 rounded hover:bg-zinc-100">
              Contact
            </Link>
            <Link href="/about" className="block px-2 py-2 rounded hover:bg-zinc-100">
              About Us
            </Link>
            <Link href="/Authentication/Login" className="block px-2 py-2 rounded hover:bg-zinc-100">
              Sign In
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}