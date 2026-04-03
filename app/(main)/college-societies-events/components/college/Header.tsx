"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerGirlRef = useRef<HTMLDivElement>(null)
  const sparkle1Ref = useRef<HTMLDivElement>(null)
  const sparkle2Ref = useRef<HTMLDivElement>(null)
  const sparkle3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap")

      gsap.fromTo(
        headerGirlRef.current,
        { x: 120, opacity: 0, scale: 0.75, rotate: 8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "back.out(1.8)",
          delay: 0.3,
        }
      )

      gsap.to(headerGirlRef.current, {
        y: -12,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.6,
      })

      gsap.to(headerGirlRef.current, {
        rotation: 2.5,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      })

      const sparkles = [sparkle1Ref, sparkle2Ref, sparkle3Ref]

      sparkles.forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            delay: 1.2 + i * 0.2,
          }
        )

        gsap.to(ref.current, {
          scale: 1.4,
          opacity: 0.6,
          duration: 0.8 + i * 0.25,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.8 + i * 0.3,
        })

        gsap.to(ref.current, {
          y: -10 - i * 4,
          x: i % 2 === 0 ? 5 : -5,
          duration: 1.5 + i * 0.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2 + i * 0.2,
        })
      })
    }

    init()
  }, [])

  const onHeaderEnter = async () => {
    const { gsap } = await import("gsap")
    gsap.to(headerGirlRef.current, {
      scale: 1.1,
      y: -18,
      rotation: -3,
      duration: 0.5,
      ease: "back.out(1.8)",
      overwrite: "auto",
    })
  }

  const onHeaderLeave = async () => {
    const { gsap } = await import("gsap")
    gsap.to(headerGirlRef.current, {
      scale: 1,
      y: -12,
      rotation: 2,
      duration: 0.7,
      ease: "elastic.out(1,0.5)",
      overwrite: "auto",
    })
  }

  return (
    <div className="px-6 pt-6">
      <div
        ref={headerRef}
        onMouseEnter={onHeaderEnter}
        onMouseLeave={onHeaderLeave}
        className="relative w-full flex flex-col md:flex-row items-center justify-between gap-6 bg-black p-6 md:p-8 rounded-[40px] border border-zinc-800 overflow-hidden group"
      >
        {/* TEXT */}
        <div className="w-full md:w-1/2 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
            Societies & Events<span className="text-zinc-500">.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
            Discover college societies, explore events, connect with peers, and stay updated with everything happening on campus.
          </p>
        </div>

        {/* ILLUSTRATION */}
        <div className="relative h-40 w-full md:h-52 md:w-[420px] flex justify-center items-center flex-shrink-0">

          <div ref={sparkle1Ref} className="absolute z-20 opacity-0" style={{ top: "5%", left: "18%" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD700">
              <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
            </svg>
          </div>

          <div ref={sparkle2Ref} className="absolute z-20 opacity-0" style={{ top: "2%", right: "14%" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
            </svg>
          </div>

          <div ref={sparkle3Ref} className="absolute z-20 opacity-0" style={{ top: "30%", right: "6%" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFE033">
              <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
            </svg>
          </div>

          <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl" />

          <div
            ref={headerGirlRef}
            className="relative w-full h-full opacity-0"
            style={{ transformOrigin: "bottom center" }}
          >
            <Image
              src="/design_girl.png"
              alt="Societies Illustration"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}