import Link from 'next/link'

export default function Footer() {
  return (
    <div className="w-full py-4">
      <div>
        <p className="text-nid-blue text-center text-sm lg:text-lg">
          ©2025 by New Image Dental |{' '}
          <a
            href="mailto:newimagedental2025@gmail.com"
            className="hover:text-nid-gold-200 transition duration-300 ease-in-out"
          >
            Newimagedental2025@gmail.com
          </a>{' '}
          | All Rights Reserved |
        </p>
        <p className="text-nid-blue mt-2 text-center text-sm lg:text-lg">
          <Link
            href="/patient-rights"
            className="hover:text-nid-gold-200 underline transition duration-300 ease-in-out"
          >
            Patient Rights &amp; Notice of Privacy Practices
          </Link>
        </p>
      </div>
    </div>
  )
}
