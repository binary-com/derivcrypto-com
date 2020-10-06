import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export const Background = ({ children, data, ...props }) => {
    return (
        <BackgroundImage Tag="div" fluid={data.childImageSharp.fluid} {...props}>
            {children}
        </BackgroundImage>
    )
}
