import {useEffect} from 'react'
import {useSelector} from 'react-redux'

import {PaginatedDataQueryFn, ReferenceId, FavoriteBookInfo} from '@app/types'
import {ReadingProgress} from '@app/enums'
import {RootState} from '@app/app/store'
import {selectSearchState} from '@app/slices/search-slice'
import {useDictionaryLocalStorage} from '@app/hooks'

export const useFavoritePaginatedDataQuery: PaginatedDataQueryFn<
    FavoriteBookInfo & ReferenceId
> = (page, pageSize, setPage) => {
    const filterValue = useSelector((state: RootState) => selectSearchState(state).filter)
    const [favorites] = useDictionaryLocalStorage<FavoriteBookInfo>('favorites')

    useEffect(() => setPage(1), [filterValue, setPage])

    const filteredData = Object.keys(favorites)
        .map((bookId): FavoriteBookInfo & ReferenceId => ({
            id: Number(bookId),
            ...favorites[bookId],
        }))
        .filter((bookInfo) => {
            switch (filterValue) {
                case 'Finished only':
                    return bookInfo.readingProgress == ReadingProgress.FINISHED
                case 'Reading only':
                    return bookInfo.readingProgress == ReadingProgress.READING
                case 'Unfinished only':
                    return bookInfo.readingProgress != ReadingProgress.FINISHED
                default:
                    return true
            }
        })

    return {
        pageCount: Math.ceil(filteredData.length / pageSize),
        isError: false,
        isFetching: false,
        isLoading: false,
        data: filteredData.slice((page - 1) * pageSize, page * pageSize),
    }
}
