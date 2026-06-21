import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-nid-blue mb-4 text-6xl font-bold">404</h1>
      <h2 className="text-nid-gold-200 mb-6 text-2xl font-semibold">Page Not Found</h2>
      <p className="mb-8 max-w-md text-gray-600">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved. Please check the
        URL or return to our homepage.
      </p>
      <Link
        href="/"
        className="bg-nid-blue hover:bg-nid-gold-200 rounded-xl px-8 py-3 font-semibold text-white transition duration-300 ease-in-out"
      >
        Go Back Home
      </Link>
    </div>
  )
}
