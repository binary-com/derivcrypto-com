import React from 'react'
import { InputStyle, ErrorText } from './input-style'
import { VFlex } from 'components/elements'

export const Input = ({ error, className, ...props }) => {
    return (
        <VFlex className={className}>
            <InputStyle {...props} />
            {error && <ErrorText fontSize="s">{error}</ErrorText>}
        </VFlex>
    )
}
