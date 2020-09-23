import styled from 'styled-components'
import { Input, WhiteText, SectionContainer, Button, Flex, Image } from 'components/elements'
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
