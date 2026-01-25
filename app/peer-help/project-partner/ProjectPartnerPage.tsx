"use client";

import { useState, useEffect, useRef } from "react";

export default function ProjectPartnerPage() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const topics = ["ML/AI", "Web Dev", "Gen AI", "Mobile Dev", "Blockchain", "IoT", "Game Dev", "Data Science"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const partners = [
    {
      id: 1,
      name: "Aarav Sharma",
      year: "3rd Year",
      college: "IIT Delhi",
      image: "/card22.png",
      description: "Building an AI-powered content generation platform with real-time collaboration features.",
      techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
      lookingFor: ["ML Engineer", "Backend Developer"],
      topic: "Gen AI"
    },
    {
      id: 2,
      name: "Priya Patel",
      year: "4th Year",
      college: "NIT Trichy",
      image: "/card11.png",
      description: "Creating a decentralized marketplace for digital assets with smart contract integration.",
      techStack: ["Solidity", "React", "Web3.js", "IPFS"],
      lookingFor: ["Blockchain Dev", "Frontend Dev"],
      topic: "Blockchain"
    },
    {
      id: 3,
      name: "Rohan Kumar",
      year: "2nd Year",
      college: "BITS Pilani",
      image: "/card22.png",
      description: "Developing a cross-platform mobile app for mental health tracking with ML insights.",
      techStack: ["React Native", "Python", "Firebase", "Scikit-learn"],
      lookingFor: ["Mobile Dev", "ML Engineer"],
      topic: "Mobile Dev"
    },
    {
      id: 4,
      name: "Ananya Singh",
      year: "3rd Year",
      college: "VIT Vellore",
      image: "/card11.png",
      description: "Building an IoT-based smart agriculture system with predictive analytics.",
      techStack: ["Arduino", "Python", "React", "AWS IoT"],
      lookingFor: ["IoT Developer", "Full Stack Dev"],
      topic: "IoT"
    },
    {
      id: 5,
      name: "Vikram Reddy",
      year: "4th Year",
      college: "IIT Bombay",
      image: "/card22.png",
      description: "Creating an advanced computer vision system for automated quality control in manufacturing.",
      techStack: ["PyTorch", "OpenCV", "Flask", "Docker"],
      lookingFor: ["ML Engineer", "DevOps Engineer"],
      topic: "ML/AI"
    },
    {
      id: 6,
      name: "Sneha Gupta",
      year: "2nd Year",
      college: "DTU Delhi",
      image: "/card11.png",
      description: "Developing a real-time multiplayer game with advanced physics and networking.",
      techStack: ["Unity", "C#", "Photon", "WebGL"],
      lookingFor: ["Game Developer", "3D Artist"],
      topic: "Game Dev"
    }
  ];

  const filteredPartners = partners.filter(partner => {
    const topicMatch = !selectedTopic || partner.topic === selectedTopic;
    const yearMatch = !selectedYear || partner.year === selectedYear;
    return topicMatch && yearMatch;
  });

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-50"
          style={{ animationDelay: '2s', transform: `translateY(${scrollY * 0.08}px)` }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="fixed w-1 h-1 bg-gray-400 rounded-full opacity-20 animate-float pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        
        {/* Back Button */}
        <a 
          href="/buddy-matching" 
          className="inline-flex items-center gap-2 text-zinc-600 hover:text-black transition-colors mb-6 group animate-fade-in-up"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Matching</span>
        </a>

        {/* Hero Section - Reduced Height */}
        <div 
          ref={heroRef}
          className="mb-12 animate-fade-in-up"
        >
          <div className="bg-gradient-to-br from-black via-zinc-900 to-zinc-800 rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/0 via-white/5 to-zinc-800/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white text-sm font-semibold">850+ Active Projects</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                  Find Your
                  <span className="block text-gray-300">
                    Project Partner
                  </span>
                </h1>
                
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                  Connect with talented developers who share your vision. Build amazing projects together and bring your ideas to life.
                </p>
              </div>

              {/* Larger Image */}
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-600/30 rounded-full blur-3xl" />
                <div className="relative w-full h-full animate-float">
                  <img
                    src="/card22.png"
                    alt="Project Partner"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {[
            { number: "850+", label: "Active Projects" },
            { number: "2.5k+", label: "Developers" },
            { number: "450+", label: "Teams Formed" },
            { number: "95%", label: "Success Rate" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all transform hover:-translate-y-2 group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-black text-black mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-zinc-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-black text-black mb-6 flex items-center gap-3">
            <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Topic Filter */}
            <div>
              <label className="block text-sm font-bold text-zinc-900 mb-3">Topic</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTopic("")}
                  className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all transform hover:scale-105 ${
                    selectedTopic === ""
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-gray-100 text-zinc-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all transform hover:scale-105 ${
                      selectedTopic === topic
                        ? 'bg-black text-white shadow-lg'
                        : 'bg-gray-100 text-zinc-700 hover:bg-gray-200'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-bold text-zinc-900 mb-3">Year</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedYear("")}
                  className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all transform hover:scale-105 ${
                    selectedYear === ""
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-gray-100 text-zinc-700 hover:bg-gray-200'
                  }`}
                >
                  All Years
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all transform hover:scale-105 ${
                      selectedYear === year
                        ? 'bg-black text-white shadow-lg'
                        : 'bg-gray-100 text-zinc-700 hover:bg-gray-200'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-zinc-600">
              Showing <span className="font-bold text-black">{filteredPartners.length}</span> projects
            </p>
            <button 
              onClick={() => {
                setSelectedTopic("");
                setSelectedYear("");
              }}
              className="text-sm font-semibold text-black hover:text-zinc-700 transition-colors underline"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {filteredPartners.map((partner, idx) => (
            <div
              key={partner.id}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all transform hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-4 border-gray-200 group-hover:border-black transition-all">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-black group-hover:underline transition-all">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-zinc-500 font-medium">{partner.year} • {partner.college}</p>
                </div>
              </div>

              {/* Topic Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full border border-gray-300">
                  {partner.topic}
                </span>
              </div>

              {/* Description */}
              <p className="text-zinc-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                {partner.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <p className="text-xs font-bold text-zinc-900 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {partner.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-zinc-700 text-xs font-semibold rounded-lg border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Looking For */}
              <div className="mb-6">
                <p className="text-xs font-bold text-zinc-900 mb-2">Looking for:</p>
                <div className="flex flex-wrap gap-2">
                  {partner.lookingFor.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Get in Touch Button */}
              <button className="w-full bg-black text-white font-bold py-3 rounded-xl shadow-lg hover:bg-zinc-800 transform hover:scale-105 transition-all">
                Get in Touch
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-black via-zinc-900 to-zinc-800 rounded-[40px] p-8 md:p-12 text-center relative overflow-hidden animate-fade-in-up shadow-2xl">
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Have a Project Idea?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Create your project profile and find the perfect team members to bring your vision to life!
            </p>
            <button className="px-8 py-4 bg-white text-black font-bold rounded-xl shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all">
              Create Project Profile
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}