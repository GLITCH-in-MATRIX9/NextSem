"use client";

interface FloatingCTAProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const STARS = [
  // LEFT SIDE
  { x: 4,  y: 15, size: 22, dur: 3.8, delay: 0,    type: "star",   color: "#FFD700" },
  { x: 9,  y: 55, size: 14, dur: 4.5, delay: 0.6,  type: "bubble", color: "#ffffff" },
  { x: 16, y: 28, size: 10, dur: 5.2, delay: 1.1,  type: "star",   color: "#ffffff" },
  { x: 3,  y: 78, size: 26, dur: 3.2, delay: 0.3,  type: "star",   color: "#FFE033" },
  { x: 12, y: 42, size: 8,  dur: 6.1, delay: 1.8,  type: "bubble", color: "#FFD700" },
  { x: 22, y: 85, size: 18, dur: 4.0, delay: 0.9,  type: "star",   color: "#ffffff" },
  { x: 7,  y: 65, size: 12, dur: 5.6, delay: 2.2,  type: "bubble", color: "#FFE033" },
  { x: 19, y: 10, size: 16, dur: 3.5, delay: 0.5,  type: "star",   color: "#FFD700" },
  // RIGHT SIDE
  { x: 96, y: 12, size: 24, dur: 4.2, delay: 0.4,  type: "star",   color: "#FFD700" },
  { x: 86, y: 50, size: 12, dur: 5.0, delay: 1.3,  type: "bubble", color: "#ffffff" },
  { x: 93, y: 72, size: 20, dur: 3.5, delay: 0.7,  type: "star",   color: "#FFE033" },
  { x: 78, y: 32, size: 9,  dur: 6.3, delay: 2.1,  type: "bubble", color: "#FFD700" },
  { x: 90, y: 88, size: 28, dur: 3.9, delay: 0.2,  type: "star",   color: "#ffffff" },
  { x: 72, y: 18, size: 11, dur: 4.8, delay: 1.5,  type: "bubble", color: "#FFE033" },
  { x: 82, y: 68, size: 16, dur: 5.3, delay: 0.8,  type: "star",   color: "#FFD700" },
  { x: 76, y: 90, size: 8,  dur: 4.1, delay: 1.9,  type: "bubble", color: "#ffffff" },
  // CENTER
  { x: 50, y: 8,  size: 13, dur: 5.5, delay: 0.8,  type: "star",   color: "#FFE033" },
  { x: 44, y: 90, size: 17, dur: 4.1, delay: 1.0,  type: "bubble", color: "#ffffff" },
  { x: 56, y: 50, size: 7,  dur: 7.0, delay: 2.5,  type: "star",   color: "#FFD700" },
  { x: 35, y: 20, size: 10, dur: 4.7, delay: 1.4,  type: "bubble", color: "#FFE033" },
  { x: 63, y: 75, size: 15, dur: 3.6, delay: 0.6,  type: "star",   color: "#ffffff" },
];

export default function FloatingCTA({ title, subtitle, buttonLabel, onButtonClick }: FloatingCTAProps) {
  return (
    <>
      <style>{`
        @keyframes ctaStarFloat {
          0%,100% { transform: translateY(0px)   rotate(0deg)   scale(1); }
          33%     { transform: translateY(-18px)  rotate(120deg) scale(1.2); }
          66%     { transform: translateY(-8px)   rotate(240deg) scale(0.85); }
        }
        @keyframes ctaBubbleFloat {
          0%,100% { transform: translateY(0px)  scale(1); }
          50%     { transform: translateY(-22px) scale(1.2); }
        }
        @keyframes ctaStarTwinkle {
          0%,100% { opacity: 0.85; }
          50%     { opacity: 1; filter: brightness(1.7) drop-shadow(0 0 7px currentColor); }
        }
        @keyframes ctaBubbleTwinkle {
          0%,100% { opacity: 0.55; }
          50%     { opacity: 1; }
        }
        @keyframes ctaBtnGlow {
          0%,100% { box-shadow: 0 4px 20px rgba(255,255,255,0.15), 0 0 0 0 rgba(255,255,255,0.2); }
          50%     { box-shadow: 0 4px 36px rgba(255,255,255,0.3),  0 0 0 12px rgba(255,255,255,0); }
        }
        @keyframes ctaFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cta-star-el {
          animation:
            ctaStarFloat   var(--dur) ease-in-out infinite var(--delay),
            ctaStarTwinkle calc(var(--dur) * 0.7) ease-in-out infinite var(--delay);
        }
        .cta-bubble-el {
          animation:
            ctaBubbleFloat   var(--dur) ease-in-out infinite var(--delay),
            ctaBubbleTwinkle calc(var(--dur) * 0.8) ease-in-out infinite var(--delay);
        }
        .cta-btn-glow { animation: ctaBtnGlow 2.5s ease-in-out infinite; }
        .cta-fade-up  { animation: ctaFadeUp 0.6s ease forwards; }
      `}</style>

      <div
        className="relative rounded-[50px] p-8 md:p-12 text-center overflow-hidden shadow-2xl"
        style={{ background: "#0f0f0f" }}
      >
        {/* Floating decorative elements */}
        {STARS.map((s, i) => (
          <div
            key={i}
            className={s.type === "star" ? "cta-star-el" : "cta-bubble-el"}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              ["--dur" as any]: `${s.dur}s`,
              ["--delay" as any]: `${s.delay}s`,
              pointerEvents: "none",
              zIndex: 1,
              color: s.color,
            }}
          >
            {s.type === "star" ? (
              <svg
                width={s.size}
                height={s.size}
                viewBox="0 0 24 24"
                fill={s.color}
                style={{ display: "block", filter: `drop-shadow(0 0 5px ${s.color})` }}
              >
                {/* 4-point sparkle */}
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
              </svg>
            ) : (
              <div
                style={{
                  width: s.size,
                  height: s.size,
                  borderRadius: "50%",
                  border: `2.5px solid ${s.color}`,
                  background: `${s.color}30`,
                  boxShadow: `0 0 10px ${s.color}88, inset 0 0 8px ${s.color}44`,
                }}
              />
            )}
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 cta-fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <button
            onClick={onButtonClick}
            className="cta-btn-glow relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black rounded-2xl shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-base"
          >
            {buttonLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}