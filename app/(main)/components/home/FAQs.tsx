"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who can use this platform?",
    a: "Anyone pursuing engineering or related fields can use this platform. Whether you're a fresher or in your final year, it's designed to support your journey.",
  },
  {
    q: "Is it free to use?",
    a: "Yes, the platform is completely free to use. All tools, resources, and guidance are accessible without any cost. Although you may have to buy stickers or physical products, the core digital resources and tools are free.",
  },
  {
    q: "Which college students can use it?",
    a: "Students from any college can use this platform. It is aimed at helping IGDTUW students but is open to all engineering students across India and beyond.",
  },
  {
    q: "Who are the creators?",
    a: "This platform is built by IGDTUW students who understand the challenges of engineering education and are passionate about creating solutions to help their peers succeed.",
  },
  {
    q: "Can I reach out to seniors?",
    a: "Yes, through features like peer help and buddy matching, you can connect with seniors for guidance and support.",
  },
  {
    q: "What kind of resources are available?",
    a: "You’ll find cheat sheets, roadmaps, tools, chat-feature,cgpa calculator ,yearly planner and curated resources to help you study smarter and stay organized.",
  },
  {
    q: "Do I need to sign up?",
    a: "Some features may require sign-up for a personalized experience, but many tools are accessible without it.",
  },
  {
    q: "Is this only for coding students?",
    a: "No, while many resources focus on tech and engineering, the platform is useful for general academic productivity as well.",
  },
  {
    q: "Will more features be added?",
    a: "Yes, new tools, resources, and features are continuously being developed and added. If there's a specific feature you'd like to see, feel free to reach out with your suggestions!",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-white py-16 px-6 md:px-10">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 mt-2 text-sm">
            Everything you need to know about the platform
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-zinc-200 rounded-xl overflow-hidden transition"
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-black bg-white hover:bg-zinc-50 transition"
                >
                  <span className="text-sm md:text-base font-medium">
                    {item.q}
                  </span>

                  <span className="text-black text-lg">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-black  leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}