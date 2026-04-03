"use client";

import {
  Search,
  CalendarDays,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedWord() {
  const words = ["Notes", "PYQs", "Help", "Senior", "Buddy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex justify-center min-w-[260px] h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 flex items-center justify-center font-extrabold tracking-wide text-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3));

  const holidaysMap: Record<string, string> = {
    "2026-04-10": "Mahavir Jayanti",
    "2026-04-14": "Dr Ambedkar Jayanti",
    "2026-04-18": "Good Friday",
    "2026-04-25": "Parshuram Jayanti",
  };

  const festMap: Record<string, string> = {
    "2026-04-12": "Resonanz",
    "2026-04-18": "Hackathon Week",
    "2026-04-25": "Spring Fest",
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const daysArray = [];
    for (let i = 0; i < firstDay; i++) daysArray.push(null);
    for (let i = 1; i <= totalDays; i++) daysArray.push(i);

    return daysArray;
  };

  const formatDateKey = (day: number) => {
    const y = currentDate.getFullYear();
    const m = String(currentDate.getMonth() + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const calendarDays = getDaysInMonth(currentDate);

  const quickLinks = [
    "DSA Notes",
    "OS PYQs",
    "DBMS Important",
    "AI Unit 2",
    "Upcoming Fests",
    "Internship Deadlines",
  ];

  return (
    <section className="w-full min-h-[88vh] bg-white text-black px-6 py-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
        
        {/* LEFT */}
        <div className="lg:col-span-3 flex flex-col h-full">
          
          {/* Search */}
          <div className="w-full flex justify-start mb-10">
            <div className="flex w-full max-w-3xl items-center border border-black/20 rounded-full bg-white shadow-sm px-4 py-2 text-lg transition-all hover:shadow-md focus-within:border-black focus-within:bg-black focus-within:text-white">
              
              <Search className="mr-3" />

              <input
                placeholder="Search for notes, PYQs, subjects..."
                className="flex-1 bg-transparent outline-none px-2 placeholder:text-black/70 focus:placeholder:text-white/60"
              />

              <button className="ml-2 px-4 py-1.5 rounded-full border border-black/20 text-sm font-medium bg-white text-black hover:bg-black hover:text-white">
                Search
              </button>
            </div>
          </div>

          {/* HERO TEXT */}
          <div className="flex flex-col flex-1 justify-between pt-8">
            
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl tracking-tight">
                <span className="block">
                  Find Your <AnimatedWord />
                </span>
                <span className="block mt-1 text-black/90">In Seconds.</span>
              </h1>

              <p className="text-base sm:text-lg mt-5 max-w-2xl text-gray-700">
                Stop wasting time. Everything you need for your semester — notes,
                PYQs, fests, holidays, and internship dates — all in one place.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
              {quickLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group flex items-center justify-between border border-black/10 rounded-xl px-4 py-3 bg-white hover:bg-black hover:text-white transition-all duration-200"
                >
                  <span className="text-sm font-medium">{item}</span>
                  <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT CALENDAR */}
        <div className="lg:col-span-1 flex">
          <div className="rounded-3xl border bg-zinc-50 p-6 shadow-md h-full w-full flex flex-col justify-between">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-6">
                
                <button onClick={prevMonth} className="p-2 rounded-full hover:bg-black/10">
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  <CalendarDays className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">
                    {currentDate.toLocaleString("default", { month: "long" })}{" "}
                    {currentDate.getFullYear()}
                  </h2>
                </div>

                <button onClick={nextMonth} className="p-2 rounded-full hover:bg-black/10">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-3 text-sm font-semibold text-gray-500 mb-4">
                {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>

              {/* Dates */}
              <div className="grid grid-cols-7 gap-3 text-base">
                {calendarDays.map((day, index) => {
                  if (day === null) return <div key={index} />;

                  const key = formatDateKey(day);
                  const holiday = holidaysMap[key];
                  const fest = festMap[key];

                  const label = holiday || fest;

                  return (
                    <div key={index} className="relative group">
                      
                      <div
                        className={`h-8 rounded-xl flex items-center justify-center font-medium
                          ${
                            holiday
                              ? "bg-red-100 text-red-600"
                              : fest
                              ? "bg-blue-100 text-blue-700"
                              : "bg-white"
                          }`}
                      >
                        {day}
                      </div>

                      {label && (
                        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
                          {label}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom */}
            <div>
              <div className="mt-8 flex flex-col gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-200" />
                  <span>Gazetted Holiday</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-200" />
                  <span>Fest / Event</span>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full text-sm font-medium flex items-center justify-center gap-2 border border-black/20 rounded-full py-3 hover:bg-black hover:text-white transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}