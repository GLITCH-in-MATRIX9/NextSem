"use client";

import Image from "next/image";
import { X, Users, Globe, Calendar, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SocietyModal({
  society,
  onClose,
}: {
  society: any;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {society && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl w-[92%] max-w-3xl p-6 md:p-8 relative shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 bg-white border shadow rounded-full p-2 hover:scale-110 transition"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image */}
            <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6">
              <Image
                src={society.img}
                alt={society.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-extrabold tracking-tight">
              {society.name}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-3 leading-relaxed">
              {society.details || society.desc}
            </p>

            {/* Info Grid */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span>{society.members} members</span>
              </div>

              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gray-500" />
                <span>{society.domain || "General"}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>{society.founded || "2015"}</span>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <a
                  href={society.instagram || "#"}
                  target="_blank"
                  className="underline"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">What they do</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {(society.highlights || [
                  "Organizes workshops & events",
                  "Conducts competitions",
                  "Collaborates with other societies",
                ]).map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {(society.tags || ["Events", "Workshops"]).map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-zinc-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-black text-white py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition">
                Join Society
              </button>

              <a
                href={society.website || "#"}
                target="_blank"
                className="flex-1 text-center border border-black py-2.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Visit Website
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}