import {Badge, Stack} from 'react-bootstrap'

import {BookInfo} from '@app/types'
import {AuthorList} from '@app/components/features/author'

export interface BookDescriptionProps {
    book: BookInfo
}

export default function BookDescription({book}: BookDescriptionProps) {
    return (
        <Stack gap={3} className="mt-2">
            {book.publishYear && (
                <Badge bg="secondary">Publish Date: {book.publishYear}</Badge>
            )}

            {book.subjectPeople && (
                <div className="fw-semibold">
                    People:{' '}
                    {book.subjectPeople.map((e, index) => (
                        <Badge key={index} bg="secondary">
                            {e}
                        </Badge>
                    ))}
                </div>
            )}

            {book.description && (
                <div className="p-3 text-bg-secondary rounded">
                    <p>Description: {book.description}</p>
                </div>
            )}

            {book.authorIds && <AuthorList authorIds={book.authorIds} />}
        </Stack>
    )
}
