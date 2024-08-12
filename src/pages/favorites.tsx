import {useEffect} from 'react'
import {Container, Row} from 'react-bootstrap'
import {useDispatch} from 'react-redux'

import {BookList} from '@app/components/features/book'
import {setAvailableFilters} from '@app/slices/search-slice'
import {useFavoritePaginatedDataQuery} from '@app/handlers/book-favorite-list'
import {SearchFilter} from '@app/components/common'

function Favorites() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            setAvailableFilters([
                'All books',
                'Reading only',
                'Finished only',
                'Unfinished only',
            ])
        )

        return () => {
            dispatch(setAvailableFilters([]))
        }
    }, [dispatch])

    return (
        <Container>
            <Row>
                <div className="h2">My collection</div>
                <SearchFilter />
            </Row>
            <Row className="mt-3">
                <BookList dataQueryFn={useFavoritePaginatedDataQuery} />
            </Row>
        </Container>
    )
}

export default Favorites
