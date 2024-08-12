import {useState} from 'react'
import {Button, Collapse, Row} from 'react-bootstrap'

import {AuthorListItem} from './list-item'

export interface AuthorListProps {
    authorIds: number[]
}

export default function AuthorList({authorIds}: AuthorListProps) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button variant="secondary" onClick={() => setOpen(!open)}>
                Show Authors
            </Button>
            {open && (
                <Collapse in={open}>
                    <Row
                        aria-orientation="vertical"
                        className="g-2 justify-content-center position-relative d-flex"
                    >
                        {authorIds.map((id) => (
                            <AuthorListItem key={id} id={id} />
                        ))}
                    </Row>
                </Collapse>
            )}
        </>
    )
}
