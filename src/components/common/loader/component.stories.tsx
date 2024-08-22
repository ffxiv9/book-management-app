import type {Meta, StoryObj} from '@storybook/react'

import {Loader} from './component'

const meta = {
    component: Loader,
    title: 'Common/Loader',
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}

export const WithText: Story = {
    args: {
        text: 'Loading...',
    },
}
