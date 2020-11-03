import styled from 'styled-components'
import { StyledGridContainer, StyledRightImage, StyledLeftImage } from '../_oauth-style'
import { Container, VFlex, Text } from 'components/elements'
import { device } from 'themes/device'

export const GridContainer = styled(Container)`
    display: grid;
    grid-template-areas: 'title' 'content' 'redirect-button';
    position: relative;
    width: 328px;
    grid-area: main;

    @media ${device.desktop} {
        width: 588px;
    }
`

export const FlexBox = styled(VFlex)`
    max-width: 400px;
    margin: 0 auto;
    grid-area: content;

    @media ${device.desktop} {
        max-width: 589px;
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

export const StyledTitleText = styled(Text)`
    grid-area: title;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    text-align: center;
    font-size: 14px;
    position: relative;
    grid-area: redirect-button;
    margin-top: 24px;

    @media ${device.desktop} {
        padding-bottom: 94px;
    }
`

export const StyledGrid = styled(StyledGridContainer)`
    grid-template-areas: 'main' 'left-image';
    @media ${device.desktop} {
        grid-template-areas: 'left-image main right-image';
        max-width: 1198px;
    }
`

export const StyledImageLeft = styled(StyledLeftImage)`
    float: none;
    position: relative;
    grid-area: left-image;
    margin: 0 auto;

    @media ${device.desktop} {
        float: left;
        left: 0;
        top: 100px;
    }
`

export const StyledImageRight = styled(StyledRightImage)`
    grid-area: right-image;
    top: 150px;
`
