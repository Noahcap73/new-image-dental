import Image from 'next/image'

interface heroProps {
  title: string
}

export default function Hero({ title }: heroProps) {
  return (
    <section
      className="bg-nid-blue relative mb-6 overflow-hidden px-6 py-16 text-center text-white"
      data-aos="fade-down"
    >
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
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mx-auto max-w-2xl text-lg md:text-xl">
          Rooted in <span className="text-nid-gold-200">Care</span>, Smiles You Can{' '}
          <span className="text-nid-gold-200">Share</span>
        </p>
      </div>
    </section>
  )
}
