"use client";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const contributions = [
  "Building Features",
  "Fixing Bugs",
  "Design Improvements",
  "Content Creation",
  "Community Support",
];

export default function Step7Contribution({ formData, setFormData }: Props) {
  const toggleContribution = (item: string) => {
    setFormData((prev: any) => {
      const exists = prev.contributions.includes(item);
      return {
        ...prev,
        contributions: exists
          ? prev.contributions.filter((c: string) => c !== item)
          : [...prev.contributions, item],
      };
    });
  };

  return (
    <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300  hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-white">
        How would you like to contribute?
      </h4>

      <div className="flex flex-wrap gap-3">
        {contributions.map((item) => {
          const isSelected = formData.contributions.includes(item);

          return (
            <button
              key={item}
              onClick={() => toggleContribution(item)}
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
    </div>
  );
}
