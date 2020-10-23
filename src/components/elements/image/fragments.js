import { graphql } from 'gatsby'

export const backGroundBlur = graphql`
    fragment backGroundBlur on File {
        childImageSharp {
            fluid(maxWidth: 800, srcSetBreakpoints: [600, 1280]) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
            }
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            fluid(maxWidth: 800, srcSetBreakpoints: [600, 1280]) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
            }
        }
    }
`

export const desktopFadeIn = graphql`
    fragment desktopFadeIn on File {
        childImageSharp {
            fluid(maxWidth: 800, srcSetBreakpoints: [1280]) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
            }
        }
    }
`

export const mobileFadeIn = graphql`
    fragment mobileFadeIn on File {
        childImageSharp {
            fluid(maxWidth: 800, srcSetBreakpoints: [300]) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
            }
        }
    }
`
