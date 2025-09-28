import Link from 'next/link'

export default function AboutButton() {
  return (
    <Link href="/about">
      <button className="bg-nid-gold-200 hover:shadow-nid-dark hover:bg-nid-blue h-10 w-45 rounded-xl py-2 text-center text-base font-[500] text-white transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer md:h-12 md:w-36 md:text-lg xl:text-xl">
        About
      </button>
    </Link>
  )
}
