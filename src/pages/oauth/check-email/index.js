import React from 'react'
import {
    StyledGrid,
    StyledImageLeft,
    StyledImageRight,
    StyledTitleText,
    ButtonWrapper,
} from './_check-email-style'
import { IconGrid } from './_icon-grid'
import { GridContainer } from './_check-email-style'
import { Layout, SEO } from 'components/page-elements'
import { LinkButton } from 'components/elements'
import { SectionContainer } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import CoinIcon from 'images/svg/oauth/coins-icons.svg'
import { Media } from 'themes/media'

const CheckEmail = () => {
    return (
        <Layout has_shadow={true}>
            <SEO
                title={localize('Check your email')}
                description={localize(
                    "Didn't receive an email from us? Here's what could've happened.",
                )}
                no_index
            />
            <StyledGrid>
                <StyledImageLeft>
                    <img src={CoinIcon} alt="coins icon" />
                </StyledImageLeft>
                <SectionContainer>
                    <GridContainer>
                        <StyledTitleText
                            color="text_primary"
                            as="h2"
                            textAlign="center"
                            fontSize={{ _: 'lg', xxl: 'xl' }}
                        >
                            {localize(
                                "If you don't see an email from us within a few minutes, a few things could have happened:",
                            )}
                        </StyledTitleText>
                        <IconGrid />
                        <ButtonWrapper>
                            <LinkButton primary to="/">
                                {localize('Re-enter your email and try again')}
                            </LinkButton>
                        </ButtonWrapper>
                    </GridContainer>
                </SectionContainer>
                <Media greaterThanOrEqual="desktop">
                    <StyledImageRight>
                        <img src={CoinIcon} alt="coins icon" />
                    </StyledImageRight>
                </Media>
            </StyledGrid>
        </Layout>
    )
}

export default WithIntl()(CheckEmail)
