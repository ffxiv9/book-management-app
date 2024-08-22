import {Col, Image, Row} from 'react-bootstrap'

import {ReferenceId} from '@app/types'
import {Message} from '@app/components/common'
import {useGetAuthorQuery} from '@app/services/api'
import openLibrary from '@app/utils/open-library'

const containerClasses = 'bg-body-secondary rounded-2 p-3 justify-content-center m-0'

export function Item({id}: ReferenceId) {
    const {data, isLoading, isFetching, isError} = useGetAuthorQuery(id)

    if (isError) {
        return <Message variant="error" text="Error loading details." />
    }

    if (isLoading || isFetching || !data) {
        return <Row className={`${containerClasses} h4`}>Loading...</Row>
    }

    return (
        <Row className={containerClasses}>
            <Col md={3} className="d-flex justify-content-center">
                {data.coverId && (
                    <Image src={openLibrary.getAuthorCoverUrl(data.coverId)} thumbnail />
                )}
            </Col>
            <Col md={9}>
                <div className="h4 mb-0">
                    {data.name}
                    {data.birthDate && ` (${data.birthDate})`}
                </div>
                {data.bio && <p className="mt-3">{data.bio}</p>}
            </Col>
        </Row>
    )
}
