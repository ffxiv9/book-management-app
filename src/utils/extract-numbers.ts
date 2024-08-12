export function extractNumbers(input: string): number {
    return input ? Number(input.replace(/\D/g, '')) : 0
}
