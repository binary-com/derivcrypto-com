import styled from 'styled-components'
import { Container } from 'components/elements'

export const StyledNav = styled.nav`
    display: flex;
    background: ${({ has_scrolled, theme }) =>
        has_scrolled ? theme.colors.background_dark : 'transparent'};
    position: fixed;
    width: 100%;
    padding: 16px 0;
    z-index: 100;
    transition: background 0.25s;
`

export const CryptoIcon = styled.img`
    width: 170px;
    height: 18px;
`
export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
