"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/common/Modal";
import StudyRequestForm from "@/app/components/forms/StudyRequestForm";
import FloatingCTA from "@/app/components/common/FloatingCTA";

interface Buddy {
  id: number;
  name: string;
  year: string;
  branch: string;
  interests: string[];
  rating: number;
  availability: string;
  description: string;
  image: string;
}

const MOCK_BUDDIES: Buddy[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    year: "3rd Year",
    branch: "CSE",
    interests: ["Web Development", "Competitive Programming", "Cloud Computing"],
    rating: 4.8,
    availability: "2 hrs/day",
    description: "Passionate about Data Structures and Algorithms. Looking for study partners to prepare for placements.",
    image: "/card11.png",
  },
  {
    id: 2,
    name: "Sneha Gupta",
    year: "2nd Year",
    branch: "IT",
    interests: ["Machine Learning", "AI/ML", "Python"],
    rating: 4.9,
    availability: "3 hrs/day",
    description: "Working on deep learning projects. Need a partner to discuss research papers and implement models.",
    image: "/card22.png",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    year: "4th Year",
    branch: "ECE",
    interests: ["Mobile Apps", "Blockchain", "Web Development"],
    rating: 4.5,
    availability: "4 hrs/weekend",
    description: "Building a decentralized app. Looking for someone with React Native or Solidity experience.",
    image: "/card1.png",
  },
  {
    id: 4,
    name: "Priya Singh",
    year: "1st Year",
    branch: "CSE",
    interests: ["Web Development", "Data Science"],
    rating: 5.0,
    availability: "1 hr/day",
    description: "Just started coding! Looking for a buddy to learn HTML/CSS and JavaScript basics with.",
    image: "/card3.png",
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    year: "3rd Year",
    branch: "AIDS",
    interests: ["AI/ML", "Data Science", "Python"],
    rating: 4.7,
    availability: "Evening",
    description: "Kaggle master in the making. Let's solve data science challenges together.",
    image: "/card11.png",
  },
  {
    id: 6,
    name: "Ananya Desai",
    year: "2nd Year",
    branch: "CSE",
    interests: ["Competitive Programming", "C++"],
    rating: 4.6,
    availability: "Weekends",
    description: "Grinding LeetCode daily. Need a partner to simulate coding interviews.",
    image: "/card2.png",
  },
  {
    id: 7,
    name: "Rahul Verma",
    year: "3rd Year",
    branch: "Mechanical",
    interests: ["Web Development", "Robotics"],
    rating: 4.4,
    availability: "Flexible",
    description: "Mechanical engineer learning full-stack dev. Looking for peer reviews.",
    image: "/card3.png",
  },
];

