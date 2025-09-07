import Link from 'next/link'

export default function BookingButton() {
  return (
    <Link href="/booking">
      <button className="bg-nid-blue hover:shadow-nid-dark hover:bg-nid-gold-200 h-10 w-45 rounded-xl py-2 text-center text-sm font-[500] text-white transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer">
        Book an Appointment
      </button>
    </Link>
  )
}
