import {BasePaginatedData} from './base-paginated-data'

export interface PaginatedDataQuery<T> extends BasePaginatedData<T> {
    isLoading: boolean
    isFetching: boolean
    isError: boolean
}
