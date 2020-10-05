import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    PartitionContainer,
    TextWrapper,
    HighlightsHeader,
    StyledFooterContent,
    StyledFooterImage,
    HighlightFooterButton,
    HighlightFooter,
    StyledFlexWrapper,
    StyledFooterText,
    StyledTermsMargin,
    IconWrapper,
    StyledIconText,
    StyledCopyRightText,
} from './footer-style'
import { Background, Box } from 'components/elements'
import { localize } from 'components/localization'
import locationIcon from 'images/svg/home/location.svg'
import bubbleIcon from 'images/svg/home/bubble.svg'

const query = graphql`
    query {
        phone: file(relativePath: { eq: "home/footer-phone.png" }) {
            ...fadeIn
        }
        background: file(relativePath: { eq: "home/footer-background.png" }) {
            ...fadeIn
        }
    }
`

export const Footer = () => {
    const data = useStaticQuery(query)
    return (
        <footer>
            <Background data={data.background}>
                <PartitionContainer>
                    <StyledFooterContent>
                        <TextWrapper>
                            <HighlightFooter as="h3">
                                {localize('Start trading on Deriv Crypto today!')}
                            </HighlightFooter>
                            <HighlightsHeader>
                                <HighlightFooterButton secondary>
                                    {localize('Get trading')}
                                </HighlightFooterButton>
                            </HighlightsHeader>
                        </TextWrapper>
                        <StyledFooterImage data={data.phone} alt="iphone" />
                    </StyledFooterContent>
                </PartitionContainer>
            </Background>
            <Box background={'black'} padding="16px 0">
                <StyledFlexWrapper>
                    <StyledFlexWrapper>
                        <IconWrapper>
                            <img src={locationIcon} alt="location icon" />
                            <StyledIconText>{localize('Malaysia')}</StyledIconText>
                        </IconWrapper>
                        <IconWrapper>
                            <img src={bubbleIcon} alt="bubble icon" />
                            <StyledIconText>{localize('English (United Kingdom)')}</StyledIconText>
                        </IconWrapper>
                    </StyledFlexWrapper>
                    <StyledFlexWrapper>
                        <StyledFooterText>{localize('About us')}</StyledFooterText>
                        <StyledTermsMargin>{localize('Terms and conditions')}</StyledTermsMargin>
                        <StyledCopyRightText>
                            &copy; {localize('2020 Deriv | All rights reserved')}
                        </StyledCopyRightText>
                    </StyledFlexWrapper>
                </StyledFlexWrapper>
            </Box>
        </footer>
    )
}
