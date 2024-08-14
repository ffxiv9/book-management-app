import {Form, InputGroup} from 'react-bootstrap'

import {ReferenceId} from '@app/types'
import {useLocalStorage} from '@app/hooks'

export function Notes({id}: ReferenceId) {
    const [notes, setNotes] = useLocalStorage(`notes_${id}`, '')

    return (
        <InputGroup>
            <InputGroup.Text>Notes</InputGroup.Text>
            <Form.Control
                as="textarea"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
            />
        </InputGroup>
    )
}
