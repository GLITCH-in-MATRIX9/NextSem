"use client"

import Header from "./components/Header"
import AnimatedText from "./components/AnimatedText"
import ProTip from "./components/ProTip"
import CardsSection from "./components/CardsSection"
import Ticker from "./components/Ticker"
import useGSAPAnimations from "./hooks/useGSAPAnimations"

export default function BuddyMatching() {
  const refs = useGSAPAnimations()

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <main className="container mx-auto max-w-7xl px-4 py-6">

        <Header />

        <AnimatedText />

        <ProTip />

        <CardsSection refs={refs} />

        <Ticker />

      </main>
    </div>
  )
}