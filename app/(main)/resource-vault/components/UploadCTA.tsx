"use client";

import { useState } from "react";

export default function UploadCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        @keyframes ctaPulse {
          0%, 100% { box-shadow: 4px 4px 0px #000; }
          50%       { box-shadow: 7px 7px 0px #000; }
        }
        .cta-pulse:hover { animation: ctaPulse 1s ease-in-out infinite; }
        @keyframes arrowBounce {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(5px); }
        }
        .arrow-bounce { animation: arrowBounce 1.2s ease-in-out infinite; }
      `}</style>

      <section className="relative bg-black text-white rounded-3xl overflow-hidden p-8 md:p-12 border-2 border-black">
        {/* BG pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Color blobs */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "#FF4444",
            filter: "blur(80px)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
          style={{
            background: "#2979FF",
            filter: "blur(60px)",
            transform: "translate(-20%, 20%)",
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">📤</span>
              <span className="px-3 py-1 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full">
                Contribute
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3 leading-tight">
              Have great notes?
              <br />
              <span style={{ color: "#FFB800" }}>Share the knowledge.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Help your fellow IGDTUW sisters. Upload your notes, PYQs, or lab
              manuals — earn contribution points and get featured on the
              leaderboard.
            </p>

            {/* Perks */}
            <div className="flex flex-wrap gap-3 mt-5">
              {["✅ Verified Badge", "🎯 Karma Points", "❤️ Help Others"].map(
                (perk) => (
                  <span
                    key={perk}
                    className="px-3 py-1.5 border border-gray-700 text-gray-300 text-xs font-bold rounded-full"
                  >
                    {perk}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href="#"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="cta-pulse flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-base rounded-full border-2 border-black shadow-[4px_4px_0px_#555] hover:bg-yellow-300 transition-colors duration-150"
            >
              Upload Resource
              <svg
                className={`w-5 h-5 ${hovered ? "arrow-bounce" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M7 16V4m0 0L3 8m4-4l4 4M17 20v-8m0 0l4 4m-4-4l-4 4"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-white font-bold text-sm rounded-full border-2 border-gray-700 hover:border-white transition-colors duration-150"
            >
              View Guidelines
            </a>
          </div>
        </div>

        {/* Contributor stats strip */}
        <div className="relative z-10 mt-8 pt-6 border-t border-gray-800 flex flex-wrap gap-6 text-center">
          {[
            { val: "240+", label: "Contributors" },
            { val: "1,240+", label: "Uploads" },
            { val: "15K+", label: "Downloads" },
            { val: "4.7★", label: "Avg Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-xl font-black text-white">{stat.val}</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
