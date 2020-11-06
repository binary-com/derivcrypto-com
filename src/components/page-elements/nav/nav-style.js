import styled, { css } from 'styled-components'
import { Container } from 'components/elements'
import { device } from 'themes/device'

export const StyledNav = styled.nav`
    display: flex;
    ${({ has_shadow, has_scrolled }) => {
        if (has_scrolled) {
            if (has_shadow) {
                return css`
                    background: ${({ theme }) => theme.colors.background_default};
                    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.04);
                `
            }
            return css`
                background: ${({ theme }) => theme.colors.background_dark};
            `
        }
        return css`
            background: 'transparent';
        `
    }}
    position: fixed;
    width: 100%;
    padding: 16px 0;
    z-index: 100;
    transition: background 0.2s;
    transform: translateZ(0);
`

export const CryptoIcon = styled.img`
    width: 170px;
    height: 18px;

    @media ${device.tablet} {
        width: 257px;
        height: 24px;
    }
`
export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
