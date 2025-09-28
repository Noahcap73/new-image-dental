'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="text-nid-blue relative">
      {/* Desktop Nav */}
      <div className="text-md hidden items-center gap-6 md:flex lg:text-xl">
        <Link
          href="/about"
          className="hover:text-nid-gold-200 font-[500] transition duration-300 ease-in-out hover:underline"
        >
          About
        </Link>
        <Link
          href="/services"
          className="hover:text-nid-gold-200 font-[500] transition duration-300 ease-in-out hover:underline"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="hover:text-nid-gold-200 font-[500] transition duration-300 ease-in-out hover:underline"
        >
          Contact Us
        </Link>
        <Link href="/booking">
          <button className="bg-nid-gold-200 hover:bg-nid-blue hover:shadow-nid-dark h-10 w-32 rounded-xl font-semibold text-white transition duration-300 ease-in-out hover:-translate-y-1">
            Book Now
          </button>
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <div className="flex items-center gap-4 md:hidden">
        <Link href="/booking" onClick={() => setIsOpen(false)}>
          <button className="bg-nid-gold-200 hover:bg-nid-blue hover:shadow-nid-dark h-10 w-28 rounded-xl font-semibold text-white transition duration-300 ease-in-out">
            Book Now
          </button>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="text-nid-blue hover:text-nid-gold-200 text-3xl transition duration-300 ease-in-out hover:cursor-pointer"
        >
          <HiMenu />
        </button>
      </div>

      {/* Overlay + Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              className="fixed top-0 right-0 z-50 flex h-[60vh] w-64 flex-col rounded-bl-2xl bg-white p-6 shadow-lg md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-nid-blue hover:text-nid-gold-200 mb-3 self-end text-3xl transition duration-300 ease-in-out hover:cursor-pointer"
              >
                <HiX />
              </button>

              {/* Links */}
              <div className="flex w-full justify-center">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-nid-gold-200 mb-4 w-[10rem] rounded-xl border px-8 py-2 text-center font-[500] transition duration-300 ease-in-out"
                >
                  Home
                </Link>
              </div>

              <div className="flex justify-center">
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-nid-gold-200 mb-4 w-[10rem] rounded-xl border px-8 py-2 text-center font-[500] transition duration-300 ease-in-out"
                >
                  About
                </Link>
              </div>

              <div className="flex justify-center">
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-nid-gold-200 mb-4 w-[10rem] rounded-xl border px-8 py-2 text-center font-[500] transition duration-300 ease-in-out"
                >
                  Services
                </Link>
              </div>

              <div className="flex justify-center">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-nid-gold-200 mb-3 w-[10rem] rounded-xl border px-8 py-2 text-center font-[500] transition duration-300 ease-in-out"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex justify-center">
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-nid-blue bg-nid-gold-200 mb-3 w-[10rem] rounded-xl border px-8 py-2 text-center font-[500] text-white transition duration-300 ease-in-out"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
