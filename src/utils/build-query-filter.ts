import searchFieldMap from '@app/mappers/search-field-map'

export function buildQueryFilter(searchFilter: string, searchQuery: string) {
    const queryFilter = {}

    if (searchFilter) {
        const searchField = searchFieldMap[searchFilter as keyof typeof searchFieldMap]
        if (searchField) {
            queryFilter[searchField] = searchQuery
        }
    }

    return queryFilter
}
