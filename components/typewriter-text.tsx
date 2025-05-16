"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function TypewriterText({ text, className = "", delay = 500, speed = 100 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
      let i = 0
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1))
          i++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
        }
      }, speed)

      return () => clearInterval(typeInterval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay, speed])

  return (
    <div className={`relative ${className}`}>
      <span>{displayText}</span>
      {isTyping && <span className="absolute inline-block h-[1em] w-[2px] ml-1 bg-purple-500 animate-blink"></span>}
    </div>
  )
}
