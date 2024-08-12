import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '@app/app/store'

export interface SearchState {
    query: string
    filter: string
    availableFilters: string[]
}

const initialState: SearchState = {
    query: '',
    filter: '',
    availableFilters: [],
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        },
        setSearchFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        },
        setAvailableFilters: (state, action: PayloadAction<string[]>) => {
            state.availableFilters = action.payload
            state.filter = action?.payload[0] ?? initialState.filter
        },
    },
})

export const {searchQuery, setSearchFilter, setAvailableFilters} = searchSlice.actions

export const selectSearchState = (state: RootState): SearchState => state.search

export default searchSlice.reducer
