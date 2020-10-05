import React from 'react'
import { InputStyle, ErrorText, Label } from './input-style'
import { VFlex } from 'components/elements'

export const Input = ({ error, className, id, ...props }) => {
    return (
        <VFlex className={className}>
            <Label htmlFor={id}>{id}</Label>
            <InputStyle id={id} {...props} />
            {error && <ErrorText fontSize="s">{error}</ErrorText>}
        </VFlex>
    )
}
