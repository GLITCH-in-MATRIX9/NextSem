"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/common/Modal";
import ProfileForm from "@/app/components/forms/ProfileForm";
import FloatingCTA from "@/app/components/common/FloatingCTA";

export default function ProjectPartnerPage() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const topics = ["ML/AI", "Web Dev", "Gen AI", "Mobile Dev", "Blockchain", "IoT", "Game Dev", "Data Science"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

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

  const partners = [
    { id: 1, name: "Aarav Sharma", year: "3rd Year", college: "IIT Delhi", image: "/card22.png", description: "Building an AI-powered content generation platform with real-time collaboration features.", techStack: ["React", "Node.js", "TensorFlow", "MongoDB"], lookingFor: ["ML Engineer", "Backend Developer"], topic: "Gen AI" },
    { id: 2, name: "Priya Patel", year: "4th Year", college: "NIT Trichy", image: "/card11.png", description: "Creating a decentralized marketplace for digital assets with smart contract integration.", techStack: ["Solidity", "React", "Web3.js", "IPFS"], lookingFor: ["Blockchain Dev", "Frontend Dev"], topic: "Blockchain" },
    { id: 3, name: "Rohan Kumar", year: "2nd Year", college: "BITS Pilani", image: "/card22.png", description: "Developing a cross-platform mobile app for mental health tracking with ML insights.", techStack: ["React Native", "Python", "Firebase", "Scikit-learn"], lookingFor: ["Mobile Dev", "ML Engineer"], topic: "Mobile Dev" },
    { id: 4, name: "Ananya Singh", year: "3rd Year", college: "VIT Vellore", image: "/card11.png", description: "Building an IoT-based smart agriculture system with predictive analytics.", techStack: ["Arduino", "Python", "React", "AWS IoT"], lookingFor: ["IoT Developer", "Full Stack Dev"], topic: "IoT" },
    { id: 5, name: "Vikram Reddy", year: "4th Year", college: "IIT Bombay", image: "/card22.png", description: "Creating an advanced computer vision system for automated quality control in manufacturing.", techStack: ["PyTorch", "OpenCV", "Flask", "Docker"], lookingFor: ["ML Engineer", "DevOps Engineer"], topic: "ML/AI" },
    { id: 6, name: "Sneha Gupta", year: "2nd Year", college: "DTU Delhi", image: "/card11.png", description: "Developing a real-time multiplayer game with advanced physics and networking.", techStack: ["Unity", "C#", "Photon", "WebGL"], lookingFor: ["Game Developer", "3D Artist"], topic: "Game Dev" },
  ];

  const filteredPartners = partners.filter((p) => {
    const topicMatch = !selectedTopic || p.topic === selectedTopic;
    const yearMatch = !selectedYear || p.year === selectedYear;
    return topicMatch && yearMatch;
  });

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <style jsx>{`
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseShadow { 0%,100% { box-shadow: 0 0 40px rgba(255,255,255,0.1); } 50% { box-shadow: 0 0 60px rgba(255,255,255,0.15); } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-float        { animation: float 4s ease-in-out infinite; }
        .animate-fade-in-up   { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-pulse-shadow { animation: pulseShadow 3s ease-in-out infinite; }
        .animate-shimmer      { animation: shimmer 2s infinite; }
      `}</style>

      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50" style={{ transform: `translateY(${scrollY * 0.05}px)` }} />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-zinc-100 rounded-full blur-3xl opacity-50" style={{ transform: `translateY(${scrollY * 0.08}px)` }} />
      </div>

      {[...Array(10)].map((_, i) => (
        <div key={i} className="fixed w-1 h-1 bg-black rounded-full opacity-10 animate-float pointer-events-none"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${3 + Math.random() * 4}s` }}
        />
      ))}

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
                <span className="text-white text-sm font-semibold">850+ Active Projects</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                Find Your Perfect
                <span className="block text-gray-300">Project Partner</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                Connect with talented developers and build amazing projects together.
              </p>
            </div>
            <div className="relative h-40 w-full md:h-48 md:w-[350px] flex justify-center items-center">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl animate-pulse-shadow" />
              <Image src="/card22.png" alt="Project Partner" fill className="object-contain drop-shadow-2xl animate-float relative z-10" priority />
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
                Filter Projects
              </h2>

              <div className="mb-5">
                <label className="block text-sm font-bold text-black mb-2">Topic</label>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setSelectedTopic("")} className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all hover:scale-105 ${selectedTopic === "" ? "bg-black text-white shadow-lg" : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"}`}>All</button>
                  {topics.map((topic) => (
                    <button key={topic} onClick={() => setSelectedTopic(topic)} className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all hover:scale-105 ${selectedTopic === topic ? "bg-black text-white shadow-lg" : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"}`}>{topic}</button>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-bold text-black mb-2">Year</label>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setSelectedYear("")} className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${selectedYear === "" ? "bg-black text-white shadow-lg" : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"}`}>All Years</button>
                  {years.map((year) => (
                    <button key={year} onClick={() => setSelectedYear(year)} className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${selectedYear === year ? "bg-black text-white shadow-lg" : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"}`}>{year}</button>
                  ))}
                </div>
              </div>

              <button onClick={() => { setSelectedTopic(""); setSelectedYear(""); }} className="w-full mt-2 text-zinc-700 font-semibold py-2 rounded-lg hover:bg-gray-100 text-sm border border-gray-300">
                Clear All
              </button>
            </div>
          </div>

          {/* Partner Cards */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-black">
                Available Partners
                <span className="ml-2 text-base font-normal text-zinc-600">({filteredPartners.length} projects)</span>
              </h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-white border-2 border-black hover:bg-gray-100">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
                <button className="p-2 rounded-lg bg-white border-2 border-black hover:bg-gray-100">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPartners.map((partner, idx) => (
                <div key={partner.id} className="bg-white rounded-2xl p-5 shadow-lg border-2 border-black hover:shadow-2xl transition-all group animate-fade-in-up hover:-translate-y-2 flex flex-col" style={{ animationDelay: `${0.05 * idx}s` }}>
                  <div className="relative mb-4">
                    <div className="w-full aspect-square rounded-2xl bg-black overflow-hidden border-4 border-gray-200 group-hover:border-black transition-all">
                      <Image src={partner.image} alt={partner.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-black text-white text-xs font-black rounded-lg shadow-lg">{partner.topic}</div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-black text-black group-hover:underline line-clamp-1">{partner.name}</h3>
                        <p className="text-sm text-zinc-600 font-semibold">{partner.year} • {partner.college}</p>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg border border-gray-300 flex-shrink-0">
                        <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                      </button>
                    </div>

                    <p className="text-sm text-zinc-700 mb-4 line-clamp-3 font-medium flex-1">{partner.description}</p>

                    <div className="mb-3">
                      <p className="text-xs font-black text-black mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-1">
                        {partner.techStack.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-black text-xs font-bold rounded-lg border border-gray-300">{tech}</span>
                        ))}
                        {partner.techStack.length > 3 && <span className="px-2 py-1 text-zinc-600 text-xs font-semibold">+{partner.techStack.length - 3}</span>}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-black text-black mb-2">Looking for:</p>
                      <div className="flex flex-wrap gap-2">
                        {partner.lookingFor.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-black text-white text-xs font-black rounded-full shadow-md">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 mt-auto">
                      Get in Touch
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 bg-white border-2 border-black text-black font-bold rounded-lg hover:bg-gray-100 shadow-lg">
              Load More Partners
            </button>
          </div>
        </div>

        {/* ── Floating CTA ── */}
        <FloatingCTA
          title="Have a Project Idea?"
          subtitle="Create your project profile and find the perfect team members to bring your vision to life!"
          buttonLabel="Create Project Profile"
          onButtonClick={() => setIsProfileModalOpen(true)}
        />
      </div>

      <Modal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} title="Create Developer Profile">
        <ProfileForm onClose={() => setIsProfileModalOpen(false)} />
      </Modal>
    </div>
  );
}