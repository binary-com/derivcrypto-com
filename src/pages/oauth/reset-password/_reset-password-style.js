import styled from 'styled-components'
import { Button, Container, Input, Text } from 'components/elements'

export const StyledContainer = styled(Container)`
    position: relative;
    top: 24px;
    max-width: 384px;
`

export const InputGroup = styled.div`
    margin: 25px 16px 34px 16px;
`

export const InputWrapper = styled(Input)`
    border: 1px solid #d6dadb;
    border-radius: 4px;
`

export const ButtonContainer = styled.div`
    text-align: center;
    margin: 25px 16px 34px 16px;
`

export const ButtonWrapper = styled(Button)`
    width: 100%;
`

export const ReturnWrapper = styled(Text)`
    padding-left: 18px;
`

export const TextWrapper = styled(Text)`
    display: inline-block;
`

export const RedirectWrapper = styled(TextWrapper)`
    color: ${({ theme }) => theme.colors.link_default};
    font-size: 16px;
    cursor: pointer;
`
