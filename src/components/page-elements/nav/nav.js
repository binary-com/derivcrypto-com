import React from 'react'
import { StyledNav, StyledButton, CryptoIcon, StyledContainer } from './nav-style'
import { localize } from 'components/localization'
import CryptoLogo from 'images/svg/nav/crypto-logo.svg'

export const Nav = () => {
    return (
        <StyledNav>
            <StyledContainer>
                <CryptoIcon src={CryptoLogo} alt="Deriv Crypto Logo" />
                <StyledButton primary>{localize('Login')}</StyledButton>
            </StyledContainer>
        </StyledNav>
    )
}
