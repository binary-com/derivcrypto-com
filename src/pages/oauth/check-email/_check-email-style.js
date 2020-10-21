import styled from 'styled-components'
import { StyledGridContainer, StyledRightImage, StyledLeftImage } from '../_oauth-style'
import { Container, VFlex, Text } from 'components/elements'
import { device } from 'themes/device'

export const GridContainer = styled(Container)`
    display: block;
    position: relative;
    width: 328px;

    @media ${device.desktop} {
        width: 588px;
    }
`

export const FlexBox = styled(VFlex)`
    max-width: 400px;
    max-height: 74px;
    margin: 0 auto;

    @media ${device.desktop} {
        max-width: 589px;
        max-height: 96px;
    }
`
export const FlexRow = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px auto;
    padding: 0 16px;
    border: 1px solid rgba(186, 186, 186, 0.24);
    border-radius: 4px;

    @media ${device.desktop} {
        padding: 0 24px;
    }
`
export const StyledIcon = styled.img`
    width: 32px;
    height: 32px;

    @media ${device.desktop} {
        width: 64px;
        height: 64px;
    }
`

export const StyledText = styled(Text)`
    padding: 16px;

    @media ${device.desktop} {
        padding: 24px 40px 24px 24px;
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    text-align: center;
    font-size: 14px;
    position: relative;
    top: 470px;

    @media ${device.tablet} {
        top: 450px;
    }
    @media ${device.desktop} {
        padding-bottom: 94px;
    }
`

export const StyledGrid = styled(StyledGridContainer)`
    @media ${device.desktop} {
        max-width: 1198px;
    }
`

export const StyledImageLeft = styled(StyledLeftImage)`
    float: none;
    position: relative;
    left: 1rem;
    bottom: -450px;

    @media ${device.mobile} {
        left: 2.5rem;
    }
    @media ${device.desktop} {
        float: left;
        left: 0;
        top: 100px;
    }
`

export const StyledImageRight = styled(StyledRightImage)`
    top: 150px;
`
