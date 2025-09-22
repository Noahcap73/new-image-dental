import Image from 'next/image'
import BookingButton from '@/components/UI/BookingButton'

export default function BookingBar() {
  return (
    <div className="w-full bg-gray-300 py-7">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-20">
        <div className="flex items-center px-3">
          <Image
            src="/Logo-Small.png"
            alt="New Image Dental Logo"
            className="w-[6rem] md:max-w-[60px]"
            width={60}
            height={60}
          />
          <h1 className="text-nid-blue hidden text-4xl font-bold md:block">New Image Dental</h1>
        </div>
        <div className="w-auto">
          <h3 className="text-nid-blue mb-6 text-center text-xl font-bold md:text-left">
            Schedule an Appointment With Us Today!
          </h3>
          <div className="flex justify-center">
            <BookingButton />
          </div>
        </div>
      </div>
    </div>
  )
}
