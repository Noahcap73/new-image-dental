import BookingButton from '@/components/UI/BookingButton'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

export default function About() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section>
        <Hero
          title="Meet the Dentsists Behind New Image Dental"
          subtitle="Rooted in Care, Smiles You Can Share"
        />
      </section>

      {/* Practice Story */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center md:text-left">
        <h2 className="text-nid-blue mb-6 text-3xl font-bold">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          At New Image Dental, we’re proud to serve our Las Vegas community with exceptional dental
          care. Our mission is simple: to create a welcoming environment where patients of all ages
          feel comfortable, cared for, and confident in their smiles.
        </p>
      </section>

      {/* Doctor Profiles */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
          {/* Doctor 1 */}
          <div className="shadow-nid-blue/50 flex flex-col items-center rounded-2xl border-2 border-gray-300 bg-white p-8 text-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <Image src="/media/Dr-Matt.png" alt="" width={300} height={300} />
            <h3 className="mb-2 text-2xl font-semibold">Dr. Matthew Marrujo</h3>
            <p className="text-nid-blue mb-4 font-medium">General Dentist</p>
            <p className="mb-3 leading-relaxed text-gray-600">
              Dr. Matthew Marrujo is a dedicated general dentist who is excited to join our team at
              Ascend Dental Studio. Born and raised in the Las Vegas area, Dr. Marrujo has deep
              roots in the community he serves. He graduated from the University of Nevada, Las
              Vegas School of Dental Medicine, where he developed a strong passion for providing
              excellent care to patients and their families
            </p>
            <p className="mb-3 leading-relaxed text-gray-600">
              With a commitment to ensuring the best possible outcomes for his patients, Dr. Marrujo
              brings a wealth of knowledge and a compassionate approach to dentistry. His dedication
              to his craft is evident in the personalized care he offers, always aiming to make
              dental visits a positive experience for everyone.
            </p>
            <p className="mb-3 leading-relaxed text-gray-600">
              Outside of the office, Dr. Marrujo enjoys spending quality time with his wife and
              their kids. He is an avid fisherman and loves exploring new places through travel.
              Additionally, he has a great appreciation for trying out new restaurants and enjoying
              diverse culinary experiences.
            </p>
          </div>

          {/* Doctor 2 */}
          <div className="shadow-nid-blue/50 flex flex-col items-center rounded-2xl border-2 border-gray-300 bg-white p-8 text-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <Image src="/media/Dr-Samiano.png" alt="" width={280} height={280} />
            <h3 className="mt-1 mb-2 text-2xl font-semibold">Dr. Beanca Jhanine M Samiano</h3>
            <p className="text-nid-blue mb-4 font-medium">General Dentist</p>
            <p className="mb-3 leading-relaxed text-gray-600">
              Originally from the Philippines, Dr. Beanca moved to the U.S at 19 and it was here in
              Las Vegas that her love for dentistry blossomed. She finds joy in guiding young
              patients toward their healthiest, happiest smiles, making every day on the job an
              exciting adventure.
            </p>
            <p className="mb-3 leading-relaxed text-gray-600">
              Dr. Beanca's patients adore her sense of humor which keeps the atmosphere light and
              cheerful in the office. Her animated and candid personality adds a touch of warmth and
              comfort to every visit, making it a delightful experience for kids and parents alike.
            </p>
            <p className="mb-3 leading-relaxed text-gray-600">
              Beyond her work Dr. Beanca treasures moments with husband, two kids and her furry four
              legged friends. Together they embark on adventures, dine at new restaurants and savor
              enjoy cozy movie nights making every memory special
            </p>
          </div>
        </div>
      </section>

      {/* Shared Philosophy */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-nid-blue mb-6 text-3xl font-bold">Our Philosophy</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Together, we are committed to delivering modern, personalized dental care in a
          family-friendly environment. At New Image Dental, every smile matters and we can’t wait to
          help you care for yours.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-nid-blue px-6 py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Join the New Image Dental Family</h2>
        <p className="mb-8 text-lg">
          Ready to schedule your first visit? We look forward to welcoming you.
        </p>
        <Link href="/booking">
          <button className="hover:shadow-nid-dark hover:bg-nid-gold-200 text-nid-blue mb-4 h-10 w-45 rounded-xl bg-white py-2 text-center text-sm font-[500] transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer hover:text-white">
            Book an Appointment
          </button>
        </Link>
      </section>
    </div>
  )
}
