"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { BrainCog, CheckSquare, BarChart3 } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export function AnimatedFeatures() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])

  const features: Feature[] = [
    {
      icon: <BrainCog className="h-6 w-6 text-purple-600" />,
      title: "Smart Planning",
      description: "Adapt to your lifestyle",
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-purple-600" />,
      title: "Daily Checklist",
      description: "Color-coded task lists",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      title: "Progress Insight",
      description: "Reflect on your day",
    },
  ]

  useEffect(() => {
    const showFeatures = () => {
      features.forEach((_, index) => {
        setTimeout(
          () => {
            setVisibleFeatures((prev) => [...prev, index])
          },
          300 * (index + 1),
        )
      })
    }

    // Start animation after a delay
    const timer = setTimeout(showFeatures, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col items-center text-center transform transition-all duration-500 ${
            visibleFeatures.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-purple-100 p-3 rounded-full">{feature.icon}</div>
          <h3 className="font-semibold mt-2 text-white">{feature.title}</h3>
          <p className="text-sm text-white">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
