import extend from 'extend'

const toISOFormat = date => {
    if (date instanceof Date) {
        const utc_year = date.getUTCFullYear()
        const utc_month = (date.getUTCMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
        const utc_date = (date.getUTCDate() < 10 ? '0' : '') + date.getUTCDate()

        return `${utc_year}-${utc_month}-${utc_date}`
    }

    return ''
}

const toHashFormat = string => string.replace(/\s+/g, '-').toLowerCase() // change space to dash then lowercase all

const isBrowser = () => typeof window !== 'undefined'

const isEmptyObject = obj => {
    let is_empty = true
    if (obj && obj instanceof Object) {
        Object.keys(obj).forEach(key => {
            if (Object.prototype.hasOwnProperty.call(obj, key)) is_empty = false
        })
    }
    return is_empty
}

const scrollTop = () => {
    if (isBrowser()) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
}

const cloneObject = obj =>
    !isEmptyObject(obj) ? extend(true, Array.isArray(obj) ? [] : {}, obj) : obj

const getPropertyValue = (obj, k) => {
    let keys = k
    if (!Array.isArray(keys)) keys = [keys]
    if (!isEmptyObject(obj) && keys[0] in obj && keys && keys.length > 1) {
        return getPropertyValue(obj[keys[0]], keys.slice(1))
    }
    // else return clone of object to avoid overwriting data
    return obj ? cloneObject(obj[keys[0]]) : undefined
}
const getLocationHash = () =>
    isBrowser() &&
    (window.location.hash ? window.location.hash.substring(1).replace(/\/$/, '') : '')

const getLanguage = () => (isBrowser() ? localStorage.getItem('i18n') || 'en' : null)

const getCrowdin = () =>
    isBrowser() ? localStorage.getItem('jipt_language_code_deriv-com') || 'en' : null

class PromiseClass {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.reject = reject
            this.resolve = resolve
        })
    }
}

const sanitize = input => input.replace(/[.*+?^${}()|[\]\\]/g, '')

const sentenceCase = input => input.charAt(0).toUpperCase() + input.slice(1)

export {
    isEmptyObject,
    cloneObject,
    isBrowser,
    getCrowdin,
    getPropertyValue,
    getLanguage,
    getLocationHash,
    PromiseClass,
    sanitize,
    scrollTop,
    sentenceCase,
    toISOFormat,
    toHashFormat,
}
