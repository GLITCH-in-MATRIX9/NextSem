"use client";

import React, { useState } from 'react';
import { Anuphan } from 'next/font/google';
import { AR_One_Sans } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const anuphan = Anuphan({ subsets: ['latin'], weight: '600' });
const arOneSans = AR_One_Sans({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] });
const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      router.push('/'); // change this to your actual route
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

          {/* Divider with stars */}
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

          {/* Error Message */}
          {error && (
            <div className="mb-4 w-full rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-center">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          {/* Form */}
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div className={roboto.className}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl bg-white p-4 text-black outline-none ring-blue-500 focus:ring-2"
                />
              </div>

              <div className="mb-2">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
              disabled={!password || !email || loading}
              className={`w-full rounded-xl p-3 font-bold outline-none ring-blue-500 focus:ring-2 transition-colors
                ${password && email && !loading
                  ? 'bg-gray-100 hover:bg-blue-600 hover:text-white cursor-pointer'
                  : 'bg-gray-400 cursor-not-allowed'
                } ${roboto.className}`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Logging in...
                </span>
              ) : (
                'LOGIN'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className={`mt-16 text-sm text-white ${openSans.className}`}>
            Not registered yet?
            <Link
              href="/Authentication/signup"
              className={`ml-1 text-blue-700 underline hover:text-blue-500 ${openSans.className}`}
            >
              Create an account
            </Link>
          </p>

        </div>
      </section>
    </main>
  );
}