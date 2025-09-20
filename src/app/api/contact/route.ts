// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// simple in-memory store
const requests = new Map<string, { count: number; lastRequest: number }>()

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    const now = Date.now()
    const windowMs = 60 * 1000 // 1 minute
    const limit = 5 // allow 5 requests per window

    const requestInfo = requests.get(ip) || { count: 0, lastRequest: now }

    if (now - requestInfo.lastRequest > windowMs) {
      // reset window
      requestInfo.count = 0
      requestInfo.lastRequest = now
    }

    requestInfo.count++
    requests.set(ip, requestInfo)

    if (requestInfo.count > limit) {
      return NextResponse.json(
        { success: false, error: 'Too many requests, please try again later.' },
        { status: 429 },
      )
    }

    const { name, companyName, email, phone, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Send email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nCompany: ${companyName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: '"New Image Dental" <no-reply@newimagedental>',
      to: email,
      subject: "We've received your message",
      text: `Hi ${name || companyName},\n\nThank you for contacting us! We have received your message and will get back to you soon.\n\nYour message:\n${message}\n\n— Team`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
