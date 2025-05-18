import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    const API_KEY = process.env.MAILERLITE_API_KEY
    const GROUP_ID = process.env.MAILERLITE_GROUP_ID

    if (!API_KEY || !GROUP_ID) {
      throw new Error("MailerLite configuration is missing")
    }

    const response = await fetch(
      `https://connect.mailerlite.com/api/subscribers`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          groups: [GROUP_ID],
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(`MailerLite API error: ${data.error?.message || response.statusText}`)
    }

    return NextResponse.json({ success: true, message: "Email subscription successful" }, { status: 200 })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to subscribe" }, { status: 500 })
  }
}
