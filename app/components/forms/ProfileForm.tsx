// "use client";

// import { useState } from "react";

// export default function ProfileForm({ onClose }: { onClose: () => void }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     branch: "",
//     year: "1st Year",
//     skills: "",
//     bio: "",
//     github: "",
//     linkedin: ""
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: Add your API call here to save data
//     console.log("Profile Data:", formData);
//     alert("Profile Created Successfully!");
//     onClose();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {/* Avatar Placeholder */}
//       <div className="flex items-center gap-4 mb-6">
//         <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300">
//           <span className="text-gray-400 text-xs text-center">Upload<br/>Photo</span>
//         </div>
//         <div>
//           <h3 className="font-bold text-black">Profile Picture</h3>
//           <p className="text-xs text-gray-500">JPG or PNG. Max 2MB.</p>
//         </div>
//       </div>

//       {/* Name & Branch */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label className="text-sm font-bold text-gray-700">Full Name</label>
//           <input
//             required
//             type="text"
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />
//         </div>
//         <div className="space-y-2">
//           <label className="text-sm font-bold text-gray-700">Branch</label>
//           <select
//              required
//              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
//              value={formData.branch}
//              onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
//           >
//             <option value="">Select Branch</option>
//             <option value="CSE">CSE</option>
//             <option value="ECE">ECE</option>
//             <option value="IT">IT</option>
//             <option value="Mechanical">Mechanical</option>
//           </select>
//         </div>
//       </div>

//        {/* Year & Skills */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label className="text-sm font-bold text-gray-700">Year</label>
//            <select
//              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
//              value={formData.year}
//              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
//           >
//             <option value="1st Year">1st Year</option>
//             <option value="2nd Year">2nd Year</option>
//             <option value="3rd Year">3rd Year</option>
//             <option value="4th Year">4th Year</option>
//           </select>
//         </div>
//         <div className="space-y-2">
//           <label className="text-sm font-bold text-gray-700">Skills (Comma separated)</label>
//           <input
//             type="text"
//             placeholder="React, Python, Figma..."
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
//             value={formData.skills}
//             onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
//           />
//         </div>
//       </div>

//       {/* Bio */}
//       <div className="space-y-2">
//         <label className="text-sm font-bold text-gray-700">Short Bio</label>
//         <textarea
//           required
//           rows={3}
//           placeholder="Tell us about yourself and what you are looking for..."
//           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
//           value={formData.bio}
//           onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//         />
//       </div>

//       {/* Social Links */}
//       <div className="grid md:grid-cols-2 gap-4">
//          <div className="space-y-2">
//           <label className="text-sm font-bold text-gray-700">GitHub URL</label>
//           <input
//             type="url"
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
//             value={formData.github}
//             onChange={(e) => setFormData({ ...formData, github: e.target.value })}
//           />
//         </div>
//          <div className="space-y-2">
//           <label className="text-sm font-bold text-gray-700">LinkedIn URL</label>
//           <input
//             type="url"
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
//             value={formData.linkedin}
//             onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
//           />
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
//           className="flex-1 px-6 py-3 rounded-xl bg-black text-white font-black hover:bg-zinc-800 transition-colors shadow-lg"
//         >
//           Create Profile
//         </button>
//       </div>
//     </form>
//   );
// }
"use client";

import { useState, useRef } from "react";

