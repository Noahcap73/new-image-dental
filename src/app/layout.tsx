import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // pick weights you need
})

export const metadata: Metadata = {
  title: 'New Image Dental',
  description:
    'New Image Dental offers personalized family dental care. Schedule your appointment today for a healthy smile with our trusted and friendly team.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="mt-0">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
