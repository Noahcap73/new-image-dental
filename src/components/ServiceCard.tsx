import Image from 'next/image'

interface ServiceCardProps {
  service: string
  info: string
  image: string
  details: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, info, image, details }) => {
  const modalId = `${service.replace(/\s+/g, '_').toLowerCase()}_modal`
  return (
    <>
      <div className="group hover:shadow-nid-blue/50 my-10 w-[18rem] overflow-hidden rounded-xl shadow-lg transition duration-300 ease-in-out hover:-translate-y-2 sm:w-[22rem]">
        {/* Image Section */}
        <div className="h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={service}
            width={400}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="p-4">
          <h3 className="text-nid-blue text-xl font-semibold">{service}</h3>
          {info && <p className="mt-2 text-gray-600">{info}</p>}
        </div>

        <div className="px-4 pb-4 transition duration-300 ease-in-out group-hover:translate-y-0 lg:translate-y-20">
          {/* Button to open modal */}
          <label
            htmlFor={modalId}
            className="bg-nid-gold-200 rounded-xl px-4 py-2 transition ease-in-out hover:cursor-pointer hover:underline"
          >
            Learn More
          </label>
        </div>
      </div>

      {/* Hidden checkbox to toggle modal */}
      <input type="checkbox" id={modalId} className="modal-toggle" />

      {/* Modal wrapper */}
      <div className="modal">
        {/* Backdrop - moved before modal content */}
        <label htmlFor={modalId} className="modal-backdrop absolute inset-0 cursor-pointer"></label>

        {/* Modal box with content */}
        <div className="relative z-20 w-[20rem] rounded-2xl bg-white p-8 md:w-[30rem] lg:w-[40rem]">
          <h3 className="text-nid-blue w-[7rem] text-lg font-bold md:w-auto md:text-2xl">
            {service}
          </h3>
          <ul className="list-disc py-4 pl-6 text-gray-600">
            {details.map((item, i) => (
              <li className="pb-5 text-sm" key={i}>
                {item}
              </li>
            ))}
          </ul>

          <label
            htmlFor={modalId}
            className="bg-nid-gold-200 absolute top-4 right-4 cursor-pointer rounded px-4 py-2 transition-all ease-in-out hover:underline"
          >
            Close
          </label>
        </div>
      </div>
    </>
  )
}

export default ServiceCard
