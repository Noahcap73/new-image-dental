'use client'
import { useState, useEffect } from 'react'
import Logo from '@/components/UI/Logo'
import { CgSpinner } from 'react-icons/cg'
import Hero from '@/components/Hero'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', companyName: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('Sending...')

    const res = await fetch('/api/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('Message sent, the team will review your message shortly!')
      setForm({ name: '', companyName: '', email: '', phone: '', message: '' })
    } else {
      setStatus('Something went wrong. Please Try again.')
    }
  }

  useEffect(() => {
    if (!status) return

    const timer = setTimeout(() => {
      setStatus('')
    }, 3000)

    return () => clearTimeout(timer)
  }, [status])

  return (
    <div>
      <section className="">
        <div className="mx-auto mb-6 w-[30rem] rounded-xl py-4 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="placeholder-nid-blue/60 text-nid-blue focus:ring-nid-gold-200 focus:shadow-nid-dark border-nid-blue rounded-lg border p-2 ring-offset-2 transition duration-300 ease-in-out focus:-translate-y-1 focus:border-0 focus:ring-2 focus:outline-none sm:w-[20rem]"
              maxLength={60}
              required
            />
            <input
              type="text"
              placeholder="Company Name"
              value={form.companyName}
              onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              className="placeholder-nid-blue/60 focus:ring-nid-gold-200 focus:shadow-nid-dark text-nid-blue border-nid-blue rounded-lg border p-2 ring-offset-2 transition duration-300 ease-in-out focus:-translate-y-1 focus:border-0 focus:ring-2 focus:outline-none sm:w-[20rem]"
              maxLength={60}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              className="placeholder-nid-blue/60 focus:ring-nid-gold-200 text-nid-blue focus:shadow-nid-dark border-nid-blue rounded-lg border p-2 ring-offset-2 transition duration-300 ease-in-out focus:-translate-y-1 focus:border-0 focus:ring-2 focus:outline-none sm:w-[20rem]"
              maxLength={70}
              minLength={5}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="placeholder-nid-blue/60 focus:ring-nid-gold-200 text-nid-blue focus:shadow-nid-dark border-nid-blue rounded-lg border p-2 ring-offset-2 transition duration-300 ease-in-out focus:-translate-y-1 focus:border-0 focus:ring-2 focus:outline-none sm:w-[20rem]"
              minLength={10}
              required
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="placeholder-nid-blue/60 focus:ring-nid-gold-200 text-nid-blue focus:shadow-nid-dark border-nid-blue rounded-lg border p-2 ring-offset-2 transition duration-300 ease-in-out focus:-translate-y-1 focus:border-0 focus:ring-2 focus:outline-none sm:w-[20rem]"
              maxLength={1500}
              minLength={10}
              required
            />
            <button
              type="submit"
              className="bg-nid-gold-200 hover:bg-nid-blue hover:shadow-nid-dark rounded-xl px-10 py-2 font-semibold text-white transition duration-300 ease-in-out hover:-translate-y-2"
            >
              Send
            </button>

            {status && (
              <div
                id="toast-simple"
                className={`text-nid-blue/70 absolute flex h-[22rem] w-full max-w-xs items-center justify-center space-x-4 rounded-lg bg-white p-4 text-center text-xl transition duration-300 ${status === 'sending...' ? 'animate-spin' : ''}`}
                role="alert"
              >
                <div className="flex items-center justify-center ps-4 text-sm font-normal">
                  <CgSpinner
                    className={`text-nid-blue r text-xl ${status === 'Sending...' ? 'animate-spin' : 'hidden'}`}
                  />
                  {status}
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
