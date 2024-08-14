import {PropsWithChildren} from 'react'
import {Col} from 'react-bootstrap'

export interface GroupSize {
    groupSize?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
}

export function Group({children, groupSize}: PropsWithChildren<GroupSize>) {
    return (
        <Col md={groupSize} className="justify-content-center">
            {children}
        </Col>
    )
}
