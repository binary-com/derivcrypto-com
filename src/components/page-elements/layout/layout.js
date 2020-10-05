import React from 'react'
import { Main } from './layout-style'
import { Nav } from 'components/page-elements'

export const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Main>{children}</Main>
        </>
    )
}
