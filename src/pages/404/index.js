import React from 'react'
import { Layout, SEO } from 'components/page-elements'
import { Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const PageNotFound = () => {
    return (
        <Layout is_dark_background={true}>
            <SEO
                title={localize('404 - Page not found')}
                description={localize('The page you are looking for does not exist.')}
            />
            <Text>404 not found</Text>
        </Layout>
    )
}

export default WithIntl()(PageNotFound)
