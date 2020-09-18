import styled from 'styled-components'
import { Input, WhiteText, SectionContainer, Button, Flex } from 'components/elements'

export const StyledButton = styled(Button)`
    display: flex;
    width: 100%;
    margin: 8px auto 13px;
    border: unset;
    justify-content: center;
`

export const StyledSectionContainer = styled(SectionContainer)`
    background-color: black;

    /* margin-top: -38px; */
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
    padding-top: 38px;
`
