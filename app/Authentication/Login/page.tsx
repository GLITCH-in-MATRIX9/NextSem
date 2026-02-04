"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Anuphan } from 'next/font/google';
import { AR_One_Sans } from 'next/font/google';
import { Roboto } from 'next/font/google';
import  {Open_Sans}  from 'next/font/google';
import { Noto_Sans } from 'next/font/google'; 


const anuphan = Anuphan({ subsets: ['latin'], weight: '600' });
const arOneSans = AR_One_Sans({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] });
const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="flex min-h-screen w-full flex-col md:flex-row bg-black overflow-hidden">
      
      {/* LEFT SECTION - Illustration & Brand */}
      <section className="relative hidden md:flex flex-[1.2] bg-white items-center justify-center p-12">
        
        {/* Decorative Images */}
        <img src="/blue star.png" alt="" className="absolute top-[15%] right-[20%] h-22 w-22 rotate-12" />
        <img src="/yellow star.png" alt="" className="absolute top-[40%] left-[8%] h-14 w-14" />
        <img src="/black star.png" alt="" className="absolute top-[30%] right-[10%] h-16 w-16 opacity-20 md:opacity-100" />
        <img src="/red star.png" alt="" className="absolute bottom-[10%] right-[15%] h-20 w-20 -rotate-12" />

        {/* Character Illustration */}
        <div className="relative z-10 w-full max-w-lg">
           {/* Replace src with your actual image path in /public */}
          <img 
            src="/real_girl.png"
            alt="Student Illustration"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </section>

      {/* RIGHT SECTION - Login Form */}
      <section className="flex flex-1 items-center justify-center bg-black p-6 sm:p-12">
        <div className="w-full max-w-sm flex flex-col items-center">
          
          {/* Brand Logo */}
          <div className="text-white text-center mb-6">
  <h2 className="text-4xl font-bold">Welcome back!</h2>
  <p className="text-sm mt-3 text-gray-300">
    We're excited to see you again!
  </p>
</div>

          <div className="relative my-8 w-full flex items-center justify-center">
  <div className="absolute w-full border-t border-gray-800"></div>
  <div className="relative bg-black px-4 flex gap-2">
    <div className="flex justify-center items-center gap-2">
  <span className="text-red-400 text-[14px] animate-[pulse_0.8s_infinite] [animation-delay:0.1s]">★</span>
  <span className="text-blue-400 text-[24px] animate-[pulse_0.8s_infinite] [animation-delay:0.1s]">★</span>
  <span className="text-red-400 text-[14px] animate-[pulse_0.8s_infinite] [animation-delay:0.1s]">★</span>
</div>
  </div>
</div>
{/* Sign In Heading */}
          <h2 className={`mb-6 text-lg font-medium text-white ${roboto.className}`}>Sign in with</h2>

          {/* Form */}
          <form className="w-full space-y-4">
           <div className={roboto.className}>
  <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 w-full rounded-xl bg-white p-4 text-black outline-none ring-blue-500 focus:ring-2"
        />
      </div>

      <div className="mb-2">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 w-full rounded-xl bg-white p-4 text-black outline-none ring-blue-500 focus:ring-2"
        />
      </div>

     <div className="mb-6">
  <a href="#" className="text-sm hover:underline" style={{ color: 'rgb(75, 120, 215)' }}>
    Forgot Password?
  </a>
</div>

</div>


            <button 
              type="submit"
              disabled={!password}
              className={`w-full rounded-xl p-3 text-bold-black font-bold outline-none ring-blue-500 focus:ring-2 transition-colors ${password ? 'bg-gray-100 hover:bg-blue-600 hover:text-white' : 'bg-gray-400'} ${roboto.className}`}
            >
              LOGIN
            </button>
          </form>

          {/* Sign Up Link */}
          <p className={`mt-16 text-sm text-white ${openSans.className}`}>
            Not registered yet? 
            <a href="#" className={`ml-1 font text-blue-700 underline hover:text-blue-500 ${openSans.className}`}>
              Create an account
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}