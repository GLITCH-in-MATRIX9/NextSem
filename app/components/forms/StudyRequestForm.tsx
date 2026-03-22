// "use client";

// import { useState } from "react";

// export default function StudyRequestForm({ onClose }: { onClose: () => void }) {
//   const [formData, setFormData] = useState({
//     topic: "",
//     subject: "",
//     description: "",
//     mode: "Online", // Online or Offline
//     duration: "1 hour",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: Add your API call here to save data
//     console.log("Study Request Data:", formData);
//     alert("Study Request Created Successfully!");
//     onClose();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {/* Topic & Subject */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label className="text-sm font-bold text-gray-700">Topic/Concept</label>
//           <input
//             required
//             type="text"
//             placeholder="e.g. Binary Trees"
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
//             value={formData.topic}
//             onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
//           />
//         </div>
//         <div className="space-y-2">
//           <label className="text-sm font-bold text-gray-700">Subject/Course</label>
//           <input
//             required
//             type="text"
//             placeholder="e.g. Data Structures"
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
//             value={formData.subject}
//             onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//           />
//         </div>
//       </div>

//       {/* Description */}
//       <div className="space-y-2">
//         <label className="text-sm font-bold text-gray-700">Description</label>
//         <textarea
//           required
//           rows={4}
//           placeholder="Describe what you want to study specifically..."
//           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//         />
//       </div>

//       {/* Mode & Duration */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label className="text-sm font-bold text-gray-700">Preferred Mode</label>
//           <select
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
//             value={formData.mode}
//             onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
//           >
//             <option value="Online">Online (Zoom/Meet)</option>
//             <option value="Offline">Offline (Library/Campus)</option>
//             <option value="Hybrid">Flexible</option>
//           </select>
//         </div>
//         <div className="space-y-2">
//           <label className="text-sm font-bold text-gray-700">Duration</label>
//           <select
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
//             value={formData.duration}
//             onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
//           >
//             <option value="30 mins">30 mins</option>
//             <option value="1 hour">1 hour</option>
//             <option value="2 hours">2 hours</option>
//             <option value="Long Session">Long Session (3+ hrs)</option>
//           </select>
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="pt-4 flex gap-3">
//         <button
//           type="button"
//           onClick={onClose}
//           className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 font-bold text-gray-700 hover:bg-gray-50 transition-colors"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="flex-1 px-6 py-3 rounded-xl bg-yellow-400 text-black font-black hover:bg-yellow-500 transition-colors shadow-lg"
//         >
//           Post Request
//         </button>
//       </div>
//     </form>
//   );
// }
"use client";

import { useState } from "react";

