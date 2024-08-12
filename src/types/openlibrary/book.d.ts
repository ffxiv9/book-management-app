export interface BookResponse {
    title: string
    key: string
    author_name?: string[]
    first_publish_year: number
    cover_i?: number
    authors?: {author: {key: string}}[]
    covers: number[]
    description?: {
        value: string
    }
    subject_people?: string[]
}
