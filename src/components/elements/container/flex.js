import styled from 'styled-components'
import { space, layout, flexbox } from 'styled-system'

export const Flex = styled.div`
    display: flex;
    ${space}
    ${layout}
    ${flexbox}
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
