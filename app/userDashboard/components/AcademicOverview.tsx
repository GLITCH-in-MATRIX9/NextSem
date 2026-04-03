"use client"

import React, { useEffect, useState } from "react"

type OnboardingData = {
  cgpa: number | null
  credits: number | null
  totalCredits: number | null
  subjects: string[]
  year: string | null
  semester: string | null
  branch: string | null
  onboarded: boolean
}

const AcademicOverview = () => {
  const [data, setData] = useState<OnboardingData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/user/onboarding")
      .then((res) => res.ok ? res.json() : null)
      .then((json) => {
        if (json?.data) setData(json.data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  // Average attendance — placeholder since attendance isn't stored yet
  const avgAttendance = 83

  // Which subjects are below 75%
  const lowAttendanceSubjects: string[] = [] // wire up later when attendance tracking is added

  const cgpaPercent = data?.cgpa ? (data.cgpa / 10) * 100 : 0
  const creditsPercent =
    data?.credits && data?.totalCredits
      ? (data.credits / data.totalCredits) * 100
      : 0

  if (loading) {
    return (
      <div className="bg-[#0b0b0b] border border-white/5 rounded-2xl p-6 space-y-4 animate-pulse">
        <div className="h-4 bg-white/5 rounded w-1/3" />
        <div className="grid grid-cols-2 gap-5">
          <div className="h-24 bg-white/5 rounded-xl" />
          <div className="h-24 bg-white/5 rounded-xl" />
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 bg-white/5 rounded" />
          ))}
        </div>
      </div>
    )
  }

  if (!data?.onboarded) {
    return (
      <div className="bg-[#0b0b0b] border border-white/5 rounded-2xl p-6 flex items-center justify-center min-h-[200px]">
        <p className="text-xs text-white/30">Complete onboarding to see your academic overview.</p>
      </div>
    )
  }

  return (
    <div className="bg-[#0b0b0b] border border-white/5 rounded-2xl p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm text-white/90 tracking-wide">Academic Overview</h2>
        <button className="text-xs text-white/40 hover:text-white/70 transition">
          View Details
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-5">

        {/* CGPA */}
        <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 space-y-3">
          <p className="text-[11px] text-white/40 uppercase tracking-wider">CGPA</p>
          <h3 className="text-xl text-white/90 font-medium">
            {data.cgpa ?? "—"}
          </h3>
          <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-white/40" style={{ width: `${cgpaPercent}%` }} />
          </div>
          <p className="text-[11px] text-white/30">
            {data.credits && data.totalCredits
              ? `${data.credits} / ${data.totalCredits} credits`
              : "Credits not set"}
          </p>
        </div>

        {/* Credits Progress */}
        <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 space-y-3">
          <p className="text-[11px] text-white/40 uppercase tracking-wider">Credits</p>
          <h3 className="text-xl text-white/90 font-medium">
            {data.credits ?? "—"}
            <span className="text-sm text-white/30 ml-1">
              / {data.totalCredits ?? "?"}
            </span>
          </h3>
          <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-white/40" style={{ width: `${creditsPercent}%` }} />
          </div>
          <p className="text-[11px] text-white/30">
            {creditsPercent > 0 ? `${Math.round(creditsPercent)}% complete` : "Not set"}
          </p>
        </div>
      </div>

      {/* Branch & Semester */}
      <div className="flex gap-3">
        {data.branch && (
          <span className="text-[11px] text-white/40 bg-white/[0.03] border border-white/[0.05] rounded-full px-3 py-1">
            {data.branch}
          </span>
        )}
        {data.semester && (
          <span className="text-[11px] text-white/40 bg-white/[0.03] border border-white/[0.05] rounded-full px-3 py-1">
            {data.semester}
          </span>
        )}
        {data.year && (
          <span className="text-[11px] text-white/40 bg-white/[0.03] border border-white/[0.05] rounded-full px-3 py-1">
            {data.year}
          </span>
        )}
      </div>

      {/* Subjects */}
      {data.subjects && data.subjects.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-[11px] text-white/40 uppercase tracking-wider">Subjects</h3>
          {data.subjects.map((subject, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/70">{subject}</span>
                <span className="text-white/30 text-[11px]">No attendance data</span>
              </div>
              <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-white/10" style={{ width: "0%" }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Insight */}
      <div className="border border-white/[0.05] rounded-xl p-4 bg-white/[0.02]">
        <p className="text-xs text-white/60 leading-relaxed">
          {data.cgpa && data.cgpa >= 8.5
            ? <>Great work! Your CGPA of <span className="text-white/90">{data.cgpa}</span> is excellent. Keep it up.</>
            : data.cgpa && data.cgpa >= 7
            ? <>Your CGPA is <span className="text-white/90">{data.cgpa}</span>. A little more effort can push you above 8.5.</>
            : data.cgpa
            ? <>Your CGPA of <span className="text-white/90">{data.cgpa}</span> needs attention. Consider seeking help early.</>
            : <>Complete your academic profile to get personalised insights.</>
          }
        </p>
      </div>

    </div>
  )
}

export default AcademicOverview