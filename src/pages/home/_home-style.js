import styled from 'styled-components'
import {
    Input,
    WhiteText,
    SectionContainer,
    Container,
    Button,
    Flex,
    Image,
    Text,
    Background,
} from 'components/elements'
import { device } from 'themes/device'

export const StyledButton = styled(Button)`
    display: flex;
    width: 100%;
    margin: 8px auto 13px;
    border: unset;
    justify-content: center;
`

export const StyledInput = styled(Input)`
    margin-top: 40px;
    @media ${device.desktop} {
        margin-top: 0;
    }
`

export const HeroContainer = styled(Container)`
    padding-top: 80px;
    padding-bottom: 43px;

    @media ${device.desktop} {
        padding-top: 180px;
        padding-bottom: 120px;
    }
`

export const StyledText = styled(WhiteText)`
    margin: 16px auto 40px;
`

export const LogoWrapper = styled(Flex)`
    cursor: pointer;
    margin-left: 8px;
`

export const StyledImage = styled.img`
    @media (min-width: 1px) {
        width: 288px;
    }
    @media ${device.mobileS} {
        width: 329px;
    }
    @media ${device.mobile} {
        width: 510px;
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

export const TradeBenefitsImage = styled(Image)`
    margin: auto;
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

export const HighlightsContent = styled(Text)`
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin: auto;
    text-align: justify;
    @media ${device.desktopL} {
        font-size: ${({ theme }) => theme.fontSizes['xl']};
    }
`

export const TradeBenefitsImgMobile = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 300px);
    grid-gap: 13px;
    justify-content: center;
    margin-top: 25px;

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 300px);
    }
    @media ${device.laptop} {
        grid-template-columns: repeat(3, 300px);
    }
    @media ${device.desktopL} {
        display: none;
    }
`

export const TradeBenefitsImgDesktop = styled.div`
    display: none;
    grid-template-columns: repeat(5, 240px);
    grid-gap: 32px;
    justify-content: center;
    margin-top: 25px;

    @media ${device.desktopL} {
        display: grid;
    }
`

export const CardHeader = styled(WhiteText)`
    padding: 10px 0 0 18px;
    margin-bottom: -5px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
`

export const CardContent = styled(WhiteText)`
    margin-left: 19px;
    font-weight: 100;
    font-size: ${({ theme }) => theme.fontSizes['m']};
`

export const CardWrapper = styled.div`
    box-sizing: border-box;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);

    @media ${device.desktopL} {
        ${CardHeader} {
            text-align: center;
            padding-left: unset;
        }
        ${CardContent} {
            margin-left: unset;
            text-align: center;
        }
    }
`

export const StyledBackground = styled(Background)`
    height: 136px;
    width: 300px;

    @media ${device.desktopL} {
        height: 280px;
        width: 240px;
    }
`

export const MarketsPartitionContainer = styled(PartitionContainer)`
    padding: 40px 0;
    background: linear-gradient(207deg, #0e0e0e 139%, #3a3a3a -59%);

    @media ${device.desktop} {
        padding: 160px 0;
    }
`

export const CardContainer = styled.div`
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 20px 20px 30px 0 rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    width: 282px;
    height: 180px;
    margin-top: 24px;
    margin-right: 16px;
`

export const StyledLogo = styled(Flex)`
    margin-top: 15px;
    margin-left: 15px;
`

export const TradeMarkets = styled.div`
    justify-content: center;

    ${CardHeader} {
        font-size: ${({ theme }) => theme.fontSizes['xl']};
        color: #333333;
        margin-left: -9px;
        margin-top: 3px;
    }
    ${CardContent} {
        margin-top: 8px;
        color: #333333;
    }
`

export const TradeMarketsMobile = styled(TradeMarkets)`
    display: flex;
    grid-gap: 16px;
    align-items: center;
    margin-top: 25px;
    overflow: hidden;

    @media ${device.desktop} {
        display: none;
    }
`

export const TradeMarketsDesktop = styled(TradeMarkets)`
    display: none;
    grid-template-columns: repeat(4, 282px);
    grid-gap: 24px;
    margin-top: 40px;

    @media ${device.desktop} {
        display: grid;
    }
`

export const CenterText = styled(Text)`
    text-align: center;
`
