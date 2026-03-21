"use client";

import { useState } from "react";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const MAX_CHARS = 250;

export default function Step6Motivation({ formData, setFormData }: Props) {
  const [text, setText] = useState(formData.motivation || "");

  const handleChange = (value: string) => {
    if (value.length <= MAX_CHARS) {
      setText(value);
      setFormData((prev: any) => ({
        ...prev,
        motivation: value,
      }));
    }
  };

  return (
    <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300  hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-white">
        Why do you want to join us?
      </h4>

      <div className="flex-1 flex flex-col">
        <textarea
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Tell us what motivates you..."
          className="w-full h-full min-h-[140px] resize-none rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
        />

        <div className="flex justify-between items-center mt-2 text-xs text-white/50">
          <span>Optional</span>
          <span>
            {text.length}/{MAX_CHARS}
          </span>
        </div>
      </div>
    </div>
  );
}
