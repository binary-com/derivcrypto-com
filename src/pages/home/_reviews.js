import React from 'react'
import { VFlex, Text, Carousel } from 'components/elements'
import { Localize } from 'components/localization'

const ClientCard = ({ name, quote, location }) => {
    return (
        <VFlex>
            <Text>{quote}</Text>
            <Text>{name}</Text>
            <Text>{location}</Text>
        </VFlex>
    )
}

const fernando = {
    name: 'Fernando Aguilar',
    location: <Localize translate_text="Bolivia" />,
    quote: (
        <Localize translate_text="The Deriv platform looks good and is easy to use. The withdrawal process is pretty simple and can be done in just a few clicks." />
    ),
}

const fernandi = {
    name: 'Fernando Aguilar 2',
    location: <Localize translate_text="Bolivia" />,
    quote: (
        <Localize translate_text="The Deriv platform looks good and is easy to use. The withdrawal process is pretty simple and can be done in just a few clicks." />
    ),
}

const clients = [fernando, fernandi]

export const Reviews = () => {
    return (
        <Carousel>
            {clients.map(client => (
                <Carousel.Item>
                    <ClientCard
                        key={client.name}
                        quote={client.quote}
                        name={client.name}
                        location={client.location}
                    ></ClientCard>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
