"use client";

type FormData = {
  fullName: string;
  college: string;
  year: string;
  email: string;
};

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step1Basic({ formData, setFormData }: Props) {
  return (
    <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300  hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">

      {/* Title */}
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-5 md:mb-6 text-white">
        Basic Information
      </h4>

      {/* Inputs */}
      <div className="flex-1 overflow-y-auto space-y-4">

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              fullName: e.target.value,
            }))
          }
          className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
        />

        {/* College */}
        <input
          type="text"
          placeholder="College / University Name"
          value={formData.college}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              college: e.target.value,
            }))
          }
          className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
        />

        {/* Year */}
        <select
          value={formData.year}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              year: e.target.value,
            }))
          }
          className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <option value="">Year of Study</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="Final">Final Year</option>
        </select>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
        />

      </div>
    </div>
  );
}