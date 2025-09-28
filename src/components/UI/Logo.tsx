import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src="/Logo-Small.png"
      alt="New Image Dental Logo"
      width={40}
      height={40}
      className="lg:w-14"
    />
  )
}
