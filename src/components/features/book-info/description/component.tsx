import {Stack} from 'react-bootstrap'
import {PropsWithChildren} from 'react'

export interface BookDescriptionProps {
    description: string
}

export function Description({
    description,
    children,
}: PropsWithChildren<BookDescriptionProps>) {
    return (
        <Stack className="mt-2">
            {description && (
                <div className="p-3 text-bg-secondary rounded">
                    <p>Description: {description}</p>
                </div>
            )}

            {children}
        </Stack>
    )
}
