import React from 'react'
import { StyledNav, CryptoIcon, StyledContainer } from './nav-style'
import { Button } from 'components/elements'
import { localize } from 'components/localization'
import CryptoLogo from 'images/svg/nav/crypto-logo.svg'

export const Nav = () => {
    return (
        <StyledNav>
            <StyledContainer>
                <CryptoIcon src={CryptoLogo} alt="Deriv Crypto Logo" />
                <Button primary>{localize('Login')}</Button>
            </StyledContainer>
        </StyledNav>
    )
}
