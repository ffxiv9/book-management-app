import {BookResponse} from './book'

export interface SearchBookResponse {
    num_found: number
    docs: BookResponse[]
}
