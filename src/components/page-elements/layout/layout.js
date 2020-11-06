import React from 'react'
import { Main } from './layout-style'
import { Nav } from 'components/page-elements'

export const Layout = ({ is_dark_logo, has_shadow, children }) => {
    return (
        <div>
            <Nav is_dark_logo={!is_dark_logo} has_shadow={has_shadow} />
            <Main>{children}</Main>
        </div>
    )
}
