"use client";

import { useState } from "react";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const techOptions = [
  "React",
  "Node.js",
  "Python",
  "MongoDB",
  "Figma",
  "Tailwind",
  "Next.js",
];

export default function Step3Tech({ formData, setFormData }: Props) {
  const [otherInput, setOtherInput] = useState(formData.otherTech || "");

  const toggleTech = (tech: string) => {
    setFormData((prev: any) => {
      const alreadySelected = prev.technologies.includes(tech);

      return {
        ...prev,
        technologies: alreadySelected
          ? prev.technologies.filter((t: string) => t !== tech)
          : [...prev.technologies, tech],
      };
    });
  };

  const handleOtherBlur = () => {
    setFormData((prev: any) => ({
      ...prev,
      otherTech: otherInput,
    }));
  };

  return (
    <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300  hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
      {/* Title */}
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-white">
        Technologies you know
      </h4>

      {/* Multi Select */}
      <div className="flex flex-wrap gap-3">
        {techOptions.map((tech) => {
          const isSelected = formData.technologies.includes(tech);

          return (
            <button
              key={tech}
              onClick={() => toggleTech(tech)}
              className={`
                px-4 py-2.5 rounded-full text-sm md:text-base border transition-all duration-200
                ${
                  isSelected
                    ? "bg-white text-black border-white scale-105"
                    : "bg-transparent text-white border-white/40 hover:border-white hover:bg-white hover:text-black"
                }
              `}
            >
              {tech}
            </button>
          );
        })}
      </div>

      {/* Other Input */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Other (optional)"
          value={otherInput}
          onChange={(e) => setOtherInput(e.target.value)}
          onBlur={handleOtherBlur}
          className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
      </div>

      {/* Helper */}
      <p className="text-xs text-white/50 mt-4">
        You can select multiple technologies
      </p>
    </div>
  );
}
