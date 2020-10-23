import React from 'react'
import Img from 'gatsby-image'
import { GatsbyImage } from '@wardpeet/gatsby-image-nextgen'
import { ImageWrapper } from './image-style'

export const Image = ({ data, alt, width, height, className }) => {
    if (data) {
        const data_fluid = data.childImageSharp.fluid
        const data_fixed = data.childImageSharp.fixed

        console.log(data_fluid) // eslint-disable-line
        console.log(data_fixed) // eslint-disable-line

        return (
            <ImageWrapper className={className} width={width} height={height}>
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

export const NextGenImage = ({ data, alt, width, height, className }) => {
    if (data) {
        const data_fluid = data.childImageSharp.fluid
        const data_fixed = data.childImageSharp.fixed
        console.log(data_fluid) // eslint-disable-line
        console.log(data_fixed.src) // eslint-disable-line

        return (
            <ImageWrapper className={className} width={width} height={height}>
                <GatsbyImage
                    alt={alt}
                    images={{
                        fallback: {
                            src: data_fluid ? data_fluid.src : data_fixed.src,
                            srcSet: data_fluid ? data_fluid.srcSet : data_fixed.srcSet,
                        },
                        sources: [
                            {
                                src: data_fluid ? data_fluid.srcWebp : data_fixed.srcWebp,
                                srcSet: data_fluid ? data_fluid.srcSetWebp : data_fixed.srcSetWebp,
                                type: 'image/webp',
                            },
                        ],
                    }}
                    height="100%"
                    layout={data_fluid ? 'fluid' : 'fixed'}
                />
            </ImageWrapper>
        )
    }

    return null
}
