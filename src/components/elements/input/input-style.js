import styled from 'styled-components'
import { Text } from 'components/elements'

export const InputStyle = styled.input`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.background_default};
    border-radius: 4px;
    padding: 12px;
    font-size: ${({ theme }) => theme.fontSizes.s};

    &:hover,
    &:focus,
    &:active {
        border-color: ${({ theme }) => theme.colors.primary};
        outline: none;
    }
    &::placeholder {
        color: ${({ theme }) => theme.colors.text_less_prominent};
    }
`

export const ErrorText = styled(Text)`
    color: ${({ theme }) => theme.colors.error};
    margin-top: 8px;
`
