import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

interface StarRatingProps {
  rating: number // e.g. 4.5
  max?: number // default 5
  size?: string | number // icon size (e.g. "1.25rem" or 20)
}

const StarRating: React.FC<StarRatingProps> = ({ rating, max = 5, size = '1.25rem' }) => {
  const stars = []

  for (let i = 1; i <= max; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} size={size} className="text-yellow-400" />)
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} size={size} className="text-yellow-400" />)
    } else {
      stars.push(<FaRegStar key={i} size={size} className="text-gray-300" />)
    }
  }

  return <div className="flex">{stars}</div>
}

export default StarRating
