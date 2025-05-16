"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function WavingCharacter() {
  const [isWaving, setIsWaving] = useState(false)

  useEffect(() => {
    // Start waving animation after a short delay
    const timer = setTimeout(() => {
      setIsWaving(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-32 h-32 mx-auto my-1 flex items-center justify-center">
      {/* 3D Boy Character */}
      <div className={`relative w-28 h-28 ${isWaving ? "animate-wave-character" : ""}`}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngtree-d-cartoon-rendering-of-a-cute-young-boy-waving-his-hand-png-image_16641674-EJ9J3Qldt6VF8bk5PywAPySubBoWcd.png"
          alt="3D Boy Character Waving"
          width={112}
          height={112}
          className="object-contain"
        />
      </div>

      {/* Speech bubble */}
      {isWaving && (
        <div className="absolute -top-2 right-0 bg-white px-2 py-1 rounded-lg shadow-sm text-xs animate-fadeIn">
          <p className="text-purple-600 font-medium">Hi there!</p>
          <div className="absolute -bottom-1 right-2 w-2 h-2 bg-white transform rotate-45"></div>
        </div>
      )}
    </div>
  )
}
