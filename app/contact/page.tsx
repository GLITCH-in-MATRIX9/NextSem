'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (showThankYou) {
      // Prevent scrolling when popup is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scrolling when popup is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showThankYou]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just show the thank you popup
    setShowThankYou(true);
    // Reset form
    e.currentTarget.reset();
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row w-full min-h-[calc(100vh-120px)] animate-fade-in">
        {/* Left Section: Contact Form */}
        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-down">Contact Us</h1>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-md animate-slide-down delay-100">
            Our team is working incredibly hard to bring new features in the
            project but for that you need to tell us what you'd like us to add.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="animate-slide-right delay-200">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-[#EAEAEA] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all text-gray-900"
                placeholder=""
              />
            </div>
            <div className="animate-slide-right delay-300">
              <label htmlFor="branch" className="block text-sm font-semibold text-gray-700 mb-2">Your Branch</label>
              <input
                id="branch"
                name="branch"
                type="text"
                required
                className="w-full px-4 py-3 bg-[#EAEAEA] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all text-gray-900"
                placeholder=""
              />
            </div>
            <div className="animate-slide-right delay-400">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 bg-[#EAEAEA] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all text-gray-900"
                placeholder=""
              />
            </div>
            <div className="animate-slide-right delay-500">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-[#EAEAEA] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all text-gray-900"
                placeholder=""
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-end animate-fade-in delay-600">
              <button
                type="submit"
                className="transform hover:-translate-y-1 active:translate-y-0 transition-transform"
              >
                <span className="sr-only">Submit</span>
                <Image
                  src="/send-button.svg"
                  alt="Send"
                  width={163}
                  height={48}
                  className="object-contain"
                />
              </button>
            </div>
          </form>
        </div>

      {/* Right Section: Illustration */}
      <div className="md:w-1/2 bg-[#090909] p-8 md:p-12 flex items-center justify-center relative min-h-[300px] md:min-h-[calc(100vh-120px)] animate-zoom-in">
          <Image
            src="/contact-us.svg"
            alt="Contact Us Illustration"
            width={400}
            height={400}
            className="object-contain animate-float"
            priority
          />
          <div className="absolute top-8 right-8 animate-fade-in delay-700">
            <Image
                src="/contact-us-logo.svg"
                alt="NextSem Logo"
                width={100}
                height={50}
                className="object-contain"
            />
          </div>
      </div>
      </div>

      {/* Thank You Popup */}
      {showThankYou && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 animate-fade-in"
        >
          <div 
            className="absolute inset-0 bg-transparent backdrop-blur-md"
            onClick={closeThankYou}
          ></div>
          <div 
            className="relative bg-white rounded-xl p-8 md:p-12 max-w-md w-full mx-4 shadow-2xl animate-slide-down z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mb-6">
                <svg 
                  className="w-16 h-16 mx-auto text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-8">
                Your message has been sent successfully. We'll get back to you soon!
              </p>
              <button
                onClick={closeThankYou}
                className="px-6 py-3 bg-[#090909] text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}