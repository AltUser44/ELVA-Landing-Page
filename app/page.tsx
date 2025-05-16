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
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0ff] via-[#f0e6ff] to-[#e8f0ff] bg-size-200 animate-gradient">
      {/* Header */}
      <header className="container mx-auto pt-8 px-4 md:px-6">
        <div className="flex justify-center items-center">
          <ElvaLogo className="h-20 w-20" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2A54] ml-2">ELVA</h1>
        </div>
        <div className="text-center text-xl md:text-2xl text-gray-700 mt-2 h-8">
          <TypewriterText text="Your lovely virtual assistant" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto mt-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <PhoneMockup />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl">✨</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2A54] ml-2">
                Coming to Play Store & App Soon Soon
              </h2>
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
        <blockquote className="text-center text-2xl md:text-3xl text-gray-700 italic max-w-3xl mx-auto">
          "Let me make your day easier. I'm Elva — ready when you are."
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="container mx-auto mt-20 py-8 px-4 md:px-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© 2025 Elva Inc.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-purple-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-purple-600">
              Terms of conditions
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-purple-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
