import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import searchFieldMap from '@app/mappers/search-field-map'
import {setAvailableFilters, selectSearchState} from '@app/slices/search-slice'
import {SearchBar} from '@app/components/common'
import {BookSearchResult} from '@app/components/features/book-search-result'
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
        <BookSearchResult query={searchState.query} filter={searchState.filter} />
    ) : (
        <div className="search-container">
            <SearchBar variant="large" placeholder="Search book in library">
                <SearchBar.Filter />
            </SearchBar>
        </div>
    )
}

export default Home
