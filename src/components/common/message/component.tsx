import {Alert} from 'react-bootstrap'
import {PropsWithChildren} from 'react'

export interface MessageProps {
    variant?: 'info' | 'error'
    text: string
}

export function Message({
    text,
    variant = 'info',
    children,
}: PropsWithChildren<MessageProps>) {
    return (
        <Alert
            variant={variant == 'info' ? 'light' : 'danger'}
            className="justify-content-center d-flex"
        >
            <Alert.Heading>{text}</Alert.Heading>

            {children && (
                <>
                    <hr />
                    <div className="mb-0">{children}</div>
                </>
            )}
        </Alert>
    )
}
