import {PropsWithChildren} from 'react'
import {Container, Row} from 'react-bootstrap'

export function Info({children}: PropsWithChildren) {
    return (
        <Container className="mt-3">
            <Row>{children}</Row>
        </Container>
    )
}
