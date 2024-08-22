import {useState, useEffect} from 'react'

import {DEFAULT_PAGE_SIZE} from '@app/constants'
import {useGetBooksQuery} from '@app/services/api'
import {Message, Loader, Pagination} from '@app/components/common'
import {BookList} from '@app/components/features/book-list'
import searchFieldMap from '@app/mappers/search-field-map'

export interface BookSearchProps {
    filter: keyof typeof searchFieldMap
    query: string
}

export function BookSearch({filter, query}: BookSearchProps) {
    const [page, setPage] = useState(1)

    const {data, isLoading, isFetching, isError} = useGetBooksQuery({
        [searchFieldMap[filter]]: query,
        pageSize: DEFAULT_PAGE_SIZE,
        page,
    })

    useEffect(() => {
        setPage(1)
    }, [filter, query, setPage])

    if (isError) {
        return <Message variant="error" text="Error loading list." />
    }

    if (isLoading || isFetching) {
        return <Loader />
    }

    return data?.data?.length ? (
        <>
            <BookList data={data.data} />

            <Pagination
                page={page}
                pageCount={data.pageCount}
                onPageChanged={setPage}
            ></Pagination>
        </>
    ) : (
        <Message text="No information was found !" />
    )
}
