import {BookInfo, ReferenceId, BookResponse} from '@app/types'
import {extractNumbers} from '@app/utils'

const mapBook = (book: BookResponse): BookInfo & ReferenceId => ({
    id: extractNumbers(book.key),
    title: book.title,
    authors: book.author_name,
    publishYear: book.first_publish_year,
    authorIds: book.authors?.map((e) => extractNumbers(e.author?.key)),
    coverId:
        book.cover_i ??
        (book.covers && book.covers.length > 0 ? book.covers[0] : undefined),
    description: book.description?.value,
    subjectPeople: book.subject_people,
})

export default mapBook
