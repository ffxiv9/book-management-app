import {useState} from 'react'
import {Container, Row, Alert} from 'react-bootstrap'

import {ErrorBoundary, Loader, Pagination} from '@app/components/common'
import {
    FavoriteBookInfo,
    BaseBookInfo,
    PaginatedDataQueryFn,
    ReferenceId,
} from '@app/types'
import {ReadingProgress} from '@app/enums'
import {useDictionaryLocalStorage} from '@app/hooks'
import {BookListItem} from './list-item'

export interface BookListProps {
    dataQueryFn: PaginatedDataQueryFn<BaseBookInfo & ReferenceId>
}

export default function BookList({dataQueryFn}: BookListProps) {
    const pageSize = 12

    const [page, setPage] = useState(1)
    const [favorites, setFavorite] =
        useDictionaryLocalStorage<FavoriteBookInfo>('favorites')

    const {data, isLoading, isFetching, isError, pageCount} = dataQueryFn(
        page,
        pageSize,
        setPage
    )

    if (isError) {
        return (
            <ErrorBoundary>
                <p>Error loading list.</p>
            </ErrorBoundary>
        )
    }

    if (isLoading || isFetching) {
        return <Loader />
    }

    if (data.length <= 0) {
        return (
            <Alert variant="light" className="justify-content-center d-flex">
                <Alert.Heading>No information was found !</Alert.Heading>
            </Alert>
        )
    }

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
                    <BookListItem
                        key={value.id}
                        data={value}
                        onToggleFavorite={handleToggleFavorite}
                        isInFavorites={isInFavorite(value.id.toString())}
                    />
                ))}
            </Row>

            <Pagination
                page={page}
                pageCount={pageCount}
                onPageChanged={setPage}
            ></Pagination>
        </Container>
    )
}
