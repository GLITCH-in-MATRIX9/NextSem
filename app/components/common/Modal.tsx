"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      const t = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 350);
      return () => clearTimeout(t);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <>
      <style>{`
        @keyframes modalBackdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes modalSlideDown {
          from { opacity: 1; transform: translateY(0)    scale(1); }
          to   { opacity: 0; transform: translateY(40px) scale(0.97); }
        }
        @keyframes floatA {
          0%,100% { transform: translateY(0px) rotate(-6deg); }
          50%     { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px) rotate(8deg); }
          50%     { transform: translateY(-14px) rotate(4deg); }
        }
        @keyframes sparkle {
          0%,100% { opacity: 0.3; transform: scale(0.8); }
          50%     { opacity: 1;   transform: scale(1.2); }
        }
        .modal-backdrop-enter { animation: modalBackdropIn 0.3s ease forwards; }
        .modal-panel-enter    { animation: modalSlideUp   0.38s cubic-bezier(.22,1,.36,1) forwards; }
        .modal-panel-exit     { animation: modalSlideDown 0.32s ease forwards; }
        .float-a { animation: floatA 4s ease-in-out infinite; }
        .float-b { animation: floatB 5s ease-in-out infinite; }
        .sparkle { animation: sparkle 2.5s ease-in-out infinite; }
        .sparkle-2 { animation: sparkle 1.8s ease-in-out infinite 0.6s; }
        .sparkle-3 { animation: sparkle 3.1s ease-in-out infinite 1.2s; }
        .modal-scrollbar::-webkit-scrollbar { width: 4px; }
        .modal-scrollbar::-webkit-scrollbar-track { background: #f5f5f5; border-radius: 4px; }
        .modal-scrollbar::-webkit-scrollbar-thumb { background: #d4d4d4; border-radius: 4px; }
        .modal-scrollbar::-webkit-scrollbar-thumb:hover { background: #a3a3a3; }
      `}</style>

      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 modal-backdrop-enter"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        />

        {/* Panel */}
        <div
          className={`relative w-full max-w-2xl flex flex-col max-h-[92vh] rounded-[28px] overflow-hidden shadow-2xl ${
            visible ? "modal-panel-enter" : "modal-panel-exit"
          }`}
          style={{ background: "#fafafa", border: "1.5px solid #e5e5e5" }}
        >
          {/* ── Decorative Header Strip ── */}
          <div
            className="relative flex items-center justify-between px-7 pt-6 pb-5 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 50%, #111 100%)",
            }}
          >
            {/* Floating character / deco elements */}
            <div
              className="absolute right-16 top-[-8px] float-a select-none pointer-events-none"
              style={{ fontSize: 44, opacity: 0.18 }}
            >
              ✦
            </div>
            <div
              className="absolute right-6 bottom-[-4px] float-b select-none pointer-events-none"
              style={{ fontSize: 28, opacity: 0.12 }}
            >
              ◆
            </div>

            {/* Sparkle dots */}
            <span className="absolute top-3 right-28 w-1.5 h-1.5 rounded-full bg-white sparkle" style={{ opacity: 0.4 }} />
            <span className="absolute top-7 right-36 w-1 h-1 rounded-full bg-white sparkle-2" style={{ opacity: 0.3 }} />
            <span className="absolute bottom-3 right-20 w-1 h-1 rounded-full bg-white sparkle-3" style={{ opacity: 0.35 }} />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-1 select-none">
                NextSem
              </p>
              <h2
                className="text-2xl font-black text-white tracking-tight leading-tight"
                style={{ fontFamily: "'system-ui', sans-serif", letterSpacing: "-0.02em" }}
              >
                {title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="relative z-10 ml-4 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            >
              <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── Scrollable Body ── */}
          <div className="overflow-y-auto modal-scrollbar flex-1 px-7 py-6" style={{ background: "#fafafa" }}>
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}