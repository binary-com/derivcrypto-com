import React from 'react'
import { Nav } from 'components/page-elements'

export const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}
