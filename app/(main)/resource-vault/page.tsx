"use client";

import { useState, useMemo, useEffect } from "react";
import { resources } from "./components/resourceData";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
// import FeaturedSection from './components/FeaturedSection'
import ResourceGrid from "./components/ResourceGrid";
import UploadCTA from "./components/UploadCTA";

export default function ResourceVaultPage() {
  const [search, setSearch] = useState("");
  const [branch, setBranch] = useState("All");
  const [semester, setSemester] = useState("All");
  const [type, setType] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [bookmarkView, setBookmarkView] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

  // Read bookmarks from localStorage
  useEffect(() => {
    const ids = resources
      .filter((r) => localStorage.getItem(`bookmark-${r.id}`))
      .map((r) => r.id);
    setBookmarkedIds(ids);

    // Listen for bookmark changes (simple poll every 2s)
    const interval = setInterval(() => {
      const updated = resources
        .filter((r) => localStorage.getItem(`bookmark-${r.id}`))
        .map((r) => r.id);
      setBookmarkedIds(updated);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Show scroll-to-top after scrolling
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasActiveFilters =
    branch !== "All" || semester !== "All" || type !== "All" || search !== "";

  const filtered = useMemo(() => {
    let list = bookmarkView
      ? resources.filter((r) => bookmarkedIds.includes(r.id))
      : resources;

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.subject.toLowerCase().includes(q) ||
          r.code.toLowerCase().includes(q) ||
          r.type.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q)) ||
          r.branch.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q),
      );
    }
    if (branch !== "All") list = list.filter((r) => r.branch === branch);
    if (semester !== "All") list = list.filter((r) => r.semester === semester);
    if (type !== "All") list = list.filter((r) => r.type === type);
    return list;
  }, [search, branch, semester, type, bookmarkView, bookmarkedIds]);

  const featured = useMemo(() => resources.filter((r) => r.featured), []);
  const trending = useMemo(() => resources.filter((r) => r.trending), []);

  const resetFilters = () => {
    setSearch("");
    setBranch("All");
    setSemester("All");
    setType("All");
    setBookmarkView(false);
  };

  return (
    <>
      <style global jsx>{`
        /* Scrollbar hide utility */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .page-enter {
          animation: fadeIn 0.4s ease-out;
        }
        .filters-panel {
          animation: floatUp 0.3s ease-out;
        }
        .scroll-top-btn {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>

      <main className="page-enter min-h-screen bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* ── HERO ─────────────────────────────────────── */}
          <HeroSection />

          {/* ── SEARCH ───────────────────────────────────── */}
          <div className="mb-8 flex flex-col items-center gap-2">
            <SearchBar
              value={search}
              onChange={setSearch}
              resultsCount={filtered.length}
            />
          </div>

          {/* ── FEATURED / TRENDING ──────────────────────── */}
          {/* {!hasActiveFilters && !bookmarkView && (
            <FeaturedSection featured={featured} trending={trending} />
          )} */}

          {/* ── FILTERS + GRID ───────────────────────────── */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-72 flex-shrink-0">
              {/* Mobile toggle */}
              <button
                onClick={() => setFiltersOpen((v) => !v)}
                className="lg:hidden w-full flex items-center justify-between px-5 py-3 bg-black text-white rounded-2xl font-bold mb-4 shadow-[3px_3px_0px_#666]"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M3 4h18M7 12h10M11 20h2"
                    />
                  </svg>
                  Filters {hasActiveFilters && "•"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${filtersOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Filter panel */}
              <div
                className={`lg:block ${filtersOpen ? "block filters-panel" : "hidden"}`}
              >
                <div className="bg-white border-2 border-black rounded-3xl p-5 shadow-[4px_4px_0px_#000] sticky top-6">
                  {/* Bookmarks toggle */}
                  <button
                    onClick={() => setBookmarkView((v) => !v)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-black mb-5 font-bold text-sm transition-all duration-150 ${
                      bookmarkView
                        ? "bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]"
                        : "bg-white text-black shadow-[2px_2px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill={bookmarkView ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    Saved Resources
                    {bookmarkedIds.length > 0 && (
                      <span className="ml-auto px-2 py-0.5 rounded-full text-xs font-black bg-white text-black border border-current">
                        {bookmarkedIds.length}
                      </span>
                    )}
                  </button>

                  <FilterBar
                    activeBranch={branch}
                    activeSemester={semester}
                    activeType={type}
                    onBranchChange={setBranch}
                    onSemesterChange={setSemester}
                    onTypeChange={setType}
                    onReset={resetFilters}
                    hasActiveFilters={hasActiveFilters}
                  />

                  {/* Quick stats */}
                  <div className="mt-5 pt-4 border-t-2 border-gray-100 space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
                      Quick Stats
                    </p>
                    {[
                      {
                        label: "Notes",
                        count: resources.filter((r) => r.type === "Notes")
                          .length,
                        color: "#FF4444",
                      },
                      {
                        label: "PYQs",
                        count: resources.filter((r) => r.type === "PYQ").length,
                        color: "#FFB800",
                      },
                      {
                        label: "Important Qs",
                        count: resources.filter(
                          (r) => r.type === "Important Qs",
                        ).length,
                        color: "#00C853",
                      },
                      {
                        label: "Lab Manuals",
                        count: resources.filter((r) => r.type === "Lab Manual")
                          .length,
                        color: "#2979FF",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ background: stat.color }}
                          />
                          <span className="text-xs font-semibold text-gray-600">
                            {stat.label}
                          </span>
                        </div>
                        <span className="text-xs font-black text-black">
                          {stat.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Resource Grid */}
            <div className="flex-1 min-w-0">
              {bookmarkView && bookmarkedIds.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-black rounded-3xl bg-gray-50">
                  <div className="text-6xl mb-4">🔖</div>
                  <h3 className="text-2xl font-black mb-2">No bookmarks yet</h3>
                  <p className="text-gray-500 font-medium text-center max-w-sm">
                    Tap the bookmark icon on any resource card to save it here
                    for quick access.
                  </p>
                </div>
              ) : (
                <ResourceGrid
                  resources={filtered}
                  searchQuery={search}
                  onViewResource={(resource) => {
                    console.log(resource);
                  }}
                />
              )}
            </div>
          </div>

          {/* ── UPLOAD CTA ──────────────────────────────── */}
          <div className="mt-16">
            <UploadCTA />
          </div>
        </div>

        {/* Scroll to top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="scroll-top-btn fixed bottom-6 right-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_#555] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 z-40"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </main>
    </>
  );
}
