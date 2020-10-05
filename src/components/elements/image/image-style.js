import styled from 'styled-components'
import { layout, space } from 'styled-system'

export const ImageWrapper = styled.div`
    ${layout}
    ${space}

    & .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
`
