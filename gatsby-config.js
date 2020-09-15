/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        'gatsby-plugin-stylelint',
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: `IBM Plex Sans`,
                            variants: [`300`, `400`, `500`, `700`],
                            subsets: [`cyrillic`, `cyrillic-ext`, `latin-ext`, `vietnamese`],
                        },
                    ],
                },
            },
        },
    ],
}
