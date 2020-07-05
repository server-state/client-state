module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        'eslint-comments',
        'import',
        '@typescript-eslint',
        'react',
        'jest'
    ],
    extends: [
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:react/recommended',
        'plugin:jest/recommended'
    ],
    rules: {
        'eslint-comments/no-unused-disable': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-param-reassign': ['error', { props: false }]
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        }
    },
    settings: {
        react: {
          version: 'detect'
        }
    }
};
