"use client";

import { useState } from "react";

export default function ProfileForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    year: "1st Year",
    skills: "",
    bio: "",
    github: "",
    linkedin: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your API call here to save data
    console.log("Profile Data:", formData);
    alert("Profile Created Successfully!");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Avatar Placeholder */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300">
          <span className="text-gray-400 text-xs text-center">Upload<br/>Photo</span>
        </div>
        <div>
          <h3 className="font-bold text-black">Profile Picture</h3>
          <p className="text-xs text-gray-500">JPG or PNG. Max 2MB.</p>
        </div>
      </div>

      {/* Name & Branch */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Full Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Branch</label>
          <select
             required
             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
             value={formData.branch}
             onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="Mechanical">Mechanical</option>
          </select>
        </div>
      </div>

       {/* Year & Skills */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Year</label>
           <select
             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
             value={formData.year}
             onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          >
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Skills (Comma separated)</label>
          <input
            type="text"
            placeholder="React, Python, Figma..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          />
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700">Short Bio</label>
        <textarea
          required
          rows={3}
          placeholder="Tell us about yourself and what you are looking for..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
      </div>

      {/* Social Links */}
      <div className="grid md:grid-cols-2 gap-4">
         <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">GitHub URL</label>
          <input
            type="url"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
            value={formData.github}
            onChange={(e) => setFormData({ ...formData, github: e.target.value })}
          />
        </div>
         <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">LinkedIn URL</label>
          <input
            type="url"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="pt-4 flex gap-3">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 font-bold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-6 py-3 rounded-xl bg-black text-white font-black hover:bg-zinc-800 transition-colors shadow-lg"
        >
          Create Profile
        </button>
      </div>
    </form>
  );
}