'use client'

import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import BookingBar from '@/components/BookingBar'

export default function Services() {
  const services = [
    {
      image: '/media/retainer.avif',
      service: 'Cosmetics',
      info: 'Invsalign, Veneers, Teeth Whitening ',
      details: [
        'Invisalign: A comfortable and discreet way to straighten your teeth. You’ll wear a series of clear, removable aligners that gradually shift your teeth into the right position—no braces needed.',
        'Veneers: A quick solution for chipped, uneven, or discolored teeth. Thin porcelain or composite shells are carefully bonded to the front of your teeth, instantly creating a brighter, more even smile.',
        'Teeth Whitening: A safe and effective way to brighten your smile. We apply a professional whitening gel (sometimes activated with a special light) to lift stains and give your teeth a fresh, confident glow in just one visit.',
      ],
    },
    {
      image: '/media/caroline-lm-QA9fRIi6sFw-unsplash.jpg',
      service: 'Restorative',
      info: 'Dental Fillings',
      details: [
        'Dental Fillings: Used to repair cavities and restore the tooth’s natural shape and function. We carefully remove the decayed portion of the tooth and fill the space with durable, tooth-colored material that blends naturally with your smile.',
      ],
    },
    {
      image: '/media/crown1.jpg',
      service: 'Fixed Prosthodontics',
      info: 'Crowns, Bridges ',
      details: [
        'Crowns: A custom-made cap that covers a damaged or weakened tooth. After reshaping the tooth, we place the crown securely on top to restore its strength, appearance, and function.',
        'Bridges: Designed to replace one or more missing teeth. We anchor the bridge to the surrounding teeth or implants, filling the gap with natural-looking replacement teeth for a complete smile.',
      ],
    },
    {
      image: '/media/Denture.avif',
      service: 'Removable Prosthodontics',
      info: 'Complete Dentures, Partial Dentures            ',
      details: [
        'Complete Dentures: A full set of removable teeth for patients who have lost all natural teeth in an arch. We take impressions of your gums to create a comfortable, natural-looking fit.',
        'Partial Dentures: A removable option when only some teeth are missing. The denture clasps onto your remaining natural teeth, filling the spaces and improving both function and appearance.',
      ],
    },
    {
      image: '/media/tools.jpg',
      service: 'Endodontics',
      info: 'Root Canals, Indirect/Direct Pulp Cap',
      details: [
        'Root Canal Treatment: A procedure to save a tooth with infected or damaged pulp. We gently remove the infected tissue inside the tooth, clean and disinfect the canals, then seal them to prevent future issues.',
        'Indirect/Direct Pulp Cap: A treatment to protect the tooth pulp when it’s close to exposure due to decay. We place a protective material over the pulp to encourage healing and avoid the need for a root canal.',
      ],
    },
    {
      image: '/media/toothbrush.jpg',
      service: 'Preventive & Periodontics',
      info: 'Dental Sealants, Basic Cleaning/Prophy, Scaling and Root Planning, Occlusal Guard',
      details: [
        'Basic Cleaning: Routine cleaning that removes plaque and tartar from above the gumline, helping keep your teeth and gums healthy.',
        'Scaling & Root Planing: A deep-cleaning treatment that targets hardened deposits below the gumline. We carefully remove buildup that brushing can’t reach, then smooth the roots of your teeth to help your gums heal and reattach.',
        'Occlusal Guard: A custom-made appliance that protects your teeth from grinding or clenching (bruxism). It helps reduce jaw strain, prevent enamel wear, and protect dental work while you sleep',
      ],
    },
    {
      image: '/media/x-ray.avif',
      service: 'Oral Surgery',
      info: 'Extractions, Implants, Bone and Soft Tissue Grafts',
      details: [
        'Extractions: Removal of teeth that are damaged, decayed, or causing crowding. We ensure the process is gentle and comfortable, with options for local anesthetics.',
        'Implants: A long-term solution for missing teeth. A small titanium post is placed into the jawbone, and once healed, it supports a crown that looks and feels like a natural tooth.',
        'Bone and Soft Tissue Grafts: Procedures to rebuild bone or gum tissue lost to disease or injury. These treatments create a stronger foundation for implants or improve overall oral health.',
      ],
    },
  ]

  return (
    <div className="w-full">
      <section>
        <Hero title="Our Services" />
      </section>

      <section className="">
        <div className="grid w-full grid-cols-1 grid-rows-1 place-items-center items-stretch gap-2 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-3">
          {services.map((s, i) => (
            <ServiceCard {...s} key={i} />
          ))}
        </div>
      </section>

      <section>
        <BookingBar />
      </section>
    </div>
  )
}
