import {ReadingProgress} from '@app/enums'
import {BaseBookInfo} from './base-book-info'

export interface FavoriteBookInfo extends BaseBookInfo {
    readingProgress: ReadingProgress
}
