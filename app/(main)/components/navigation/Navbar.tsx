"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Calendar, Palette, Calculator, CheckSquare, Folder,
  UserCheck, BookOpen, AlertCircle, Users, MessageSquare,
  PartyPopper, Briefcase, Bell, LogOut, User, Settings,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type UserType = {
  id: string;
  name: string;
  email: string;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [notifCount, setNotifCount] = useState(3); // replace with real notif count
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Fetch current user on mount
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data?.user) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/");
  };

  const featureIcons: any = {
    "Semester Planner": Calendar,
    "Design Mania": Palette,
    "CGPA Calculator": Calculator,
    "Attendance Calculator": CheckSquare,
    "Resource Vault": Folder,
    "Senior Connect": UserCheck,
    "College Process Explainer": BookOpen,
    "Do's & Don'ts": AlertCircle,
    "Buddy Matcher": Users,
    "Response Forum": MessageSquare,
    "College Societies & Events": PartyPopper,
    "Internship Calendar": Briefcase,
  };

  const featureUrlMap: Record<string, string> = {
    "Semester Planner": "/semester-planner",
    "Design Mania": "/design-mania",
    "CGPA Calculator": "/cgpa-calculator",
    "Attendance Calculator": "/attendance-calculator",
    "Resource Vault": "/resource-vault",
    "Senior Connect": "/senior-connect",
    "College Process Explainer": "/college-process-explainer",
    "Do's & Don'ts": "/dos-and-donts",
    "Buddy Matcher": "/buddy-matching",
    "Response Forum": "/response-forum",
    "College Societies & Events": "/college-societies-events",
    "Internship Calendar": "/internship-calendar",
  };

  const renderItem = (item: string) => {
    const Icon = featureIcons[item];
    const href = featureUrlMap[item] ?? "#";
    return (
      <Link href={href} key={item}>
        <motion.li
          whileHover={{ scale: 1.03, x: 4 }}
          className="flex items-center gap-2 cursor-pointer rounded-md px-2 py-1 text-zinc-700 hover:bg-zinc-100/60 transition"
        >
          <Icon size={16} className="text-zinc-500" />
          <span>{item}</span>
        </motion.li>
      </Link>
    );
  };

  // Get initials from name
  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 h-20 w-full border-b border-zinc-200/50 bg-white backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 font-medium text-zinc-900">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/LOGO.png" alt="Logo" width={60} height={60} priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-10 md:flex">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/">Home</Link>
            </motion.div>

            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <motion.button whileHover={{ scale: 1.05 }}>Features ▾</motion.button>

              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 z-50 mt-4 w-[760px] -translate-x-1/2 rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-xl backdrop-blur-md"
                  >
                    <div className="grid grid-cols-4 gap-6 text-sm">
                      <div>
                        <p className="mb-3 font-semibold text-zinc-900">Tools</p>
                        <ul className="space-y-2">
                          {["Semester Planner", "Design Mania", "CGPA Calculator", "Attendance Calculator", "Resource Vault"].map(renderItem)}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-3 font-semibold text-zinc-900">Guidance</p>
                        <ul className="space-y-2">
                          {["Senior Connect", "College Process Explainer", "Do's & Don'ts"].map(renderItem)}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-3 font-semibold text-zinc-900">Peer Help</p>
                        <ul className="space-y-2">
                          {["Buddy Matcher", "Response Forum"].map(renderItem)}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-3 font-semibold text-zinc-900">Campus Life</p>
                        <ul className="space-y-2">
                          {["College Societies & Events", "Internship Calendar"].map(renderItem)}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/contact">Contact Us</Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/about">About Us</Link>
            </motion.div>
          </div>

          {/* Right Side - Auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                {/* Notifications Bell */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 rounded-full hover:bg-zinc-100 transition"
                >
                  <Bell size={20} className="text-zinc-700" />
                  {notifCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {notifCount > 9 ? "9+" : notifCount}
                    </span>
                  )}
                </motion.button>

                {/* Profile Dropdown */}
                <div className="relative" ref={profileRef}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 hover:bg-zinc-50 transition"
                  >
                    {/* Avatar with initials */}
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                      {getInitials(user.name)}
                    </div>
                    <span className="text-sm font-medium">{user.name.split(" ")[0]}</span>
                    <span className="text-zinc-400 text-xs">▾</span>
                  </motion.button>

                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-56 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl z-50"
                      >
                        {/* User Info */}
                        <div className="px-3 py-2 mb-1 border-b border-zinc-100">
                          <p className="text-sm font-semibold text-zinc-900">{user.name}</p>
                          <p className="text-xs text-zinc-500 truncate">{user.email}</p>
                        </div>

                        {/* Menu Items */}
                        <Link href="/userDashboard">
                          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition">
                            <User size={15} />
                            My Profile
                          </button>
                        </Link>

                        <Link href="/settings">
                          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition">
                            <Settings size={15} />
                            Settings
                          </button>
                        </Link>

                        <div className="border-t border-zinc-100 mt-1 pt-1">
                          <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition"
                          >
                            <LogOut size={15} />
                            Log Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <Link href="/Authentication/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full border border-zinc-900 px-4 py-1.5 text-sm transition hover:bg-zinc-900 hover:text-white"
                >
                  Sign In
                </motion.button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded p-2 hover:bg-zinc-100 md:hidden"
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
              className="border-t bg-white/95 px-4 pb-4 backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col gap-2 py-3">
                <Link href="/" className="py-2">Home</Link>
                <Link href="/contact" className="py-2">Contact</Link>
                <Link href="/about" className="py-2">About</Link>

                <div className="mt-2 border-t border-zinc-200 pt-3">
                  <p className="mb-2 text-sm font-semibold text-zinc-500">Features</p>
                  <div className="space-y-1 text-sm">
                    {Object.keys(featureIcons).map((item) => (
                      <Link
                        key={item}
                        href={featureUrlMap[item]}
                        className="flex items-center gap-2 rounded-md px-2 py-2 text-zinc-700 hover:bg-zinc-100"
                      >
                        {(() => { const Icon = featureIcons[item]; return <Icon size={16} className="text-zinc-500" />; })()}
                        <span>{item}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Auth */}
                {user ? (
                  <div className="pt-3 border-t border-zinc-200 space-y-1">
                    <div className="flex items-center gap-3 px-2 py-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                        {getInitials(user.name)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{user.name}</p>
                        <p className="text-xs text-zinc-500">{user.email}</p>
                      </div>
                    </div>
                    <Link href="/profile" className="flex items-center gap-2 px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100 rounded-lg">
                      <User size={15} /> My Profile
                    </Link>
                    <Link href="/settings" className="flex items-center gap-2 px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100 rounded-lg">
                      <Settings size={15} /> Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 px-2 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <LogOut size={15} /> Log Out
                    </button>
                  </div>
                ) : (
                  <Link href="/Authentication/login" className="pt-3">
                    <button className="w-full rounded-full border border-zinc-900 px-4 py-2 text-sm transition hover:bg-zinc-900 hover:text-white">
                      Sign In
                    </button>
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="h-20" />
    </>
  );
}