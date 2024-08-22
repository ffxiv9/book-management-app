import {useEffect, useState, useRef, PropsWithChildren} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Form, InputGroup, FloatingLabel} from 'react-bootstrap'

import {searchQuery, selectSearchState} from '@app/slices/search-slice'
import './style.css'

export interface SearchBarProps {
    variant?: 'small' | 'large'
    placeholder?: string
}

export function Search({
    variant = 'small',
    placeholder = 'Search',
    children,
}: PropsWithChildren<SearchBarProps>) {
    const {query} = useSelector(selectSearchState)
    const [inputValue, setInputValue] = useState(query)
    const inputRef = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    useEffect(() => {
        setInputValue(query)
    }, [query])

    useEffect(() => {
        const keyboardListener = (ev: KeyboardEvent) => {
            if (ev.key === 'Enter') {
                dispatch(searchQuery(inputValue))
            }
        }

        inputRef.current?.addEventListener('keydown', keyboardListener)

        return () => {
            inputRef.current?.removeEventListener('keydown', keyboardListener)
        }
    }, [dispatch, inputValue])

    const smallInput = (
        <Form.Control
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className="me-auto"
            value={inputValue}
            placeholder={placeholder}
            ref={inputRef}
        />
    )

    const largeInput = <FloatingLabel label={placeholder}>{smallInput}</FloatingLabel>

    return (
        <InputGroup className="m-2">
            {children}

            {variant === 'small' && smallInput}
            {variant === 'large' && largeInput}

            {inputValue.length > 0 && (
                <>
                    <div className="vr" />
                    <Button
                        variant="outline-danger"
                        onClick={() => dispatch(searchQuery(''))}
                    >
                        Reset
                    </Button>
                </>
            )}
        </InputGroup>
    )
}
