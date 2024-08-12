import * as React from 'react'
import {Form} from 'react-bootstrap'

import {ReadingProgress} from '@app/enums'

export interface BookReadingProgressProps {
    readingProgress: ReadingProgress
    onReadingProgressChanged: (newReadingProgress: ReadingProgress) => void
}

export default function BookReadingProgress({
    readingProgress,
    onReadingProgressChanged,
}: BookReadingProgressProps) {
    const handleReadingProgressChange = ({
        target,
    }: React.ChangeEvent<HTMLSelectElement>) => {
        const readingProgress = target.value as keyof typeof ReadingProgress

        if (readingProgress) {
            onReadingProgressChanged(ReadingProgress[readingProgress])
        }
    }

    return (
        <Form.Group>
            <Form.Label>Select reading progress</Form.Label>
            <Form.Select
                value={ReadingProgress[readingProgress]}
                onChange={handleReadingProgressChange}
            >
                {Object.keys(ReadingProgress)
                    .filter((key) => isNaN(Number(key)))
                    .map((option) => (
                        <option
                            disabled={readingProgress === ReadingProgress[option]}
                            key={option}
                        >
                            {option}
                        </option>
                    ))}
            </Form.Select>
        </Form.Group>
    )
}
