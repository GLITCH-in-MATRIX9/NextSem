'use client'

import { useRef, useState } from 'react'
import { Resource, typeColors, typeEmoji } from './resourceData'

interface FeaturedSectionProps {
  featured: Resource[]
  trending: Resource[]
}

function MiniCard({ resource, variant }: { resource: Resource; variant: 'featured' | 'trending' }) {
  const colors = typeColors[resource.type]
  const emoji = typeEmoji[resource.type]

  if (variant === 'trending') {
    return (
      <div className="flex-shrink-0 w-64 bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
        <div className="h-1" style={{ background: colors.bg }} />
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2 py-0.5 rounded-full font-black" style={{ background: colors.bg, color: colors.text }}>
              {emoji} {resource.type}
            </span>
            <span className="text-xs text-gray-400 font-semibold ml-auto">{resource.branch}</span>
          </div>
          <h4 className="font-black text-sm text-black leading-tight mb-1 group-hover:underline line-clamp-2">{resource.subject}</h4>
          <div className="flex items-center justify-between mt-2 text-xs font-bold text-gray-500">
            <span>⬇ {resource.downloads.toLocaleString()}</span>
            <span>⭐ {resource.rating}</span>
          </div>
        </div>
      </div>
    )
  }

  // Featured variant — larger, inverted
  return (
    <div className="flex-shrink-0 w-72 bg-black text-white border-2 border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_#555] hover:shadow-[5px_5px_0px_#333] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
      <div className="h-1.5" style={{ background: colors.bg }} />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-2.5 py-0.5 rounded-full font-black" style={{ background: colors.bg, color: colors.text }}>
            {emoji} {resource.type}
          </span>
          <span className="text-xs text-gray-500 font-bold ml-auto">⭐ {resource.rating}</span>
        </div>
        <h4 className="font-black text-base text-white leading-tight mb-1.5 group-hover:underline decoration-2">{resource.subject}</h4>
        <p className="text-gray-400 text-xs leading-snug mb-3 line-clamp-2">{resource.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 font-semibold">{resource.branch} · {resource.semester} Sem</span>
          <span className="text-xs text-gray-500 font-semibold">⬇ {resource.downloads.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}

function HorizontalScroll({ children, label }: { children: React.ReactNode; label: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 280
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  const onScroll = () => {
    if (!scrollRef.current) return
    setCanScrollLeft(scrollRef.current.scrollLeft > 0)
    setCanScrollRight(
      scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth - 4
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-black uppercase tracking-tight">{label}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed shadow-[2px_2px_0px_#000] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed shadow-[2px_2px_0px_#000] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  )
}

export default function FeaturedSection({ featured, trending }: FeaturedSectionProps) {
  return (
    <div className="space-y-10 mb-10">
      <style>{`
        @keyframes sectionIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .section-in { animation: sectionIn 0.5s ease-out both; }
      `}</style>

      {/* Featured */}
      <div className="section-in p-6 bg-gray-50 border-2 border-black rounded-3xl">
        <HorizontalScroll label="⭐ Staff Picks">
          {featured.map(r => (
            <MiniCard key={r.id} resource={r} variant="featured" />
          ))}
        </HorizontalScroll>
      </div>

      {/* Trending */}
      <div className="section-in p-6 border-2 border-black rounded-3xl">
        <HorizontalScroll label="🔥 Trending This Week">
          {trending.map(r => (
            <MiniCard key={r.id} resource={r} variant="trending" />
          ))}
        </HorizontalScroll>
      </div>
    </div>
  )
}
