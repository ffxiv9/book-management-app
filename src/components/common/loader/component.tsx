import {Spinner} from 'react-bootstrap'

import './style.css'

export default function Loader() {
    return (
        <div className="loader">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
        </div>
    )
}
