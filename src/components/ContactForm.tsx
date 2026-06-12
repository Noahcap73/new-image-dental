'use client'
import { useState, useEffect } from 'react'
import { CgSpinner } from 'react-icons/cg'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', companyName: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('')
  const [checked, setChecked] = useState(false)
  const [opted, setOpted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('Sending...')

    const res = await fetch('/api/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, optIn: checked }),
    })

    if (res.ok) {
      setStatus('Message sent, the team will review your message shortly!')
      setForm({ name: '', companyName: '', email: '', phone: '', message: '' })
    } else {
      setStatus('Something went wrong. Please try again.')
    }
  }

  useEffect(() => {
    if (!status) return
    const timer = setTimeout(() => setStatus(''), 3000)
    return () => clearTimeout(timer)
  }, [status])

  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Card */}
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name + Phone row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-nid-blue text-[11px] font-bold tracking-wide uppercase lg:text-xs"
              >
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border-nid-blue/20 text-nid-blue placeholder-nid-blue/30 focus:border-nid-gold-200 focus:ring-nid-gold-200/20 rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 lg:text-base"
                maxLength={60}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="text-nid-blue text-[11px] font-bold tracking-wide uppercase lg:text-xs"
              >
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(702) 555-0100"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border-nid-blue/20 text-nid-blue placeholder-nid-blue/30 focus:border-nid-gold-200 focus:ring-nid-gold-200/20 rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 lg:text-base"
                minLength={10}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-nid-blue text-[11px] font-bold tracking-wide uppercase lg:text-xs"
            >
              Email <span className="text-red-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              className="border-nid-blue/20 text-nid-blue placeholder-nid-blue/30 focus:border-nid-gold-200 focus:ring-nid-gold-200/20 rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 lg:text-base"
              maxLength={70}
              minLength={5}
              required
            />
          </div>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="company"
              className="text-nid-blue text-[11px] font-bold tracking-wide uppercase lg:text-xs"
            >
              Company
            </label>
            <input
              id="company"
              type="text"
              placeholder="Optional"
              value={form.companyName}
              onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              className="border-nid-blue/20 text-nid-blue placeholder-nid-blue/30 focus:border-nid-gold-200 focus:ring-nid-gold-200/20 rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 lg:text-base"
              maxLength={60}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-nid-blue text-[11px] font-bold tracking-wide uppercase lg:text-xs"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              placeholder="How can we help you?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border-nid-blue/20 text-nid-blue placeholder-nid-blue/30 focus:border-nid-gold-200 focus:ring-nid-gold-200/20 min-h-[100px] resize-y rounded-lg border px-3 py-2 text-sm leading-relaxed transition outline-none focus:ring-2 lg:text-base"
              maxLength={1500}
              minLength={10}
              required
            />
          </div>

          {/* Divider */}
          <hr className="border-gray-100" />

          {/* Checkboxes */}
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="opt-checkbox"
                checked={opted}
                onChange={(e) => setOpted(e.target.checked)}
                className="text-nid-gold-200 focus:ring-nid-gold-200 mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300"
              />
              <label
                htmlFor="opt-checkbox"
                className="text-xs leading-snug text-gray-500 lg:text-sm"
              >
                Text me appointment reminders and helpful updates. Msg &amp; data rates may apply.
                Text STOP to opt out.
              </label>
            </div>
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="terms-checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="text-nid-gold-200 focus:ring-nid-gold-200 mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300"
                required
              />
              <label
                htmlFor="terms-checkbox"
                className="text-xs leading-snug text-gray-500 lg:text-sm"
              >
                I agree to the{' '}
                <a href="/terms-of-use" className="text-nid-blue underline underline-offset-2">
                  terms and conditions
                </a>
                . <span className="text-red-400">*</span>
              </label>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[11px] leading-relaxed text-gray-400 lg:text-xs">
            By submitting this form you consent to receive messages, customer care, and appointment
            reminders from New Image Dental at the number provided. Consent is not a condition of
            purchase. Msg &amp; data rates may apply. Reply STOP to opt out.
          </p>

          {/* Submit */}
          <button
            disabled={!checked}
            type="submit"
            className="bg-nid-gold-200 hover:bg-nid-blue disabled:hover:bg-nid-gold-200 w-full rounded-lg py-2.5 text-sm font-medium text-white transition duration-200 disabled:cursor-not-allowed disabled:opacity-50 lg:text-base"
          >
            Send message
          </button>

          {/* Status toast */}
          {status && (
            <div
              className="text-nid-blue/70 absolute inset-0 flex items-center justify-center rounded-xl bg-white"
              role="alert"
            >
              <div className="flex items-center gap-2 text-sm">
                <CgSpinner
                  className={`text-nid-blue text-lg ${status === 'Sending...' ? 'animate-spin' : 'hidden'}`}
                />
                {status}
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
