import type {Meta, StoryObj} from '@storybook/react'

import {Message} from './component'

const meta = {
    component: Message,
    title: 'Common/Message',
} satisfies Meta<typeof Message>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        text: 'Some text',
        variant: 'info',
    },
}

export const ErrorMessage: Story = {
    args: {
        text: 'Error message',
        variant: 'error',
    },
}
