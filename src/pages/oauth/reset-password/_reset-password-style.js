import styled, { css } from 'styled-components'
import { StyledGridContainer } from '../_oauth-style'
import { Button, Container, Input, Text } from 'components/elements'
import { device } from 'themes'

export const GridContainer = styled(StyledGridContainer)`
    grid-template-areas: 'success-text' 'left-image' 'main' 'right-image';

    @media ${device.desktop} {
        grid-template-areas: 'success-text success-text success-text' 'left-image main right-image';
    }
`

export const StyledContainer = styled(Container)`
    position: relative;
    top: 24px;
    max-width: 384px;
    grid-area: main;
`

export const InputGroup = styled.div`
    margin: 25px 16px 34px 16px;
`

export const InputWrapper = styled(Input)`
    border: 1px solid #d6dadb;
    border-radius: 4px;
`

export const ButtonContainer = styled.div`
    text-align: center;
    margin: 25px 16px 34px 16px;
`

export const ButtonWrapper = styled(Button)`
    width: 100%;
`

export const ReturnWrapper = styled(Text)`
    padding-left: 18px;
`

export const TextWrapper = styled(Text)`
    display: inline-block;
`

export const SuccessTextWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background_section};
    width: 322px;
    grid-area: success-text;
    margin: 0 auto;
    z-index: 1;
    left: 15px;
    ${props => {
        if (props.status) {
            return css`
                display: block;
                position: absolute;
            `
        }
        return css`
            display: none;
        `
    }}

    @media ${device.mobile} {
        width: 370px;
    }
    @media ${device.desktop} {
        width: 550px;
        right: 85px;
        position: initial;
    }
`

export const SuccessText = styled(Text)`
    padding: 16px;
    width: 328px;

    @media ${device.desktop} {
        padding: 16px 40px;
        min-width: 525px;
    }
`

export const RedirectWrapper = styled(TextWrapper)`
    color: ${({ theme }) => theme.colors.link_default};
    font-size: 16px;
    cursor: pointer;
`
