"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export function EmailForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [feedback])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setFeedback(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Subscription failed');
      }

      toast({
        title: "Success!",
        description: "You'll be notified when Elva launches.",
      })
      setFeedback("Success! You'll be notified when Elva launches.")
      setEmail("")
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please try again later."
      toast({
        title: "Something went wrong.",
        description: message,
        variant: "destructive",
      })
      setFeedback(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-full py-6 px-6 border-purple-200 focus:border-purple-400"
          required
        />
        <Button
          type="submit"
          className="w-full md:w-auto rounded-full bg-purple-500 hover:bg-purple-600 text-white py-6 px-8 transition-all duration-200 hover:shadow-lg hover:scale-105"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Notify Me"}
        </Button>
      </form>
      {feedback && (
        <div className={`mt-2 text-center text-sm font-semibold ${feedback.startsWith('Success') ? 'text-green-600' : 'text-red-600'}`}>{feedback}</div>
      )}
    </>
  )
}
