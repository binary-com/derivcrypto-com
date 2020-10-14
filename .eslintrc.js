module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    extends: `preact`,
    rules: {
        camelcase: 0,
        'array-callback-return': 'off',
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: true,
            },
        ],
        'no-unused-vars': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 1,
            },
        ],
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        'one-var': [
            'error',
            {
                initialized: 'never',
                uninitialized: 'always',
            },
        ],
        'space-unary-ops': 'error',
        'import/prefer-default-export': 0,
    },
    env: {
        es6: true,
        browser: true,
        amd: true,
        node: true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
}
