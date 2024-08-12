import {ReferenceId} from '@app/types'
import {Rating} from '@app/components/common'
import {useLocalStorage} from '@app/hooks'
import './style.css'

export default function BookRating({id}: ReferenceId) {
    const [rating, setRating] = useLocalStorage(`rating_${id}`, 0)

    return <Rating rating={rating} onStarRating={(e) => setRating(e)} />
}
