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
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>(1);
  const [isFlipping, setIsFlipping] = useState(false);

  // ---------- FORM DATA STATE ----------
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    fullName: "",
    college: "",
    year: "",
    email: "",

    // Step 2: Primary Interest
    interest: "",

    // Step 3: Technologies
    technologies: [] as string[],
    otherTech: "",

    // Step 4: Experience Level
    experience: "",

    // Step 5: Availability
    availability: "",

    // Step 6: Motivation
    motivation: "",

    // Step 7: Contribution Preference
    contributions: [] as string[],

    // Step 8: Links & Agreement
    github: "",
    portfolio: "",
    agreement: false,
  });

  // Validation functions for each step
  const isStep1Valid =
    formData.fullName && formData.college && formData.year && formData.email;
  const isStep2Valid = formData.interest !== "";
  const isStep3Valid = true; // Optional step
  const isStep4Valid = formData.experience !== "";
  const isStep5Valid = formData.availability !== "";
  const isStep6Valid = formData.motivation.length >= 10;
  const isStep7Valid = formData.contributions.length > 0;
  const isStep8Valid = formData.agreement;

  const handleNext = () => {
    if (step < 8 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setStep((step + 1) as any);
        setIsFlipping(false);
      }, 700); // Match the full animation duration
    }
  };

  const handleBack = () => {
    if (step > 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setStep((step - 1) as any);
        setIsFlipping(false);
      }, 700); // Match the full animation duration
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Application submitted successfully! We'll get back to you soon.");
    // Reset form or redirect
  };

  const toggleTechnology = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter((t) => t !== tech)
        : [...prev.technologies, tech],
    }));
  };

  const toggleContribution = (contrib: string) => {
    setFormData((prev) => ({
      ...prev,
      contributions: prev.contributions.includes(contrib)
        ? prev.contributions.filter((c) => c !== contrib)
        : [...prev.contributions, contrib],
    }));
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-8 md:py-12 lg:py-16 px-4 overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Decorative Stars - Responsive positioning */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/star-yellow.svg"
          alt=""
          className={`
            absolute
            top-[15%] left-[5%] md:top-[20%] md:left-[8%] lg:top-[25%] lg:left-[12%]
            w-12 md:w-16 lg:w-20
            transition-all duration-1000 delay-200
            ${hasAppeared ? "opacity-100 scale-100" : "opacity-0 scale-50"}
            star-zoom-fast
          `}
        />
        <img
          src="/star-blue.svg"
          alt=""
          className={`
            absolute
            bottom-[8%] left-[3%] md:bottom-[12%] md:left-[10%] lg:bottom-[15%] lg:left-[15%]
            w-10 md:w-14 lg:w-18
            transition-all duration-1000 delay-300
            ${hasAppeared ? "opacity-100 scale-100" : "opacity-0 scale-50"}
            star-zoom-slow
          `}
        />
        <img
          src="/star-red.svg"
          alt=""
          className={`
            absolute
            top-[40%] right-[5%] md:top-[45%] md:right-[8%] lg:top-[48%] lg:right-[12%]
            w-10 md:w-14 lg:w-16
            transition-all duration-1000 delay-400
            ${hasAppeared ? "opacity-100 scale-100" : "opacity-0 scale-50"}
            star-zoom
          `}
        />
      </div>

      <div
        className={`
          relative max-w-7xl mx-auto text-center text-white z-10
          transition-all duration-1000 ease-out
          ${hasAppeared ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
          Want to Join our team?
        </h2>

        <p className="text-xs md:text-sm lg:text-base text-zinc-300 max-w-4xl mx-auto mb-6 md:mb-8 px-4">
          We're a student-led project built as a learning space. You don't need
          to be an expert to join — curiosity, consistency, and a willingness to
          learn matter more than experience. If you're interested in building,
          writing, designing, or simply understanding how things work, you're
          welcome here.
        </p>

        {/* Sub heading */}
        <h3 className="mt-6 md:mt-8 mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold">
          Just answer a few questions for us!
        </h3>

        {/* Progress Indicator */}
        <div className="mb-6 md:mb-8">
          <p className="text-xs md:text-sm text-zinc-400 mb-2">
            Step {step} of 8
          </p>
          <div className="max-w-xs md:max-w-md mx-auto h-1.5 md:h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
              style={{ width: `${(step / 8) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Container with Navigation Buttons */}
        <div className="relative max-w-3xl mx-auto flex items-end justify-center gap-4 md:gap-6 lg:gap-8">
          {/* BACK BUTTON */}
          <button
            onClick={handleBack}
            disabled={step === 1 || isFlipping}
            className={`flex-shrink-0 w-18 h-18 md:w-18 md:h-18 lg:w-22 lg:h-22
              flex items-center justify-center transition-transform duration-300
              ${step === 1 ? "invisible pointer-events-none" : "hover:scale-110"}
            `}
          >
            <Image
              src="/prev-arrow.svg"
              alt="Previous"
              width={64}
              height={64}
              className="object-contain w-full h-full"
            />
          </button>

          {/* FLIP CONTAINER - Smooth slide animation */}
          <div className="relative w-full max-w-2xl overflow-hidden">
            <div className="relative w-full h-[400px] md:h-[400px] lg:h-[400px]">
              {/* Step 1: Basic Information */}
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-600 ease-in-out ${
                  step === 1
                    ? "translate-x-0 opacity-100"
                    : step > 1
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                }`}
              >
                <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300 hover:-translate-y hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-5 md:mb-6">
                    Basic Information
                  </h4>

                  <div className="flex-1 overflow-y-auto space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full rounded-lg bg-zinc-100 px-4 py-2.5 md:py-3 text-sm md:text-base text-black placeholder:text-zinc-500"
                    />

                    <input
                      type="text"
                      placeholder="College / University Name"
                      value={formData.college}
                      onChange={(e) =>
                        setFormData({ ...formData, college: e.target.value })
                      }
                      className="w-full rounded-lg bg-zinc-100 px-4 py-2.5 md:py-3 text-sm md:text-base text-black placeholder:text-zinc-500"
                    />

                    <select
                      value={formData.year}
                      onChange={(e) =>
                        setFormData({ ...formData, year: e.target.value })
                      }
                      className="w-full rounded-lg bg-zinc-100 px-4 py-2.5 md:py-3 text-sm md:text-base text-black"
                    >
                      <option value="">Year of Study</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="Final">Final Year</option>
                    </select>

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg bg-zinc-100 px-4 py-2.5 md:py-3 text-sm md:text-base text-black placeholder:text-zinc-500"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Primary Interest */}
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-600 ease-in-out ${
                  step === 2
                    ? "translate-x-0 opacity-100"
                    : step > 2
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                }`}
              >
                <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300 hover:-translate-y hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                    Primary Interest
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm mb-5 md:mb-6">
                    What interests you the most?
                  </p>

                  <div className="flex-1 overflow-y-auto">
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Frontend",
                        "Backend",
                        "UI/UX",
                        "Content / Research",
                        "Documentation",
                        "Not sure yet",
                      ].map((option) => (
                        <label key={option} className="cursor-pointer group">
                          <input
                            type="radio"
                            name="interest"
                            value={option}
                            checked={formData.interest === option}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                interest: e.target.value,
                              })
                            }
                            className="hidden"
                          />
                          <div
                            className={`w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border-2 text-center text-xs md:text-sm transition-all ${
                              formData.interest === option
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "bg-zinc-800 border-zinc-700 text-zinc-300 group-hover:border-zinc-500"
                            }`}
                          >
                            {option}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Technologies */}
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-600 ease-in-out ${
                  step === 3
                    ? "translate-x-0 opacity-100"
                    : step > 3
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                }`}
              >
                <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300 hover:-translate-y hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white custom-scroll">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                    Technologies You Know
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm mb-5 md:mb-6">
                    Select all that apply (optional)
                  </p>

                  <div className="flex-1 overflow-y-auto space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Node.js",
                        "Python",
                        "C++",
                        "Java",
                      ].map((tech) => (
                        <label key={tech} className="cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.technologies.includes(tech)}
                            onChange={() => toggleTechnology(tech)}
                            className="hidden"
                          />
                          <div
                            className={`px-3 py-2.5 md:px-4 md:py-3 rounded-lg border-2 text-center text-xs md:text-sm transition-all ${
                              formData.technologies.includes(tech)
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-zinc-500"
                            }`}
                          >
                            {tech}
                          </div>
                        </label>
                      ))}
                    </div>

                    <input
                      type="text"
                      placeholder="Other technologies (comma separated)"
                      value={formData.otherTech}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          otherTech: e.target.value,
                        })
                      }
                      className="w-full rounded-lg bg-zinc-100 px-4 py-2.5 md:py-3 text-sm md:text-base text-black placeholder:text-zinc-500"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Experience Level */}
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-600 ease-in-out ${
                  step === 4
                    ? "translate-x-0 opacity-100"
                    : step > 4
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                }`}
              >
                <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300 hover:-translate-y hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                    Experience Level
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm mb-5 md:mb-6">
                    How would you describe your level?
                  </p>

                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-3">
                      {["Beginner", "Intermediate", "Comfortable"].map(
                        (level) => (
                          <label
                            key={level}
                            className="flex items-center cursor-pointer group"
                          >
                            <input
                              type="radio"
                              name="experience"
                              value={level}
                              checked={formData.experience === level}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  experience: e.target.value,
                                })
                              }
                              className="hidden"
                            />
                            <div
                              className={`w-full px-4 py-2.5 md:py-3 rounded-lg border-2 text-sm md:text-base transition-all ${
                                formData.experience === level
                                  ? "bg-blue-600 border-blue-600 text-white"
                                  : "bg-zinc-800 border-zinc-700 text-zinc-300 group-hover:border-zinc-500"
                              }`}
                            >
                              {level}
                            </div>
                          </label>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: Availability */}
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-600 ease-in-out ${
                  step === 5
                    ? "translate-x-0 opacity-100"
                    : step > 5
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                }`}
              >
                <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300 hover:-translate-y hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                    Availability
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm mb-5 md:mb-6">
                    How much time can you give per week?
                  </p>

                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-3">
                      {["2–4 hours", "4–6 hours", "6+ hours"].map((time) => (
                        <label
                          key={time}
                          className="flex items-center cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="availability"
                            value={time}
                            checked={formData.availability === time}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                availability: e.target.value,
                              })
                            }
                            className="hidden"
                          />
                          <div
                            className={`w-full px-4 py-2.5 md:py-3 rounded-lg border-2 text-sm md:text-base transition-all ${
                              formData.availability === time
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "bg-zinc-800 border-zinc-700 text-zinc-300 group-hover:border-zinc-500"
                            }`}
                          >
                            {time}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6: Motivation */}
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-600 ease-in-out ${
                  step === 6
                    ? "translate-x-0 opacity-100"
                    : step > 6
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                }`}
              >
                <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300 hover:-translate-y hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                    Motivation
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm mb-5 md:mb-6">
                    Why do you want to join? (2-3 lines)
                  </p>

                  <div className="flex-1 flex flex-col">
                    <textarea
                      placeholder="Share your thoughts..."
                      value={formData.motivation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          motivation: e.target.value,
                        })
                      }
                      className="w-full flex-1 rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black placeholder:text-zinc-500 resize-none"
                    />
                    <p className="text-xs text-zinc-500 mt-2">
                      {formData.motivation.length} characters (minimum 10)
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7: Contribution Preference */}
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-600 ease-in-out ${
                  step === 7
                    ? "translate-x-0 opacity-100"
                    : step > 7
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                }`}
              >
                <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300 hover:-translate-y hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white custom-scroll">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                    Contribution Preference
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm mb-5 md:mb-6">
                    How would you like to contribute?
                  </p>

                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-3">
                      {[
                        "Building features",
                        "Improving UI",
                        "Writing content",
                        "Testing / feedback",
                        "Learning & helping where needed",
                      ].map((contrib) => (
                        <label key={contrib} className="cursor-pointer block">
                          <input
                            type="checkbox"
                            checked={formData.contributions.includes(contrib)}
                            onChange={() => toggleContribution(contrib)}
                            className="hidden"
                          />
                          <div
                            className={`px-4 py-2.5 md:py-3 rounded-lg border-2 text-sm md:text-base transition-all ${
                              formData.contributions.includes(contrib)
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-zinc-500"
                            }`}
                          >
                            {contrib}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 8: Links & Agreement */}
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-600 ease-in-out ${
                  step === 8
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300 hover:-translate-y hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                    Almost Done!
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm mb-5 md:mb-6">
                    Optional links & final agreement
                  </p>

                  <div className="flex-1 overflow-y-auto space-y-4">
                    <input
                      type="url"
                      placeholder="GitHub Profile (optional)"
                      value={formData.github}
                      onChange={(e) =>
                        setFormData({ ...formData, github: e.target.value })
                      }
                      className="w-full rounded-lg bg-zinc-100 px-4 py-2.5 md:py-3 text-sm md:text-base text-black placeholder:text-zinc-500"
                    />

                    <input
                      type="url"
                      placeholder="Portfolio / LinkedIn (optional)"
                      value={formData.portfolio}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          portfolio: e.target.value,
                        })
                      }
                      className="w-full rounded-lg bg-zinc-100 px-4 py-2.5 md:py-3 text-sm md:text-base text-black placeholder:text-zinc-500"
                    />

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreement}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            agreement: e.target.checked,
                          })
                        }
                        className="mt-1 w-4 h-4 md:w-5 md:h-5 cursor-pointer flex-shrink-0"
                      />
                      <span className="text-zinc-300 text-xs md:text-sm">
                        I understand this is a learning-focused, student-led
                        project.*
                      </span>
                    </label>

                    <button
                      disabled={!isStep8Valid}
                      onClick={handleSubmit}
                      className={`w-full py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base transition ${
                        isStep8Valid
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                          : "bg-zinc-700 text-zinc-500 cursor-not-allowed"
                      }`}
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEXT BUTTON */}
          <button
            disabled={
              isFlipping ||
              (step === 1 && !isStep1Valid) ||
              (step === 2 && !isStep2Valid) ||
              (step === 4 && !isStep4Valid) ||
              (step === 5 && !isStep5Valid) ||
              (step === 6 && !isStep6Valid) ||
              (step === 7 && !isStep7Valid)
            }
            onClick={handleNext}
            className={`flex-shrink-0 w-12 h-12 md:w-18 md:h-18 lg:w-22 lg:h-22 flex items-center justify-center transition-transform duration-300 ${
              step === 8
                ? "invisible pointer-events-none"
                : (step === 1 && isStep1Valid) ||
                    (step === 2 && isStep2Valid) ||
                    step === 3 ||
                    (step === 4 && isStep4Valid) ||
                    (step === 5 && isStep5Valid) ||
                    (step === 6 && isStep6Valid) ||
                    (step === 7 && isStep7Valid)
                  ? "hover:scale-110 opacity-100"
                  : "opacity-50 cursor-not-allowed"
            }`}
          >
            <Image
              src="/next-arrow.svg"
              alt="Next"
              width={64}
              height={64}
              className="object-contain w-full h-full"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
