import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Card, Col, Collapse, Row} from 'react-bootstrap'

import {BaseBookInfo, ReferenceId} from '@app/types'
import openLibrary from '@app/utils/open-library'
import './style.css'

export interface BookListItemProps<T extends ReferenceId & BaseBookInfo> {
    data: T
    isInFavorites: boolean
    onToggleFavorite: (data: T) => void
}

export default function BookListItem({
    data,
    isInFavorites,
    onToggleFavorite,
}: BookListItemProps<ReferenceId & BaseBookInfo>) {
    const [hover, setHover] = useState(false)
    const navigate = useNavigate()

    return (
        <Col>
            <Row className="justify-content-center g-0">
                <Button variant="secondary" onClick={() => onToggleFavorite(data)}>
                    {isInFavorites ? 'Remove' : 'Add'}
                </Button>
                <Card
                    onClick={() => navigate(`/books/${data.id}`)}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <Collapse in={hover}>
                        <div className="card-info">
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>

                                {data.publishYear && (
                                    <Card.Text>{data.publishYear}</Card.Text>
                                )}
                            </Card.Body>
                        </div>
                    </Collapse>
                    <Card.Img
                        variant="top"
                        alt={data.title}
                        src={
                            data.coverId
                                ? openLibrary.getBookCoverUrl(data.coverId)
                                : '/no-image.svg'
                        }
                    />
                </Card>
            </Row>
        </Col>
    )
}
