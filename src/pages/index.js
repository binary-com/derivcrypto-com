import React from 'react'
import { Nav } from 'components/elements/nav'
import { WithIntl } from 'components/localization'

const Home = () => {
    return (
        <Nav>
            <p>Hello world!</p>
        </Nav>
    )
}

export default WithIntl()(Home)
