export interface AuthorResponse {
    key: string
    name: string
    birth_date: string
    bio?:
        | string
        | {
              value: string
          }
}
