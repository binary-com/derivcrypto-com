import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledBackground = styled(BackgroundImage)`
    background-color: black;
`

export const Background = ({ children, data, style, ...props }) => {
    return (
        <StyledBackground Tag="div" style={style} fluid={data.childImageSharp.fluid} {...props}>
            {children}
        </StyledBackground>
    )
}
