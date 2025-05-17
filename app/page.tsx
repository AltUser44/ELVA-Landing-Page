"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ElvaLogo } from "@/components/elva-logo"
import { PhoneMockup } from "@/components/phone-mockup"
import Link from "next/link"
import { TypewriterText } from "@/components/typewriter-text"
import { AnimatedFeatures } from "@/components/animated-features"
import { EmailForm } from "@/components/email-form"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f044c] via-[#533483] to-[#1a1a2e] text-white">
      {/* Animated Blobs */}
      <div className="pointer-events-none select-none">
        <div className="absolute top-[-100px] left-[-120px] w-[340px] h-[340px] bg-purple-600 opacity-40 rounded-full blur-3xl animate-blob1 z-0" style={{ willChange: 'transform' }} />
        <div className="absolute top-[40px] right-[-120px] w-[260px] h-[260px] bg-blue-500 opacity-30 rounded-full blur-3xl animate-blob2 z-0" style={{ willChange: 'transform' }} />
        <div className="absolute bottom-[-120px] left-[10%] w-[300px] h-[300px] bg-fuchsia-500 opacity-30 rounded-full blur-3xl animate-blob3 z-0" style={{ willChange: 'transform' }} />
        <div className="absolute bottom-[-100px] right-[-100px] w-[220px] h-[220px] bg-indigo-400 opacity-30 rounded-full blur-3xl animate-blob4 z-0" style={{ willChange: 'transform' }} />
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto pt-8 px-4 md:px-6">
          <div className="flex justify-center items-center">
            <ElvaLogo className="h-40 w-40" />
            <h1 className="text-4xl md:text-5xl font-bold text-red-200 ml-2">ΣᄂVΛ</h1>
          </div>
          <div className="text-center font-bold text-xl md:text-2xl text-white mt-2 h-8">
            <TypewriterText text="Your lovely virtual assistant." />
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto mt-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <PhoneMockup />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-2xl">✨</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white ml-2">
                Coming to App Store & Play Store Soon
            </h2>
            <img src="/appstore.png" alt="App Store" className="h-20 w-32 ml-1" />
            <img src="/playstore.png" alt="Play Store" className="h-20 w-32 ml-1" />
            </div>

              {/* ✅ Actual working email form component */}
              <EmailForm />

              {/* Animated Features */}
              <AnimatedFeatures />
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="container mx-auto mt-20 px-4 md:px-6">
          <blockquote className="text-center text-2xl md:text-3xl text-white italic max-w-3xl mx-auto">
            "Let me make your day easier. I'm Elva — ready when you are."
          </blockquote>
        </section>

        {/* Footer */}
        <footer className="container mx-auto mt-20 py-8 px-4 md:px-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="">© 2025 Elva Inc.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-purple-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-purple-200">
                Terms of conditions
              </Link>
              <Link href="/contact" className="hover:text-purple-200">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
