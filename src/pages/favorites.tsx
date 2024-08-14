import {useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

import {setAvailableFilters, selectSearchState} from '@app/slices/search-slice'
import {SearchBar, Pagination} from '@app/components/common'
import {BookList} from '@app/components/features/book-list'
import {useDictionaryLocalStorage} from '@app/hooks'
import {FavoriteBookInfo, ReferenceId} from '@app/types'
import {ReadingProgress} from '@app/enums'
import {FAVORITES} from '@app/constants'

function Favorites() {
    const pageSize = 12
    const [page, setPage] = useState(1)

    const searchState = useSelector(selectSearchState)
    const dispatch = useDispatch()

    const [favorites] = useDictionaryLocalStorage<FavoriteBookInfo>(FAVORITES)

    useEffect(() => {
        dispatch(
            setAvailableFilters([
                'All books',
                'Reading only',
                'Finished only',
                'Unfinished only',
            ])
        )

        return () => {
            dispatch(setAvailableFilters([]))
        }
    }, [dispatch])

    useEffect(() => setPage(1), [searchState.filter, setPage])

    const favoriteBooks = Object.keys(favorites)
        .map((bookId): FavoriteBookInfo & ReferenceId => ({
            id: Number(bookId),
            ...favorites[bookId],
        }))
        .filter((bookInfo) => {
            switch (searchState.filter) {
                case 'Finished only':
                    return bookInfo.readingProgress == ReadingProgress.FINISHED
                case 'Reading only':
                    return bookInfo.readingProgress == ReadingProgress.READING
                case 'Unfinished only':
                    return bookInfo.readingProgress != ReadingProgress.FINISHED
                default:
                    return true
            }
        })
        .slice((page - 1) * pageSize, page * pageSize)

    return (
        <Container>
            <Row>
                <div className="h2">My collection</div>
                <SearchBar.Filter />
            </Row>
            <Row className="mt-3">
                <BookList data={favoriteBooks} />

                <Pagination
                    page={page}
                    pageCount={Math.ceil(favoriteBooks.length / pageSize)}
                    onPageChanged={setPage}
                ></Pagination>
            </Row>
        </Container>
    )
}

export default Favorites
