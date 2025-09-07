import Image from 'next/image'
import { FiPhone } from 'react-icons/fi'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import BookingButton from '@/components/UI/BookingButton'

export default function Booking() {
  return (
    <div className="mb-8 h-auto w-full">
      {/*HERO SECTION*/}
      <section className="bg-nid-blue relative mb-6 overflow-hidden px-6 py-16 text-center text-white">
        {/* Background logo */}
        <Image
          src="/Logo-Small.png"
          alt="New Image Dental Logo"
          className="absolute inset-0 mx-auto my-auto opacity-20"
          width={195}
          height={195}
        />

        {/* Hero content */}
        <div className="relative z-10">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Book An Appointment</h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl">
            Rooted in Care, Smiles You Can Share
          </p>
        </div>
      </section>

      {/*BODY SECTION*/}
      <div className="flex flex-col-reverse items-center justify-center gap-10 md:flex md:flex-row lg:gap-32">
        <div className="relative">
          <div className="bg-nid-gold-200 absolute top-4 left-4 h-[15rem] w-[10rem] rounded-tr-3xl rounded-bl-3xl lg:h-[26rem] lg:w-[19rem]"></div>

          {/* image on top */}
          <div className="relative h-[15rem] w-[10rem] lg:h-[26rem] lg:w-[19rem]">
            <Image
              src="/media/glasses-smile.jpg"
              alt="Photo by Vinicius Wiesehofer on Unsplash"
              fill
              className="rounded-tr-3xl rounded-bl-3xl object-cover"
            />
          </div>
        </div>

        <div className="">
          <p className="mb-7 text-center text-lg font-semibold text-gray-700 lg:text-2xl">
            For appointments please call:
          </p>

          <div className="flex justify-center">
            <a
              href="tel:702-838-3311"
              className="hover:text-nid-gold-200 text-nid-blue mx-auto inline-flex underline transition duration-300 ease-in-out"
            >
              <FiPhone className="text-2xl" />
              <span className="text-lg lg:text-xl">702-838-3311</span>
            </a>
          </div>

          <p className="my-4 text-center text-lg font-semibold text-gray-700"> Or </p>

          <div className="flex justify-center">
            <a
              href="tel:702-762-1855"
              className="hover:text-nid-gold-200 text-nid-blue inline-flex underline transition duration-300 ease-in-out"
            >
              <IoPhonePortraitOutline className="text-2xl" />
              <p className="text-lg lg:text-xl">702-762-1855</p>
            </a>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xs text-gray-700 italic md:text-base">
              <span className="text-red-500">*</span> Online Booking Coming Soon - We Appreciate
              Your Patience <span className="text-red-500">*</span>
            </h3>
          </div>
        </div>
      </div>

      <section className="text-nid-blue mt-10 bg-gray-300 px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Join the New Image Dental Family</h2>
        <p className="mb-8 text-lg">
          Ready to schedule your first visit? We look forward to welcoming you.
        </p>
        <BookingButton />
      </section>
    </div>
  )
}
