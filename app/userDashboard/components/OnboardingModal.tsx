"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  onComplete: () => void;
};

const YEARS = ["1st year", "2nd year", "3rd year", "4th year"];
const SEMESTERS = Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`);

export default function OnboardingModal({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [subjectInput, setSubjectInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    year: "",
    semester: "",
    branch: "",
    cgpa: "",
    credits: "",
    totalCredits: "",
  });

  const update = (key: string, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const addSubject = () => {
    const val = subjectInput.trim();
    if (!val || subjects.includes(val)) return;
    setSubjects((prev) => [...prev, val]);
    setSubjectInput("");
  };

  const removeSubject = (i: number) =>
    setSubjects((prev) => prev.filter((_, idx) => idx !== i));

  const handleFinish = async () => {
    setLoading(true);
    try {
      await fetch("/api/user/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, subjects }),
      });
      onComplete();
    } catch {
      onComplete(); // close even on error
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      title: "Welcome! Let's set up your profile",
      subtitle: "This helps us personalise your dashboard. You can update these anytime.",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5">Current year</label>
              <select
                value={form.year}
                onChange={(e) => update("year", e.target.value)}
                className="w-full h-9 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm px-3 outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select year</option>
                {YEARS.map((y) => <option key={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5">Current semester</label>
              <select
                value={form.semester}
                onChange={(e) => update("semester", e.target.value)}
                className="w-full h-9 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm px-3 outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select semester</option>
                {SEMESTERS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5">Branch / Department</label>
            <input
              type="text"
              placeholder="e.g. Computer Science"
              value={form.branch}
              onChange={(e) => update("branch", e.target.value)}
              className="w-full h-9 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm px-3 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Your academics",
      subtitle: "Enter your current CGPA and credits completed so far.",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5">Current CGPA</label>
              <input
                type="number"
                placeholder="e.g. 8.2"
                min="0" max="10" step="0.01"
                value={form.cgpa}
                onChange={(e) => update("cgpa", e.target.value)}
                className="w-full h-9 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm px-3 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5">Credits completed</label>
              <input
                type="number"
                placeholder="e.g. 60"
                min="0"
                value={form.credits}
                onChange={(e) => update("credits", e.target.value)}
                className="w-full h-9 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm px-3 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5">Total credits in programme</label>
            <input
              type="number"
              placeholder="e.g. 160"
              min="0"
              value={form.totalCredits}
              onChange={(e) => update("totalCredits", e.target.value)}
              className="w-full h-9 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm px-3 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Add your subjects",
      subtitle: "Add subjects you're studying this semester. You can edit these later.",
      content: (
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5">Subject name</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. Data Structures"
                value={subjectInput}
                onChange={(e) => setSubjectInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addSubject()}
                className="flex-1 h-9 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm px-3 outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={addSubject}
                className="px-4 h-9 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white text-sm transition"
              >
                + Add
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 min-h-[40px]">
            {subjects.map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 bg-purple-900/40 text-purple-300 text-xs px-3 py-1.5 rounded-full border border-purple-700/40"
              >
                {s}
                <button
                  onClick={() => removeSubject(i)}
                  className="text-purple-400 hover:text-white text-base leading-none"
                >
                  ×
                </button>
              </span>
            ))}
            {subjects.length === 0 && (
              <p className="text-xs text-zinc-600 mt-1">No subjects added yet</p>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-700/60 rounded-2xl p-6 shadow-2xl">

        {/* Step dots */}
        <div className="flex gap-1.5 mb-6">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i < step
                  ? "bg-teal-500 w-6"
                  : i === step
                  ? "bg-purple-500 w-6"
                  : "bg-zinc-700 w-3"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <h2 className="text-lg font-medium text-white mb-1">{steps[step].title}</h2>
        <p className="text-sm text-zinc-400 mb-5">{steps[step].subtitle}</p>
        {steps[step].content}

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-xs text-zinc-500">Step {step + 1} of {steps.length}</span>
          <div className="flex gap-2">
            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-4 py-2 rounded-lg border border-zinc-700 text-sm text-zinc-400 hover:bg-zinc-800 transition"
              >
                Back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition"
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={loading}
                className="px-5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium transition disabled:opacity-50"
              >
                {loading ? "Saving..." : "Finish setup →"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}