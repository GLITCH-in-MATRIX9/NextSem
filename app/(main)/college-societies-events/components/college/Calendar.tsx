"use client";

import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  /* 🔥 EVENTS DATA (connect with societies later) */
  const events: Record<string, { name: string; society: string }> = {
    "2026-04-10": { name: "Hackathon", society: "Innerve" },
    "2026-04-12": { name: "Design Workshop", society: "Nirvana" },
    "2026-04-18": { name: "Coding Contest", society: "CodeChef" },
    "2026-04-22": { name: "Startup Pitch", society: "E-Cell" },
    "2026-04-25": { name: "Dance Showcase", society: "Hypnotics" },
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

  const formatKey = (day: number) => {
    const y = currentDate.getFullYear();
    const m = String(currentDate.getMonth() + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const calendarDays = getDaysInMonth(currentDate);

  return (
    <div className="rounded-3xl border bg-zinc-50 p-5 shadow-md">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
            )
          }
        >
          <ChevronLeft />
        </button>

        <h2 className="font-bold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>

        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
            )
          }
        >
          <ChevronRight />
        </button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 text-xs mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={`${d}-${i}`}>{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day, i) => {
          if (day === null) {
            return <div key={i} />;
          }

          const key = formatKey(day);
          const event = events[key];

          return (
            <div key={i} className="relative group">
              
              <div className="h-10 flex items-center justify-center rounded-lg bg-white relative">
                {day}

                {/* 🔥 Event Dot */}
                {event && (
                  <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-black" />
                )}
              </div>

              {/* 🔥 Tooltip */}
              {event && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                  {event.name} • {event.society}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 🔥 Legend */}
      <div className="mt-5 text-xs text-gray-600 flex items-center gap-2">
        <div className="w-2 h-2 bg-black rounded-full" />
        <span>Society Events</span>
      </div>

    </div>
  );
}