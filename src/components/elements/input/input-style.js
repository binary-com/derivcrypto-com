import styled from 'styled-components'
import { Text } from 'components/elements'

export const FormGroup = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.background_default};
    border-radius: 4px;

    &:focus-within {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`

export const ErrorText = styled(Text)`
    color: ${({ theme }) => theme.colors.error};
    margin-top: 8px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
`

export const StyledInput = styled.input`
    appearance: none;
    border: none;
    outline: none;
    padding: 12px;
    display: block;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.m};

    &:not(:placeholder-shown) ~ span {
        opacity: 1;
        font-size: ${({ theme }) => theme.fontSizes.xs};
        background-color: ${({ background, theme }) =>
            background ?? theme.colors.background_default};
        color: ${({ theme }) => theme.colors.text_less_prominent};
        padding: 2px 4px;
        margin: -58px 0 0 16px;
    }
`

export const Legend = styled.span`
    position: absolute;
    margin-top: -60px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
`
