"use client"

import React, { useEffect, useState } from "react"

type User = {
  id: string
  name: string
  year: string | null
  branch: string | null
  cgpa: number | null
}

type Conversation = {
  id: string
  content: string
  createdAt: string
  from: { id: string; name: string }
  to:   { id: string; name: string }
}

export default function NetworkSection() {
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)
  const [network, setNetwork] = useState<User[]>([])
  const [suggested, setSuggested] = useState<User[]>([])
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [loading, setLoading] = useState(true)
  const [connecting, setConnecting] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([
      fetch("/api/auth/me").then((r) => r.ok ? r.json() : null),
      fetch("/api/network/seniors").then((r) => r.ok ? r.json() : null),
      fetch("/api/network/messages").then((r) => r.ok ? r.json() : null),
    ]).then(([meData, networkData, msgData]) => {
      if (meData?.user) setCurrentUserId(meData.user.id)
      if (networkData) {
        setNetwork(networkData.network ?? [])
        setSuggested(networkData.suggested ?? [])
      }
      if (msgData) setConversations(msgData.conversations ?? [])
    }).finally(() => setLoading(false))
  }, [])

  const handleConnect = async (toUserId: string) => {
    setConnecting(toUserId)
    try {
      const res = await fetch("/api/network/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toUserId }),
      })
      if (res.ok) {
        // Move from suggested to pending (remove from suggested list)
        setSuggested((prev) => prev.filter((s) => s.id !== toUserId))
      }
    } finally {
      setConnecting(null)
    }
  }

  const timeAgo = (date: string) => {
    const diff = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
    if (diff < 60) return `${diff}s`
    if (diff < 3600) return `${Math.floor(diff / 60)}m`
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`
    return `${Math.floor(diff / 86400)}d`
  }

  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)

  const getPartner = (msg: Conversation) =>
    msg.from.id === currentUserId ? msg.to : msg.from

  if (loading) {
    return (
      <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 space-y-4 animate-pulse">
        <div className="h-5 w-32 bg-zinc-800 rounded" />
        <div className="h-16 bg-zinc-800 rounded-xl" />
        <div className="h-12 bg-zinc-800 rounded-xl" />
        <div className="h-12 bg-zinc-800 rounded-xl" />
      </div>
    )
  }

  return (
    <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-white">Your Network</h2>
        <button className="text-sm text-zinc-500 hover:text-white transition">View all</button>
      </div>

      {/* Accepted Connections */}
      {network.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-zinc-500">Connected</p>
          {network.slice(0, 2).map((person) => (
            <div
              key={person.id}
              className="bg-[#0F0F0F] border border-zinc-900 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white">
                  {getInitials(person.name)}
                </div>
                <div>
                  <p className="text-sm text-white">{person.name}</p>
                  <p className="text-xs text-zinc-500">
                    {[person.year, person.branch].filter(Boolean).join(" · ") || "No info yet"}
                  </p>
                </div>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition">
                Message
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Suggested Users */}
      {suggested.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-zinc-500">People you may know</p>
          {suggested.slice(0, 3).map((person) => (
            <div
              key={person.id}
              className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-zinc-900 transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white">
                  {getInitials(person.name)}
                </div>
                <div>
                  <p className="text-sm text-white">{person.name}</p>
                  <p className="text-xs text-zinc-500">
                    {[person.year, person.branch].filter(Boolean).join(" · ") || "No info yet"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleConnect(person.id)}
                disabled={connecting === person.id}
                className="text-xs text-zinc-400 hover:text-white disabled:opacity-40 transition"
              >
                {connecting === person.id ? "Sending..." : "Connect"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Recent Conversations */}
      {conversations.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-zinc-500">Recent Conversations</p>
          {conversations.map((msg) => {
            const partner = getPartner(msg)
            return (
              <div
                key={msg.id}
                className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-zinc-900 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white">
                    {getInitials(partner.name)}
                  </div>
                  <div>
                    <p className="text-sm text-white">{partner.name}</p>
                    <p className="text-xs text-zinc-500 truncate w-40">{msg.content}</p>
                  </div>
                </div>
                <span className="text-xs text-zinc-600">{timeAgo(msg.createdAt)}</span>
              </div>
            )
          })}
        </div>
      )}

      {/* Empty state */}
      {network.length === 0 && suggested.length === 0 && conversations.length === 0 && (
        <div className="border border-dashed border-zinc-800 rounded-xl p-4 text-center">
          <p className="text-sm text-zinc-500">
            Start connecting with others to build your network
          </p>
        </div>
      )}

    </div>
  )
}