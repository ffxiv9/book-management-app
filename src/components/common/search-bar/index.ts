import {Filter} from './filter'
import {Search} from './search'

export type {SearchBarProps} from './search'

export const SearchBar = Object.assign(Search, {
    Filter,
})
