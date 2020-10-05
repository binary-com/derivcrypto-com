import React from 'react'
import { SectionContainer, Container, Text, VFlex } from 'components/elements'
import { localize } from 'components/localization'
import DTraderLogo from 'images/svg/home/dtrader-logo.svg'

export const TradingPlatformsTypes = () => {
    return (
        <SectionContainer>
            <Container>
                <Text fontSize={{ _: 'xl' }} textAlign={'center'} fontWeight={'bold'}>
                    {localize('Trading platforms and trade types')}
                </Text>
                <VFlex alignItems={'start'}>
                    <img src={DTraderLogo} alt="" />
                    <Text fontSize={{ _: 'xl' }} fontWeight={'bold'}>
                        {localize('DTrader')}
                    </Text>
                    <Text>{localize('A powerful yet easy to use trading platform.')}</Text>
                </VFlex>
            </Container>
        </SectionContainer>
    )
}
