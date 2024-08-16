import {createBrowserRouter} from 'react-router-dom'

import Home from '@app/pages/home'
import Layout from '@app/pages/layout'
import BookDetails from '@app/pages/book-details'
import Favorites from '@app/pages/favorites'
import ErrorPage from '@app/pages/error-page'
import NotFound from '@app/pages/not-found'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: '/books/:bookId',
                        element: <BookDetails />,
                    },
                    {
                        path: 'favorites',
                        element: <Favorites />,
                    },
                    {
                        path: '*',
                        element: <NotFound />,
                    },
                ],
            },
        ],
    },
])
