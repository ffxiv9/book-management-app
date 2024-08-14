import {Pagination as BootstrapPagination} from 'react-bootstrap'

import './style.css'

export interface PaginationProps {
    page: number
    pageCount: number
    onPageChanged: (newPage: number) => void
}

export function Pagination({page, pageCount, onPageChanged}: PaginationProps) {
    const firstPage: number = 1

    return (
        <BootstrapPagination className="justify-content-center mt-3">
            {page > firstPage && (
                <BootstrapPagination.First onClick={() => onPageChanged(firstPage)} />
            )}
            {page > firstPage && (
                <BootstrapPagination.Prev onClick={() => onPageChanged(page - 1)} />
            )}

            {page - 10 > firstPage && (
                <>
                    <BootstrapPagination.Item onClick={() => onPageChanged(page - 10)}>
                        {page - 10}
                    </BootstrapPagination.Item>
                    <BootstrapPagination.Ellipsis />
                </>
            )}

            {page - 2 > firstPage && (
                <BootstrapPagination.Item onClick={() => onPageChanged(page - 2)}>
                    {page - 2}
                </BootstrapPagination.Item>
            )}
            {page - 1 > firstPage && (
                <BootstrapPagination.Item onClick={() => onPageChanged(page - 1)}>
                    {page - 1}
                </BootstrapPagination.Item>
            )}
            {pageCount > 1 && (
                <BootstrapPagination.Item active>{page}</BootstrapPagination.Item>
            )}
            {page + 1 < pageCount && (
                <BootstrapPagination.Item onClick={() => onPageChanged(page + 1)}>
                    {page + 1}
                </BootstrapPagination.Item>
            )}
            {page + 2 < pageCount && (
                <BootstrapPagination.Item onClick={() => onPageChanged(page + 2)}>
                    {page + 2}
                </BootstrapPagination.Item>
            )}

            {page + 10 < pageCount && (
                <>
                    <BootstrapPagination.Ellipsis />
                    <BootstrapPagination.Item onClick={() => onPageChanged(page + 10)}>
                        {page + 10}
                    </BootstrapPagination.Item>
                </>
            )}

            {page < pageCount && (
                <BootstrapPagination.Next onClick={() => onPageChanged(page + 1)} />
            )}
            {page < pageCount && (
                <BootstrapPagination.Last onClick={() => onPageChanged(pageCount)} />
            )}
        </BootstrapPagination>
    )
}
