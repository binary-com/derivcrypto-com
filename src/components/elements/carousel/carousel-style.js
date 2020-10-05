import styled from 'styled-components'
import { Flex } from 'components/elements'

export const StyledButton = styled.button`
    margin-right: 16px;
    border-radius: 42px;
    border: none;
    padding: 3px;
`

export const ReviewsButton = styled(StyledButton)`
    background-color: ${props => (props.selected ? '#999999' : '#e5e5e5')};
`

export const MarketsButton = styled(StyledButton)`
    background-color: ${props => (props.selected ? '#ffc71b' : '#e5e5e5')};
`

export const ButtonWrapper = styled(Flex)`
    margin-top: 25px;
    justify-content: center;
`
