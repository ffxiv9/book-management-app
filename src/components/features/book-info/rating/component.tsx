import {ReferenceId} from '@app/types'
import {Rating as CommonRating} from '@app/components/common'
import {useLocalStorage} from '@app/hooks'
import './style.css'

export function Rating({id}: ReferenceId) {
    const [rating, setRating] = useLocalStorage(`rating_${id}`, 0)

    return <CommonRating rating={rating} onStarRating={(e) => setRating(e)} />
}
