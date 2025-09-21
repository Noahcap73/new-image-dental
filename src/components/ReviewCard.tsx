import StarRating from './UI/StarRating'
import { IoPersonCircleOutline } from 'react-icons/io5'

interface ReviewCardProps {
  name: string
  rating: number
  review: string
  date: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, review, date }) => {
  return (
    <div data-aos="fade-right">
      <div className="hover:shadow-nid-blue/50 group h-[18rem] rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-lg transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg md:h-[25rem] lg:h-[18rem]">
        {/* Header */}
        <div className="flex items-center gap-3">
          <IoPersonCircleOutline className="text-nid-blue text-4xl" />
          <div>
            <p className="font-semibold">{name}</p>
          </div>
        </div>

        {/* Star rating */}
        <div className="mt-3 transition ease-in-out group-hover:animate-bounce">
          <StarRating rating={rating} />
        </div>

        {/* Review text */}
        <p className="mt-3 text-gray-600">{review}</p>

        {/* Footer */}
        <p className="mt-3 text-sm text-gray-400">Reviewed on Google · {date}</p>
      </div>
    </div>
  )
}

export default ReviewCard
