import React from 'react'
import styled, { css } from 'styled-components'
import { typography, space, color, layout } from 'styled-system'

const createElement = React.createElement

export const Text = styled(({ as = 'p', children, ...props }) =>
    createElement(as, props, children),
)`
    ${props => {
        if (props.as?.startsWith('h')) {
            return css`
                font-weight: bold;
            `
        }
    }};
    font-size: ${({ as, theme }) => {
        if (as === 'p') return theme.fontSizes.m
        if (as === 'h1') return theme.fontSizes['6xl']
        if (as === 'h2') return theme.fontSizes['3xl']
        if (as === 'h3') return theme.fontSizes.xl
        if (as === 'h4') return theme.fontSizes.m
        if (as === 'h5') return theme.fontSizes.s
        if (as === 'h6') return theme.fontSizes.xs

        return theme.fontSizes.m
    }};
    line-height: 1.5;
    text-align: ${({ text_align }) => text_align};
    ${space}
    ${color}
    ${layout}
    ${typography}
`

export const WhiteText = styled(Text)`
    color: ${({ theme }) => theme.colors.text_colored_background};
`
