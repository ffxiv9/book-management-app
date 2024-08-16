import {useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

import {setAvailableFilters, selectSearchState} from '@app/slices/search-slice'
import {SearchBar, Pagination} from '@app/components/common'
import {BookList} from '@app/components/features/book-list'
import {useDictionaryLocalStorage} from '@app/hooks'
import {ReadingProgressFilter} from '@app/enums'
import {FavoriteBookInfo, ReferenceId} from '@app/types'
import {hasRequiredProgress} from '@app/utils'
import {FAVORITES} from '@app/constants'

function Favorites() {
    const pageSize = 12
    const [page, setPage] = useState(1)

    const searchState = useSelector(selectSearchState)
    const dispatch = useDispatch()

    const [favorites] = useDictionaryLocalStorage<FavoriteBookInfo>(FAVORITES)

    useEffect(() => {
        const filters: string[] = Object.keys(ReadingProgressFilter).filter((key) =>
            isNaN(Number(key))
        )

        dispatch(setAvailableFilters(filters))

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
        .filter((bookInfo) => hasRequiredProgress(bookInfo, searchState.filter))

    return (
        <Container>
            <Row>
                <div className="h2">My collection</div>
                <SearchBar.Filter />
            </Row>
            <Row className="mt-3">
                <BookList
                    data={favoriteBooks.slice((page - 1) * pageSize, page * pageSize)}
                />

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