export default function StudyRequestForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    topic: "",
    subject: "",
    description: "",
    mode: "Online",
    duration: "1 hour",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Study Request Data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 1800);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-800 outline-none transition-all duration-200 bg-white placeholder:text-gray-400"
  const inputStyle = {
    border: "1.5px solid #e5e5e5",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  };

  const focusStyle = (active: boolean) =>
    active
      ? { border: "1.5px solid #0f0f0f", boxShadow: "0 0 0 3px rgba(0,0,0,0.07)" }
      : inputStyle;

  const [focused, setFocused] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 gap-4">
        <style>{`
          @keyframes checkPop {
            0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
            60%  { transform: scale(1.2) rotate(4deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes ringPulse {
            0%   { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(1.8); opacity: 0; }
          }
          .check-pop  { animation: checkPop 0.5s cubic-bezier(.22,1,.36,1) forwards; }
          .ring-pulse { animation: ringPulse 1s ease-out forwards 0.3s; }
        `}</style>
        <div className="relative">
          <div
            className="ring-pulse absolute inset-0 rounded-full"
            style={{ background: "#0f0f0f", opacity: 0 }}
          />
          <div
            className="check-pop w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "#0f0f0f" }}
          >
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <p className="text-lg font-black text-gray-900 mt-2">Request Posted!</p>
        <p className="text-sm text-gray-500 text-center max-w-xs">
          Your study request is live. Buddies who match your criteria will reach out soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes rowIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .row-in { animation: rowIn 0.35s ease forwards; }
        .row-in-2 { animation: rowIn 0.35s ease 0.07s forwards; opacity: 0; }
        .row-in-3 { animation: rowIn 0.35s ease 0.14s forwards; opacity: 0; }
        .row-in-4 { animation: rowIn 0.35s ease 0.21s forwards; opacity: 0; }
        .row-in-5 { animation: rowIn 0.35s ease 0.28s forwards; opacity: 0; }

        .mode-chip {
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          transition: all 0.18s ease;
          border: 1.5px solid #e5e5e5;
          background: white;
          color: #555;
          user-select: none;
        }
        .mode-chip:hover { border-color: #aaa; color: #111; }
        .mode-chip.active {
          background: #0f0f0f;
          color: white;
          border-color: #0f0f0f;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
          transform: scale(1.04);
        }

        .duration-chip {
          cursor: pointer;
          padding: 7px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          transition: all 0.18s ease;
          border: 1.5px solid #e5e5e5;
          background: white;
          color: #666;
        }
        .duration-chip:hover { border-color: #bbb; color: #111; }
        .duration-chip.active {
          background: #0f0f0f;
          color: white;
          border-color: #0f0f0f;
          transform: scale(1.04);
        }

        .submit-btn {
          position: relative;
          overflow: hidden;
          background: #0f0f0f;
          color: white;
          border: none;
          border-radius: 14px;
          padding: 14px 24px;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.22); }
        .submit-btn:active { transform: translateY(0); }
        .submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent);
        }

        .cancel-btn {
          flex: 1;
          padding: 14px 24px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.18s ease;
          border: 1.5px solid #e5e5e5;
          background: white;
          color: #555;
        }
        .cancel-btn:hover { border-color: #aaa; color: #111; background: #f5f5f5; }

        .char-float {
          position: absolute;
          pointer-events: none;
          select: none;
          font-size: 72px;
          opacity: 0.055;
          animation: floatChar 6s ease-in-out infinite;
        }
        @keyframes floatChar {
          0%,100% { transform: translateY(0) rotate(-4deg); }
          50%      { transform: translateY(-12px) rotate(2deg); }
        }
      `}</style>

      <form onSubmit={handleSubmit} className="relative space-y-5">

        {/* Decorative floating character */}
        <div className="char-float right-0 top-0 select-none">📚</div>

        {/* Topic + Subject */}
        <div className="grid grid-cols-2 gap-4 row-in">
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400">
              Topic / Concept
            </label>
            <input
              required
              type="text"
              placeholder="e.g. Binary Trees"
              className={inputClass}
              style={focusStyle(focused === "topic")}
              value={formData.topic}
              onFocus={() => setFocused("topic")}
              onBlur={() => setFocused(null)}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400">
              Subject / Course
            </label>
            <input
              required
              type="text"
              placeholder="e.g. Data Structures"
              className={inputClass}
              style={focusStyle(focused === "subject")}
              value={formData.subject}
              onFocus={() => setFocused("subject")}
              onBlur={() => setFocused(null)}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1.5 row-in-2">
          <label className="block text-xs font-black uppercase tracking-widest text-gray-400">
            Description
          </label>
          <textarea
            required
            rows={3}
            placeholder="Describe what you want to study specifically…"
            className={`${inputClass} resize-none`}
            style={focusStyle(focused === "desc")}
            value={formData.description}
            onFocus={() => setFocused("desc")}
            onBlur={() => setFocused(null)}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        {/* Preferred Mode */}
        <div className="space-y-2 row-in-3">
          <label className="block text-xs font-black uppercase tracking-widest text-gray-400">
            Preferred Mode
          </label>
          <div className="flex gap-2 flex-wrap">
            {[
              { value: "Online", emoji: "💻", label: "Online" },
              { value: "Offline", emoji: "🏫", label: "Offline" },
              { value: "Hybrid", emoji: "🔄", label: "Flexible" },
            ].map(({ value, emoji, label }) => (
              <button
                key={value}
                type="button"
                className={`mode-chip ${formData.mode === value ? "active" : ""}`}
                onClick={() => setFormData({ ...formData, mode: value })}
              >
                {emoji} {label}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="space-y-2 row-in-4">
          <label className="block text-xs font-black uppercase tracking-widest text-gray-400">
            Duration
          </label>
          <div className="flex gap-2 flex-wrap">
            {["30 mins", "1 hour", "2 hours", "Long Session (3+ hrs)"].map((d) => (
              <button
                key={d}
                type="button"
                className={`duration-chip ${formData.duration === d ? "active" : ""}`}
                onClick={() => setFormData({ ...formData, duration: d })}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#f0f0f0" }} />

        {/* Actions */}
        <div className="flex gap-3 row-in-5">
          <button type="button" onClick={onClose} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn" style={{ flex: 2 }}>
            Post Study Request ✦
          </button>
        </div>
      </form>
    </>
  );
}