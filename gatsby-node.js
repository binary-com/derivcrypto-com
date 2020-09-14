const path = require('path')

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
    const config = getConfig()
    if (config.optimization) config.optimization.minimizer[0].options.parallel = 2
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    })
}
