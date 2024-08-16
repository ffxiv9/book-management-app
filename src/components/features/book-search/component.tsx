import {useState, useEffect} from 'react'
import {Alert} from 'react-bootstrap'

import {useGetBooksQuery} from '@app/services/api'
import {ErrorMessage, Loader, Pagination} from '@app/components/common'
import {BookList} from '@app/components/features/book-list'
import {buildQueryFilter} from '@app/utils'

export interface BookSearchProps {
    filter: string
    query: string
}

export function BookSearch({filter, query}: BookSearchProps) {
    const pageSize = 12
    const [page, setPage] = useState(1)

    const {data, isLoading, isFetching, isError} = useGetBooksQuery({
        ...buildQueryFilter(filter, query),
        page,
        pageSize,
    })

    useEffect(() => {
        setPage(1)
    }, [filter])

    if (isError) {
        return (
            <ErrorMessage>
                <p>Error loading list.</p>
            </ErrorMessage>
        )
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
        <Alert variant="light" className="justify-content-center d-flex">
            <Alert.Heading>No information was found !</Alert.Heading>
        </Alert>
    )
}
