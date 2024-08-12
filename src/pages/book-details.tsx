import {Col, Container, Image, Row, Stack} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

import {ReadingProgress} from '@app/enums'
import {FavoriteBookInfo} from '@app/types'
import {useDictionaryLocalStorage} from '@app/hooks'
import {useGetBookQuery} from '@app/services/api'

import {ErrorBoundary, Loader} from '@app/components/common'
import openLibrary from '@app/utils/open-library'
import {
    BookDescription,
    BookNotes,
    BookRating,
    BookReadingProgress,
} from '@app/components/features/book'

export default function BookDetails() {
    const {bookId} = useParams()
    const {data: book, isLoading, isFetching, isError} = useGetBookQuery(Number(bookId))

    const [favorites, setFavorite] =
        useDictionaryLocalStorage<FavoriteBookInfo>('favorites')

    if (isError) {
        return (
            <ErrorBoundary>
                <p>Error loading details.</p>
            </ErrorBoundary>
        )
    }

    if (isLoading || isFetching || !book) {
        return <Loader />
    }

    const handleReadingProgressChange = (readingProgress: ReadingProgress) => {
        setFavorite(bookId!, {
            ...favorites[bookId!],
            readingProgress: readingProgress,
        })
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4} className="justify-content-center">
                    <Stack gap={3}>
                        {book.coverId && (
                            <Row className="justify-content-center">
                                <Image
                                    src={openLibrary.getBookCoverUrl(book.coverId)}
                                    style={{width: '18rem'}}
                                    thumbnail
                                />
                            </Row>
                        )}
                        <Row className="g-2">
                            {favorites[bookId!] && (
                                <BookReadingProgress
                                    readingProgress={favorites[bookId!].readingProgress}
                                    onReadingProgressChanged={handleReadingProgressChange}
                                />
                            )}

                            <BookNotes id={Number(bookId)} />
                        </Row>
                    </Stack>
                </Col>

                <Col md={8}>
                    <div className="h2">{book.title}</div>

                    <BookRating id={Number(bookId)} />
                    <BookDescription book={book} />
                </Col>
            </Row>
        </Container>
    )
}
