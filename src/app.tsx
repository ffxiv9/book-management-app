import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from '@app/pages/home'
import Layout from '@app/pages/layout'
import NotFound from '@app/pages/not-found'
import Favorites from '@app/pages/favorites'
import BookDetails from '@app/pages/book-details'

import './app.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/books/:bookId" element={<BookDetails />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
