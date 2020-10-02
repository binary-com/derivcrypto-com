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
        <VFlex width={280} m="auto">
            <Text fontWeight="bold" textAlign="center" fontSize={'m'} mb={'5xl'}>
                "{quote}"
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
            <Localize translate_text="The Deriv platform looks good and is easy to use. The withdrawal process is pretty simple and can be done in just a few clicks." />
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
                <Text m="auto" width={216} fontSize={'s'} mb={'xl'}>
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
