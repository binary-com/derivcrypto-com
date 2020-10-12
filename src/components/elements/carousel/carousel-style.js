import styled from 'styled-components'
import { Flex, Text, VFlex } from 'components/elements'
import { device } from 'themes'

export const StyledDots = styled.button`
    margin-right: 16px;
    border-radius: 42px;
    background-color: ${props => (props.selected ? '#999999' : '#e5e5e5')};
    border: none;
    padding: 3px;
    outline: 0;
    cursor: pointer;
`

export const DotsWrapper = styled(Flex)`
    margin-top: 25px;
    justify-content: center;

    @media ${device.tablet} {
        display: none;
    }
`

export const SecondaryDotsWrapper = styled(DotsWrapper)`
    display: none;

    @media ${device.tablet} {
        display: inherit;
        margin-top: -18px;
    }

    @media ${device.laptop} {
        margin-left: 80px;
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

export const CardContent = styled(Text)`
    display: none;
    font-size: 14px;
    text-align: center;

    @media ${device.tablet} {
        display: inherit;
        padding: 8px 11px;
    }

    @media ${device.laptop} {
        padding: 8px 32px;
    }
`

export const BottomCard = styled(VFlex)`
    width: 100px;
    height: 74px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background_default};
    border-left: 1px solid rgba(229, 229, 229, 0.8);
    border-bottom: ${props => (props.selected ? 'unset' : '1px solid rgba(229, 229, 229, 0.8)')};
    border-top: ${props => (props.selected ? '2px solid' : '1px solid')};
    border-top-color: ${props =>
        props.selected ? ({ theme }) => theme.colors.primary : 'rgba(229, 229, 229, 0.8)'};
    box-shadow: ${props => (props.selected ? '0 32px 26px -24px rgba(0,0,0,0.1)' : 'unset')};
    transition: border-top-color 0.5s, background-color 0.5s, border-bottom 0.5s, box-shadow 0.5s;

    :nth-last-child(1) {
        border-right: 1px solid rgba(229, 229, 229, 0.8);
        box-shadow: ${props => (props.selected ? '18px 18px 28px -8px rgba(0,0,0,0.1)' : 'unset')};
    }
    :nth-child(1) {
        box-shadow: ${props => (props.selected ? '-18px 18px 28px -8px rgba(0,0,0,0.1)' : 'unset')};
    }

    @media ${device.tablet} {
        width: 199px;
        height: 165px;
    }

    @media ${device.laptop} {
        width: 208px;
        height: 243px;
    }
`

export const LearnMore = styled.a`
    color: #3c77ae;
    font-size: 8px;
    text-decoration: none;
    margin-top: 8px;
    display: ${props => (props.selected ? 'inherit' : 'none')};
    @media ${device.tablet} {
        font-size: 12px;
    }
`
