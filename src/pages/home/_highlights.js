import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { PartitionContainer } from './_home-style'
import { localize } from 'components/localization'
import { SectionContainer, Container, Text, Image } from 'components/elements'

const query = graphql`
    query {
        anytime: file(relativePath: { eq: "home/anytime-anywhere.png" }) {
            ...fadeIn
        }
        crypto: file(relativePath: { eq: "home/crypto-wallets.png" }) {
            ...fadeIn
        }
        deposit: file(relativePath: { eq: "home/minimum-deposit.png" }) {
            ...fadeIn
        }
    }
`

export const Highlights = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <PartitionContainer no_padding_top>
                <Container>
                    <Text mb="m" as="h3" textAlign="center">
                        {localize('Anywhere, anytime')}
                    </Text>
                    <Text m="auto" textAlign="justify">
                        {localize(
                            'Get on-board hassle-free, trade, and transfer funds to and from your trading account in the fewest taps on your mobile, or clicks on your computer.',
                        )}
                    </Text>
                    <Image data={data.anytime} alt="platform devices" width="100%" height="100%" />
                </Container>
            </PartitionContainer>
            <PartitionContainer greybackground>
                <Container>
                    <Text mb="m" as="h3" textAlign="center">
                        {localize('Crypto wallets included')}
                    </Text>
                    <Text m="auto" textAlign="justify">
                        {localize(
                            'Get on-board hassle-free, trade, and transfer funds to and from your trading account in the fewest taps on your mobile, or clicks on your computer.',
                        )}
                    </Text>
                    <Image data={data.crypto} alt="platform devices" width="100%" height="100%" />
                </Container>
            </PartitionContainer>
            <PartitionContainer>
                <Container>
                    <Text mb="m" as="h3" textAlign="center">
                        {localize('No minimum deposit')}
                    </Text>
                    <Text m="auto" textAlign="justify">
                        {localize(
                            'With no minimum deposit and low stake amounts, anyone can start trading from anywhere.',
                        )}
                    </Text>
                    <Image data={data.deposit} alt="platform devices" width="100%" height="100%" />
                </Container>
            </PartitionContainer>
        </SectionContainer>
    )
}
