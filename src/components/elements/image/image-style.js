import styled from 'styled-components'

export const ImageWrapper = styled.div`
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => props.height};

    & .gatsby-image-wrapper {
        width: ${props => (props.width ? props.width : '100%')};
        height: ${props => props.height};
    }
`
