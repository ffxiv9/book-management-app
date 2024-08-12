import {BaseBookInfo} from './base-book-info'

export interface BookInfo extends BaseBookInfo {
    authorIds?: number[]
    description?: string
    subjectPeople?: string[]
}
