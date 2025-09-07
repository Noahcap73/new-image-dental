import StarRating from './UI/StarRating'
import { IoPersonCircleOutline } from 'react-icons/io5'

interface ReviewCardProps {
  name: string
  avatar: string
  role?: string // e.g. "Local Guide · 23 reviews"
  rating: number
  review: string
  date: string // e.g. "Jan 2025"
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, rating, review, date }) => {
  return (
    <div className="shadow-nid-blue/50 group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3">
        <IoPersonCircleOutline className="text-nid-blue text-4xl" />
        <div>
          <p className="font-semibold">{name}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
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
  )
}

export default ReviewCard
