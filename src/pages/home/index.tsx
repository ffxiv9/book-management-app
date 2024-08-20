import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import searchFieldMap from '@app/mappers/search-field-map'
import {setAvailableFilters, selectSearchState} from '@app/slices/search-slice'
import {SearchBar} from '@app/components/common'
import {BookSearch} from '@app/components/features/book-search'
import './style.css'

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
        <BookSearch
            query={searchState.query}
            filter={searchState.filter as keyof typeof searchFieldMap}
        />
    ) : (
        <div className="search-container">
            <SearchBar variant="large" placeholder="Search book in library">
                <SearchBar.Filter />
            </SearchBar>
        </div>
    )
}

export default Home
