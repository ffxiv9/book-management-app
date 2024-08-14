import {Row, Image as BootstrapImage} from 'react-bootstrap'

import {ReferenceId} from '@app/types'
import openLibrary from '@app/utils/open-library'

export function Image({id}: ReferenceId) {
    return (
        <Row className="justify-content-center">
            <BootstrapImage
                src={openLibrary.getBookCoverUrl(id)}
                style={{width: '18rem'}}
                thumbnail
            />
        </Row>
    )
}
