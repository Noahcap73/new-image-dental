import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

export default function About() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section>
        <Hero title="Meet the Dentists Behind New Image Dental" />
      </section>

      {/* Practice Story */}
      <section className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h2 className="text-nid-blue mb-6 text-3xl font-bold">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-600 xl:text-xl">
          At New Image Dental, we’re proud to serve our Las Vegas community with exceptional dental
          care. Our mission is simple: to create a welcoming environment where patients of all ages
          feel comfortable, cared for, and confident in their smiles.
        </p>
      </section>

      {/* Doctor Profiles */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
          <div className="shadow-nid-blue/50 flex flex-col items-center rounded-2xl border-2 border-gray-300 bg-white p-8 text-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <Image src="/media/Dr-Samiano.png" alt="" width={280} height={280} />
            <h3 className="mt-1 mb-2 text-2xl font-semibold 2xl:text-4xl">Dr. Bea Samiano, DMD</h3>
            <div className="2xl:text-lg">
              <p className="text-nid-blue mb-4 font-medium 2xl:text-2xl">General Dentist</p>
              <p className="mb-3 leading-relaxed text-gray-600">
                Born and raised in the Philippines, Dr. Bea moved to the United States at the age of
                19 to pursue her passion for healthcare. She earned her Bachelor of Science in
                Biological Sciences and her Doctor of Dental Medicine degrees from the University of
                Nevada, Las Vegas.
              </p>
              <p className="mb-3 leading-relaxed text-gray-600">
                Dr. Bea finds true joy in helping patients by achieving their healthiest, happiest
                smiles. She believes that professionalism, paired with a good sense of humor,
                creates a light and cheerful atmosphere in the office that puts patients at ease.
                Her animated and candid personality brings warmth and comfort to every visit, making
                dental care a delightful experience for the entire family.
              </p>
              <p className="mb-3 leading-relaxed text-gray-600">
                Outside the office, Dr. Bea enjoys reading, watching asian dramas, and spending
                quality time with her husband, two children, and their two beloved dogs. Whether
                they&#39;re exploring new restaurants, traveling to exciting destinations, or
                enjoying cozy movie nights at home, she cherishes every moment with her family.
              </p>
            </div>
          </div>

          <div className="shadow-nid-blue/50 flex flex-col items-center rounded-2xl border-2 border-gray-300 bg-white p-8 text-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <Image src="/media/Dr-Matt.png" alt="" width={300} height={300} />
            <h3 className="mb-2 text-2xl font-semibold 2xl:text-4xl">Dr. Matthew Marrujo, DMD</h3>
            <p className="text-nid-blue mb-4 font-medium 2xl:text-2xl">General Dentist</p>
            <div className="2xl:text-lg">
              <p className="mb-3 leading-relaxed text-gray-600">
                Dr. Matthew Marrujo is a dedicated general dentist who is was born and raised in the
                Las Vegas area. Dr. Marrujo has deep roots in the community he serves. He graduated
                from the University of Nevada, Las Vegas School of Dental Medicine, where he
                developed a strong passion for providing excellent care to patients and their
                families
              </p>
              <p className="mb-3 leading-relaxed text-gray-600">
                With a commitment to ensuring the best possible outcomes for his patients, Dr.
                Marrujo brings a wealth of knowledge and a compassionate approach to dentistry. His
                dedication to his craft is evident in the personalized care he offers, always aiming
                to make dental visits a positive experience for everyone.
              </p>
              <p className="mb-3 leading-relaxed text-gray-600">
                Outside of the office, Dr. Marrujo enjoys spending quality time with his wife and
                their kids. He is an avid fisherman and loves exploring new places through travel.
                Additionally, he has a great appreciation for trying out new restaurants and
                enjoying diverse culinary experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Philosophy */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-nid-blue mb-6 text-3xl font-bold 2xl:text-4xl">Our Philosophy</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Together, we are committed to delivering modern, personalized dental care in a
          family-friendly environment. At New Image Dental, every smile matters and we can’t wait to
          help you care for yours.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-nid-blue px-6 py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold 2xl:text-4xl">Join the New Image Dental Family</h2>
        <p className="mb-8 text-lg">
          Ready to schedule your first visit? We look forward to welcoming you.
        </p>
        <Link href="/booking">
          <button className="hover:shadow-nid-dark bg-nid-gold-200 hover:text-nid-blue mb-4 h-10 w-45 rounded-xl py-2 text-center text-sm font-[500] text-white transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer hover:bg-white xl:h-12 xl:text-xl 2xl:w-62">
            Book an Appointment
          </button>
        </Link>
      </section>
    </div>
  )
}
