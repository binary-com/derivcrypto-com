import styled, { css } from 'styled-components'

const SharedButtonStyle = css`
    border-radius: 6px;
    padding: 10px 16px;
    font-size: 16px;
    transition: all 0.25s;
    font-weight: bold;
    cursor: pointer;
    ${props => {
        if (props.primary)
            return css`
                color: ${({ theme }) => theme.color.text_primary};
                background: ${({ theme }) => theme.color.primary};
            `
        if (props.secondary)
            return css`
                background: ${({ theme }) => theme.color.secondary};
                color: ${({ theme }) => theme.color.text_colored_background};
                border: none;
            `
    }}

    &:hover,
    &:focus,
    &:active {
        outline: none;
        box-shadow: 0 0 0 3px rgba(235, 21, 140, 0.08);
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
