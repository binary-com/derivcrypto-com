import React from 'react'
import { Main } from './layout-style'
import { Nav } from 'components/page-elements'

export const Layout = ({ is_dark_background, children }) => {
    return (
        <div>
            <Nav is_dark={!is_dark_background} />
            <Main>{children}</Main>
        </div>
    )
}
