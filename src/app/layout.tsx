import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AosWrapper from '@/components/AosWrapper'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${lora.className} overflow-x-hidden`}>
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>

        <main className="min-h-screen overflow-x-clip">
          <AosWrapper>{children}</AosWrapper>
        </main>
        <div className="bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  )
}
