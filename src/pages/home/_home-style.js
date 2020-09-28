import React from 'react'
import styled from 'styled-components'
//import css from '@styled-system/css'
import {
    Input,
    WhiteText,
    SectionContainer,
    Container,
    Button,
    Flex,
    Image,
    Text,
} from 'components/elements'
import { device } from 'themes/device'

export const StyledButton = styled(Button)`
    display: flex;
    width: 100%;
    margin: 8px auto 13px;
    border: unset;
    justify-content: center;
`

export const StyledSectionContainer = styled(SectionContainer)`
    background-color: black;
    margin-top: -64px;
`

export const StyledInput = styled(Input)`
    margin-top: 40px;
`

export const StyledText = styled(WhiteText)`
    margin: 16px auto 40px;
`

export const StyledFollow = styled(Flex)`
    padding-bottom: 46px;
    align-items: center;
`

export const LogoWrapper = styled(Flex)`
    margin-left: 8px;
`

export const Header = styled(WhiteText)`
    padding-top: 104px;
`

export const StyledImage = styled(Image)`
    @media ${device.mobileS} {
        width: 329px;
        height: 181px;
    }
    @media ${device.mobile} {
        width: 510px;
        height: 278px;
    }
`

export const PartitionContainer = styled(SectionContainer)`
    margin: unset;
    padding: 40px 0 0;
    padding-top: ${props => (props.no_padding_top ? '0' : '40px')};
    background-color: ${props => (props.greybackground ? '#f8fafc' : 'unset')};
`

export const TextWrapper = styled.div`
    @media ${device.tablet} {
        max-width: 384px;
        margin: auto;
        margin-left: unset;
    }
`

export const ContentWrapper = styled(Container)`
    @media ${device.tablet} {
        max-width: 720px;
        display: flex;
    }
    @media ${device.desktopL} {
        max-width: 1020px;
        height: 688px;
    }
`
export const HighLightsImage = styled(Image)`
    margin: auto;
`

export const HighlightsHeader = ({ children }) => {
    return (
        <Text
            fontSize={{ _: 'xl', xxl: '4xl' }}
            mb="m"
            as="h3"
            textAlign={{ _: 'center', md: 'left' }}
        >
            {children}
        </Text>
    )
}

export const HighlightsContent = ({ children }) => {
    return (
        <Text fontSize={{ _: 'm', xxl: 'xl' }} m="auto" textAlign="justify">
            {children}
        </Text>
    )
}
