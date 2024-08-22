import type {Meta, StoryObj} from '@storybook/react'

import {AuthorList} from './index'
import {AuthorProvider} from './item/component.stories'

const meta = {
    component: AuthorList,
    title: 'Features/AuthorList',
} satisfies Meta<typeof AuthorList>

export default meta

type Story = StoryObj<typeof meta>

export const Empty: Story = {
    args: {
        authorIds: [],
    },
    decorators: [
        (Story) => (
            <AuthorProvider>
                <Story />
            </AuthorProvider>
        ),
    ],
}

export const OneAuthorWithoutPicture: Story = {
    args: {
        authorIds: [10],
    },
    decorators: [
        (Story) => (
            <AuthorProvider>
                <Story />
            </AuthorProvider>
        ),
    ],
}

export const TwoAuthorsWithPictureAndBio: Story = {
    args: {
        authorIds: [23919, 399295],
    },
    decorators: [
        (Story) => (
            <AuthorProvider>
                <Story />
            </AuthorProvider>
        ),
    ],
}
