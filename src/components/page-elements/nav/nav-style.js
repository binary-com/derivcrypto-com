import styled from 'styled-components'
import { Button, Container } from 'components/elements'

export const StyledNav = styled.nav`
    padding: 13px 0;
    display: flex;
    background-color: ${({ theme }) => theme.colors.background_section};
`
export const StyledButton = styled(Button)`
    display: flex;
    border: unset;
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
