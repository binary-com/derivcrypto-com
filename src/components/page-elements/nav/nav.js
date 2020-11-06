import React from 'react'
import { Link } from 'gatsby'
import { StyledNav, CryptoIcon, StyledContainer } from './nav-style'
import Login from 'common/login'
import { Button } from 'components/elements'
import { localize } from 'components/localization'
import CryptoLogo from 'images/svg/nav/crypto-logo.svg'
import DarkCryptoLogo from 'images/svg/nav/dark-crypto-logo.svg'

export const Nav = ({ is_dark_logo, has_shadow }) => {
    const [has_scrolled, setHasScrolled] = React.useState(false)
    const navRef = React.useRef()
    const minimum_scroll_height = 50
    const handleScroll = () => {
        const is_show = window.scrollY > minimum_scroll_height
        if (navRef.current !== is_show) {
            setHasScrolled(is_show)
        }
    }

    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleLogin = () => {
        Login.redirectToLogin()
    }

    return (
        <StyledNav has_scrolled={has_scrolled} has_shadow={has_shadow}>
            <StyledContainer>
                <Link to="/">
                    <CryptoIcon
                        src={
                            (is_dark_logo && !has_scrolled) || (has_scrolled && has_shadow)
                                ? DarkCryptoLogo
                                : CryptoLogo
                        }
                        alt="Deriv Crypto Logo"
                    />
                </Link>
                <Button onClick={handleLogin} primary aria-label="login button">
                    {localize('Login')}
                </Button>
            </StyledContainer>
        </StyledNav>
    )
}
