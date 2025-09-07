import Logo from '@/components/UI/Logo'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

import { IoLocationOutline } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'

export default function Header() {
  return (
    <div className="w-full">
      <div className="bg-nid-blue flex flex-col items-center gap-3 px-4 py-4 text-white md:flex-row md:justify-between">
        {/* Address */}
        <div className="flex items-center">
          <IoLocationOutline className="mr-1 text-lg md:text-2xl" />
          <p className="text-center text-xs md:text-left md:text-sm">
            3885 S Decatur Blvd #1100, Las Vegas, NV 89103
          </p>
        </div>

        {/* Contact + Socials */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Phone numbers */}
          <a href="tel:702-838-3311" className="hover:text-nid-gold-200 flex items-center gap-1">
            <FiPhone className="text-xl" />
            <p className="text-xs md:text-sm">702-838-3311</p>
          </a>
          <a href="tel:702-762-1855" className="hover:text-nid-gold-200 flex items-center gap-1">
            <IoPhonePortraitOutline className="text-xl" />
            <p className="text-xs md:text-sm">702-762-1855</p>
          </a>

          {/* Socials */}
          <div className="flex gap-3">
            <a href="https://www.yelp.com/biz/new-image-dental-las-vegas" target="_blank">
              <FaYelp className="hover:text-nid-gold-200 text-xl" />
            </a>
            <a href="https://www.instagram.com/newimagedentalnv/" target="_blank">
              <FaInstagram className="hover:text-nid-gold-200 text-xl" />
            </a>
            <a href="https://www.facebook.com/NewImageDentalNV2025" target="_blank">
              <FaFacebook className="hover:text-nid-gold-200 text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full items-center bg-white px-6 py-2">
        <div className="mr-auto">
          <Link href="/" className="transition hover:invert">
            <div className="flex items-center">
              <Logo />
              <h1 className="text-nid-blue hidden text-2xl font-bold md:block">New Image Dental</h1>
            </div>
          </Link>
        </div>

        <div>
          <Navbar />
        </div>
      </div>
    </div>
  )
}
