import styled from 'styled-components'
import { Flex } from 'components/elements'
import { device } from 'themes'

export const StyledDots = styled.button`
    margin-right: 16px;
    border-radius: 42px;
    border: none;
    padding: 3px;
    outline: 0;
    cursor: pointer;
`

export const ReviewsButton = styled(StyledDots)`
    background-color: ${props => (props.selected ? '#999999' : '#e5e5e5')};
`

export const MarketsButton = styled(StyledDots)`
    background-color: ${props => (props.selected ? '#ffc71b' : '#e5e5e5')};
`

export const DotsWrapper = styled(Flex)`
    margin-top: 25px;
    justify-content: center;

    @media ${device.tablet} {
        display: none;
    }
`

export const ViewPort = styled.div`
    overflow: hidden;
`

export const ViewPortWrapper = styled.div`
    position: relative;
`

export const Container = styled.div`
    display: flex;
`

export const Slide = styled.div`
    position: relative;
    min-width: 100%;
`

export const StyledPrevButton = styled.button`
    display: none;
    position: absolute;
    left: 80px;
    top: 17%;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;

    @media ${device.tablet} {
        display: inherit;
    }

    @media ${device.desktopL} {
        left: -12px;
        top: 30%;
    }
`

export const StyledNextButton = styled(StyledPrevButton)`
    right: 80px;
    left: unset;

    @media ${device.desktopL} {
        right: -12px;
    }
`
