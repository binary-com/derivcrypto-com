import React from 'react'
import { FormGroup, StyledInput, Legend, ErrorText } from './input-style'

export const Input = ({ error, className, placeholder, ...props }) => {
    return (
        <>
            <FormGroup className={className}>
                <label class="legend-top">
                    <StyledInput type="text" placeholder={placeholder} {...props} />
                    <Legend>{placeholder}</Legend>
                </label>
            </FormGroup>
            {error && <ErrorText>{error}</ErrorText>}
        </>
    )
}
