import {ErrorBoundary} from '@app/components/common'

function NotFound() {
    return (
        <ErrorBoundary>
            <div className="fw-bold d-flex justify-content-center">Page Not Found!</div>
        </ErrorBoundary>
    )
}

export default NotFound
