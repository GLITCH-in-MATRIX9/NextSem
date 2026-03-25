"use client";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const options = [
  "1-2 hours / week",
  "3-5 hours / week",
  "5-10 hours / week",
  "Flexible",
];

export default function Step5Availability({ formData, setFormData }: Props) {
  return (
    <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300  hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-white">
        Your Availability
      </h4>

      <div className="flex flex-wrap gap-3">
        {options.map((item) => {
          const isSelected = formData.availability === item;

          return (
            <button
              key={item}
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  availability: item,
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
    </div>
  );
}
