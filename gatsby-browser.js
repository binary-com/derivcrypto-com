import React from 'react'
import { StateProvider } from 'store'

export const wrapRootElement = ({ element }) => {
    return <StateProvider>{element}</StateProvider>
}
