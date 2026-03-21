"use client";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const interests = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "AI / ML",
  "Content Creation",
  "Marketing",
];

export default function Step2Interest({ formData, setFormData }: Props) {
  return (
    <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300  hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
      {/* Title */}
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-white">
        What are you interested in?
      </h4>

      {/* Options */}
      <div className="flex-1 flex flex-wrap gap-3">
        {interests.map((item) => {
          const isSelected = formData.interest === item;

          return (
            <button
              key={item}
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  interest: item,
                }))
              }
              className={`
                px-4 py-2.5 rounded-full text-sm md:text-base border transition-all duration-200
                ${
                  isSelected
                    ? "bg-white text-black border-white scale-105"
                    : "bg-transparent text-white border-white/40 hover:border-white hover:bg-white hover:text-black"
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Helper text */}
      <p className="text-xs text-white/50 mt-4">
        Select one option that best matches your interest
      </p>
    </div>
  );
}
