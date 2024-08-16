import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {
    ReferenceId,
    BaseBookInfo,
    BookInfo,
    AuthorInfo,
    BasePaginatedData,
    BookQueryFilter,
    SearchBookResponse,
    BookResponse,
    AuthorResponse,
} from '@app/types'
import {environment} from '@app/environments/environment'
import {mapAuthor, mapBook} from '@app/mappers/openlibrary'
import {buildUrlParams} from '@app/utils'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: environment.apiBaseUrl,
    }),
    endpoints: (builder) => ({
        getBooks: builder.query<
            BasePaginatedData<BaseBookInfo & ReferenceId>,
            BookQueryFilter
        >({
            query: ({title, publishYear, author, page, pageSize}) => {
                const params = buildUrlParams({
                    offset: Math.max(Number(page) - 1, 0) * pageSize,
                    limit: pageSize,
                    title: title,
                    author: author,
                    q:
                        Number(publishYear) > 0
                            ? `first_publish_year:${publishYear}`
                            : undefined,
                })

                return {
                    url: `/search.json`,
                    params: params,
                    timeout: 10_000,
                }
            },
            transformResponse: (response: SearchBookResponse, _meta, arg) => ({
                pageCount: Math.ceil((response?.num_found ?? 0) / arg.pageSize),
                data: response?.docs?.map((bookResponse) => mapBook(bookResponse)) ?? [],
            }),
        }),
        getBook: builder.query<BookInfo & ReferenceId, number>({
            query: (id) => ({url: `/works/OL${id}W.json`}),
            transformResponse: (response: BookResponse) => mapBook(response),
        }),
        getAuthor: builder.query<AuthorInfo & ReferenceId, number>({
            query: (id) => ({url: `/authors/OL${id}A.json`}),
            transformResponse: (response: AuthorResponse) => mapAuthor(response),
        }),
    }),
})

export const {useGetBookQuery, useGetAuthorQuery, useGetBooksQuery} = api
