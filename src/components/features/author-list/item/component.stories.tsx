import {PropsWithChildren} from 'react'
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import type {Meta, StoryObj} from '@storybook/react'

import {api} from '@app/services/api'
import {Item} from './component'

const meta = {
    component: Item,
    title: 'Features/AuthorList/Item',
    excludeStories: /.*AuthorProvider$/,
} satisfies Meta<typeof Item>

export default meta

type Story = StoryObj<typeof meta>

export const AuthorProvider = ({children}: PropsWithChildren) => (
    <Provider
        store={configureStore({
            reducer: {
                [api.reducerPath]: api.reducer,
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(api.middleware),
        })}
    >
        {children}
    </Provider>
)

export const WithPictureAndBio: Story = {
    args: {
        id: 23919,
    },
    decorators: [
        (Story) => (
            <AuthorProvider>
                <Story />
            </AuthorProvider>
        ),
    ],
}

export const WithoutPictureAndBio: Story = {
    args: {
        id: 10,
    },
    decorators: [
        (Story) => (
            <AuthorProvider>
                <Story />
            </AuthorProvider>
        ),
    ],
}
