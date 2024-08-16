import {FavoriteBookInfo} from '@app/types'
import {ReadingProgressFilter, ReadingProgress} from '@app/enums'

export const hasRequiredProgress = (
    bookInfo: FavoriteBookInfo,
    readingProgress: string
) => {
    const filterValue =
        ReadingProgressFilter[readingProgress as keyof typeof ReadingProgressFilter]
    const progress: ReadingProgress = bookInfo.readingProgress
    switch (filterValue) {
        case ReadingProgressFilter.FINISHED_ONLY:
            return progress == ReadingProgress.FINISHED
        case ReadingProgressFilter.READING_ONLY:
            return progress == ReadingProgress.READING
        case ReadingProgressFilter.UNFINISHED_ONLY:
            return progress != ReadingProgress.FINISHED
        default:
            return true
    }
}
