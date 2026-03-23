"use client";

import { branches, semesters, resourceTypes, typeColors } from "./resourceData";

interface FilterBarProps {
  activeBranch: string;
  activeSemester: string;
  activeType: string;
  onBranchChange: (v: string) => void;
  onSemesterChange: (v: string) => void;
  onTypeChange: (v: string) => void;
  onReset: () => void;
  hasActiveFilters: boolean;
}

function FilterPill({
  label,
  active,
  onClick,
  color,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  color?: { bg: string; text: string };
}) {
  const activeStyle = color
    ? { backgroundColor: color.bg, color: color.text, borderColor: color.bg }
    : {};

  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-bold border-2 border-black
        transition-all duration-150 whitespace-nowrap
        ${
          active
            ? "shadow-none translate-x-[2px] translate-y-[2px]"
            : "bg-white text-black shadow-[2px_2px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
        }
      `}
      style={active ? activeStyle : {}}
    >
      {label}
    </button>
  );
}

export default function FilterBar({
  activeBranch,
  activeSemester,
  activeType,
  onBranchChange,
  onSemesterChange,
  onTypeChange,
  onReset,
  hasActiveFilters,
}: FilterBarProps) {
  return (
    <div className="space-y-4">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .filter-row { animation: fadeSlideIn 0.25s ease-out; }
      `}</style>

      {/* Row 1: Branch */}
      <div className="filter-row">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-gray-500">
            Branch
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <div className="flex flex-wrap gap-2">
          {branches.map((b) => (
            <FilterPill
              key={b}
              label={b}
              active={activeBranch === b}
              onClick={() => onBranchChange(b)}
              color={
                activeBranch === b ? { bg: "#000", text: "#fff" } : undefined
              }
            />
          ))}
        </div>
      </div>

      {/* Row 2: Semester */}
      <div className="filter-row">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-gray-500">
            Semester
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <div className="flex flex-wrap gap-2">
          {semesters.map((s) => (
            <FilterPill
              key={s}
              label={s}
              active={activeSemester === s}
              onClick={() => onSemesterChange(s)}
              color={
                activeSemester === s ? { bg: "#000", text: "#fff" } : undefined
              }
            />
          ))}
        </div>
      </div>

      {/* Row 3: Resource Type */}
      <div className="filter-row">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-gray-500">
            Type
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <div className="flex flex-wrap gap-2">
          {resourceTypes.map((t) => (
            <FilterPill
              key={t}
              label={t}
              active={activeType === t}
              onClick={() => onTypeChange(t)}
              color={
                activeType === t
                  ? t === "All"
                    ? { bg: "#000", text: "#fff" } // ✅ force black for "All"
                    : typeColors[t]
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      {/* Reset button */}
      {hasActiveFilters && (
        <div className="flex justify-end">
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full text-sm font-bold text-black bg-white hover:bg-black hover:text-white transition-all duration-150 shadow-[2px_2px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
