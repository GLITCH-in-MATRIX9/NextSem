"use client";

import { useState, useRef, useEffect } from "react";

const suggestions = [
  "DSA Notes",
  "OS PYQs",
  "DBMS Important Questions",
  "Digital Electronics Lab",
  "Computer Networks",
  "ML Resources",
  "Mathematics III Notes",
  "Python Lab Manual",
  "Control Systems",
  "Signals & Systems Syllabus",
  "COA Books",
  "Algorithms Important Qs",
];

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultsCount: number;
}

export default function SearchBar({
  value,
  onChange,
  resultsCount,
}: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = value
    ? suggestions
        .filter((s) => s.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5)
    : suggestions.slice(0, 5);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestion((prev) => Math.min(prev + 1, filtered.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestion((prev) => Math.max(prev - 1, -1));
    }
    if (e.key === "Enter" && activeSuggestion >= 0) {
      onChange(filtered[activeSuggestion]);
      setFocused(false);
      inputRef.current?.blur();
    }
    if (e.key === "Escape") {
      setFocused(false);
      inputRef.current?.blur();
    }
  };

  // Reset active suggestion on new input
  useEffect(() => {
    setActiveSuggestion(-1);
  }, [value]);

  const showDropdown = focused && filtered.length > 0;

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dropdown-enter { animation: slideDown 0.18s ease-out; }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .search-shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% auto;
        }
      `}</style>

      {/* Search box */}
      <div
        className={`flex items-center bg-white border-2 border-black rounded-full px-5 py-3.5 transition-all duration-200 ${
          focused
            ? "shadow-[5px_5px_0px_0px_#000]"
            : "shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000]"
        }`}
      >
        {/* Search icon */}
        <svg
          className="w-5 h-5 mr-3 text-black flex-shrink-0 transition-transform duration-200"
          style={{ transform: focused ? "scale(1.1)" : "scale(1)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search notes, PYQs, subjects, tags…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 180)}
          onKeyDown={handleKeyDown}
          className="flex-1 outline-none text-base font-semibold text-black placeholder-gray-400 bg-transparent min-w-0"
          autoComplete="off"
        />

        {/* Result count badge */}
        {value && (
          <span className="ml-3 px-2.5 py-1 bg-black text-white text-xs font-bold rounded-full whitespace-nowrap flex-shrink-0">
            {resultsCount} result{resultsCount !== 1 ? "s" : ""}
          </span>
        )}

        {/* Clear button */}
        {value && (
          <button
            onClick={() => {
              onChange("");
              inputRef.current?.focus();
            }}
            className="ml-2 w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs hover:bg-black hover:text-white transition-colors duration-150 flex-shrink-0"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Quick chips below search */}
      {!value && (
        <div className="flex flex-wrap gap-2 mt-3 justify-center">
          {[
            "DSA Notes",
            "OS PYQs",
            "DBMS Important",
            "Python Lab",
            "ML Books",
          ].map((chip) => (
            <button
              key={chip}
              onClick={() => onChange(chip)}
              className="px-3 py-1 text-xs text-black font-semibold border-0 border-black rounded-full bg-white hover:bg-black hover:text-white transition-all duration-150 shadow-[2px_2px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              {chip}
            </button>
          ))}
        </div>
      )}

      {/* Suggestions Dropdown */}
      {showDropdown && (
        <div className="dropdown-enter absolute top-full left-0 right-0 mt-2 bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#000] z-50">
          <div className="px-4 py-2 border-b-2 border-black bg-gray-50">
            <span className="text-xs font-black text-gray-500 uppercase tracking-widest">
              {value ? "🔎 Suggestions" : "🔥 Popular Searches"}
            </span>
          </div>
          {filtered.map((s, i) => (
            <button
              key={s}
              onMouseDown={() => {
                onChange(s);
                setFocused(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm font-semibold flex items-center gap-3 border-b border-gray-100 last:border-0 transition-colors duration-100 ${
                i === activeSuggestion
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-50"
              }`}
            >
              <svg
                className="w-4 h-4 opacity-50 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {s}
              <svg
                className="w-3 h-3 ml-auto opacity-40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
