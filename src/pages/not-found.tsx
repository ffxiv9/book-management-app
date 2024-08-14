import {ErrorMessage} from '@app/components/common'

function NotFound() {
    return (
        <ErrorMessage>
            <div className="fw-bold d-flex justify-content-center">Page Not Found!</div>
        </ErrorMessage>
    )
}

export default NotFound
