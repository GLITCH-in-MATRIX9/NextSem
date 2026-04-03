"use client";

import Image from "next/image";
import { useState } from "react";
import SocietyModal from "./SocietyModal";

export default function SocietyList() {
  const [selectedSociety, setSelectedSociety] = useState<any>(null);

  const societies = [
    {
      name: "Innerve (Tech Fest Society)",
      members: 150,
      desc: "Organizes IGDTUW’s flagship technical fest.",
      img: "https://picsum.photos/seed/innerve/400/300",
      lead: "Tech Leads",
      website: "#",
    },
    {
      name: "Nirvana (Design Club)",
      members: 75,
      desc: "UI/UX, branding, and creative design community.",
      img: "https://picsum.photos/seed/nirvana/400/300",
      lead: "Design Leads",
      website: "#",
    },
    
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Societies</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {societies.map((society) => (
          <div
            key={society.name}
            className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative h-44 w-full">
              <Image
                src={society.img}
                alt={society.name}
                fill
                className="object-cover group-hover:scale-110 transition"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{society.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{society.desc}</p>

              <div className="flex justify-between mt-4">
                <span className="text-xs text-gray-500">
                  {society.members} members
                </span>

                {/* ONLY CONNECTION */}
                <button
                  onClick={() => setSelectedSociety(society)}
                  className="text-xs bg-black text-white px-3 py-1 rounded-full"
                >
                  View →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      <SocietyModal
        society={selectedSociety}
        onClose={() => setSelectedSociety(null)}
      />
    </div>
  );
}