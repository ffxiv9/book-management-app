import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {BookList} from '@app/components/features/book'
import searchFieldMap from '@app/mappers/search-field-map'
import {setAvailableFilters, selectSearchState} from '@app/slices/search-slice'
import {useHomePaginatedDataQuery} from '@app/handlers/book-home-list'
import {SearchBar, SearchFilter} from '@app/components/common'
import './home.css'

function Home() {
    const searchState = useSelector(selectSearchState)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAvailableFilters(Object.keys(searchFieldMap)))

        return () => {
            dispatch(setAvailableFilters([]))
        }
    }, [dispatch])

    return searchState.query ? (
        <BookList dataQueryFn={useHomePaginatedDataQuery} />
    ) : (
        <div className="search-container">
            <SearchBar variant="large" placeholder="Search book in library">
                <SearchFilter />
            </SearchBar>
        </div>
    )
}

export default Home
