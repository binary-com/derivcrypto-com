import React from 'react'

export const useMounted = initialState => {
    const [state, setState] = React.useState(initialState ?? false)

    React.useEffect(() => {
        setState(true)
    }, [])

    return [state, setState]
}
