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
                <Stack direction="horizontal">
                    <div className="p-3">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="p-3">
                        <Link to="/favorites">Favorites</Link>
                    </div>

                    {query && (
                        <SearchBar>
                            <SearchBar.Filter />
                        </SearchBar>
                    )}
                </Stack>
            </nav>
        </header>
    )
}
