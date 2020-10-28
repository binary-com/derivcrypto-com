import React from 'react'
import { Main } from './layout-style'
import { Nav } from 'components/page-elements'

export const Layout = ({ is_dark_logo, children }) => {
    return (
        <div>
            <Nav is_dark_logo={!is_dark_logo} />
            <Main>{children}</Main>
        </div>
    )
}
