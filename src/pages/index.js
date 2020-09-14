import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/header'

const Test = styled.div`
    display: flex;
`

export default function Home() {
    return (
        <Header>
            <Test>Hello world!</Test>
        </Header>
    )
}
