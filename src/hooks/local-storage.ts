import {Dispatch, useCallback, useEffect, useState} from 'react'

export default function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, Dispatch<T>] {
    const [value, setValue] = useState(() => {
        const item: string | null = window.localStorage.getItem(key)
        return (item && (JSON.parse(item) as T)) || initialValue
    })

    const onStorage = useCallback(
        (event: StorageEvent) => {
            if (event.key === key && event.newValue !== value) {
                setValue(
                    event.newValue ? (JSON.parse(event.newValue) as T) : initialValue
                )
            }
        },
        [initialValue, key, value]
    )

    useEffect(() => {
        window.addEventListener('storage', onStorage)
        return () => window.removeEventListener('storage', onStorage)
    }, [onStorage])

    return [
        value,
        (newValue: T) => {
            setValue(newValue)

            if (newValue) {
                window.localStorage.setItem(key, JSON.stringify(newValue))
            } else {
                window.localStorage.removeItem(key)
            }
        },
    ]
}
