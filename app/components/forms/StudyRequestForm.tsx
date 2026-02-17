"use client";

import { useState } from "react";

export default function StudyRequestForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    topic: "",
    subject: "",
    description: "",
    mode: "Online", // Online or Offline
    duration: "1 hour",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your API call here to save data
    console.log("Study Request Data:", formData);
    alert("Study Request Created Successfully!");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Topic & Subject */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Topic/Concept</label>
          <input
            required
            type="text"
            placeholder="e.g. Binary Trees"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
            value={formData.topic}
            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Subject/Course</label>
          <input
            required
            type="text"
            placeholder="e.g. Data Structures"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700">Description</label>
        <textarea
          required
          rows={4}
          placeholder="Describe what you want to study specifically..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      {/* Mode & Duration */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Preferred Mode</label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
            value={formData.mode}
            onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
          >
            <option value="Online">Online (Zoom/Meet)</option>
            <option value="Offline">Offline (Library/Campus)</option>
            <option value="Hybrid">Flexible</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Duration</label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          >
            <option value="30 mins">30 mins</option>
            <option value="1 hour">1 hour</option>
            <option value="2 hours">2 hours</option>
            <option value="Long Session">Long Session (3+ hrs)</option>
          </select>
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
          className="flex-1 px-6 py-3 rounded-xl bg-yellow-400 text-black font-black hover:bg-yellow-500 transition-colors shadow-lg"
        >
          Post Request
        </button>
      </div>
    </form>
  );
}