import styled from 'styled-components'
import { space, layout, color } from 'styled-system'
import { device } from 'themes'

export const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 16px;
    padding-left: 16px;

    @media ${device.mobile} {
        max-width: 540px;
    }
    @media ${device.tablet} {
        max-width: 720px;
        padding-right: 0;
        padding-left: 0;
    }
    @media ${device.laptop} {
        max-width: 960px;
    }
    @media ${device.desktop} {
        max-width: 1140px;
    }

    ${space}
    ${layout}
    ${color}
`

export const SectionContainer = styled.div`
    padding: 40px 0;
    ${color}
`
