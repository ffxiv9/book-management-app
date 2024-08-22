import {Spinner} from 'react-bootstrap'

import './style.css'

interface LoaderProps {
    text?: string
}

export function Loader({text}: LoaderProps) {
    return (
        <div className="loader">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />

            {text && <div className="text-center">{text}</div>}
        </div>
    )
}
