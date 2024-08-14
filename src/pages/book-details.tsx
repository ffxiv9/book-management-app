import {Stack, Badge} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

import {useGetBookQuery} from '@app/services/api'
import {FavoriteBookInfo} from '@app/types'
import {ReadingProgress} from '@app/enums'
import {useDictionaryLocalStorage} from '@app/hooks'
import {ErrorMessage, Loader} from '@app/components/common'
import {BookInfo} from '@app/components/features/book-info'
import {AuthorList} from '@app/components/features/author-list'
import {FAVORITES} from '@app/constants'

export default function BookDetails() {
    const {bookId} = useParams()
    const {data, isLoading, isFetching, isError} = useGetBookQuery(Number(bookId))
    const [favorites, setFavorite] =
        useDictionaryLocalStorage<FavoriteBookInfo>(FAVORITES)

    if (isError) {
        return (
            <ErrorMessage>
                <p>Error loading details.</p>
            </ErrorMessage>
        )
    }

    if (isLoading || isFetching || !data) {
        return <Loader />
    }

    const handleReadingProgressChange = (readingProgress: ReadingProgress) => {
        setFavorite(bookId!, {
            ...favorites[bookId!],
            readingProgress: readingProgress,
        })
    }

    return (
        <BookInfo>
            <BookInfo.Group groupSize="4">
                <Stack gap={2}>
                    {data.coverId && <BookInfo.Image id={data.coverId} />}

                    {favorites[bookId!] && (
                        <BookInfo.Progress
                            progress={favorites[bookId!].readingProgress}
                            onProgressChanged={handleReadingProgressChange}
                        />
                    )}

                    <BookInfo.Notes id={Number(bookId)} />
                </Stack>
            </BookInfo.Group>
            <BookInfo.Group groupSize="8">
                <div className="h2">{data.title}</div>
                <BookInfo.Rating id={Number(bookId)} />

                {data.subjectPeople && (
                    <BookInfo.SubjectPeople subjectPeople={data.subjectPeople} />
                )}

                {data.publishYear && (
                    <Badge bg="secondary">Publish Date: {data.publishYear}</Badge>
                )}

                {data.description && (
                    <BookInfo.Description description={data.description} />
                )}

                {data.authorIds && <AuthorList authorIds={data.authorIds} />}
            </BookInfo.Group>
        </BookInfo>
    )
}
