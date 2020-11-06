import styled from 'styled-components'
import { Container } from 'components/elements'
import { device } from 'themes/device'

export const StyledGridContainer = styled(Container)`
    display: grid;
    max-width: 400px;
    position: relative;
    top: 92px;

    @media ${device.desktop} {
        grid-template-columns: 20% 60% 20%;
        max-width: 990px;
        top: 180px;
    }
`

export const StyledLeftImage = styled.div`
    max-height: 81px;
    float: left;
    grid-area: left-image;
    opacity: ${props => (props.display ? 1 : 0)};
    transition: opacity 0.5s ease-in-out 0.1s;
    transform: translateX(0);
`

export const StyledRightImage = styled.div`
    height: 100%;
    margin-top: 50px;
    grid-area: right-image;

    & img {
        max-height: 81px;
        transform: rotate(180deg);
        float: right;
    }

    @media ${device.desktop} {
        position: relative;
        top: 30px;
    }
`
