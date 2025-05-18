"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, Send, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ElvaLogo } from "@/components/elva-logo"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      alert(error instanceof Error ? error.message : "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Animated bubble decorations */}
      <div className="fixed top-20 left-10 w-60 h-60 rounded-full bg-purple-200 opacity-20 blur-3xl animate-float"></div>
      <div
        className="fixed bottom-20 right-10 w-72 h-72 rounded-full bg-indigo-200 opacity-20 blur-3xl"
        style={{ animationDelay: "1s", animationDuration: "7s" }}
      ></div>
      <div
        className="fixed top-1/2 left-1/2 w-48 h-48 rounded-full bg-blue-200 opacity-20 blur-3xl"
        style={{ animationDelay: "2s", animationDuration: "8s" }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
            {/* Contact Info Section */}
            <div className="md:w-2/5 bg-gradient-to-br from-purple-500 to-indigo-600 p-8 md:p-12 text-white">
              <div className="flex items-center mb-8">
                <ElvaLogo className="h-12 w-12 bg-white rounded-full p-1" />
                <h2 className="text-2xl font-bold ml-3">Elva</h2>
              </div>

              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-purple-100">elvaentityinc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-purple-100">830-475-5744</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Linkedin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/kester-nkese-47a205214/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-100 hover:text-white transition-colors"
                    >
                      Kester Nkese
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-purple-100 italic">"Let me make your day easier. I'm Elva — ready when you are."</p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="md:w-3/5 p-8 md:p-12">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
                Get in Touch
              </h1>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="rounded-lg border-purple-200 focus:border-purple-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="rounded-lg border-purple-200 focus:border-purple-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="rounded-lg border-purple-200 focus:border-purple-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      className="rounded-lg border-purple-200 focus:border-purple-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
