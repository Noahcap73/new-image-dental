import Image from 'next/image'
import BookingButton from '@/components/UI/BookingButton'

export default function BookingBar() {
  return (
    <div className="w-full bg-gray-300 py-7">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-20">
        <div className="flex items-center px-3">
          <Image
            src="/Logo-Gold.png"
            alt=""
            aria-hidden="true"
            className="w-[6rem] md:max-w-[60px]"
            width={60}
            height={60}
          />
          <p className="text-nid-blue hidden text-2xl font-bold md:block lg:text-3xl">
            New Image Dental
          </p>
        </div>
        <div className="w-auto">
          <h2 className="text-nid-blue mb-6 text-center text-lg font-bold md:text-left lg:text-xl">
            Schedule an Appointment With Us Today!
          </h2>
          <div className="flex justify-center">
            <BookingButton />
          </div>
        </div>
      </div>
    </div>
  )
}
