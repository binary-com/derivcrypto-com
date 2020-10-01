import styled from 'styled-components'
import {
    WhiteText,
    SectionContainer,
    Container,
    Button,
    Flex,
    Image,
    Text,
} from 'components/elements'
import { device } from 'themes/device'

export const StyledFooterContainer = styled(SectionContainer)`
    margin-bottom: 0;
`

export const StyledFlexWrapper = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media ${device.laptop} {
        width: 100%;
        flex-wrap: nowrap;
    }
`

export const StyledFooterContent = styled(Container)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
`

export const StyledFooterBackground = styled(Image)`
    height: 400px;
`

export const StyledFooterImage = styled(Image)`
    margin: auto;
    width: 244px;

    @media ${device.desktopL} {
        width: 457px;
    }
`

export const FooterText = styled(WhiteText)`
    font-size: ${({ theme }) => theme.fontSizes['s']};
`

export const StyledCopyRightText = styled(FooterText)`
    margin: 16px 24px 0;
    opacity: 0.64;

    @media ${device.laptop} {
        margin: 0;
    }
`

export const StyledIconText = styled(FooterText)`
    margin: 0 6px;
    color: #9ebbd7;
`

export const StyledFooterText = styled(FooterText)`
    margin-top: 16px;

    @media ${device.laptop} {
        margin: 0 24px 0 0;
    }
`

export const StyledTermsMargin = styled(StyledFooterText)`
    margin-left: 24px;

    @media ${device.laptop} {
        margin-left: 0;
    }
`

export const HighlightFooter = styled(Text)`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: ${({ theme }) => theme.space.m};
    text-align: center;

    @media ${device.tablet} {
        text-align: left;
    }
    @media ${device.desktopL} {
        font-size: ${({ theme }) => theme.fontSizes['4xl']};
        width: 588px;
    }
`

export const HighlightFooterButton = styled(Button)`
    width: 216px;
    height: 40px;

    @media ${device.tablet} {
        width: auto;
    }
`

export const IconWrapper = styled(Flex)`
    margin: 0 12px;
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
    }

    @media ${device.desktopL} {
        max-width: 450px;
    }
`

export const HighlightsHeader = styled(Text)`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.space.m};
    text-align: center;

    @media ${device.tablet} {
        text-align: left;
    }
    @media ${device.desktopL} {
        font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
`
