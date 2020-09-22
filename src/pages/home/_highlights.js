import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { localize } from 'components/localization'
import { SectionContainer, Text, Image } from 'components/elements'

const query = graphql`
    query {
        anytime: file(relativePath: { eq: "home/anytime-anywhere.png" }) {
            ...fadeIn
        }
    }
`

export const Highlights = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <Text as="h1" size="">
                {localize('Anywhere, anytime')}
            </Text>
            <Text>
                {localize(
                    'Get on-board hassle-free, trade, and transfer funds to and from your trading account in the fewest taps on your mobile, or clicks on your computer.',
                )}
            </Text>
            <Image data={data.anytime} alt="platform devices" width="100%" height="100%" />
        </SectionContainer>
    )
}
