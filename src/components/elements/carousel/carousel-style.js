import styled from 'styled-components'
import { Flex } from 'components/elements'

export const StyledButton = styled.button`
    margin-right: 16px;
    border-radius: 42px;
    background-color: ${props => (props.selected ? '#999999' : '#e5e5e5')};
    border: none;
    padding: 3px;
`

export const ButtonWrapper = styled(Flex)`
    margin-top: 25px;
    justify-content: center;
`
