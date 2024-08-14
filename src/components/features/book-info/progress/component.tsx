import {ChangeEvent} from 'react'
import {Form} from 'react-bootstrap'

import {ReadingProgress} from '@app/enums'

export interface BookProgressProps {
    progress: ReadingProgress
    onProgressChanged: (newProgress: ReadingProgress) => void
}

export function Progress({progress, onProgressChanged}: BookProgressProps) {
    const handleProgressChange = ({target}: ChangeEvent<HTMLSelectElement>) => {
        const progress = target.value as keyof typeof ReadingProgress

        if (progress) {
            onProgressChanged(ReadingProgress[progress])
        }
    }

    return (
        <Form.Group>
            <Form.Label>Select reading progress</Form.Label>
            <Form.Select
                value={ReadingProgress[progress]}
                onChange={handleProgressChange}
            >
                {Object.keys(ReadingProgress)
                    .filter((key) => isNaN(Number(key)))
                    .map((option) => (
                        <option
                            disabled={progress === ReadingProgress[option]}
                            key={option}
                        >
                            {option}
                        </option>
                    ))}
            </Form.Select>
        </Form.Group>
    )
}
