import Logo from '@/components/UI/Logo'
import Image from 'next/image'
import BookingButton from '@/components/UI/BookingButton'

export default function BookingBar() {
  return (
    <div className="w-full bg-gray-300 py-7">
      <div className="flex items-center justify-center gap-20">
        <div className="flex items-center">
          <Image src="/Logo-Small.png" alt="New Image Dental Logo" width={60} height={60} />
          <h1 className="text-nid-blue text-4xl font-bold">New Image Dental</h1>
        </div>
        <div className="w-auto">
          <h3 className="text-nid-blue mb-6 text-xl font-bold">
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
