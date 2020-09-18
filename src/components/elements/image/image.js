import React from 'react'
import Img from 'gatsby-image'
import { ImageWrapper } from './image-style'

export const Image = ({ data, alt, width, height }) => {
    if (data) {
        const data_fluid = data.childImageSharp.fluid
        const data_fixed = data.childImageSharp.fixed
        return (
            <ImageWrapper width={width} height={height}>
                <Img
                    alt={alt}
                    {...(data_fluid ? { fluid: data_fluid } : { fixed: data_fixed })}
                    height="100%"
                />
            </ImageWrapper>
        )
    }

    return null
}
