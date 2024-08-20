import {FavoriteBookInfo} from '@app/types'
import {ReadingProgressFilter, ReadingProgress} from '@app/enums'

export const hasRequiredProgress = (
    bookInfo: FavoriteBookInfo,
    readingProgress: ReadingProgressFilter
): boolean => {
    switch (readingProgress) {
        case ReadingProgressFilter.FINISHED_ONLY:
            return bookInfo.readingProgress == ReadingProgress.FINISHED
        case ReadingProgressFilter.READING_ONLY:
            return bookInfo.readingProgress == ReadingProgress.READING
        case ReadingProgressFilter.UNFINISHED_ONLY:
            return bookInfo.readingProgress != ReadingProgress.FINISHED
        default:
            return true
    }
}
