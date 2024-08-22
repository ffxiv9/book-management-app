import {useState} from 'react'
import {Button, Collapse, Row} from 'react-bootstrap'

import {Message} from '@app/components/common'
import {Item} from '../item'

export interface AuthorListProps {
    authorIds: number[]
}

export function List({authorIds}: AuthorListProps) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button variant="secondary" className="w-100" onClick={() => setOpen(!open)}>
                {open ? 'Hide Authors' : 'Show Authors'}
            </Button>

            {open && (
                <Collapse in={open}>
                    <Row
                        aria-orientation="vertical"
                        className="m-0 mt-2 justify-content-center position-relative gap-2"
                    >
                        {authorIds.length === 0 && <Message text="List is empty" />}

                        {authorIds.map((id) => (
                            <Item key={id} id={id} />
                        ))}
                    </Row>
                </Collapse>
            )}
        </>
    )
}
