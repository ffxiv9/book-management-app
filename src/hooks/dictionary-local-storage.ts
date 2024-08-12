import useLocalStorage from './local-storage'

export default function useDictionaryLocalStorage<T>(
    key: string
): [Record<string, T>, (id: string, newValue: T | undefined) => void] {
    const [state, setState] = useLocalStorage<Record<string, T>>(key, {})

    return [
        state,
        (id: string, newValue: T | undefined) => {
            const newState = {...state}

            if (newValue == null) {
                delete newState[id]
            } else {
                newState[id] = newValue
            }

            setState(newState)
        },
    ]
}
