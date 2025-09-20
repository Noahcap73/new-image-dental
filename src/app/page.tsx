'use client'

import Image from 'next/image'
import Logo from '@/components/UI/Logo'
import Link from 'next/link'

import { LiaToothSolid } from 'react-icons/lia'
import { RiPokerHeartsLine } from 'react-icons/ri'
import { AiOutlineSmile } from 'react-icons/ai'
import { MdOutlineFamilyRestroom } from 'react-icons/md'

import { useCallback, useEffect } from 'react'

import BookingButton from '@/components/UI/BookingButton'

import useEmblaCarousel from 'embla-carousel-react'

import ReviewCard from '@/components/ReviewCard'
import AboutButton from '@/components/UI/AboutButton'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

export default function Home() {
  const reviews = [
    {
      name: 'Gustavo R',
      role: '',
      rating: 5,
      review:
        'Dr. Samiano is an exceptional dentist!\n' +
        '\n' +
        'I had an amazing experience with Dr. Samiano and her team. From the moment I walked into the office, I felt welcomed and at ease. She is incredibly knowledgeable ...',
      date: 'Jul 2025',
    },
    {
      name: 'Allyssa E',
      rating: 5,
      review:
        'Staff is very helpful and nice the doctor takes in what u say and is very helpful as well :)',
      date: 'Aug 2025',
    },
    {
      name: 'Roberto',
      rating: 5,
      review:
        'Dr Samiano was very professional and the staff is very friendly. Carolina was very attentive. I strongly recommend this clinic.',
      date: 'Aug 2025',
    },
    {
      name: 'Sasha G',
      rating: 5,
      review: 'Great people here been coming her for years happy We have New Owners VERY EXCITED!!',
      date: 'Sept 2025',
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="bg-white font-sans">
      {/*HERO SECTION*/}
      <section className="mb-12 flex flex-col items-center justify-center gap-12 bg-gray-50 px-6 pb-4 md:h-[70vh] md:flex-row md:gap-16">
        {/* Left Content */}
        <div
          className="order-1 w-full max-w-xl text-center md:order-none md:text-left lg:mr-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-nid-blue mb-6 text-3xl leading-snug font-[600] sm:text-4xl lg:text-5xl">
            Rooted in <span className="text-nid-gold-200 italic">Care</span>, Smiles You Can
            <span className="text-nid-gold-200 italic"> Share</span>
          </h1>
          <p className="text-sm text-gray-700 sm:text-base md:text-sm lg:text-lg">
            At <span className="text-nid-blue font-bold">New Image Dental</span>, scheduling Dental
            Treatment has become simpler than ever. Our personalized Dental Treatment provides
            patients with the resources they need to get their dental health on track — you'll leave
            our clinic well informed and confident that your health is in good hands. Get in touch
            and schedule an appointment today!
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <BookingButton />
          </div>
        </div>

        {/* Right Image */}
        <div
          className="relative order-2 flex-shrink-0 md:order-none"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="bg-nid-blue/90 absolute top-4 left-4 h-[18rem] w-[16rem] rounded-tr-3xl rounded-bl-3xl sm:h-[22rem] sm:w-[20rem] md:h-[25rem] md:w-[22rem]" />
          <div className="relative h-[18rem] w-[16rem] sm:h-[22rem] sm:w-[20rem] md:h-[25rem] md:w-[22rem]">
            <Image
              src="/media/salha-frija-dsQoLK2N7DQ-unsplash.jpg"
              alt="smile"
              fill
              className="rounded-tr-3xl rounded-bl-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/*CARD SECTION*/}
      <section className="h-auto w-full bg-white">
        <div className="flex justify-center">
          <h3 className="text-nid-blue text-3xl font-bold">Our Dental Image</h3>
        </div>
        <div className="grid-rows grid place-items-center gap-6 py-10 lg:grid-cols-2 xl:mx-44 2xl:mx-40">
          {/*Caring Card*/}
          <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <div className="shadow-nid-blue/50 h-[14rem] w-[20rem] flex-row items-center justify-center rounded-2xl border-2 border-gray-200 bg-gray-50 px-7 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg md:w-[30rem] lg:h-[12.5rem] lg:w-[25rem]">
              <p className="text-nid-blue flex justify-center pt-4 pb-4 text-[3rem]">
                <MdOutlineFamilyRestroom />
              </p>
              <h2 className="text-nid-gold-200 text-center text-lg font-bold">
                Caring for Every Smile
              </h2>
              <p className="text-gray-700">
                From kids to adults, we make dental care easy and comfortable for the whole family
              </p>
            </div>
          </div>

          {/*Smile Card*/}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="shadow-nid-blue/50 h-[14rem] w-[20rem] flex-row items-center justify-center rounded-2xl border-2 border-gray-200 bg-gray-50 px-7 transition duration-300 hover:-translate-y-2 hover:shadow-lg md:w-[30rem] lg:h-[12.5rem] lg:w-[25rem]">
              <p className="text-nid-blue flex justify-center pt-4 pb-4 text-[3rem]">
                <AiOutlineSmile />
              </p>
              <h2 className="text-nid-gold-200 text-center text-lg font-bold">
                Brighter, Happier Smiles
              </h2>
              <p className="text-gray-700">
                Gentle whitening, cleanings, and cosmetic treatments designed to bring out the
                confidence in every smile
              </p>
            </div>
          </div>

          {/*Teeth Card*/}
          <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <div className="shadow-nid-blue/50 h-[14rem] w-[20rem] flex-row items-center justify-center rounded-2xl border-2 border-gray-200 bg-gray-50 px-7 transition duration-300 hover:-translate-y-2 hover:shadow-lg md:w-[30rem] lg:h-[12.5rem] lg:w-[25rem]">
              <p className="text-nid-blue flex justify-center pt-4 pb-4 text-[3rem]">
                <LiaToothSolid />
              </p>
              <h2 className="text-nid-gold-200 text-center text-lg font-bold">
                Strong & Healthy Teeth
              </h2>
              <p className="text-gray-700">
                Fillings, crowns, and restorations that keep your teeth strong
              </p>
            </div>
          </div>

          {/*Trust Card*/}
          <div
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="shadow-nid-blue/50 h-[14rem] w-[20rem] flex-row items-center justify-center rounded-2xl border-2 border-gray-200 bg-gray-50 px-7 transition duration-300 hover:-translate-y-2 hover:shadow-lg md:w-[30rem] lg:h-[12.5rem] lg:w-[25rem]">
              <p className="text-nid-blue flex justify-center pt-4 pb-4 text-[3rem]">
                <RiPokerHeartsLine />
              </p>
              <h2 className="text-nid-gold-200 text-center text-lg font-bold">
                Comfort You can Trust
              </h2>
              <p className="text-gray-700">
                With a friendly team, we make each visit relaxing and stress-free for everyone
              </p>
            </div>
          </div>
        </div>
        <Link href="/services" className="flex justify-center">
          <button className="bg-nid-blue hover:shadow-nid-dark hover:bg-nid-gold-200 h-10 w-36 rounded-xl py-2 text-center text-sm font-[500] text-white transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer">
            Learn More
          </button>
        </Link>
      </section>

      {/*OFFICE HOURS AND LOCATION SECTION*/}
      <section className="bg-nid-blue mt-16 w-full px-10 py-8">
        <div className="bg-">
          <div className="flex-row items-center justify-center md:flex md:gap-6 lg:gap-24">
            <div className="mb-6 flex justify-center md:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12891.75653436947!2d-115.2101693891351!3d36.11934058597484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c733388712ad%3A0x149c2faa42e5dee!2sNew%20Image%20Dental!5e0!3m2!1sen!2sus!4v1756615227792!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="base:max-w-[30rem] rounded-3xl md:w-[25rem] md:max-w-none lg:w-[600]"
              ></iframe>
            </div>
            <div className="md:w-[15rem]">
              <div className="flex justify-center pb-6">
                <h2 className="text-3xl font-bold text-white">Office Hours</h2>
              </div>
              <div className="text-xl">
                <p className="mb-2 flex justify-between text-white" data-aos="zoom-out">
                  <span>Monday:</span> <span>Closed</span>
                </p>
                <p className="mb-2 flex justify-between text-white" data-aos="zoom-out">
                  <span>Tuesday:</span> <span>9am - 5pm</span>
                </p>
                <p className="mb-2 flex justify-between text-white" data-aos="zoom-out">
                  <span>Wednesday:</span> <span>9am - 5pm</span>
                </p>
                <div className="mb-2 flex justify-between text-white" data-aos="zoom-out">
                  <span>Thursday:</span>
                  <span>9am - 5pm</span>
                </div>
                <div className="mb-2 flex justify-between text-white" data-aos="zoom-out">
                  <span>Friday:</span>
                  <span>9am - 5pm</span>
                </div>
                <div className="mb-2 flex justify-between text-white" data-aos="zoom-out">
                  <span>Saturday:</span>
                  <span>9am - 3pm</span>
                </div>
                <div className="mb-2 flex justify-between text-white" data-aos="zoom-out">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*BOOKING BAR SECTION*/}
      <section className="text-nid-blue bg-gray-300 px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Join the New Image Dental Family</h2>
        <p className="mb-8 text-lg">
          Ready to schedule your first visit? We look forward to welcoming you.
        </p>
        <BookingButton />
      </section>

      {/*REVIEWS SECTION*/}
      <section className="py-4">
        <div className="flex justify-center">
          <h2 className="text-nid-blue text-xl font-[500]">
            What Some of Our Customers Have to Say
          </h2>
        </div>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {reviews.map((r, i) => (
              <div className="embla__slide flex-[0_0_100%] px-4 py-8 md:flex-[0_0_33.333%]" key={i}>
                <ReviewCard {...r} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-32 pb-1">
            <button
              onClick={scrollPrev}
              className="group rounded-full border border-black/40 p-2 transition-all ease-in-out hover:scale-110"
            >
              <FaLessThan className="text-nid-blue group-hover:text-nid-gold-200 text-xl transition" />
            </button>
            <button
              onClick={scrollNext}
              className="group rounded-full border border-black/40 p-2 transition-all ease-in-out hover:scale-110"
            >
              <FaGreaterThan className="text-nid-blue group-hover:text-nid-gold-200 text-xl transition" />
            </button>
          </div>
        </div>
      </section>

      {/*OWNERS SECTION*/}
      <section className="bg-nid-blue w-full py-8 lg:px-4">
        <div className="items-center justify-center md:flex">
          <div className="mb-6 text-center text-xl font-semibold text-white md:mr-16 md:mb-0 md:text-3xl">
            <h3 className="mb-6 2xl:text-2xl">Meet the Owners</h3>

            <h2
              className="text-nid-gold-200 text-3xl font-extrabold md:text-5xl 2xl:text-6xl"
              data-aos="zoom-out"
            >
              Dr. Bea Samiano
            </h2>
            <h3
              className="text-nid-gold-200 py-2 text-xl font-extrabold md:text-4xl"
              data-aos="zoom-in"
            >
              &
            </h3>
            <h2
              className="text-nid-gold-200 text-3xl font-extrabold md:text-5xl 2xl:text-6xl"
              data-aos="zoom-out"
            >
              Dr. Matt Marrujo
            </h2>
          </div>

          <div
            className="flex justify-center px-4 md:px-2"
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <Image
              src="/media/FamilyPicture.avif"
              alt="family picture"
              width={600}
              height={600}
              className="rounded-3xl object-center"
            />
          </div>
        </div>
      </section>

      <div className="w-full bg-white px-8 py-5 xl:px-20">
        <div className="mb-8 flex flex-col items-center justify-start md:flex-row">
          <div className="">
            <Image
              src="/media/Dr-Samiano.png"
              alt=""
              width={300}
              height={300}
              className="w-[15rem] lg:w-[17rem]"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-nid-blue mb-4 text-xl font-semibold md:text-2xl">
              Dr. Bea Samiano
            </h2>
            <p className="text-sm text-gray-700 md:w-[25rem] lg:w-[30rem] lg:text-base xl:w-[35rem]">
              Originally from the Philippines, Dr. Beanca moved to Las Vegas at 19, where her
              passion for dentistry flourished. She loves helping young patients achieve healthy,
              happy smiles, creating a fun and positive experience at every visit. Known for her
              humor and warm personality, she makes both kids and parents feel comfortable and at
              ease in the office. Outside of dentistry, Dr. Beanca enjoys adventures, dining out,
              and cozy movie nights with her husband, two children, and their beloved pets.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-end md:flex-row">
          <div className="mr-4">
            <h2 className="text-nid-blue mb-4 text-left text-xl font-semibold md:text-right md:text-2xl">
              Dr. Matt Marrujo
            </h2>
            <p className="text-sm text-gray-700 md:w-[25rem] lg:w-[30rem] lg:text-base xl:w-[35rem]">
              A Las Vegas native, Dr. Marrujo is a dedicated general dentist passionate about
              providing personalized, compassionate care for patients and their families. A graduate
              of the UNLV School of Dental Medicine, he is committed to making every dental visit a
              positive experience while promoting lifelong oral health. Outside the office, Dr.
              Marrujo enjoys fishing, traveling, exploring new restaurants, and spending quality
              time with his wife and two children.
            </p>
          </div>
          <Image
            src="/media/Dr-Matt.png"
            alt=""
            width={300}
            height={300}
            className="w-[15rem] lg:w-[18rem]"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-nid-blue mb-4 font-semibold">Click To Learn More</p>
          <AboutButton />
        </div>
      </div>
    </div>
  )
}
