import {configureStore} from '@reduxjs/toolkit'

import {api} from '@app/services/api'
import {searchSlice} from '@app/slices/search-slice'

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        search: searchSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export default store
