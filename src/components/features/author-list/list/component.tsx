import {useState} from 'react'
import {Button, Collapse, Row, Stack} from 'react-bootstrap'
import {Item} from '../item'

export interface AuthorListProps {
    authorIds: number[]
}

export function List({authorIds}: AuthorListProps) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Stack className="mt-2">
                <Button variant="secondary" onClick={() => setOpen(!open)}>
                    Show Authors
                </Button>
            </Stack>
            {open && (
                <Collapse in={open}>
                    <Row
                        aria-orientation="vertical"
                        className="g-2 mt-2 justify-content-center position-relative d-flex"
                    >
                        {authorIds.map((id) => (
                            <Item key={id} id={id} />
                        ))}
                    </Row>
                </Collapse>
            )}
        </>
    )
}
