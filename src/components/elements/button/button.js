import styled, { css } from 'styled-components'
import { space, layout } from 'styled-system'

const SharedButtonStyle = css`
    ${space}
    ${layout}
    border-radius: 6px;
    padding: 10px 16px;
    font-size: 16px;
    transition: all 0.25s;
    font-weight: bold;
    cursor: pointer;
    ${props => {
        if (props.primary)
            return css`
                color: ${({ theme }) => theme.colors.text_primary};
                background: ${({ theme }) => theme.colors.primary};
                border: none;
            `
        if (props.secondary)
            return css`
                background: ${({ theme }) => theme.colors.secondary};
                color: ${({ theme }) => theme.colors.text_colored_background};
                border: none;
            `
    }}

    &:focus,
    &:active {
        outline: none;
        box-shadow: 0 0 3pt 2pt ${({ theme }) => theme.colors.secondary};
    }
`

export const Button = styled.button`
    ${SharedButtonStyle}
    ${props => {
        if (props.disabled)
            return css`
                pointer-events: none;
                opacity: 0.32;
            `
    }}
`
