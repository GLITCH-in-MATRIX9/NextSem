"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Anuphan } from "next/font/google";
import { AR_One_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const anuphan = Anuphan({ subsets: ["latin"], weight: "600" });
const arOneSans = AR_One_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/Authentication/login"); // ✅ redirect to login
    } else {
      alert(data.error);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col md:flex-row bg-black overflow-hidden">
      {/* LEFT SECTION */}
      <section className="relative hidden md:flex flex-[1.2] bg-white items-center justify-center p-12">
        <img src="/blue star.png" className="absolute top-[15%] right-[20%] h-22 w-22 rotate-12" />
        <img src="/yellow star.png" className="absolute top-[40%] left-[8%] h-14 w-14" />
        <img src="/black star.png" className="absolute top-[30%] right-[10%] h-16 w-16 opacity-20 md:opacity-100" />
        <img src="/red star.png" className="absolute bottom-[10%] right-[15%] h-20 w-20 -rotate-12" />

        <div className="relative z-10 w-full max-w-lg">
          <img
            src="/real_girl.png"
            alt="Student Illustration"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="flex flex-1 items-center justify-center bg-black p-6 sm:p-12">
        <div className="w-full max-w-sm flex flex-col items-center">
          
          {/* Heading */}
          <div className="text-white text-center mb-6">
            <h2 className="text-4xl font-bold">Create account</h2>
            <p className="text-sm mt-3 text-gray-300">
              Join us and get started today!
            </p>
          </div>

          {/* Divider */}
          <div className="relative my-8 w-full flex items-center justify-center">
            <div className="absolute w-full border-t border-gray-800"></div>
            <div className="relative bg-black px-4 flex gap-2">
              <span className="text-red-400 text-[14px] animate-pulse">★</span>
              <span className="text-blue-400 text-[24px] animate-pulse">★</span>
              <span className="text-red-400 text-[14px] animate-pulse">★</span>
            </div>
          </div>

          <h2 className={`mb-6 text-lg font-medium text-white ${roboto.className}`}>
            Sign up with
          </h2>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 w-full rounded-xl bg-white p-4 text-black outline-none ring-blue-500 focus:ring-2"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-xl bg-white p-4 text-black outline-none ring-blue-500 focus:ring-2"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-full rounded-xl bg-white p-4 pr-12 text-black outline-none ring-blue-500 focus:ring-2"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 w-full rounded-xl bg-white p-4 pr-12 text-black outline-none ring-blue-500 focus:ring-2"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={
                !name || !email || !password || password !== confirmPassword
              }
              className={`w-full rounded-xl p-3 font-bold transition ${
                name && email && password && password === confirmPassword
                  ? "bg-gray-100 hover:bg-blue-600 hover:text-white"
                  : "bg-gray-400"
              }`}
            >
              SIGN UP
            </button>
          </form>

          {/* Login Link */}
          <p className={`mt-10 text-sm text-white ${openSans.className}`}>
            Already have an account?
            <Link
              href="/Authentication/login"
              className="ml-1 text-blue-600 underline hover:text-blue-400"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}