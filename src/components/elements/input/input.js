import React from 'react'
import { InputStyle, ErrorText, Label } from './input-style'
import { VFlex } from 'components/elements'

export const Input = ({ error, className, name, ...props }) => {
    return (
        <VFlex className={className}>
            <Label htmlFor="email">{name}</Label>
            <InputStyle name={name} {...props} />
            {error && <ErrorText fontSize="s">{error}</ErrorText>}
        </VFlex>
    )
}