export default function ProfileForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    year: "1st Year",
    skills: "",
    bio: "",
    github: "",
    linkedin: "",
  });
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [skillsList, setSkillsList] = useState<string[]>([]);
  const [focused, setFocused] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      const val = formData.skills.trim().replace(/,$/, "");
      if (val && !skillsList.includes(val)) {
        setSkillsList((prev) => [...prev, val]);
        setFormData({ ...formData, skills: "" });
      }
    }
  };

  const removeSkill = (skill: string) => {
    setSkillsList((prev) => prev.filter((s) => s !== skill));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setAvatarSrc(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile Data:", { ...formData, skills: skillsList });
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 1800);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-800 outline-none transition-all duration-200 bg-white placeholder:text-gray-400";
  const borderIdle = { border: "1.5px solid #e5e5e5", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" };
  const borderActive = { border: "1.5px solid #0f0f0f", boxShadow: "0 0 0 3px rgba(0,0,0,0.07)" };
  const fs = (key: string) => (focused === key ? borderActive : borderIdle);

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
          <div className="ring-pulse absolute inset-0 rounded-full" style={{ background: "#0f0f0f", opacity: 0 }} />
          <div className="check-pop w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#0f0f0f" }}>
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <p className="text-lg font-black text-gray-900 mt-2">Profile Created!</p>
        <p className="text-sm text-gray-500 text-center max-w-xs">
          Your developer profile is live. You're now visible to potential project partners!
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
        .row-in   { animation: rowIn 0.35s ease forwards; }
        .row-in-2 { animation: rowIn 0.35s 0.07s  ease forwards; opacity: 0; }
        .row-in-3 { animation: rowIn 0.35s 0.14s  ease forwards; opacity: 0; }
        .row-in-4 { animation: rowIn 0.35s 0.21s  ease forwards; opacity: 0; }
        .row-in-5 { animation: rowIn 0.35s 0.28s  ease forwards; opacity: 0; }
        .row-in-6 { animation: rowIn 0.35s 0.35s  ease forwards; opacity: 0; }

        @keyframes avatarPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,0,0,0.15); }
          50%     { box-shadow: 0 0 0 6px rgba(0,0,0,0.06); }
        }
        .avatar-pulse { animation: avatarPulse 2.5s ease-in-out infinite; }

        @keyframes skillIn {
          from { transform: scale(0.7) translateY(4px); opacity: 0; }
          to   { transform: scale(1)   translateY(0); opacity: 1; }
        }
        .skill-in { animation: skillIn 0.22s cubic-bezier(.22,1,.36,1) forwards; }

        .year-btn {
          padding: 8px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.18s ease;
          border: 1.5px solid #e5e5e5;
          background: white;
          color: #666;
        }
        .year-btn:hover { border-color: #aaa; color: #111; }
        .year-btn.active {
          background: #0f0f0f;
          color: white;
          border-color: #0f0f0f;
          transform: scale(1.04);
          box-shadow: 0 2px 8px rgba(0,0,0,0.16);
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
          font-size: 72px;
          opacity: 0.05;
          animation: charFloat 7s ease-in-out infinite;
        }
        @keyframes charFloat {
          0%,100% { transform: translateY(0) rotate(3deg); }
          50%      { transform: translateY(-14px) rotate(-2deg); }
        }
      `}</style>

      <form onSubmit={handleSubmit} className="relative space-y-5">
        <div className="char-float right-0 -top-2 select-none">🧑‍💻</div>

        {/* Avatar + Photo Upload */}
        <div className="flex items-center gap-4 row-in">
          <div
            className="avatar-pulse relative w-[62px] h-[62px] rounded-full flex-shrink-0 cursor-pointer overflow-hidden"
            style={{ border: "2px dashed #d4d4d4", background: "#f5f5f5" }}
            onClick={() => fileRef.current?.click()}
          >
            {avatarSrc ? (
              <img src={avatarSrc} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-0.5">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-[9px] font-bold text-gray-400 text-center leading-tight">Upload</span>
              </div>
            )}
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
          </div>
          <div>
            <p className="font-black text-sm text-gray-900">Profile Picture</p>
            <p className="text-xs text-gray-400 mt-0.5">JPG or PNG · Max 2MB</p>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="mt-1.5 text-xs font-bold text-gray-500 underline underline-offset-2 hover:text-black transition-colors"
            >
              Choose file
            </button>
          </div>
        </div>

        <div style={{ height: 1, background: "#f0f0f0" }} />

        {/* Name + Branch */}
        <div className="grid grid-cols-2 gap-4 row-in-2">
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
            <input
              required
              type="text"
              placeholder="Aryan Mehta"
              className={inputClass}
              style={fs("name")}
              value={formData.name}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Branch</label>
            <select
              required
              className={inputClass}
              style={fs("branch")}
              value={formData.branch}
              onFocus={() => setFocused("branch")}
              onBlur={() => setFocused(null)}
              onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
            >
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="IT">IT</option>
              <option value="Mechanical">Mechanical</option>
              <option value="AIDS">AIDS</option>
              <option value="Civil">Civil</option>
            </select>
          </div>
        </div>

        {/* Year */}
        <div className="space-y-2 row-in-3">
          <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Year of Study</label>
          <div className="flex gap-2 flex-wrap">
            {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((y) => (
              <button
                key={y}
                type="button"
                className={`year-btn ${formData.year === y ? "active" : ""}`}
                onClick={() => setFormData({ ...formData, year: y })}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-2 row-in-4">
          <label className="block text-xs font-black uppercase tracking-widest text-gray-400">
            Skills <span className="normal-case font-semibold text-gray-300">(press comma or enter to add)</span>
          </label>
          {skillsList.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {skillsList.map((sk) => (
                <span
                  key={sk}
                  className="skill-in inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: "#0f0f0f", color: "white" }}
                >
                  {sk}
                  <button
                    type="button"
                    onClick={() => removeSkill(sk)}
                    className="text-white/50 hover:text-white transition-colors text-sm leading-none"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
          <input
            type="text"
            placeholder="React, Python, Figma…"
            className={inputClass}
            style={fs("skills")}
            value={formData.skills}
            onFocus={() => setFocused("skills")}
            onBlur={() => setFocused(null)}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            onKeyDown={handleSkillKeyDown}
          />
        </div>

        {/* Bio */}
        <div className="space-y-1.5 row-in-5">
          <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Short Bio</label>
          <textarea
            required
            rows={3}
            placeholder="Tell us about yourself and what you're looking for…"
            className={`${inputClass} resize-none`}
            style={fs("bio")}
            value={formData.bio}
            onFocus={() => setFocused("bio")}
            onBlur={() => setFocused(null)}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          />
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 gap-4 row-in-6">
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400">GitHub URL</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm">⌥</span>
              <input
                type="url"
                placeholder="github.com/you"
                className={`${inputClass} pl-8`}
                style={fs("github")}
                value={formData.github}
                onFocus={() => setFocused("github")}
                onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400">LinkedIn URL</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm">⌥</span>
              <input
                type="url"
                placeholder="linkedin.com/in/you"
                className={`${inputClass} pl-8`}
                style={fs("linkedin")}
                value={formData.linkedin}
                onFocus={() => setFocused("linkedin")}
                onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#f0f0f0" }} />

        {/* Actions */}
        <div className="flex gap-3">
          <button type="button" onClick={onClose} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn" style={{ flex: 2 }}>
            Create Profile ✦
          </button>
        </div>
      </form>
    </>
  );
}