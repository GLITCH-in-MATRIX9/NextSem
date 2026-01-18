"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function JoinTeam() {
  const [hasAppeared, setHasAppeared] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasAppeared(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [step, setStep] = useState<1 | 2>(1);

  // ---------- FORM 1 ----------
  const [form1, setForm1] = useState({
    name: "",
    college: "",
    year: "",
    email: "",
  });
  const isForm1Valid = Object.values(form1).every((v) => v.trim() !== "");

  // ---------- FORM 2 ----------
  const [form2, setForm2] = useState({
    role: "",
    reason: "",
  });
  const isForm2Valid = Object.values(form2).every((v) => v.trim() !== "");

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-10 px-4 overflow-hidden"
    >
      <img
        src="/star-yellow.svg"
        alt=""
        className={`
            absolute top-[27%] left-[10%]
            w-20 md:w-20 pointer-events-none
            transition-all duration-1000 delay-200
            ${hasAppeared ? " scale-100" : "opacity-0 scale-50"}
        `}
      />
      <img
        src="/star-blue.svg"
        alt=""
        className={`
          absolute bottom-[10%] left-[18%]
          w-16 md:w-20 pointer-events-none
          transition-all duration-1000 delay-200
          ${hasAppeared ? " scale-100" : "opacity-0 scale-50"}
        `}
      />

      <img
        src="/star-red.svg"
        alt=""
        // className="absolute top-80 right-40 w-18 "
        className={`
          absolute top-[50%] right-[10%]
          w-16 md:w-20 pointer-events-none
          transition-all duration-1000 delay-200
          ${hasAppeared ? " scale-100" : "opacity-0 scale-50"}
        `}
      />

      <div
        className={`
          relative max-w-7xl mx-auto text-center text-white
          transition-all duration-1000 ease-out
          ${hasAppeared ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Want to Join our team?
        </h2>

        <p className="text-sm md:text-base text-zinc-300 max-w-3xl mx-auto">
          We’re a student-led project built as a learning space. You don’t need
          to be an expert to join — curiosity, consistency, and a willingness to
          learn matter more than experience. If you’re interested in building,
          writing, designing, or simply understanding how things work, you’re
          welcome here.
        </p>

        {/* Sub heading */}
        <h3 className="mt-16 mb-8 text-4xl font-semibold">
          Just answer a few questions for us!
        </h3>

        <div className="relative max-w-xl mx-auto flex items-center justify-center">
          {/* FLIP CONTAINER */}
          <div className="relative w-full h-[360px] perspective-1000">
            <div
              className={`relative w-full h-full transition-transform duration-700 preserve-3d transform-gpu
                ${step === 2 ? "rotate-y-180" : ""}
              `}
            >
              {/* ---------------- FRONT of flip card---------- ---------------- */}
              <div className="absolute backface-hidden">
                <div
                  className="bg-black border-2 border-white/70 rounded-2xl p-4 text-left h-full transition-all duration-300 ease-out
                    hover:-translate-y-1 :shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white"
                >
                  <h4 className="text-lg font-semibold mb-4">
                    Basic Information
                  </h4>

                  <input
                    placeholder="Your Name"
                    value={form1.name}
                    onChange={(e) =>
                      setForm1({ ...form1, name: e.target.value })
                    }
                    className="w-full mb-4 rounded-lg bg-zinc-100 px-4 py-3 text-black"
                  />

                  <input
                    placeholder="Your College"
                    value={form1.college}
                    onChange={(e) =>
                      setForm1({ ...form1, college: e.target.value })
                    }
                    className="w-full mb-4 rounded-lg bg-zinc-100 px-4 py-3 text-black"
                  />

                  <input
                    placeholder="Year of Study"
                    value={form1.year}
                    onChange={(e) =>
                      setForm1({ ...form1, year: e.target.value })
                    }
                    className="w-full mb-4 rounded-lg bg-zinc-100 px-4 py-3 text-black"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form1.email}
                    onChange={(e) =>
                      setForm1({ ...form1, email: e.target.value })
                    }
                    className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-black"
                  />
                </div>
              </div>

              {/* ---------------- BACK side of flip------------------------------- */}

              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <div
                  className="
                  p-4 text-left h-full
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)]
                  hover:border-white
                  focus-within:shadow-[0_0_0_3px_rgba(255,255,255,0.15)]
                  bg-black border-2 border-white/70 rounded-2xl
                  "
                >
                  <h4 className="text-lg font-semibold mb-4">
                    A bit more about you
                  </h4>

                  <input
                    placeholder="Role you're interested in"
                    value={form2.role}
                    onChange={(e) =>
                      setForm2({ ...form2, role: e.target.value })
                    }
                    className="w-full mb-4 rounded-lg bg-zinc-100 px-4 py-3 text-black"
                  />

                  <textarea
                    placeholder="Why do you want to join?"
                    value={form2.reason}
                    onChange={(e) =>
                      setForm2({ ...form2, reason: e.target.value })
                    }
                    className="w-full h-28 rounded-lg bg-zinc-100 px-4 py-3 text-black resize-none"
                  />

                  <button
                    disabled={!isForm2Valid}
                    className={`mt-6 w-full py-3 rounded-xl font-bold transition
                      ${
                        isForm2Valid
                          ? "bg-white text-black hover:bg-zinc-200"
                          : "bg-zinc-600 text-zinc-400 cursor-not-allowed"
                      }
                    `}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NEXT BUTTON — FLOATING AT BOTTOM RIGHT */}
      {step === 1 && (
        <button
          disabled={!isForm1Valid}
          onClick={() => setStep(2)}
          className={`
            absolute bottom-16 right-40 w-30 h-12 transition-all duration-1000
            ${isForm1Valid ? "hover:scale-110" : " cursor-not-allowed"} 
            transition-all duration-1000 ease-out
            ${hasAppeared ? "opacity-100 scale-100" : "opacity-0 scale-6"}
            `}
        >
          <Image
            src="/next-arrow.svg"
            alt="Next"
            fill
            className="object-contain"
          />
        </button>
      )}

      {/* Back BUTTON — FLOATING AT BOTTOM left */}
      {step === 2 && (
        <button
          onClick={() => setStep(1)}
          className="absolute bottom-10 left-50 w-25 h-12 hover:scale-110 transition"
        >
          <Image
            src="/prev-arrow.svg"
            alt="Previous"
            fill
            className="object-contain"
          />
        </button>
      )}
    </section>
  );
}
