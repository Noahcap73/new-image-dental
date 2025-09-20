'use client'
import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero'
import BookingButton from '@/components/UI/BookingButton'

export default function Contact() {
  return (
    <div>
      <section>
        <Hero title="Contact Us" />
      </section>

      <div>
        <h2 className="text-nid-blue mb-6 flex justify-center px-6 font-bold lg:px-0">
          For business or personal inquiries, please fill out the form below
        </h2>
      </div>

      {/*FORM SECTION*/}
      <section className="flex justify-center">
        <ContactForm />
      </section>

      {/*BOOKING BAR SECTION*/}
      <section className="text-nid-blue bg-gray-300 px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Join the New Image Dental Family</h2>
        <p className="mb-8 text-lg">
          Ready to schedule your first visit? We look forward to welcoming you.
        </p>
        <BookingButton />
      </section>
    </div>
  )
}
