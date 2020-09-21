import React from 'react'
import styled, { css } from 'styled-components'
import { typography, space, color, layout } from 'styled-system'

const createElement = React.createElement

export const Text = styled(({ as = 'p', size = 'm', children, ...props }) =>
    createElement(as, props, children),
)`
    ${props => {
        if (props.as?.startsWith('h')) {
            return css`
                font-weight: bold;
            `
        }
    }};
    font-size: ${props => {
        if (props.as === 'p') return '16px'
        if (props.as === 'h1') return '64px'
        if (props.as === 'h2') return '32px'
        if (props.as === 'h3') return '24px'
        if (props.as === 'h4') return '16px'
        if (props.as === 'h5') return '14px'

        return '16px'
    }};
    line-height: 1.5;
    ${space}
    ${color}
    ${layout}
    ${typography}
`

export const WhiteText = styled(Text)`
    color: ${({ theme }) => theme.colors.text_colored_background};
`
