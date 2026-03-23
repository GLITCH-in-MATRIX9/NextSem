"use client";

import { useState, useEffect } from "react";
import { Resource, typeColors, typeEmoji } from "./resourceData";

interface ResourceCardProps {
  resource: Resource;
  index?: number;
  onView?: (resource: Resource) => void;
}

export default function ResourceCard({
  resource,
  index = 0,
  onView,
}: ResourceCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(!!localStorage.getItem(`bookmark-${resource.id}`));
  }, [resource.id]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const next = !bookmarked;
    setBookmarked(next);
    if (next) localStorage.setItem(`bookmark-${resource.id}`, "1");
    else localStorage.removeItem(`bookmark-${resource.id}`);
  };

  const handleView = () => {
    onView?.(resource);
  };

  const colors = typeColors[resource.type];
  const emoji = typeEmoji[resource.type];

  return (
    <>
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-in {
          animation: cardIn 0.35s ease-out both;
          animation-delay: ${Math.min(index * 50, 350)}ms;
        }
      `}</style>

      <div
        onClick={handleView}
        className="card-in group relative bg-white border-1 border-black rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-200 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] shadow-[2px_2px_0px_0px_#000]"
      >
        {/* Thin color strip */}
        <div
          className="h-1 w-full flex-shrink-0"
          style={{ backgroundColor: colors.bg }}
        />

        <div className="p-4 flex flex-col flex-1 gap-3">
          {/* Type badge + bookmark */}
          <div className="flex items-center justify-between">
            <span
              className="text-xs font-black px-2.5 py-0.5 rounded-full"
              style={{ backgroundColor: colors.bg, color: colors.text }}
            >
              {emoji} {resource.type}
            </span>
            <button
              onClick={toggleBookmark}
              className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
                bookmarked
                  ? "bg-black border-black text-white"
                  : "border-gray-400 text-gray-400 hover:border-black hover:text-black"
              }`}
              aria-label="Bookmark"
            >
              <svg
                className="w-3.5 h-3.5"
                fill={bookmarked ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>

          {/* Meta + title */}
          <div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              {resource.branch} · {resource.semester} Sem
            </p>
            <h3 className="text-[21px] font-black text-black leading-snug group-hover:underline decoration-2 underline-offset-2">
              {resource.subject}
            </h3>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {resource.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-gray-100 rounded-full text-[11px] font-semibold text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
            <div className="flex items-center gap-3 text-[13px] font-semibold text-gray-400">
              <span>⬇ {resource.downloads.toLocaleString()}</span>
              <span>⭐ {resource.rating}</span>
            </div>
            {resource.new && (
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-black text-white">
                NEW
              </span>
            )}
            {!resource.new && resource.trending && (
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-black text-black">
                🔥
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
