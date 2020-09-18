import React from 'react'
import { RelativeWrapper, InputWrapper, StyledInput, StyledLabel, ErrorMessages } from './style'
//import PropTypes from 'prop-types'

export const Input = ({
    label,
    border,
    focusBorder,
    labelHoverColor,
    labelColor,
    error,
    background,
    ...props
}) => (
    <RelativeWrapper>
        <InputWrapper
            border={border}
            focusBorder={focusBorder}
            labelHoverColor={labelHoverColor}
            error={error}
        >
            <StyledInput background={background} {...props} />
            <StyledLabel labelColor={labelColor}>{label}</StyledLabel>
        </InputWrapper>
        <ErrorMessages>{error}</ErrorMessages>
    </RelativeWrapper>
)

// Input.propTypes = {
//     background: PropTypes.string,
//     border: PropTypes.string,
//     children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
//     error: PropTypes.string,
//     focusBorder: PropTypes.string,
//     handleError: PropTypes.func,
//     id: PropTypes.string,
//     label: PropTypes.string,
//     labelColor: PropTypes.string,
//     labelHoverColor: PropTypes.string,
//     tabletBackground: PropTypes.string,
//     width: PropTypes.string,
// }
