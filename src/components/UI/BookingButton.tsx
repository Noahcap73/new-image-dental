import Link from 'next/link'

export default function BookingButton() {
  return (
    <Link href="/booking">
      <button className="bg-nid-gold-200 hover:shadow-nid-dark hover:bg-nid-blue h-10 w-45 rounded-xl py-2 text-center text-base font-[500] text-white transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer md:w-48 md:text-base lg:h-12 lg:w-64 xl:text-xl">
        Book an Appointment
      </button>
    </Link>
  )
}
