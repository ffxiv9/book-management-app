import {Badge} from 'react-bootstrap'

export interface BookSubjectPeopleProps {
    subjectPeople: string[]
}

export function SubjectPeople({subjectPeople}: BookSubjectPeopleProps) {
    return (
        <div className="fw-semibold">
            People:{' '}
            {subjectPeople.map((subjectPerson) => (
                <Badge key={subjectPerson} bg="secondary" className="mx-1">
                    {subjectPerson}
                </Badge>
            ))}
        </div>
    )
}
