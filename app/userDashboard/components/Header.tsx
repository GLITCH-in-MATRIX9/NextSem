"use client"

import { useEffect, useState } from "react"

type UserData = {
  name: string
  email: string
  year: string | null
  branch: string | null
}

export default function Header() {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch basic user info
    fetch("/api/auth/me")
      .then((res) => res.ok ? res.json() : null)
      .then((json) => {
        if (json?.user) setUser(json.user)
      })
      .catch(() => {})

    // Fetch onboarding data for year & branch
    fetch("/api/user/onboarding")
      .then((res) => res.ok ? res.json() : null)
      .then((json) => {
        if (json?.data) {
          setUser((prev) =>
            prev
              ? { ...prev, year: json.data.year, branch: json.data.branch }
              : null
          )
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  // Get initials from name
  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 17) return "Good afternoon"
    return "Good evening"
  }

  return (
    <div className="relative w-full mb-10">

      {/* Cover */}
      <div className="relative h-40 rounded-2xl overflow-hidden border border-zinc-900">

        {/* Image */}
        <img
          src="/banner.png"
          alt="cover"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-between px-6">

          {/* Left */}
          <div>
            {loading ? (
              <div className="space-y-2 animate-pulse">
                <div className="h-7 w-40 bg-white/10 rounded-lg" />
                <div className="h-4 w-28 bg-white/10 rounded-lg" />
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-semibold text-white">
                  {getGreeting()}, {user?.name?.split(" ")[0] ?? "there"} 👋
                </h1>
                <p className="text-sm text-zinc-300">
                  {[user?.year, user?.branch].filter(Boolean).join(" · ") || "Complete your profile to see details"}
                </p>
              </>
            )}
          </div>

        </div>
      </div>

      {/* Avatar with initials */}
      <div className="absolute -bottom-6 left-6 w-16 h-16 rounded-full bg-zinc-800 border-2 border-zinc-900 z-10 flex items-center justify-center">
        {loading ? (
          <div className="w-full h-full rounded-full bg-zinc-700 animate-pulse" />
        ) : (
          <span className="text-white text-sm font-bold">
            {user?.name ? getInitials(user.name) : "?"}
          </span>
        )}
      </div>

    </div>
  )
}