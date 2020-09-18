import styled from 'styled-components'
import { Button } from 'components/elements'

export const StyledNav = styled.nav`
    padding: 13px 16px;
    display: flex;
    background-color: ${({ theme }) => theme.color.background_section};
`
export const StyledButton = styled(Button)`
    display: flex;
    border: unset;
    justify-content: center;
`
export const CryptoIcon = styled.img`
    width: 200px;
    height: 18px;
`
