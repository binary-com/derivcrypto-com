import React from 'react'
import PropTypes from 'prop-types'
import { str as crc32 } from 'crc-32'
import { Trans } from 'react-i18next'
import i18n from './config'

export const localize = (string, values) => {
    if (!string) return ''

    return i18n.t(crc32(string), { defaultValue: string, ...values })
}

export const Localize = ({ translate_text, values, components }) => (
    <Trans defaults={translate_text} values={values} components={components} />
)

Localize.propTypes = {
    components: PropTypes.arrayOf(PropTypes.node),
    translate_text: PropTypes.string,
    values: PropTypes.object,
}
