export function extractNumbers(str: string): number {
    return str ? Number(str.replace(/\D/g, '')) : 0
}

export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function replaceSpacesWithUnderscores(str: string): string {
    return str.replace(/ /g, '_')
}

export function replaceUnderscoresWithSpaces(str: string): string {
    return str.replace(/_/g, ' ')
}
