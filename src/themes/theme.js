import { size } from './device'

export const theme = {
    fontSizes: {
        xs: '12px',
        s: '14px',
        m: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '36px',
        '4xl': '48px',
        '5xl': '64px',
        '6xl': '72px',
    },
    colors: {
        background_default: '#ffffff',
        background_section: '#f8fafc',
        background_dark: '#0e0e0e',
        background_grey: '#e5e5e5',
        background_dark_grey: '#999999',
        border_color: 'rgba(229, 229, 229, 0.8)',
        error: '#ff4449',
        primary: '#ffc71b',
        secondary: '#2a537a',
        text_primary: '#333333',
        text_secondary: '#9ebbd7',
        text_colored_background: '#ffffff',
        text_less_prominent: '#999999',
    },
    space: {
        '2xs': '4px',
        xs: '8px',
        s: '12px',
        m: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '40px',
        '6xl': '80px',
    },
    breakpoints: {
        sm: `${size.mobile}px`,
        md: `${size.tablet}px`,
        lg: `${size.laptop}px`,
        xl: `${size.desktop}px`,
        xxl: `${size.desktopL}px`,
    },
}
