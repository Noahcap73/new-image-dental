import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-4">
      <div>
        <p className="text-nid-blue text-center text-sm lg:text-base">
          ©2025 by New Image Dental |{' '}
          <a
            href="mailto:newimagedental2025@gmail.com"
            className="hover:text-nid-gold-200 underline transition duration-300 ease-in-out"
          >
            Newimagedental2025@gmail.com
          </a>{' '}
          | All Rights Reserved
        </p>
        <p className="text-nid-blue mt-2 text-center text-sm lg:text-base">
          <Link
            href="/patient-rights"
            className="hover:text-nid-gold-200 underline transition duration-300 ease-in-out"
          >
            Patient Rights
          </Link>
          {' | '}
          <Link
            href="/terms-of-use"
            className="hover:text-nid-gold-200 underline transition duration-300 ease-in-out"
          >
            Terms of Use
          </Link>
          {' | '}
          <Link
            href="/privacy-policy"
            className="hover:text-nid-gold-200 underline transition duration-300 ease-in-out"
          >
            Privacy Policy
          </Link>
          {' | '}
          <Link
            href="/privacy-notice"
            className="hover:text-nid-gold-200 underline transition duration-300 ease-in-out"
          >
            Notice of Privacy Practices
          </Link>
        </p>
      </div>
    </footer>
  )
}
