import type {Meta, StoryObj} from '@storybook/react'

import {Pagination} from './component'
import {fn} from '@storybook/test'

const meta = {
    component: Pagination,
    title: 'Common/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        page: 1,
        pageCount: 10,
        onPageChanged: fn(),
    },
}
