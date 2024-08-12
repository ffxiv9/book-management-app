import {useEffect} from 'react'
import {useSelector} from 'react-redux'

import {PaginatedDataQueryFn, BaseBookInfo, ReferenceId} from '@app/types'
import searchFieldMap from '@app/mappers/search-field-map'
import {useGetBooksQuery} from '@app/services/api'
import {selectSearchState} from '@app/slices/search-slice'

export const useHomePaginatedDataQuery: PaginatedDataQueryFn<
    BaseBookInfo & ReferenceId
> = (page, pageSize, setPage) => {
    const searchState = useSelector(selectSearchState)

    useEffect(() => {
        setPage(1)
    }, [searchState, setPage])

    const queryFilter = {}

    if (searchState.filter) {
        const searchField =
            searchFieldMap[searchState.filter as keyof typeof searchFieldMap]

        if (searchField) {
            queryFilter[searchField] = searchState.query
        }
    }

    const {data, ...otherProps} = useGetBooksQuery({...queryFilter, page, pageSize})

    return {
        ...otherProps,
        pageCount: data?.pageCount ?? 0,
        data: data?.data ?? [],
    }
}
