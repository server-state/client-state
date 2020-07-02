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
        'eslint-comments/no-unused-disable': 'error'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        }
    },
    settings: {
        react: {
          createClass: 'createReactClass', // Regex for Component Factory to use,
                                             // default to "createReactClass"
          pragma: 'React',  // Pragma to use, default to "React"
          version: 'detect' // React version. "detect" automatically picks the version you have installed.
                            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                            // default to latest and warns if missing
                            // It will default to "detect" in the future
        }
    }
};
