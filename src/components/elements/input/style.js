import styled, { css } from 'styled-components'
import { device } from 'themes'
import { Text } from 'components/elements/typography'

export const RelativeWrapper = styled.div`
    position: relative;
`
export const InputWrapper = styled.div`
    width: 100%;
    border: ${props => props.border || '1px solid var(--color-grey-2)'};
    border-radius: 4px;

    @media ${device.tabletL} {
        height: 5rem;
    }

    &:hover {
        border-color: var(--color-grey-5);

        & > label {
            color: var(--color-${props => props.labelHoverColor || 'black-3'});
        }
    }
    &:focus-within {
        border-color: ${props => props.focusBorder || 'var(--color-green)'};
    }

    ${props =>
        !props.error &&
        css`
            border-color: var(--color-grey-7);
        `}
    ${props =>
        props.error &&
        css`
            border-color: var(--color-red-1) !important;

            & > label {
                color: var(--color-red-1) !important;
            }
        `}
`

export const StyledInput = styled.input`
    /* prettier-ignore */
    background: var(--color-${props => props.inputBackground || 'none'});
    color: var(--color-${props => props.inputColor || 'black'});
    font-size: 16px;
    padding: 1rem 1rem 1rem 0.8rem;
    width: 100%;
    display: block;
    border: none;
    border-radius: 4px;

    @media ${device.tabletL} {
        height: 100%;

        & ~ label {
            font-size: 1.75rem;
            top: 1.5rem;
        }
    }

    @media ${device.mobileL} {
        & ~ label {
            font-size: 1.5rem;
            top: 1.75rem;
        }
    }

    &::placeholder {
        opacity: 0;
        transition: opacity 0.25s;
        padding-left: 0.3rem;
    }
    &:focus {
        outline: none;

        & ~ label {
            transform: translate(-0.6rem, -2rem) scale(0.7);

            /* prettier-ignore */
            color: var(--color-${props => props.labelFocusColor || 'green'});

            /* prettier-ignore */
            background-color: var(--color-${props => props.background || 'grey-1'});

            @media ${device.mobileL} {
                transform: translate(-0.6rem, -20px) scale(0.7);
            }
        }
        &::placeholder {
            opacity: 1;
            color: var(--color-grey-5);
            font-size: 14px;
        }
    }
    &:valid {
        & ~ label {
            transform: translate(-0.6rem, -2rem) scale(0.7);
            color: var(--color-black-3);

            /* prettier-ignore */
            background-color: var(--color-${props => props.background || 'grey-1'});
        }
    }
`

export const ErrorMessages = styled(Text)`
    padding-left: 0.8rem;
    font-size: 1.2rem;
    min-height: 16px;
`

export const StyledLabel = styled.label`
    /* prettier-ignore */
    color: var(--color-${props => props.labelColor || 'grey'});
    font-size: var(--text-size-xs);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: 1.4rem;
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.4rem;
    background: none;
`
