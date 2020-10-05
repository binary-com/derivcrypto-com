import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    Flex,
    VFlex,
    Text,
    Carousel,
    SectionContainer,
    Container,
    Image,
} from 'components/elements'
import { Localize, localize } from 'components/localization'

const query = graphql`
    query {
        jose: file(relativePath: { eq: "home/reviews/jose.png" }) {
            ...fadeIn
        }
    }
`

const Card = ({ name, quote, location, image }) => {
    return (
        <VFlex width={{ _: 280, lg: 500, xxl: 996 }} m="auto">
            <Text
                fontWeight="bold"
                textAlign="center"
                fontSize={{ _: 'm', lg: 'lg', xxl: '2xl' }}
                mb={'5xl'}
            >
                {quote}
            </Text>
            <Flex m="auto">
                <Image data={image} alt="jose" width="48px" height="48px" />
                <VFlex ml={'xs'}>
                    <Text fontSize={'s'} fontWeight="bold">
                        {name}
                    </Text>
                    <Text fontSize={'s'}>{location}</Text>
                </VFlex>
            </Flex>
        </VFlex>
    )
}

export const Reviews = () => {
    const data = useStaticQuery(query)

    const fernando = {
        name: 'Fernando Aguilar',
        location: <Localize translate_text="Bolivia" />,
        quote: (
            <Localize translate_text="“I’ve been trading on Deriv for a while now, and I think it’s very appealing to traders who are just starting out. It’s easy to understand and all my trading information is very accessible. There are a variety of assets, trade contracts, chart types, and indicators for technical analysis.”" />
        ),
        image: data.jose,
    }

    const fernandi = {
        name: 'Fernando Aguilar 2',
        location: <Localize translate_text="Bolivia" />,
        quote: (
            <Localize translate_text="The Deriv platform looks good and is easy to use. The withdrawal process is pretty simple and can be done in just a few clicks." />
        ),
        image: data.jose,
    }

    const clients = [fernando, fernandi]

    return (
        <SectionContainer>
            <Container>
                <Text
                    m="auto"
                    width={{ _: 216, md: 'unset' }}
                    fontSize={{ _: 's', lg: 'lg', xxl: 'xl' }}
                    mb={'xl'}
                    textAlign={'center'}
                >
                    {localize('More than a million traders from around the globe have trusted us.')}
                </Text>
                <Carousel options={{ loop: true }}>
                    {clients.map(client => (
                        <Carousel.Item>
                            <Card
                                key={client.name}
                                quote={client.quote}
                                name={client.name}
                                location={client.location}
                                image={client.image}
                            ></Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </SectionContainer>
    )
}
