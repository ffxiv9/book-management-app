import type {Meta, StoryObj} from '@storybook/react'

import {Header} from './component'
import {MemoryRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {configureStore, createSlice} from '@reduxjs/toolkit'
import {PropsWithChildren} from 'react'
import {SearchState} from '@app/slices/search-slice'

const meta = {
    component: Header,
    title: 'Common/Header',
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

const Mock = ({
    initialState,
    children,
}: PropsWithChildren<{initialState: SearchState}>) => (
    <Provider
        store={configureStore({
            reducer: {
                search: createSlice({
                    name: 'search',
                    initialState,
                    reducers: {},
                }).reducer,
            },
        })}
    >
        {children}
    </Provider>
)

export const Default: Story = {
    args: {},
    decorators: [
        (Story) => (
            <Mock
                initialState={{
                    query: '',
                    filter: '',
                    availableFilters: [],
                }}
            >
                <Story />
            </Mock>
        ),
    ],
}

export const WithQueryString: Story = {
    args: {},
    decorators: [
        (Story) => (
            <Mock
                initialState={{
                    query: 'Query string',
                    filter: '',
                    availableFilters: [],
                }}
            >
                <Story />
            </Mock>
        ),
    ],
}

export const WithQueryAndFilter: Story = {
    args: {},
    decorators: [
        (Story) => (
            <Mock
                initialState={{
                    query: 'Query string',
                    filter: 'Filter 1',
                    availableFilters: ['Filter 1', 'Filter 2', 'Filter 3'],
                }}
            >
                <Story />
            </Mock>
        ),
    ],
}
