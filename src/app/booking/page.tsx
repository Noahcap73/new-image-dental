import Image from 'next/image'
import { FiPhone } from 'react-icons/fi'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import Hero from '@/components/Hero'

export default function Booking() {
  return (
    <div className="mb-8 h-auto w-full">
      {/*HERO SECTION*/}
      <section>
        <Hero title="Book an Appointment" />
      </section>

      {/*BODY SECTION*/}
      <div className="flex flex-col-reverse items-center justify-center gap-10 md:flex md:flex-row lg:gap-32">
        <div className="relative" data-aos="fade-right">
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

        <div className="" data-aos="fade-left">
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
    </div>
  )
}
