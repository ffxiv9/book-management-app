import {useEffect, useState, useMemo} from 'react'
import {Container, Row} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

import {setAvailableFilters, selectSearchState} from '@app/slices/search-slice'
import {SearchBar, Pagination} from '@app/components/common'
import {BookList} from '@app/components/features/book-list'
import {useDictionaryLocalStorage} from '@app/hooks'
import {ReadingProgressFilter} from '@app/enums'
import {FavoriteBookInfo, ReferenceId} from '@app/types'
import {
    hasRequiredProgress,
    replaceUnderscoresWithSpaces,
    replaceSpacesWithUnderscores,
    capitalizeFirstLetter,
} from '@app/utils'
import {FAVORITES, DEFAULT_PAGE_SIZE} from '@app/constants'

function Favorites() {
    const pageSize = DEFAULT_PAGE_SIZE
    const [page, setPage] = useState(1)

    const searchState = useSelector(selectSearchState)
    const dispatch = useDispatch()

    const [favoriteBooks] = useDictionaryLocalStorage<FavoriteBookInfo>(FAVORITES)

    useEffect(() => {
        const filters = Object.keys(ReadingProgressFilter)
            .filter((key) => isNaN(Number(key)))
            .map((str) =>
                capitalizeFirstLetter(replaceUnderscoresWithSpaces(str.toLowerCase()))
            )

        dispatch(setAvailableFilters(filters))

        return () => {
            dispatch(setAvailableFilters([]))
        }
    }, [dispatch])

    useEffect(() => setPage(1), [searchState.filter, setPage])

    const filteredBooks = useMemo(() => {
        const data: (FavoriteBookInfo & ReferenceId)[] = Object.keys(favoriteBooks).map(
            (bookId): FavoriteBookInfo & ReferenceId => ({
                id: Number(bookId),
                ...favoriteBooks[bookId],
            })
        )

        const readingProgressFilter: ReadingProgressFilter | undefined =
            ReadingProgressFilter[
                replaceSpacesWithUnderscores(searchState.filter.toUpperCase())
            ]

        return readingProgressFilter === undefined
            ? data
            : data.filter((bookInfo) =>
                  hasRequiredProgress(bookInfo, readingProgressFilter)
              )
    }, [favoriteBooks, searchState.filter])

    return (
        <Container>
            <Row>
                <div className="h2">My collection</div>
                <SearchBar.Filter />
            </Row>
            <Row className="mt-3">
                <BookList
                    data={filteredBooks.slice((page - 1) * pageSize, page * pageSize)}
                />

                <Pagination
                    page={page}
                    pageCount={Math.ceil(filteredBooks.length / pageSize)}
                    onPageChanged={setPage}
                ></Pagination>
            </Row>
        </Container>
    )
}

export default Favorites
