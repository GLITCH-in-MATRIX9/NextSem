"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Anuphan } from 'next/font/google';
import { AR_One_Sans } from 'next/font/google';

const anuphan = Anuphan({ subsets: ['latin'], weight: '600' });
const arOneSans = AR_One_Sans({ subsets: ['latin'] });


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="flex min-h-screen w-full flex-col md:flex-row bg-black overflow-hidden">
      
      {/* LEFT SECTION - Illustration & Brand */}
      <section className="relative hidden md:flex flex-[1.2] bg-white items-center justify-center p-12">
        
        {/* Logo */}
        <div className="absolute top-12 left-12">
          <img 
            src="/logo.png"
            alt="Logo"
            className="h-25 w-auto"
          />
        </div>

        {/* Decorative Images */}
        <img src="/blue star.png" alt="" className="absolute top-[15%] right-[20%] h-22 w-22 rotate-12" />
        <img src="/yellow star.png" alt="" className="absolute top-[40%] left-[8%] h-14 w-14" />
        <img src="/black star.png" alt="" className="absolute top-[30%] right-[10%] h-16 w-16 opacity-20 md:opacity-100" />
        <img src="/red star.png" alt="" className="absolute bottom-[10%] right-[15%] h-20 w-20 -rotate-12" />

        {/* Character Illustration */}
        <div className="relative z-10 w-full max-w-lg">
           {/* Replace src with your actual image path in /public */}
          <img 
            src="/Gemini_Generated_Image_j91nwcj91nwcj91n.png"
            alt="Student Illustration"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </section>

      {/* RIGHT SECTION - Login Form */}
      <section className="flex flex-1 items-center justify-center bg-black p-6 sm:p-12">
        <div className="w-full max-w-sm flex flex-col items-center">
          
          {/* Google Button */}
          <button className="flex w-full items-center justify-center gap-4 rounded-full bg-black px-3 py-2.5 shadow-lg transition-all hover:bg-black">
            <img 
              src="/signin.png"
              alt="Continue with Google"
              className="h-20 w-auto"
            />
          </button>

          <div className="relative my-8 w-full flex items-center justify-center">
            <div className="absolute w-full border-t border-gray-800"></div>
            <span className={`relative bg-black px-4 text-lg text-white ${arOneSans.className}`}>Or</span>
          </div>

          <h2 className={`mb-6 text-lg font-medium text-white ${arOneSans.className}`}>Sign in with</h2>

          {/* Form */}
          <form className="w-full space-y-4">
            <div>
              <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-white p-4 text-black outline-none ring-blue-500 focus:ring-2"
              />
            </div>
            
            <div className="relative">
              <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl bg-white p-4 text-black outline-none ring-blue-500 focus:ring-2"
              />
              <div className="mt-2 text-right">
                <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors underline">
                  Forgot Password ?
                </a>
              </div>
            </div>

            <button 
              type="submit"
              disabled={!password}
              className={`w-full rounded-xl p-3 text-black font-semibold outline-none ring-blue-500 focus:ring-2 transition-colors ${password ? 'bg-gray-700 hover:bg-blue-600' : 'bg-gray-400'} ${anuphan.className}`}
            >
              LOGIN
            </button>
          </form>

          {/* Sign Up Link */}
          <p className={`mt-16 text-sm text-white ${arOneSans.className}`}>
            Not registered yet? 
            <a href="#" className="ml-1 font-semibold text-white underline hover:text-gray-200">
              Create an account
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}