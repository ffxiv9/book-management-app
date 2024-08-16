import {PropsWithChildren} from 'react'
import {Alert} from 'react-bootstrap'

export function ErrorMessage({children}: PropsWithChildren) {
    return (
        <Alert variant="danger">
            <Alert.Heading>An error occurred!</Alert.Heading>

            {children && (
                <>
                    <hr />
                    {children}
                </>
            )}
        </Alert>
    )
}