export default function StudyBuddyPage() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [filteredBuddies, setFilteredBuddies] = useState<Buddy[]>(MOCK_BUDDIES);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const branches = ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT", "AIDS"];
  const interests = [
    "Web Development", "Machine Learning", "Data Science", "Mobile Apps",
    "Competitive Programming", "AI/ML", "Blockchain", "Cloud Computing",
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const results = MOCK_BUDDIES.filter((buddy) => {
      const yearMatch = selectedYear ? buddy.year === selectedYear : true;
      const branchMatch = selectedBranch ? buddy.branch === selectedBranch : true;
      const interestMatch =
        selectedInterests.length === 0
          ? true
          : buddy.interests.some((i) => selectedInterests.includes(i));
      return yearMatch && branchMatch && interestMatch;
    });
    setFilteredBuddies(results);
  }, [selectedYear, selectedBranch, selectedInterests]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const clearFilters = () => {
    setSelectedYear("");
    setSelectedBranch("");
    setSelectedInterests([]);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-15px); }
        }
        @keyframes pulseShadow {
          0%,100% { box-shadow: 0 0 40px rgba(255,255,255,0.1); }
          50%     { box-shadow: 0 0 60px rgba(255,255,255,0.15); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-fade-in-up  { animation: fadeInUp 0.5s ease-out forwards; }
        .animate-float       { animation: float 4s ease-in-out infinite; }
        .animate-pulse-shadow { animation: pulseShadow 3s ease-in-out infinite; }
        .animate-shimmer     { animation: shimmer 2s infinite; }
      `}</style>

      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-50" style={{ transform: `translateY(${scrollY * 0.05}px)` }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-100 rounded-full blur-3xl opacity-50" style={{ transform: `translateY(${scrollY * 0.08}px)` }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <Link href="/buddy-matching" className="inline-flex items-center gap-2 text-zinc-600 hover:text-black transition-colors mb-6 group">
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Matching</span>
          </Link>

          <div
            className="relative flex flex-col md:flex-row items-center justify-between gap-6 bg-black p-6 md:p-8 rounded-[50px] shadow-2xl overflow-hidden group"
            style={{ transform: `perspective(1000px) rotateX(${(mousePosition.y - 400) * 0.005}deg) rotateY(${(mousePosition.x - 600) * 0.005}deg)` }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-shimmer" />
            </div>
            <div className="max-w-lg z-10 relative">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-semibold">{filteredBuddies.length} Active Matches</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                Find Your Perfect
                <span className="block text-gray-300">Study Buddy</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                Connect with students who share your courses, goals, and study style.
              </p>
            </div>
            <div className="relative h-40 w-full md:h-48 md:w-[350px] flex justify-center items-center">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl animate-pulse-shadow" />
              <Image src="/card11.png" alt="Study Buddy Illustration" fill className="object-contain drop-shadow-2xl animate-float relative z-10" priority />
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">

          {/* Filters */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-black animate-fade-in-up sticky top-4">
              <h2 className="text-xl font-black text-black mb-5 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </h2>

              <div className="mb-5">
                <label className="block text-sm font-bold text-black mb-2">Year</label>
                <div className="grid grid-cols-2 gap-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(selectedYear === year ? "" : year)}
                      className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${selectedYear === year ? "bg-black text-white shadow-lg" : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"}`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-bold text-black mb-2">Branch</label>
                <div className="relative">
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border-2 border-black focus:ring-2 focus:ring-black outline-none font-semibold text-black appearance-none bg-white cursor-pointer text-sm"
                  >
                    <option value="">All Branches</option>
                    {branches.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-bold text-black mb-2">Interests</label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all hover:scale-105 ${selectedInterests.includes(interest) ? "bg-black text-white shadow-md" : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"}`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={clearFilters} className="w-full mt-2 text-zinc-700 font-semibold py-2 rounded-lg hover:bg-gray-100 text-sm border border-gray-300">
                Clear All
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-black">
                Available Buddies
                <span className="ml-2 text-base font-normal text-zinc-600">({filteredBuddies.length} matches)</span>
              </h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-white border-2 border-black hover:bg-gray-100">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
                <button className="p-2 rounded-lg bg-black text-white border-2 border-black">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </button>
              </div>
            </div>

            {filteredBuddies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredBuddies.map((buddy, idx) => (
                  <div
                    key={buddy.id}
                    className="bg-white rounded-2xl p-5 shadow-lg border-2 border-black hover:shadow-2xl transition-all group animate-fade-in-up hover:-translate-y-2 flex flex-col"
                    style={{ animationDelay: `${0.05 * idx}s` }}
                  >
                    <div className="relative mb-4">
                      <div className="w-full aspect-square rounded-2xl bg-black overflow-hidden border-4 border-gray-200 group-hover:border-black transition-all">
                        <Image src={buddy.image || "/card11.png"} alt={buddy.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-green-400 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-black text-black group-hover:underline line-clamp-1">{buddy.name}</h3>
                          <p className="text-sm text-zinc-600 font-semibold">{buddy.branch} • {buddy.year}</p>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg border border-gray-300 flex-shrink-0">
                          <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                        </button>
                      </div>

                      <div className="flex items-center gap-3 mb-3 text-xs">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <span className="font-black text-black">{buddy.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-zinc-600 font-semibold">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span>{buddy.availability}</span>
                        </div>
                      </div>

                      <p className="text-sm text-zinc-700 mb-4 line-clamp-3 font-medium flex-1">{buddy.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {buddy.interests.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-black text-xs font-bold rounded-lg border border-black">{tag}</span>
                        ))}
                        {buddy.interests.length > 2 && (
                          <span className="text-xs text-zinc-600 font-semibold flex items-center px-1">+{buddy.interests.length - 2}</span>
                        )}
                      </div>

                      <button className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                        Connect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-300 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No buddies found</h3>
                <p className="text-gray-500 mb-6 max-w-sm">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-zinc-800">Clear Filters</button>
              </div>
            )}

            {filteredBuddies.length > 0 && (
              <button className="w-full mt-6 py-3 bg-white border-2 border-black text-black font-bold rounded-lg hover:bg-gray-100 shadow-lg">
                Load More Buddies
              </button>
            )}
          </div>
        </div>

        {/* ── Floating CTA ── */}
        <FloatingCTA
          title="Can't Find a Match?"
          subtitle="Create a request and let others find you! Get notified when someone matches your criteria."
          buttonLabel="Create Study Request"
          onButtonClick={() => setIsRequestModalOpen(true)}
        />
      </div>

      <Modal isOpen={isRequestModalOpen} onClose={() => setIsRequestModalOpen(false)} title="Create Study Request">
        <StudyRequestForm onClose={() => setIsRequestModalOpen(false)} />
      </Modal>
    </div>
  );
}