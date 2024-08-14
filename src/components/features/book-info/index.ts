import {Info} from './info'
import {Image} from './image'
import {Rating} from './rating'
import {Notes} from './notes'
import {Description} from './description'
import {Group} from './group'
import {Progress} from './progress'
import {SubjectPeople} from './subject-people'

export const BookInfo = Object.assign(Info, {
    Image,
    Rating,
    Notes,
    Description,
    Group,
    Progress,
    SubjectPeople,
})
