import styled from 'styled-components'
import { Text } from 'components/elements/typography'

export const InputStyle = styled.input`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.background_default};
    border-radius: 4px;
    padding: 12px;
    font-size: ${({ theme }) => theme.font.s};

    &:hover,
    &:focus,
    &:active {
        border-color: ${({ theme }) => theme.color.primary};
        outline: none;
    }
    &::placeholder {
        color: ${({ theme }) => theme.color.text_less_prominent};
    }
`

export const ErrorText = styled(Text)`
    color: ${({ theme }) => theme.color.error};
    margin-top: 8px;
`
