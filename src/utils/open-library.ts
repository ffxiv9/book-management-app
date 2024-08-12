import {environment} from '@app/environments/environment'

const openLibrary = {
    getBookCoverUrl: (id: number): string =>
        `${environment.coversBaseUrl}/b/id/${id}-M.jpg`,
    getAuthorCoverUrl: (id: number): string =>
        `${environment.coversBaseUrl}/a/olid/OL${id}A-M.jpg`,
}
export default openLibrary
