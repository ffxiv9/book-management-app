import {useSelector, useDispatch} from 'react-redux'
import {DropdownButton, Dropdown} from 'react-bootstrap'

import {setSearchFilter, selectSearchState} from '@app/slices/search-slice'
import './style.css'

export function Filter() {
    const {availableFilters, filter} = useSelector(selectSearchState)

    const dispatch = useDispatch()

    return (
        <>
            {availableFilters?.length > 0 && (
                <DropdownButton variant="outline-secondary" title={filter}>
                    {availableFilters
                        .filter((e) => e !== filter)
                        .map((newFilter) => (
                            <Dropdown.Item
                                key={newFilter}
                                onClick={() => dispatch(setSearchFilter(newFilter))}
                            >
                                {newFilter}
                            </Dropdown.Item>
                        ))}
                </DropdownButton>
            )}
        </>
    )
}
