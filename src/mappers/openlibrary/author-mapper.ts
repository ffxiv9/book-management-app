import {AuthorInfo, ReferenceId, AuthorResponse} from '@app/types'
import {extractNumbers} from '@app/utils'

const mapAuthor = (author: AuthorResponse): AuthorInfo & ReferenceId => ({
    id: extractNumbers(author.key),
    birthDate: author.birth_date,
    bio: typeof author.bio === 'string' ? author.bio : author.bio?.value,
    name: author.name,
    coverId: extractNumbers(author.key),
})

export default mapAuthor
