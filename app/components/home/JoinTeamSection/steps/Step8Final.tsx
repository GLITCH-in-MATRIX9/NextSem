"use client";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step8Final({ formData, setFormData }: Props) {
  return (
    <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300  hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-white">
        Final Details
      </h4>

      <div className="flex-1 space-y-4">
        {/* GitHub */}
        <input
          type="text"
          placeholder="GitHub Profile (optional)"
          value={formData.github}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              github: e.target.value,
            }))
          }
          className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
        />

        {/* Portfolio */}
        <input
          type="text"
          placeholder="Portfolio / Website (optional)"
          value={formData.portfolio}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              portfolio: e.target.value,
            }))
          }
          className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
        />

        {/* Agreement */}
        <label className="flex items-start gap-3 text-sm text-white/80 mt-4 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.agreement}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                agreement: e.target.checked,
              }))
            }
            className="mt-1 w-4 h-4 accent-white"
          />
          <span>
            I confirm that the information provided is accurate and I am willing
            to contribute actively.
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        disabled={!formData.agreement}
        className={`mt-6 w-full py-3 rounded-lg font-semibold transition ${
          formData.agreement
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-white/30 text-black/50 cursor-not-allowed"
        }`}
      >
        Submit Application
      </button>
    </div>
  );
}
