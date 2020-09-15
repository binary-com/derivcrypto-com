import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/header'
import { WithIntl } from 'components/localization'

const Test = styled.div`
    display: flex;
`

const Home = () => {
    return (
        <Header>
            <Test>Hello world!</Test>
        </Header>
    )
}

export default WithIntl()(Home)
