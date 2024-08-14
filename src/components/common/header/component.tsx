import {Stack} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {selectSearchState} from '@app/slices/search-slice'
import {SearchBar} from '@app/components/common'
import './style.css'

export function Header() {
    const {query} = useSelector(selectSearchState)

    return (
        <header>
            <nav>
                <Stack direction="horizontal" gap={3}>
                    <div className="p-3">
                        <Link to="/">Home</Link>
                    </div>

                    {query && (
                        <div className="ms-auto">
                            <SearchBar>
                                <SearchBar.Filter />
                            </SearchBar>
                        </div>
                    )}

                    <div className="ms-auto p-3">
                        <Link to="/favorites">Favorites</Link>
                    </div>
                </Stack>
            </nav>
        </header>
    )
}
