import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
`

export const CenterFlex = styled(Flex)`
    align-items: center;
    justify-content: center;
`

export const VFlex = styled(Flex)`
    flex-direction: column;
`

export const CenterVFlex = styled(VFlex)`
    align-items: center;
    justify-content: center;
`
