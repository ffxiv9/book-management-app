import {Dispatch} from 'react'

import {PaginatedDataQuery} from './paginated-data-query'

export interface PaginatedDataQueryFn<T> {
    (page: number, pageSize: number, setPage: Dispatch<number>): PaginatedDataQuery<T>
}
