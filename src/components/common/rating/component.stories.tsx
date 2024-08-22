import type {Meta, StoryObj} from '@storybook/react'

import {Rating} from './component'
import {fn} from '@storybook/test'

const meta = {
    component: Rating,
    title: 'Common/Rating',
} satisfies Meta<typeof Rating>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        rating: 3,
        onStarRating: fn(),
    },
}

export const Empty: Story = {
    args: {
        ...Default.args,
        rating: 0,
    },
}
