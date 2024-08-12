export function buildParams(params: Record<string, string | number | undefined>) {
    const urlParams = {}

    for (const [key, value] of Object.entries(params)) {
        if (value != null) {
            urlParams[key] = value
        }
    }

    return urlParams
}
