import {Container, Row} from 'react-bootstrap'

import {FavoriteBookInfo, BaseBookInfo, ReferenceId} from '@app/types'
import {ReadingProgress} from '@app/enums'
import {useDictionaryLocalStorage} from '@app/hooks'
import {FAVORITES} from '@app/constants'
import {Item} from '../item'

export interface BookListProps {
    data: (BaseBookInfo & ReferenceId)[]
}

export function List({data}: BookListProps) {
    const [favorites, setFavorite] =
        useDictionaryLocalStorage<FavoriteBookInfo>(FAVORITES)

    const isInFavorite = (key: string): boolean =>
        Object.keys(favorites).some((e) => e == key)

    const handleToggleFavorite = (book: ReferenceId & BaseBookInfo) => {
        const favoriteInfo: FavoriteBookInfo = {
            ...book,
            readingProgress: ReadingProgress.UNREAD,
        }

        const key: string = book.id.toString()
        setFavorite(key, isInFavorite(key) ? undefined : favoriteInfo)
    }

    return (
        <Container>
            <Row xs={2} md={3} lg={4} xl={6} className="g-4 justify-content-center">
                {data.map((value) => (
                    <Item
                        key={value.id}
                        data={value}
                        onToggleFavorite={handleToggleFavorite}
                        isInFavorites={isInFavorite(value.id.toString())}
                    />
                ))}
            </Row>
        </Container>
    )
}
