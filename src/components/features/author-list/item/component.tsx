import {Col, Container, Image, Row} from 'react-bootstrap'

import {ReferenceId} from '@app/types'
import {ErrorMessage} from '@app/components/common'
import {useGetAuthorQuery} from '@app/services/api'
import openLibrary from '@app/utils/open-library'

export function Item({id}: ReferenceId) {
    const {data, isLoading, isFetching, isError} = useGetAuthorQuery(id)

    if (isError) {
        return (
            <ErrorMessage>
                <p>Error loading details.</p>
            </ErrorMessage>
        )
    }

    if (isLoading || isFetching || !data) {
        return <div className="h4">Loading...</div>
    }

    return (
        <Container>
            <Row>
                <Col md={3}>
                    {data.coverId && (
                        <Image
                            src={openLibrary.getAuthorCoverUrl(data.coverId)}
                            thumbnail
                        />
                    )}
                </Col>
                <Col md={9}>
                    <div className="h4">
                        {data.name}
                        {data.birthDate && ` (${data.birthDate})`}
                    </div>
                    {data.bio && <p>{data.bio}</p>}
                </Col>
            </Row>
        </Container>
    )
}
