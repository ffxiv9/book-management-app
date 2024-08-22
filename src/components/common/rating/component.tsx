import {useState} from 'react'

import './style.css'

export interface RatingProps {
    rating: number
    onStarRating: (value: number) => void
}

const DEFAULT_TOTAL_STARS = 5

export function Rating({rating, onStarRating}: RatingProps) {
    const [currentStars, setCurrentStars] = useState(rating)
    const [hover, setHover] = useState(0)

    return (
        <>
            {[...Array<number>(DEFAULT_TOTAL_STARS)].map((_, index) => {
                const currentRating = index + 1 !== currentStars ? index + 1 : 0

                return (
                    <span
                        key={index}
                        className={`star${currentRating <= (hover || currentStars) ? ' active' : ''}`}
                        onClick={() => {
                            setCurrentStars(currentRating)
                            onStarRating(currentRating)
                        }}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(0)}
                    >
                        &#9733;
                    </span>
                )
            })}
        </>
    )
}
