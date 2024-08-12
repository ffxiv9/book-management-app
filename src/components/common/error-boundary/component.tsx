import {Alert} from 'react-bootstrap'

export default function ErrorBoundary({children}) {
    return (
        <Alert variant="danger">
            <Alert.Heading>An error occurred!</Alert.Heading>
            <hr />
            {children}
        </Alert>
    )
}
